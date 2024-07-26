<template>
    <div
        class="shape"
    >
        <CardTechnology
            v-for="(cardTechnology, index) in cardTechonologies"
            :key="index"
            :state="{id: cardTechnology.id}"
        />
    </div>
</template>

<script setup>
    //General imports
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useGroupCardTechnology } from '../../../stores/GroupCardTechnologyStore.js';

    //Components imports
    import CardTechnology from '../../cards/CardTechnology.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const groupCardTechnology = useGroupCardTechnology();
    
    //Actions store
    const { getGroupCardTechnology } = groupCardTechnology;

    //States store
    const {
        containerGroupCardTechnology: containerGroupCardTechnologyStore,
    } = toRefs(getGroupCardTechnology(id));

    //States
    const cardTechonologies = computed(() => containerGroupCardTechnologyStore.value);
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        justify-content: center;
        gap: 2.4rem;
        flex-wrap: wrap;
        max-width: 120rem;
        margin: 0 auto;
    }
</style>