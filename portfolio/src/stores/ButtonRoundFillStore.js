//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useButtonRoundFill = defineStore('buttonRoundFill', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createButtonRoundFill({
            id = items.size.toString(),
            colorShapeLight = 'var(--general-secondary-light)',
            colorShapeDark = 'var(--general-secondary-dark)',
            colorTextLight = 'var(--general-background-light)',
            colorTextDark = 'var(--general-background-dark)',
            isDisabled = false,
            click = () => { console.log(`ButtonRoundFill clicked ${id}`)},
        } = {}) {
        items.set(id,{
            id,
            colorShapeLight,
            colorShapeDark,
            colorTextLight,
            colorTextDark,
            isDisabled,
            click,
        });
        return id;
    }

    function getButtonRoundFill(id) {
        return items.get(id);
    }

    function updateButtonRoundFill(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('ButtonRoundFill not found');
    }

    function deleteButtonRoundFill(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createButtonRoundFill({id: 'start'});
        createButtonRoundFill({id: 'end'});
    }

    init();

    return {
        //States

        //Actions
        createButtonRoundFill,
        getButtonRoundFill,
        updateButtonRoundFill,
        deleteButtonRoundFill,
    };
});