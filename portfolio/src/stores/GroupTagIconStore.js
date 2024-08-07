//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useTagIcon } from './TagIconStore';

export const useGroupTagIcon = defineStore('groupTagIcon', () => {
    //Stores
    const tagIconStore = useTagIcon();

    //States
    const items = reactive(new Map());

    //Actions
    function createGroupTagIcon({
            id = items.size.toString(),
            containerGroupTagIcon = [],
        } = {}) {
        items.set(id,{
            id,
            containerGroupTagIcon,
        });
        return id;
    }

    function getGroupTagIcon(id) {
        return items.get(id);
    }

    function updateGroupTagIcon(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('GroupTagIcon not found');
    }

    function deleteGroupTagIcon(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createGroupTagIcon({
            id: 'portfolio',
            containerGroupTagIcon: [
                tagIconStore.getTagIcon('Whiteboard'),
                tagIconStore.getTagIcon('Adobe'),
                tagIconStore.getTagIcon('Figma'),
                tagIconStore.getTagIcon('HTML5'),
                tagIconStore.getTagIcon('CSS3'),
                tagIconStore.getTagIcon('JS'),
                tagIconStore.getTagIcon('Vue'),
                tagIconStore.getTagIcon('Vite'),
                tagIconStore.getTagIcon('Npm'),
                tagIconStore.getTagIcon('Github'),
                tagIconStore.getTagIcon('Git'),
                tagIconStore.getTagIcon('LightHouse'),
                tagIconStore.getTagIcon('OneDrive'),
                tagIconStore.getTagIcon('GoogleDrive'),
                tagIconStore.getTagIcon('GithubCopilot'),
                tagIconStore.getTagIcon('ChatGPT'),
                tagIconStore.getTagIcon('Midjourney'),
            ],
        });

        createGroupTagIcon({
            id: 'touristGC',
            containerGroupTagIcon: [
                tagIconStore.getTagIcon('Wordpress'),
            ],
        });
    }

    init();

    return {
        //States

        //Actions
        createGroupTagIcon,
        getGroupTagIcon,
        updateGroupTagIcon,
        deleteGroupTagIcon,
    };
});