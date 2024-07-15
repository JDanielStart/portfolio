<template>
    <div class="buttonGroup">
        <ButtonCardWhiteBoard :state="{id: idButtonCardWhiteboard}"/>
        <ButtonCardFigma :state="{id: idButtonCardFigma}"/>
        <ButtonCardGithub :state="{id: idButtonCardGithub}"/>
    </div>
</template>

<script setup>
    //General imports
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useGroupButtonCard } from '../../stores/GroupButtonCardStore.js';

    //Components imports
    import ButtonCardFigma from '../buttons/ButtonCardFigma.vue';
    import ButtonCardWhiteBoard from '../buttons/ButtonCardWhiteboard.vue';
    import ButtonCardGithub from '../buttons/ButtonCardGithub.vue'

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const groupButtonCardStore = useGroupButtonCard();

    //Actions store
    const { getGroupButtonCard } = groupButtonCardStore;

    //States store
    const {
        idButtonCardWhiteboard: idButtonCardWhiteboardStore,
        idButtonCardFigma: idButtonCardFigmaStore,
        idButtonCardGithub: idButtonCardGithubStore,
    } = toRefs(getGroupButtonCard(id));

    //States
    const idButtonCardWhiteboard = computed(() => idButtonCardWhiteboardStore.value);
    const idButtonCardFigma = computed(() => idButtonCardFigmaStore.value);
    const idButtonCardGithub = computed(() => idButtonCardGithubStore.value);

</script>

<style scoped>
    .buttonGroup {
        display: flex;
    }
</style>