//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useAppStore } from './AppStore';

export const useSwitch = defineStore('switch', () => {
    //Stores
    const appStore = useAppStore();

    //States
    const items = reactive(new Map());

    //Actions
    function createSwitch({
            id = items.size.toString(),
            colorShapeLight = 'var(--general-neutral-900-light)',
            colorShapeDark = 'var(--general-neutral-900-dark)',
            colorCircleLight = 'var(--general-background-dark)',
            colorCircleDark = 'var(--general-background-light)',
            isRight = true,
            isDisabled = false,
            click = () => {
                toggleRight(id);
                console.log(`ButtonSwitch clicked ${id}`)
            },
        } = {}) {
        items.set(id,{
            id,
            colorShapeLight,
            colorShapeDark,
            colorCircleLight,
            colorCircleDark,
            isRight,
            isDisabled,
            click,
        });
        return id;
    }

    function getSwitch(id) {
        return items.get(id);
    }

    function updateSwitch(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('Switch not found');
    }

    function deleteSwitch(id) {
        items.delete(id);
    }

    function toggleRight(id, isRight = null) {
        if (isRight !== null) {
            getSwitch(id).isRight = !isRight;
        }
        else {
            getSwitch(id).isRight = !getSwitch(id).isRight;
        }
    }

    //Initializate
    function init() {
        createSwitch({
            id: 'darkMode',
            click: (isDarkMode = null) => {
                if (isDarkMode !== null) {
                    toggleRight('darkMode', isDarkMode);
                    appStore.toggleDark(isDarkMode);
                }
                else {
                    toggleRight('darkMode');
                    appStore.toggleDark();
                }
                console.log(`ButtonSwitch clicked`)
            }
        });
    }

    init();

    return {
        //States

        //Actions
        createSwitch,
        getSwitch,
        updateSwitch,
        deleteSwitch,
    };
});