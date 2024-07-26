//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCtaStart = defineStore('ctaStart', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createCtaStart({
            id = items.size.toString(),
            idButtonRoundFill,
            colorTextTitleLight = 'var(--general-secondary-light)',
            colorTextTitleDark = 'var(--general-secondary-dark)',
            colorTextDescriptionLight = 'var(--general-neutral-900-light)',
            colorTextDescriptionDark = 'var(--general-neutral-900-dark)',
        } = {}) {
        items.set(id,{
            id,
            idButtonRoundFill,
            colorTextTitleLight,
            colorTextTitleDark,
            colorTextDescriptionLight,
            colorTextDescriptionDark,
        });
        return id;
    }

    function getCtaStart(id) {
        return items.get(id);
    }

    function updateCtaStart(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('CtaStart not found');
    }

    function deleteCtaStart(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createCtaStart({
            id: 'start',
            idButtonRoundFill: 'start',
        });
    }

    init();

    return {
        //States

        //Actions
        createCtaStart,
        getCtaStart,
        updateCtaStart,
        deleteCtaStart,
    };
});