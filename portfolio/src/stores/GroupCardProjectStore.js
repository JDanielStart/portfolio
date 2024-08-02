//General imports
import { defineStore } from 'pinia';
import { reactive } from 'vue';

//Stores imports
import { useCardProject } from './CardProjectStore';

export const useGroupCardProject = defineStore('groupCardProject', () => {
    //Stores
    const cardProjectStore = useCardProject();

    //States
    const items = reactive(new Map());

    //Actions
    function createGroupCardProject({
            id = items.size.toString(),
            containerGroupCardProject = [],
        } = {}) {
        items.set(id,{
            id,
            containerGroupCardProject,
        });
        return id;
    }

    function getGroupCardProject(id) {
        return items.get(id);
    }

    function updateGroupCardProject(update) {
        const { id } = update;

        items.has(id) ?
            items.set(id, { ...items.get(id), ...update }) :
            console.log('GroupCardProject not found');
    }

    function deleteGroupCardProject(id) {
        items.delete(id);
    }

    //Initializate
    function init() {
        createGroupCardProject({
            id: 'project',
            containerGroupCardProject: [
                cardProjectStore.getCardProject('portfolio'),
            ],
        });
    }

    init();

    return {
        //States

        //Actions
        createGroupCardProject,
        getGroupCardProject,
        updateGroupCardProject,
        deleteGroupCardProject,
    };
});