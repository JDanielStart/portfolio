<template>
    <div
        :style="styles"
        :class="classes"
        @click="clickButton"
    >
        {{ text }}
        <Icon :state="{ id: idIcon }" />
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, ref, toRefs, onBeforeUnmount, watch } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useButtonLanguage } from '../../stores/ButtonLanguageStore.js';
    import { useIcon } from '../../stores/IconStore.js';

    //Components imports
    import Icon from '../icons/Icon.vue'

    //Props
    const props = defineProps({
        state: {
            type: Object
        }
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const buttonLanguageStore = useButtonLanguage();
    const iconStore = useIcon();

    //Actions store
    const { getText } = appStore;
    const { getButtonLanguage } = buttonLanguageStore;
    const { createIcon, updateIcon, deleteIcon, getStandardIcon } = iconStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorTextLight: colorTextLightStore,
        colorTextDark: colorTextDarkStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getButtonLanguage(id));

    //States
    const isDark = computed(() => isDarkMode.value);
    
    const text = computed(() => getText('ButtonLanguage'));
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorTextLight = computed(() => colorTextLightStore.value);
    const colorTextDark = computed(() => colorTextDarkStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    //Create childrens
    const idIcon = ref(null);

    idIcon.value = createIcon({
        ...getStandardIcon('ArrowDown'),
        colorLight: colorTextLight.value,
        colorDark: colorTextDark.value,
        isDisabled: isDisabled.value,
        });

    watch([
        colorTextLight,
        colorTextDark,
        isDisabled
    ], () => {
        updateIcon(idIcon.value, {
            colorLight: colorTextLight.value,
            colorDark: colorTextDark.value,
            isDisabled: isDisabled.value,
        });
    });

    //Delete childrens when component unmounts
    onBeforeUnmount(() => {
        if (idIcon.value) {
            deleteIcon(idIcon.value);
        }
    });

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

        // states classes
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
        padding: 0.2rem 0.4rem;
        justify-content: center;
        align-items: center;
        border-radius: 10rem;
        -webkit-user-select: none;
        user-select: none;
    }

    .style-text {
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-16);
    }

    .isClickable {
        cursor: pointer;
    }
</style>