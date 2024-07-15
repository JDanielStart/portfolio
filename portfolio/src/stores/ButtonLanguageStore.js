//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useAppStore } from './AppStore';

export const useButtonLanguage = defineStore('buttonLanguage', () => {
    //Stores
    const appStore = useAppStore();

    //States
    const items = reactive(new Map());

    //Actions
    function createButtonLanguage({
            id = items.size.toString(),
            colorShapeLight = 'var(--general-background-light)',
            colorShapeDark = 'var(--general-secondary-dark)',
            colorTextLight = 'var(--general-neutral-900-light)',
            colorTextDark = 'var(--general-neutral-900-dark)',
            isDisabled = false,
            click = () => { console.log(`ButtonLanguage clicked ${id}`) },
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

    function getButtonLanguage(id) {
        return items.get(id);
    }

    function updateButtonLanguage(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('ButtonLanguage not found');
    }

    function deleteButtonLanguage(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createButtonLanguage({
            id: 'language',
            click: () => {
                switch(appStore.languageMode) {
                    case 'es':
                        appStore.changeLanguage('en');
                        break;
                    case 'en':
                        appStore.changeLanguage('fr');
                        break;
                    case 'fr':
                        appStore.changeLanguage('es');
                        break;
                }
                console.log('click language');
            }
        });
    }

    init();

    return {
        //States

        //Actions
        createButtonLanguage,
        getButtonLanguage,
        updateButtonLanguage,
        deleteButtonLanguage,
    };
});