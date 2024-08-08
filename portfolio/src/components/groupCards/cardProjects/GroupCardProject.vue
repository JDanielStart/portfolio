<template>
    <div
        class="shape"
    >
        <CardProject
            v-for="(cardProject, index) in cardProjects"
            :key="index"
            :state="{id: cardProject.id}"
        />
    </div>
</template>

<script setup>
    //General imports
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useGroupCardProject } from '../../../stores/GroupCardProjectStore.js';

    //Components imports
    import CardProject from '../../cards/CardProject.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const groupCardProject = useGroupCardProject();
    
    //Actions store
    const { getGroupCardProject } = groupCardProject;

    //States store
    const {
        containerGroupCardProject: containerGroupCardProjectStore,
    } = toRefs(getGroupCardProject(id));

    //States
    const cardProjects = computed(() => containerGroupCardProjectStore.value);
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        justify-content: center;
        gap: 10rem 2.4rem;
        flex-wrap: wrap;
        max-width: 120rem;
    }
</style>