//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useGroupButtonCard = defineStore('groupButtonCard', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createGroupButtonCard({
            id = items.size.toString(),
            idButtonCardWhiteboard = '1',
            idButtonCardFigma = '1',
            idButtonCardGithub = '1',
        } = {}) {
        items.set(id,{
            idButtonCardWhiteboard,
            idButtonCardFigma,
            idButtonCardGithub,
        });
        return id;
    }

    function getGroupButtonCard(id) {
        return items.get(id);
    }

    function updateGroupButtonCard(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('GroupButtonCard not found');
    }

    function deleteGroupButtonCard(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createGroupButtonCard({
            id: 'portfolio',
            idButtonCardWhiteboard: 'Whiteboard',
            idButtonCardFigma: 'Figma',
            idButtonCardGithub: 'Github',
        });
    }

    init();

    return {
        //States

        //Actions
        createGroupButtonCard,
        getGroupButtonCard,
        updateGroupButtonCard,
        deleteGroupButtonCard,
    };
});