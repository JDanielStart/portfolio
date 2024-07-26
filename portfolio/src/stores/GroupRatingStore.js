//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useRating } from './RatingStore';

export const useGroupRating = defineStore('groupRating', () => {
    //Stores
    const ratingStore = useRating();

    //States
    const items = reactive(new Map());

    //Actions
    function createGroupRating({
            id = items.size.toString(),
            containerGroupRating = [],
        } = {}) {
        items.set(id,{
            id,
            containerGroupRating,
        });
        return id;
    }

    function getGroupRating(id) {
        return items.get(id);
    }

    function updateGroupRating(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('GroupRating not found');
    }

    function deleteGroupRating(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createGroupRating({
            id: 'portfolio',
            containerGroupRating: [
                ratingStore.getRating('Whiteboard'),
                ratingStore.getRating('Figma'),
                ratingStore.getRating('Adobe'),
                ratingStore.getRating('HTML5'),
                ratingStore.getRating('CSS3'),
                ratingStore.getRating('JS'),
                ratingStore.getRating('TS'),
                ratingStore.getRating('Vue'),
                ratingStore.getRating('Jest'),
                ratingStore.getRating('Java'),
                ratingStore.getRating('MySQL'),
                ratingStore.getRating('Python'),
                ratingStore.getRating('LightHouse'),
                ratingStore.getRating('Git'),
                ratingStore.getRating('Github'),
                ratingStore.getRating('ChatGPT'),
                ratingStore.getRating('GithubCopilot'),
                ratingStore.getRating('Midjourney'),
                ratingStore.getRating('OneDrive'),
                ratingStore.getRating('GoogleDrive'),
                ratingStore.getRating('Vite'),
                ratingStore.getRating('Npm'),
                ratingStore.getRating('Pip'),
                ratingStore.getRating('Trello'),
                ratingStore.getRating('Slack'),
                ratingStore.getRating('MicrosoftCopilot'),
            ],
        });

        createGroupRating({
            id: 'design',
            containerGroupRating: [
                ratingStore.getRating('Whiteboard'),
                ratingStore.getRating('Figma'),
                ratingStore.getRating('Adobe'),
            ],
        });

        createGroupRating({
            id: 'frontend',
            containerGroupRating: [
                ratingStore.getRating('HTML5'),
                ratingStore.getRating('CSS3'),
                ratingStore.getRating('JS'),
                ratingStore.getRating('Vue'),
            ],
        });

        createGroupRating({
            id: 'frontend-1',
            containerGroupRating: [
                ratingStore.getRating('TS'),
            ],
        });

        createGroupRating({
            id: 'backend',
            containerGroupRating: [
                ratingStore.getRating('Java'),
                ratingStore.getRating('Python'),
                ratingStore.getRating('MySQL'),
            ],
        });

        createGroupRating({
            id: 'testing',
            containerGroupRating: [
                ratingStore.getRating('LightHouse'),
                ratingStore.getRating('Jest'),
            ],
        });

        createGroupRating({
            id: 'tools',
            containerGroupRating: [
                ratingStore.getRating('Git'),
                ratingStore.getRating('Github'),
                ratingStore.getRating('Vite'),
                ratingStore.getRating('Npm'),
            ],
        });

        createGroupRating({
            id: 'tools-1',
            containerGroupRating: [
                ratingStore.getRating('Pip'),
                ratingStore.getRating('Trello'),
                ratingStore.getRating('Slack'),
            ],
        });

        createGroupRating({
            id: 'tools-2',
            containerGroupRating: [
                ratingStore.getRating('GoogleDrive'),
                ratingStore.getRating('OneDrive'),
            ],
        });

        createGroupRating({
            id: 'ai',
            containerGroupRating: [
                ratingStore.getRating('ChatGPT'),
                ratingStore.getRating('GithubCopilot'),
                ratingStore.getRating('Midjourney'),
                ratingStore.getRating('MicrosoftCopilot'),
            ],
        });
    }

    init();

    return {
        //States

        //Actions
        createGroupRating,
        getGroupRating,
        updateGroupRating,
        deleteGroupRating,
    };
});