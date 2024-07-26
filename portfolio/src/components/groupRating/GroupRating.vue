<template>
    <div
        class="shape"
    >
        <Rating
            v-for="(rating, index) in ratings"
            :key="index"
            :state="{id: rating.id}"
        />
    </div>
</template>

<script setup>
    //General imports
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useGroupRating } from '../../stores/GroupRatingStore.js';

    //Components imports
    import Rating from '../ratings/rating/Rating.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const groupRating = useGroupRating();
    
    //Actions store
    const { getGroupRating } = groupRating;

    //States store
    const {
        containerGroupRating: containerGroupRatingStore,
    } = toRefs(getGroupRating(id));

    //States
    const ratings = computed(() => containerGroupRatingStore.value);
</script>

<style scoped>
    /* Component style */
    .shape {
        margin-top: 0.8rem;
    }
</style>