//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCardProject = defineStore('cardProject', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createCardProject({
            id = items.size.toString(),
            srcImg = '/imgs/projects/default-project.jpg',
            colorShapeLight = 'var(--general-neutral-white-light)',
            colorShapeDark = '#2D2B41',
            colorTextLight = 'var(--general-neutral-900-light)',
            colorTextDark = 'var(--general-neutral-900-dark)',
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
            srcImg: 'imgs/projects/portfolio.jpg',
            title: 'Portfolio',
            idGroupTagText: 'portfolio',
            idGroupTagIcon: 'portfolio',
            idGroupButtonCard: 'portfolio',
            click: () => {
                console.log('click img project');
                window.open('https://jdanielstart.github.io/portfolio/', '_blank');
            },
        });

        createCardProject({
            id: 'touristGC',
            srcImg: 'imgs/projects/default-project.jpg',
            title: 'Tourist GC',
            idGroupTagText: 'touristGC',
            idGroupTagIcon: 'touristGC',
            idGroupButtonCard: 'touristGC',
            click: () => {
                console.log('click img project');
            },
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