<template>
    <div
        :class="stateButton"
        @click="clickButton"
    >
        {{ text }}
        <Icon
            :width="width"
            :height="height"
            :color="color"
        >
            <ArrowDown/>
        </Icon>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { computed, ref, reactive, defineEmits } from 'vue';
    import { useAppStore } from '../../stores/AppStore.js';

    import Icon from '../icons/Icon.vue';
    import ArrowDown from '../../assets/icons/ArrowDown.vue';

    //Stores
    const appStore = useAppStore();

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    //Actions store
    const { getText, changeLanguage } = reactive(appStore);

    //States
    const isDark = computed(() => isDarkMode.value);
    const text = computed(() => getText('ButtonLanguage'));

    const isDisabled = ref(false);

    //Icon states
    const width = ref('1.2rem');
    const height = ref('1.2rem');
    const color = ref('var(--general-neutral-900-light)');

    //Emits
    const emit = defineEmits(['click']);

    //Actions
    const clickButton = () => {
        if (!isDisabled.value) {
            emit('click');
            console.log('Button clicked');
            //Test line
            switch (appStore.languageMode) {
                case 'fr':
                    changeLanguage('es');
                    break;
                case 'es':
                    changeLanguage('en');
                    break;
                case 'en':
                    changeLanguage('fr');
                    break;
            }
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

                //Change style icon component
                color.value = 'var(--general-neutral-900-dark)';
            }
            else {
                classesButton['color-shape-light'] = !isDark.value;
                classesButton['color-text-light'] = !isDark.value;

                //Change style icon component
                color.value = 'var(--general-neutral-900-light)';
            }
        }
        else {
            classesButton['disabled'] = isDisabled.value;

            //Change style icon component
            color.value = 'var(--general-neutral-white-light)';
        }

        return classesButton;
    });
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