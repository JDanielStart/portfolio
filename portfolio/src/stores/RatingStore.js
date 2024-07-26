//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useRating = defineStore('rating', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createRating({
            id = items.size.toString(),
            name = 'Ada',
            colorShapeLight = 'var(--color-neutral-900-light)',
            colorShapeDark = 'var(--color-neutral-900-dark)',
            rating = 0,
            noRating = false,
            isOnlyRead = false,
            isDisabled = false,
            click = (rate) => {
                changeRating(id, rate);
                console.log(`Click rating ${rate}`);
            },
        } = {}) {
        items.set(id,{
            id,
            name,
            colorShapeLight,
            colorShapeDark,
            rating,
            noRating,
            isOnlyRead,
            isDisabled,
            click,
        });
        return id;
    }

    function getRating(id) {
        return items.get(id);
    }

    function updateRating(update) {
        const { id } = update;

        console.log()

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('Rating not found');
    }

    function deleteRating(id) {
        items.delete(id);
    }

    function changeRating(idRate, rate) {
        getRating(idRate).rating = rate;
    }

    function toggleNoRating(idRate) {
        getRating(idRate).noRating = !getRating(idRate).noRating;
    }

    //Initializate
    function init() {
        createRating({
            id: 'rating',
            name: 'Vue',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: false,
            isDisabled: false,
        });

        //Whiteboard
        createRating({
            id: 'Whiteboard',
            name: 'Whiteboard',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Figma
        createRating({
            id: 'Figma',
            name: 'Figma',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Adobe
        createRating({
            id: 'Adobe',
            name: 'Adobe',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //HTML5
        createRating({
            id: 'HTML5',
            name: 'HTML5',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //CSS3
        createRating({
            id: 'CSS3',
            name: 'CSS3',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //JS
        createRating({
            id: 'JS',
            name: 'JS',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //TS
        createRating({
            id: 'TS',
            name: 'TS',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 2,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Vue
        createRating({
            id: 'Vue',
            name: 'Vue',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Jest
        createRating({
            id: 'Jest',
            name: 'Jest',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Java
        createRating({
            id: 'Java',
            name: 'Java',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 2,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //MySQL
        createRating({
            id: 'MySQL',
            name: 'MySQL',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 1,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Python
        createRating({
            id: 'Python',
            name: 'Python',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //LightHouse
        createRating({
            id: 'LightHouse',
            name: 'LightHouse',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Git
        createRating({
            id: 'Git',
            name: 'Git',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Github
        createRating({
            id: 'Github',
            name: 'Github',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //ChatGPT
        createRating({
            id: 'ChatGPT',
            name: 'ChatGPT',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //GithubCopilot
        createRating({
            id: 'GithubCopilot',
            name: 'GithubCopilot',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Midjourney
        createRating({
            id: 'Midjourney',
            name: 'Midjourney',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //OneDrive
        createRating({
            id: 'OneDrive',
            name: 'OneDrive',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //GoogleDrive
        createRating({
            id: 'GoogleDrive',
            name: 'GoogleDrive',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 4,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Vite
        createRating({
            id: 'Vite',
            name: 'Vite',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Npm
        createRating({
            id: 'Npm',
            name: 'Npm',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Pip
        createRating({
            id: 'Pip',
            name: 'Pip',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Trello
        createRating({
            id: 'Trello',
            name: 'Trello',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 3,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //Slack
        createRating({
            id: 'Slack',
            name: 'Slack',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 2,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });

        //MicrosoftCopilot
        createRating({
            id: 'MicrosoftCopilot',
            name: 'MicrosoftCopilot',
            colorShapeLight: 'var(--general-neutral-900-light)',
            colorShapeDark: 'var(--general-neutral-900-dark)',
            rating: 2,
            noRating: false,
            isOnlyRead: true,
            isDisabled: false,
        });
    }

    init();

    return {
        //States

        //Actions
        createRating,
        getRating,
        updateRating,
        deleteRating,
        toggleNoRating,
    };
});