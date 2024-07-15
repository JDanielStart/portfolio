<template>
    <div
        :style="styles"
        :class="classes"
        @click="clickButton"
    >
        <Icon
            :state="{ id: idIconLeft }"
        />
        <Icon
            :state="{ id: idIconRight }"
        />
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, ref, toRefs, watch, onBeforeUnmount  } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useButtonCardFigma } from '../../stores/ButtonCardFigmaStore.js';
    import { useIcon } from '../../stores/IconStore.js';

    //Components imports
    import Icon from '../icons/Icon.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        }
    });
    
    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const buttonCardFigmaStore = useButtonCardFigma();
    const iconStore = useIcon();

    //Actions store
    const { getButtonCardFigma } = buttonCardFigmaStore;
    const { createIcon, updateIcon, deleteIcon, getStandardIcon } = iconStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorIconLight: colorIconLightStore,
        colorIconDark: colorIconDarkStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getButtonCardFigma(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorIconLight = computed(() => colorIconLightStore.value);
    const colorIconDark = computed(() => colorIconDarkStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    //Create childrens
    const idIconLeft = ref(null);

    idIconLeft.value = createIcon({
        ...getStandardIcon('Figma'),
        colorLight: colorIconLight.value,
        colorDark: colorIconDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        colorIconLight,
        colorIconDark,
        isDisabled
    ], () => {
        updateIcon(idIconLeft.value, {
            colorLight: colorIconLight.value,
            colorDark: colorIconDark.value,
            isDisabled: isDisabled.value,
        });
    });

    const idIconRight = ref(null);

    idIconRight.value = createIcon({
        ...getStandardIcon('Open'),
        colorLight: colorIconLight.value,
        colorDark: colorIconDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        colorIconLight,
        colorIconDark,
        isDisabled
    ], () => {
        updateIcon(idIconRight.value, {
            colorLight: colorIconLight.value,
            colorDark: colorIconDark.value,
            isDisabled: isDisabled.value,
        });
    });

    //Delete childrens when component unmounts
    onBeforeUnmount(() => {
        if (idIconLeft.value) {
            deleteIcon(idIconLeft.value);
        }
        if (idIconRight.value) {
            deleteIcon(idIconRight.value);
        }
    });

    //Actions
    const clickButton = () => {
        if(!isDisabled.value) {
            click.value();
        }
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;

        if (!isDisabled.value) {
            classes['isclickable'] = true;
        }

        return classes;
    });

    const styles = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                styles.backgroundColor = colorShapeDark.value;
            }
            else {
                styles.backgroundColor = colorShapeLight.value;
            }
        }
        else {
            styles.backgroundColor = 'var(--general-neutral-300-light)';
        }

        return styles;
    });
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
    }

    .isclickable {
        cursor: pointer;
    }
</style>