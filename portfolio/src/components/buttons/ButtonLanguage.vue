<template>
    <div
        :class="stateButton"
        @click="clickButton"
    >
        <slot>
        </slot>
        <img
            :class="stateImg"
            :src='imageSrc'
        >
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import '../css/general.css';

    import arrowDown from '../../assets/arrow-down.svg';

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

    const stateImg = computed(() => {
        const classesImg = {};

        // predefined classes
        classesImg['icon'] = true;

        // states classes
        if (!isDisabled.value) {
            isDark.value ?
            classesImg['img-primary-color-dark'] = isDark.value :
            classesImg['img-primary-color-light'] = !isDark.value;
        }
        else {
            classesImg['img-disabled'] = isDisabled.value;
        }

        return classesImg;
    });

    const imageSrc = computed(() => {
        return arrowDown;
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
        padding: 0.2rem 0.4rem;
        justify-content: center;
        align-items: center;
        border-radius: 10rem;
        cursor: pointer;
    }

    .style-text {
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-16);
    }

    /* Component state */


    /* Colors light component */
    .primary-color-light {
        background-color: var(--general-background-light);
    }

    .text-color-light {
        color: var(--general-neutral-900-light);
    }

    .img-primary-color-light {
        filter: invert(5%) sepia(2%) saturate(21%) hue-rotate(329deg) brightness(98%) contrast(82%);
    }


    /* Colors dark component */
    .primary-color-dark {
        background-color: var(--general-background-dark);
    }

    .text-color-dark {
        color: var(--general-neutral-900-dark);
    }

    .img-primary-color-dark {
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(347deg) brightness(102%) contrast(102%);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
        color: var(--general-neutral-white-light);
    }

    .img-disabled {
        filter: invert(100%) saturate(0%) brightness(10000%);
    }
</style>