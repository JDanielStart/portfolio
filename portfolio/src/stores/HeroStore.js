//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useHero = defineStore('hero', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createHero({
            id = items.size.toString(),
            urlImg = 'https://via.placeholder.com/1920x1080',
            textTitle = 'Hero title',
            textSubtitle = 'Hero subtitle',
            idSwitch = '',
            idNavigation = '',
            colorShapeLight = 'var(--general-background-light)',
            colorShapeDark = 'var(--general-background-dark)',
            colorTextTitleLight = 'var(--general-primary-light)',
            colorTextTitleDark = 'var(--general-primary-dark)',
            colorTextSubtitleLight = 'var(--general-neutral-900-light)',
            colorTextSubtitleDark = 'var(--general-neutral-900-dark)',
            isDisabled = false,
        } = {}) {
        items.set(id,{
            id,
            urlImg,
            textTitle,
            textSubtitle,
            idSwitch,
            idNavigation,
            colorShapeLight,
            colorShapeDark,
            colorTextTitleLight,
            colorTextTitleDark,
            colorTextSubtitleLight,
            colorTextSubtitleDark,
            isDisabled,
        });
        return id;
    }

    function getHero(id) {
        return items.get(id);
    }

    function updateHero(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('Hero not found');
    }

    function deleteHero(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createHero({
            id: 'hero',
            urlImg: '/imgs/developer.png',
            textTitle: 'J. Daniel',
            textSubtitle: 'Frontend Developer',
            idSwitch: 'darkMode',
            idNavigation: 'navigation',
        });
    }

    init();

    return {
        //States

        //Actions
        createHero,
        getHero,
        updateHero,
        deleteHero,
    };
});