<template>
    <div
        :class="stateButton"
        @click="clickButton"
    >
        {{ text }}
    </div>
</template>

<script setup>
    import { useButtonRoundFillStore } from '../../stores/ButtonRoundFillStore.js';
    import { computed, reactive } from 'vue';
    import { storeToRefs } from 'pinia';

    //Stores
    const store = useButtonRoundFillStore();

    //States
    const { text, isDark, isDisabled} = storeToRefs(store);

    //Actions
    const { click } = reactive(store);

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

    const clickButton = () => {
        click();
    };
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