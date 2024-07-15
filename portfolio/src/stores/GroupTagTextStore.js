//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useTagText } from './TagTextStore';

export const useGroupTagText = defineStore('groupTagText', () => {
    //Stores
    const tagTextStore = useTagText();

    //States
    const items = reactive(new Map());

    //Actions
    function createGroupTagText({
            id = items.size.toString(),
            containerGroupTagText = [],
        } = {}) {
        items.set(id,{
            id,
            containerGroupTagText,
        });
        return id;
    }

    function getGroupTagText(id) {
        return items.get(id);
    }

    function updateGroupTagText(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('GroupTagText not found');
    }

    function deleteGroupTagText(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createGroupTagText({
            id: 'portfolio',
            containerGroupTagText: [
                tagTextStore.getTagText('portfolio'),
                tagTextStore.getTagText('alpha'),
                tagTextStore.getTagText('active'),
            ],
        });
    }

    init();

    return {
        //States

        //Actions
        createGroupTagText,
        getGroupTagText,
        updateGroupTagText,
        deleteGroupTagText,
    };
});