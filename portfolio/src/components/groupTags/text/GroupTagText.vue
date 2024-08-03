<template>
    <div
        class="shape"
    >
        <TagText
            v-for="(tagText, index) in tagTexts"
            :key="index"
            :state="{id: tagText.id}"
        />
    </div>
</template>

<script setup>
    //General imports
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useGroupTagText } from '../../../stores/GroupTagTextStore.js';

    //Components imports
    import TagText from '../../tags/text/TagText.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const groupTagTextStore = useGroupTagText();
    
    //Actions store
    const { getGroupTagText } = groupTagTextStore;

    //States store
    const {
        containerGroupTagText: containerGroupTagTextStore,
    } = toRefs(getGroupTagText(id));

    //States
    const tagTexts = computed(() => containerGroupTagTextStore.value);
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        justify-content: center;
        gap: 0.4rem;
        flex-wrap: wrap;
    }
</style>