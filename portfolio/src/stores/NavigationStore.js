//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useNavigation = defineStore('navigation', () => {
    //States
    const items = reactive(new Map());

    //Actions
    function createNavigation({
            id = items.size.toString(),
            selection = 0,
            colorSelectionLight = 'var(--general-info-light)',
            colorSelectionDark = 'var(--general-info-dark)',
            colorNotSelectionLight = 'var(--general-neutral-600-light)',
            colorNotSelectionDark = 'var(--general-neutral-600-dark)',
            isDisabled = false,
        } = {}) {
        items.set(id,{
            id,
            selection,
            colorSelectionLight,
            colorSelectionDark,
            colorNotSelectionLight,
            colorNotSelectionDark,
            isDisabled,
        });
        return id;
    }

    function getNavigation(id) {
        return items.get(id);
    }

    function updateNavigation(update) {
        const { id } = update;
        
        if (items.has(id)) {
            items.set(id, { ...items.get(id), ...update });
        } else {
            console.log('Navigation not found');
        }
    }

    function deleteNavigation(id) {
        items.delete(id);
    }

    function setSelection(id, selection) {
        const navigation = getNavigation(id);
        if (navigation) {
            navigation.selection = selection;
        }
    }

    //Initializate
    function init() {
        createNavigation({
            id: 'navigation',
        });
    }

    init();

    return {
        //States

        //Actions
        createNavigation,
        getNavigation,
        updateNavigation,
        deleteNavigation,
        setSelection,
    };
});