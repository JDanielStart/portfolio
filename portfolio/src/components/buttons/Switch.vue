<template>
    <div
        :class="stateSwitch"
        @click="clickButton"
    >
        <div
            :class="stateCircle">
                <Icon
                    v-show="isRight"
                    :width="width"
                    :height="height"
                    :color="color"
                >
                    <SunIcon/>
                </Icon>
                <Icon
                    v-show="!isRight"
                    :width="width"
                    :height="height"
                    :color="color"
                >
                    <MoonIcon/>
                </Icon>
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { computed, ref, reactive } from 'vue';
    import { useAppStore } from '../../stores/AppStore.js';

    import Icon from '../icons/Icon.vue';
    import SunIcon from '../../assets/icons/Sun.vue';
    import MoonIcon from '../../assets/icons/Moon.vue';

    //Stores
    const appStore = useAppStore()

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    //Actions store
    const { toggleDark } = reactive(appStore);

    //States
    const isDark = ref(isDarkMode);
    const isDisabled = ref(false);
    const isRight = ref(true);

    //Icon states
    const width = ref('2rem');
    const height = ref('2rem');
    const color = ref('var(--general-neutral-900-light)');

    //Actions
    const click = () => {
        toggleRight();
        toggleDark();
    };

    const toggleRight = () => { isRight.value = !isRight.value; };

    //Change styles
    const stateSwitch = computed(() => {
        const classesSwitch = {};

        classesSwitch['shape'] = true;

        //If disabled is true, dont change styles
        if (!isDisabled.value) {
            if (isDark.value) {
                classesSwitch['color-shape-dark'] = isDark.value;

                //Change style icon component
                color.value = 'var(--general-neutral-900-dark)';
            }
            else {
                classesSwitch['color-shape-light'] = !isDark.value;

                //Change style icon component
                color.value = 'var(--general-neutral-900-light)';
            }
        }
        else {
            classesSwitch['disabled'] = isDisabled.value;
        }

        classesSwitch['right'] = isRight.value;

        return classesSwitch;
    });

    const stateCircle = computed(() => {
        const classesCircle = {};

        classesCircle['circle'] = true;

        //If disabled is true, dont change styles
        if (!isDisabled.value) {
            if (isDark.value) {
                classesCircle['color-circle-dark'] = isDark.value;
            }
            else {
                classesCircle['color-circle-light'] = !isDark.value;
            }
        }
        else {
            classesCircle['color-circle-light'] = isDisabled.value;
        }

        return classesCircle;
    });

    //Events
    const clickButton = () => {
        click();
    };

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

    /* Component state */
    .right {
        justify-content: flex-end;
    }

    /* Colors light component */
    .color-shape-light {
        background-color: var(--general-neutral-900-light);
    }
    .color-circle-light {
        background-color: var(--general-background-light);
    }

    /* Colors dark component */
    .color-shape-dark {
        background-color: var(--general-neutral-900-dark);
    }
    .color-circle-dark {
        background-color: var(--general-background-dark);
    }

    /* Colors states */
    .disabled {
        background-color: var(--general-neutral-300-light);
    }
</style>