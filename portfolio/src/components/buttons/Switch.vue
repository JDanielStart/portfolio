<template>
    <div
        :class="stateSwitch"
        @click="toggleSwitch"
    >
        <div
            :class="stateCircle">
                <img
                    :class="stateImg"
                    :src='imageSrc'
                >
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import '../css/general.css';

    import sunIcon from '../../assets/sun.svg';
    import moonIcon from '../../assets/moon.svg';

    // General state
    const isDark = ref(false);
    const isDisabled = ref(false);
    
    //Specific state
    const isRight = ref(true);

    // General method
    const onDarkMode = () => {
        isDark = !isDark.value;
    };

    const onDisabledState = () => {
        isDisabled = !isDisabled.value;
    };

    // Specific method
    const stateSwitch = computed(() => {
        const classesSwitch = {};

        // predefined classes
        classesSwitch['shape'] = true;

        // states classes
        if (!isDisabled.value) {
            isDark.value ?
            classesSwitch['primary-color-dark'] = isDark.value :
            classesSwitch['primary-color-light'] = !isDark.value;
        }
        else {
            classesSwitch['disabled'] = isDisabled.value;
        }

        classesSwitch['right'] = isRight.value;

        return classesSwitch;
    });

    const stateCircle = computed(() => {
        const classesCircle = {};

        // predefined classes
        classesCircle['circle'] = true;

        // states classes
        if (!isDisabled.value) {
            isDark.value ?
            classesCircle['secondary-color-dark'] = isDark.value :
            classesCircle['secondary-color-light'] = !isDark.value;
        }
        else {
            classesCircle['secondary-color-light'] = isDisabled.value;
        }
        

        return classesCircle;
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
        return isRight.value ?
        sunIcon : moonIcon;
    });

    const toggleSwitch = () => {
        isRight.value = !isRight.value;
    }

</script>

<style scoped>

    /* Component style */
    .shape {
        display: flex;
        width: 4.6rem;
        height: 2.4rem;
        padding: 0 0.2rem;
        align-items: center;
        border-radius: 5rem;
        cursor: pointer;
    }
    .circle {
        display: flex;
        width: 2rem;
        height: 2rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 20rem;
    }
    .icon {
        background-size: cover;
        background-repeat: no-repeat;
    }

    /* Component state */
    .right {
        justify-content: flex-end;
    }

    /* Colors light component */
    .primary-color-light {
        background-color: var(--general-neutral-900-light);
    }
    .secondary-color-light {
        background-color: var(--general-background-light);
    }

    .img-primary-color-light {
        filter: invert(5%) sepia(2%) saturate(21%) hue-rotate(329deg) brightness(98%) contrast(82%);
    }

    /* Colors dark component */
    .primary-color-dark {
        background-color: var(--general-neutral-900-dark);
    }
    .secondary-color-dark {
        background-color: var(--general-background-dark);
    }
    .img-primary-color-dark {
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(347deg) brightness(102%) contrast(102%);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
    }
    .img-disabled {
        filter: invert(99%) sepia(1%) saturate(91%) hue-rotate(121deg) brightness(119%) contrast(75%);
    }

</style>