//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCtaEnd = defineStore('ctaEnd', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createCtaEnd({
            id = items.size.toString(),
            idCredential = '',
            urlImage = '',
            idButtonRoundFill = '',
            colorTextLight = 'var(--general-secondary-light)',
            colorTextDark = 'var(--general-secondary-dark)',
        } = {}) {
        items.set(id,{
            id,
            idCredential,
            urlImage,
            idButtonRoundFill,
            colorTextLight,
            colorTextDark,
        });
        return id;
    }

    function getCtaEnd(id) {
        return items.get(id);
    }

    function updateCtaEnd(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('CtaEnd not found');
    }

    function deleteCtaEnd(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createCtaEnd({
            id: 'end',
            idCredential: 'cv',
            urlImage: '/imgs/funko-developer.png',
            idButtonRoundFill: 'end',
        });
    }

    init();

    return {
        //States

        //Actions
        createCtaEnd,
        getCtaEnd,
        updateCtaEnd,
        deleteCtaEnd,
    };
});