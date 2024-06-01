<template>
    <div
        :class="stateButton"
        @click="clickButton"
    >
        {{ text }}
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { computed, ref, reactive, defineEmits } from 'vue';
    import { useAppStore } from '../../stores/AppStore.js';

    //Stores
    const appStore = useAppStore()

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    //Actions store
    const { getText } = reactive(appStore);

    //States
    const isDark = computed(() => isDarkMode.value);
    const text = computed(() => getText('ButtonRoundFill'));

    const isDisabled = ref(false);

    //Emits
    const emit = defineEmits(['click']);

    //Actions
    const clickButton = () => {
        if (!isDisabled.value) {
            emit('click');
            console.log('Button clicked');
        }
    };

    //Change styles
    const stateButton = computed(() => {
        const classesButton = {};

        classesButton['shape'] = true;
        classesButton['style-text'] = true;

        //If disabled is true, dont change styles
        if (!isDisabled.value) {
            if (isDark.value) {
                classesButton['color-shape-dark'] = isDark.value;
                classesButton['color-text-dark'] = isDark.value;
            }
            else {
                classesButton['color-shape-light'] = !isDark.value;
                classesButton['color-text-light'] = !isDark.value;
            }
        }
        else {
            classesButton['disabled'] = isDisabled.value;
        }

        return classesButton;
    });
</script>

<style scoped>
    /* Component style */
    .shape {
        display: inline-flex;
        padding: 1rem 1.6rem;
        justify-content: center;
        align-items: center;
        border-radius: 5rem;
        cursor: pointer;
        user-select: none;
    }

    .style-text {
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-family-body);
        font-weight: var(--font-weight-600);
        font-size: var(--font-size-21);
    }

    /* Colors light component */
    .color-shape-light {
        background-color: var(--general-secondary-light);
    }

    .color-text-light {
        color: var(--general-background-light);
    }

    /* Colors dark component */
    .color-shape-dark {
        background-color: var(--general-secondary-dark);
    }

    .color-text-dark {
        color: var(--general-background-dark);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
        color: var(--general-neutral-white-light);
    }
</style>