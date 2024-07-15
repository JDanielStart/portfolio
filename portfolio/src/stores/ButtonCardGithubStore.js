//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useButtonCardGithub = defineStore('buttonCardGithubFigma', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createButtonCardGithub({
            id = items.size.toString(),
            colorShapeLight = '#202020',
            colorShapeDark = '#3d3d3d',
            colorIconLight = 'var(--general-neutral-white-light)',
            colorIconDark = 'var(--general-neutral-white-dark)',
            isDisabled = false,
            click = () => { console.log(`ButtonCardGithub clicked ${id}`) },
        } = {}) {
        items.set(id,{
            id,
            colorShapeLight,
            colorShapeDark,
            colorIconLight,
            colorIconDark,
            isDisabled,
            click,
        });
        return id;
    }

    function getButtonCardGithub(id) {
        return items.get(id);
    }

    function updateButtonCardGithub(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('ButtonLanguage not found');
    }

    function deleteButtonCardGithub(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createButtonCardGithub({
            id: 'Github',
            click: () => {
                window.open('https://github.com/JDanielStart/portfolio', '_blank');
                console.log('ButtonCardGithub clicked');
            }
        });
    }

    init();

    return {
        //States

        //Actions
        createButtonCardGithub,
        getButtonCardGithub,
        updateButtonCardGithub,
        deleteButtonCardGithub,
    };
});