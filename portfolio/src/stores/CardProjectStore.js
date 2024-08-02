//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCardProject = defineStore('cardProject', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createCardProject({
            id = items.size.toString(),
            srcImg = '../public/imgs/projects/default-project.jpg',
            colorShapeLight = '',
            colorShapeDark = '',
            colorTextLight = '',
            colorTextDark = '',
            title = '',
            idGroupTagText = '',
            idGroupTagIcon = '',
            idGroupButtonCard = '',
            isDisabled = false,
            click = () => {
                console.log('click img project');
            },
        } = {}) {
        items.set(id,{
            id,
            srcImg,
            colorShapeLight,
            colorShapeDark,
            colorTextLight,
            colorTextDark,
            title,
            idGroupTagText,
            idGroupTagIcon,
            idGroupButtonCard,
            isDisabled,
            click,
        });
        return id;
    }

    function getCardProject(id) {
        return items.get(id);
    }

    function updateCardProject(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('CardProject not found');
    }

    function deleteCardProject(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createCardProject({
            id: 'portfolio',
            srcImg: '../public/imgs/projects/portfolio.jpg',
            colorShapeLight: 'var(--general-neutral-white-light)',
            colorShapeDark: '#2D2B41',
            colorTextLight: 'var(--general-neutral-900-light)',
            colorTextDark: 'var(--general-neutral-900-dark)',
            title: 'Portfolio',
            idGroupTagText: 'portfolio',
            idGroupTagIcon: 'portfolio',
            idGroupButtonCard: 'portfolio',
        });
    }

    init();

    return {
        //States

        //Actions
        createCardProject,
        getCardProject,
        updateCardProject,
        deleteCardProject,
    };
});