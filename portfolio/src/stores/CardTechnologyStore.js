//General imports
import { create } from 'lodash';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCardTechnology = defineStore('cardTechnology', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createCardTechnology({
            id = items.size.toString(),
            name = 'Technology',
            idGroupRating = '',
            colorShapeLight = 'var(--general-neutral-white-light)',
            colorShapeDark = '#2D2B41',
            colorTextLight = 'var(--general-neutral-900-light)',
            colorTextDark = 'var(--general-neutral-900-dark)',
            isDisabled = false,
        } = {}) {
        items.set(id,{
            id,
            name,
            idGroupRating,
            colorShapeLight,
            colorShapeDark,
            colorTextLight,
            colorTextDark,
            isDisabled,
        });
        return id;
    }

    function getCardTechnology(id) {
        return items.get(id);
    }

    function updateCardTechnology(update) {
        const { id } = update;

        console.log()

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('CardTechnology not found');
    }

    function deleteCardTechnology(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createCardTechnology({
            id: 'Portfolio',
            name: 'Design',
            idGroupRating: 'design',
        });

        createCardTechnology({
            id: 'design',
            name: 'Design',
            idGroupRating: 'design',
        });

        createCardTechnology({
            id: 'frontend',
            name: 'Frontend',
            idGroupRating: 'frontend',
        });

        createCardTechnology({
            id: 'frontend-1',
            name: 'Frontend',
            idGroupRating: 'frontend-1',
        });

        createCardTechnology({
            id: 'backend',
            name: 'Backend',
            idGroupRating: 'backend',
        });

        createCardTechnology({
            id: 'testing',
            name: 'Testing',
            idGroupRating: 'testing',
        });

        createCardTechnology({
            id: 'tools',
            name: 'Tools',
            idGroupRating: 'tools',
        });

        createCardTechnology({
            id: 'tools-1',
            name: 'Tools',
            idGroupRating: 'tools-1',
        });

        createCardTechnology({
            id: 'tools-2',
            name: 'Tools',
            idGroupRating: 'tools-2',
        });

        createCardTechnology({
            id: 'ai',
            name: 'AI',
            idGroupRating: 'ai',
        });
    }

    init();

    return {
        //States

        //Actions
        createCardTechnology,
        getCardTechnology,
        updateCardTechnology,
        deleteCardTechnology,
    };
});