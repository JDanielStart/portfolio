<template>
    <div
        :class="stateButton"
        @click="clickButton"
    >
        <slot>
        </slot>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import '../css/general.css';

    // General state
    const isDark = ref(false);
    const isDisabled = ref(false);

    // General method
    const onDarkMode = () => {
        isDark.value = !isDark.value;
    };

    const onDisabled = () => {
        isDisabled.value = !isDisabled.value;
    };

    // Specific method
    const stateButton = computed(() => {
        const classesButton = {};

        // predefined classes
        classesButton['shape'] = true;
        classesButton['style-text'] = true;

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                classesButton['primary-color-dark'] = isDark.value;
                classesButton['text-color-dark'] = isDark.value;
            }
            else {
                classesButton['primary-color-light'] = !isDark.value;
                classesButton['text-color-light'] = !isDark.value;
            }
        }
        else {
            classesButton['disabled'] = isDisabled.value;
        }

        return classesButton;
    });

    const clickButton = () => {
        if (!isDisabled.value) {
            console.log('Button clicked');
        }
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
    }

    .style-text {
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-family-body);
        font-weight: var(--font-weight-600);
        font-size: var(--font-size-21);
    }

    /* Component state */


    /* Colors light component */
    .primary-color-light {
        background-color: var(--general-secondary-light);
    }

    .text-color-light {
        color: var(--general-background-light);
    }


    /* Colors dark component */
    .primary-color-dark {
        background-color: var(--general-secondary-dark);
    }

    .text-color-dark {
        color: var(--general-background-dark);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
        color: var(--general-neutral-white-light);
    }
</style>