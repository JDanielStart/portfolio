//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCardProject = defineStore('cardProject', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createCardProject({
            id = items.size.toString(),
            srcImg = 'https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg',
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