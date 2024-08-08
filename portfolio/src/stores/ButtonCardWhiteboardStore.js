//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useButtonCardWhiteboard = defineStore('buttonCardWhiteboard', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createButtonCardWhiteboard({
            id = items.size.toString(),
            colorShapeLight = '#4773C9',
            colorShapeDark = '#4773C9',
            colorIconLight = 'var(--general-neutral-white-light)',
            colorIconDark = 'var(--general-neutral-white-dark)',
            isDisabled = false,
            click = () => { console.log(`ButtonCardWhiteboard clicked ${id}`) },
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

    function getButtonCardWhiteboard(id) {
        return items.get(id);
    }

    function updateButtonCardWhiteboard(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('ButtonLanguage not found');
    }

    function deleteButtonCardWhiteboard(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createButtonCardWhiteboard({
            id: 'Whiteboard',
            click: () => {
                window.open('imgs/sketches/portfolio-sketch.png', '_blank');
                console.log('ButtonCardWhiteboard clicked');
            }
        });

        createButtonCardWhiteboard({
            id: 'touristGC',
            isDisabled: true
        });
    }

    init();

    return {
        //States

        //Actions
        createButtonCardWhiteboard,
        getButtonCardWhiteboard,
        updateButtonCardWhiteboard,
        deleteButtonCardWhiteboard,
    };
});