<template>
    <div
        :class="stateButton"
        @click="clickButton"
    >
        {{ text }}
        <icon
            :iconStore="storeIcon"
        >
            <arrowDown/>
        </icon>
    </div>
</template>

<script setup>
    import { useButtonLanguageStore } from '../../stores/ButtonLanguageStore.js';
    import { useIconStore } from '../../stores/IconStore.js';
    import { computed, reactive, provide } from 'vue';
    import { storeToRefs } from 'pinia';

    import icon from '../icons/Icon.vue';
    import arrowDown from '../../assets/icons/ArrowDown.vue';

    //Stores
    const store = useButtonLanguageStore();
    const storeIcon = useIconStore();

    //Provides
    provide('store', storeIcon);

    //States
    const { text, isDark, isDisabled} = storeToRefs(store);

    //Actions
    const { click, toggleDarkMode } = reactive(store);

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

                //Change style child component
                storeIcon.setIconColor('var(--general-neutral-900-dark)');
            }
            else {
                classesButton['color-shape-light'] = !isDark.value;
                classesButton['color-text-light'] = !isDark.value;

                //Change style child component
                storeIcon.setIconColor('var(--general-neutral-900-light)');
            }
        }
        else {
            classesButton['disabled'] = isDisabled.value;

            //Change style child component
            storeIcon.setIconColor('var(--general-neutral-white-light)');
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
        padding: 0.2rem 0.4rem;
        justify-content: center;
        align-items: center;
        border-radius: 10rem;
        cursor: pointer;
        user-select: none;
    }

    .style-text {
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-16);
    }

    /* Component state */


    /* Colors light component */
    .color-shape-light {
        background-color: var(--general-background-light);
    }

    .color-text-light {
        color: var(--general-neutral-900-light);
    }


    /* Colors dark component */
    .color-shape-dark {
        background-color: var(--general-background-dark);
    }

    .color-text-dark {
        color: var(--general-neutral-900-dark);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
        color: var(--general-neutral-white-light);
    }
</style>