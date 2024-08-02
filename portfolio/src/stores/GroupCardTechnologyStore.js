//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useCardTechnology } from './CardTechnologyStore';

export const useGroupCardTechnology = defineStore('groupCardTechnology', () => {
    //Stores
    const cardTechnologyStore = useCardTechnology();

    //States
    const items = reactive(new Map());

    //Actions
    function createGroupCardTechnology({
            id = items.size.toString(),
            containerGroupCardTechnology = [],
        } = {}) {
        items.set(id,{
            id,
            containerGroupCardTechnology,
        });
        return id;
    }

    function getGroupCardTechnology(id) {
        return items.get(id);
    }

    function updateGroupCardTechnology(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('GroupGroupCardTechnology not found');
    }

    function deleteGroupCardTechnology(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createGroupCardTechnology({
            id: 'technology',
            containerGroupCardTechnology: [
                cardTechnologyStore.getCardTechnology('design'),
                cardTechnologyStore.getCardTechnology('frontend'),
                cardTechnologyStore.getCardTechnology('frontend-1'),
                cardTechnologyStore.getCardTechnology('backend'),
                cardTechnologyStore.getCardTechnology('testing'),
                cardTechnologyStore.getCardTechnology('tools'),
                cardTechnologyStore.getCardTechnology('tools-1'),
                cardTechnologyStore.getCardTechnology('tools-2'),
                cardTechnologyStore.getCardTechnology('ai'),
            ],
        });
    }

    init();

    return {
        //States

        //Actions
        createGroupCardTechnology,
        getGroupCardTechnology,
        updateGroupCardTechnology,
        deleteGroupCardTechnology,
    };
});