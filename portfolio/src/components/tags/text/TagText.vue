<template>
    <div
        :class="stateTag"
        @click="clickTag"
    >
        {{ textTag }}
        <img
            v-show="isSelected"
            :class="stateImg"
            :src='imageSrcX'
        >
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import '../../css/general.css';

    import x from '../../../assets/x.svg';

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

    //Specific state
    const textTag = ref('Ejemplo');
    const isSelected = ref(false);

    // Specific method
    const stateTag = computed(() => {
        const classesTag = {};

        // predefined classes
        classesTag['shape'] = true;
        classesTag['style-text'] = true;

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                classesTag['primary-color-dark'] = isDark.value;
                classesTag['text-color-dark'] = isDark.value;
            }
            else {
                classesTag['primary-color-light'] = !isDark.value;
                classesTag['text-color-light'] = !isDark.value;
            }
        }
        else {
            classesTag['disabled'] = isDisabled.value;
        }

        return classesTag;
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

    const imageSrcX = computed(() => {
        return x;
    });

    const clickTag = () => {
        if (!isDisabled.value) {
            console.log('Button clicked');
            isSelected.value = !isSelected.value;
        }
    };
</script>

<style scoped>
    /* Component style */
    .shape {
        display: inline-flex;
        padding: 0.1rem 1.2rem;
        align-items: center;
        gap: 0.8rem;
        border-radius: 5.0rem;
        cursor: pointer;
    }
    .icon {
        background-size: cover;
        background-repeat: no-repeat;
    }
    .style-text {
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-family-body);
        font-size: var(--font-size-13);
        font-weight: var(--font-weight-600);
        font-style: normal;
        line-height: 2.4rem;
    }

    /* Component state */

    /* Colors light component */
    .primary-color-light {
        background-color: var(--general-secondary-light);
    }

    .text-color-light {
        color: var(--general-background-light);
    }

    .img-primary-color-light {
        filter: brightness(0) saturate(100%) invert(100%);
    }


    /* Colors dark component */
    .primary-color-dark {
        background-color: var(--general-secondary-light);
    }

    .text-color-dark {
        color: var(--general-background-dark);
    }

    .img-primary-color-dark {
        filter: brightness(0%);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
        color: var(--general-neutral-white-light);
    }

    .img-disabled {
        filter: brightness(0) saturate(100%) invert(100%);
    }
</style>