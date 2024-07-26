//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useCredential } from './CredentialStore';

export const useGroupCredential = defineStore('groupCredential', () => {
    //Stores
    const credentialStore = useCredential();

    //States
    const items = reactive(new Map());

    //Actions
    function createGroupCredential({
            id = items.size.toString(),
            containerGroupCredential = [],
        } = {}) {
        items.set(id,{
            id,
            containerGroupCredential,
        });
        return id;
    }

    function getGroupCredential(id) {
        return items.get(id);
    }

    function updateGroupCredential(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('GroupCredential not found');
    }

    function deleteGroupCredential(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createGroupCredential({
            id: '0',
            containerGroupCredential: [
                // Design
                credentialStore.getCredential('advanced-design-system'),
                credentialStore.getCredential('design-for-programmers'),
                credentialStore.getCredential('design-system'),

                // HTML y CSS
                credentialStore.getCredential('basic-css-grid'),
                credentialStore.getCredential('css-animations'),
                credentialStore.getCredential('css-architecture'),
                credentialStore.getCredential('definitive-html-and-css'),
                credentialStore.getCredential('html-and-css'),
                credentialStore.getCredential('layout-in-css-practical'),
                credentialStore.getCredential('professional-css-grid-layout'),
                credentialStore.getCredential('responsive-design-mobile-first layout'),
                credentialStore.getCredential('transformation-and-transition-in-css'),
                credentialStore.getCredential('web-design-with-css-grid-and-flexbox'),

                // JavaScript
                credentialStore.getCredential('algorithmic-complexity-with-javascript'),
                credentialStore.getCredential('array-manipulation-in-javascript'),
                credentialStore.getCredential('asynchronism-with-javascript'),
                credentialStore.getCredential('basic-javascript'),
                credentialStore.getCredential('basic-object-oriented-programming-with-javascript'),
                credentialStore.getCredential('clean-code-with-javascript'),
                credentialStore.getCredential('closures-and-scopes-in-javascript'),
                credentialStore.getCredential('consumption-of-rest-api-with-javascript'),
                credentialStore.getCredential('creational-design-patterns-in-javascript'),
                credentialStore.getCredential('data-structures-with-javascript'),
                credentialStore.getCredential('debugging-with-chrome-devtools'),
                credentialStore.getCredential('ecmascript-hystory-and-versions-of-javascript'),
                credentialStore.getCredential('fronted-developer'),
                credentialStore.getCredential('fronted-developer-practical'),
                credentialStore.getCredential('intermediate-object-oriented-programming-with-javascript'),
                credentialStore.getCredential('javascript-basic-mathematics-and-statistics'),
                credentialStore.getCredential('javascript-create-a-videogame'),
                credentialStore.getCredential('javascript-engine-v8-and-the-browser'),
                credentialStore.getCredential('practical-consumption-of-rest-api-with-javascript'),
                credentialStore.getCredential('practical-javascript'),
                credentialStore.getCredential('professional-consumption-of-rest-api-with-javascript'),

                // Vue
                credentialStore.getCredential('unit-testing-in-vue'),
                credentialStore.getCredential('vue-components-and-composition-api'),
                credentialStore.getCredential('vue-introduction-and-fundamentals'),
                credentialStore.getCredential('vue-navigation-with-router'),
                credentialStore.getCredential('vue-practical'),
                credentialStore.getCredential('vue-state-management-with-pinia'),
                credentialStore.getCredential('vue-state-management-with-vuex'),

                // TypeScript
                credentialStore.getCredential('fundamentals-of-typescript'),
                credentialStore.getCredential('typescript-advanced-types-and-functions'),
                credentialStore.getCredential('typescript-object-oriented-programming-and-asynchronism'),

                // Python
                credentialStore.getCredential('computational-thinking-python'),
                credentialStore.getCredential('functions-of-python'),
                credentialStore.getCredential('fundamentals-of-python'),
                credentialStore.getCredential('python-algorithmic-complexity'),
                credentialStore.getCredential('python-data-structure'),
                credentialStore.getCredential('python-pip-and-virtuals-enviroment'),

                // Herramientas
                credentialStore.getCredential('git-and-github'),
                credentialStore.getCredential('vitejs'),
            ],
        });
    }

    init();

    return {
        //States

        //Actions
        createGroupCredential,
        getGroupCredential,
        updateGroupCredential,
        deleteGroupCredential,
    };
});