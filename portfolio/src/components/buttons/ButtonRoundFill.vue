<template>
    <div
        :style="styles"
        :class="classes"
        @click="clickButton"
        @keydown.enter="clickButton"
        tabindex="0"
    >
        {{ text }}
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, toRefs } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useButtonRoundFill } from '../../stores/ButtonRoundFillStore.js';

    //Props
    const props = defineProps({
        state: {
            type: Object
        }
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore()
    const buttonRoundFillStore = useButtonRoundFill();

    //Actions store
    const { getText } = appStore;
    const { getButtonRoundFill } = buttonRoundFillStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorTextLight: colorTextLightStore,
        colorTextDark: colorTextDarkStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getButtonRoundFill(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const text = computed(() => getText('ButtonRoundFill'));
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorTextLight = computed(() => colorTextLightStore.value);
    const colorTextDark = computed(() => colorTextDarkStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    //Actions
    const clickButton = () => {
        if (!isDisabled.value) {
            click.value();
        }
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;
        classes['style-text'] = true;

        if (!isDisabled.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const styles = computed(() => {
        const styles = {};

        if (!isDisabled.value) {
            if (isDark.value) {
                styles.color = colorTextDark.value;
                styles.backgroundColor = colorShapeDark.value;
            }
            else {
                styles.color = colorTextLight.value;
                styles.backgroundColor = colorShapeLight.value;
            }
        }
        else {
            styles.color = 'var(--general-neutral-white-light)';
            styles.backgroundColor = 'var(--general-neutral-300-light)';
        }

        return styles;
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
        -webkit-user-select: none;
        user-select: none;
    }

    .style-text {
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-family-body);
        font-weight: var(--font-weight-600);
        font-size: var(--font-size-21);
    }

    .isClickable {
        cursor: pointer;
    }
</style>