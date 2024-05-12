<template>
    <div
        :class="stateButton"
        @click="clickButton"
    >
        <img
            :class="stateImg"
            :src='imageSrcWhiteboard'
        >
        <img
            :class="stateImg"
            :src='imageSrcOpen'
        >
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import '../css/general.css';

    import whiteboard from '../../assets/whiteboard.svg';
    import open from '../../assets/open.svg';

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

    const imageSrcWhiteboard = computed(() => {
        return whiteboard;
    });

    const imageSrcOpen = computed(() => {
        return open;
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
        display: flex;
        width: 6.4rem;
        max-width: 30.12rem;
        padding: 2rem 1.2rem;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        flex: 1 0 0;
        border-radius: 0rem 0rem 0rem 1rem;
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
        background-color: #4773C9;
    }

    .img-primary-color-light {
        filter: brightness(0) saturate(100%) invert(100%);
    }


    /* Colors dark component */
    .primary-color-dark {
        background-color: #4773C9;
    }

    .text-color-dark {
        color: var(--general-neutral-900-dark);
    }

    .img-primary-color-dark {
        filter: brightness(0) saturate(100%) invert(100%);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
    }
    .img-disabled {
        filter: brightness(0) saturate(100%) invert(100%);
    }
</style>