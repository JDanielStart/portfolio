<template>
    <div
        :class="stateTag"
        @click="clickTag"
    >
        <Icon
            :width="width"
            :height="height"
            :color="color"
        >
            <NodeJS/>
        </Icon>
        <Icon
            v-show="isSelected"
            :width="widthX"
            :height="heightX"
            :viewBox="viewBoxX"
            :color="color"
        >
            <X/>
        </Icon>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { computed, ref, defineEmits } from 'vue';
    import { useAppStore } from '../../../stores/AppStore.js';

    import Icon from '../../icons/Icon.vue';
    import X from '../../../assets/icons/X.vue';
    import NodeJS from '../../../assets/icons/NodeJS.vue';

    //Stores
    const appStore = useAppStore();

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    //Actions store

    //States
    const isDark = computed(() => isDarkMode.value);

    const isSelected = ref(false);
    const isOnlyRead = ref(false);
    const isDisabled = ref(false);

    //Icon states
    const width = ref('2rem');
    const height = ref('2rem');
    const widthX = ref('2rem');
    const heightX = ref('2rem');
    const viewBoxX = ref('-8 -8 24 24');
    const color = ref('var(--general-neutral-white-light)');

    //Emits
    const emit = defineEmits(['click']);

    //Actions
    const clickTag = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            emit('click');
            toggleSelected();
        }
    };

    const toggleSelected = () => { isSelected.value = !isSelected.value; };

    //Change styles
    const stateTag = computed(() => {
        const classesTag = {};

        classesTag['shape'] = true;

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                classesTag['color-shape-dark'] = isDark.value;
            }
            else {
                classesTag['color-shape-light'] = !isDark.value;
            }
        }
        else {
            classesTag['disabled'] = isDisabled.value;
        }

        return classesTag;
    });
</script>

<style scoped>
    /* Component style */
    .shape {
        display: inline-flex;
        padding: 0.6rem;
        gap: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 5rem;
        cursor: pointer;
    }

    /* Component state */

    /* Colors light component */
    .color-shape-light {
        background-color: #336643;
    }

    /* Colors dark component */
    .color-shape-dark {
        background-color: #336643;
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
        color: var(--general-neutral-white-light);
    }
</style>