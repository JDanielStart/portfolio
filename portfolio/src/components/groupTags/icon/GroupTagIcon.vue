<template>
    <div
        class="shape"
    >
        <TagIcon
            v-for="(tagIcon, index) in tagIcons"
            :key="index"
            :state="{id: tagIcon.id}"
        />
    </div>
</template>

<script setup>
    //General imports
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useGroupTagIcon } from '../../../stores/GroupTagIconStore.js';

    //Components imports
    import TagIcon from '../../tags/icon/TagIcon.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const groupTagIconStore = useGroupTagIcon();

    //Actions store
    const { getGroupTagIcon } = groupTagIconStore;

    //States store
    const {
        containerGroupTagIcon: containerGroupTagIconStore,
    } = toRefs(getGroupTagIcon(id));

    //States
    const tagIcons = computed(() => containerGroupTagIconStore.value);
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 0.4rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
</style>