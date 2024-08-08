//General imports
import { get } from 'lodash';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useButtonCardFigma = defineStore('buttonCardFigma', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createButtonCardFigma({
            id = items.size.toString(),
            colorShapeLight = '#FF7262',
            colorShapeDark = '#FF7262',
            colorIconLight = 'var(--general-neutral-white-light)',
            colorIconDark = 'var(--general-neutral-white-dark)',
            isDisabled = false,
            click = () => { console.log(`ButtonCardFigma clicked ${id}`) },
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

    function getButtonCardFigma(id) {
        return items.get(id);
    }

    function updateButtonCardFigma(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('ButtonLanguage not found');
    }

    function deleteButtonCardFigma(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createButtonCardFigma({
            id: 'Figma',
            click: () => {
                window.open('https://www.figma.com/proto/BEfXQKUYuLFqpIFvKOH7nQ/portfolio?node-id=187-39913&t=N4ZO6oc2xsIgrICo-1', '_blank');
                console.log('ButtonCardFigma clicked');
            }
        });

        createButtonCardFigma({
            id: 'touristGC',
            isDisabled: true
        });
    }

    init();

    return {
        //States

        //Actions
        createButtonCardFigma,
        getButtonCardFigma,
        updateButtonCardFigma,
        deleteButtonCardFigma,
    };
});