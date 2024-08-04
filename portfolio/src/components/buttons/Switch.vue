<template>
    <div
        :style="styles"
        :class="classes"
        @click="clickButton"
        @keydown.enter="clickButton"
        tabindex="0"
    >
        <div
            :style="circleStyles"
            :class="circleClasses"
        >
                <Icon
                    :state="{ id: idIconRight }"
                    v-show="isRight"
                />
                <Icon
                    :state="{ id: idIconLeft }"
                    v-show="!isRight"
                />
        </div>
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, ref, toRefs, watch, onMounted, onBeforeUnmount } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useSwitch } from '../../stores/SwitchStore.js';
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
    const appStore = useAppStore()
    const switchStore = useSwitch();
    const iconStore = useIcon();

    //Actions store
    const { saveThemePreference, isLoadThemePreference, getThemePreference } = appStore;
    const { getSwitch } = switchStore;
    const { createIcon, updateIcon, deleteIcon, getStandardIcon, changeSize } = iconStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorCircleLight: colorCircleLightStore,
        colorCircleDark: colorCircleDarkStore,
        isDisabled: isDisabledStore,
        isRight: isRightStore,
        click: clickStore,
    } = toRefs(getSwitch(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorCircleLight = computed(() => colorCircleLightStore.value);
    const colorCircleDark = computed(() => colorCircleDarkStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const isRight = computed(() => isRightStore.value);
    const click = computed(() => clickStore.value);

    //Screen size state
    const windowWidth = ref(window.innerWidth);

    const updateWindowSize = () => {
        windowWidth.value = window.innerWidth;

        if (windowWidth.value <= 744) {
            changeSize(idIconLeft.value, '1.1rem', '1.1rem');
            changeSize(idIconRight.value, '1.1rem', '1.1rem');
        } else {
            changeSize(idIconLeft.value, '1.5rem', '1.5rem');
            changeSize(idIconRight.value, '1.5rem', '1.5rem');
        }
    };

    window.addEventListener('resize', updateWindowSize);

    const detectChangeTheme = () => {
        const havePreference = isLoadThemePreference();

        if (!havePreference) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            const matches = mediaQuery.matches;
            click.value(matches);
        }
        else {
            click.value(getThemePreference());
        }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectChangeTheme);

    onMounted(() => {
        detectChangeTheme();
        updateWindowSize();
    });

    //Create childrens
    const idIconRight = ref(null);

    idIconRight.value = createIcon({
        ...getStandardIcon('Sun'),
        colorLight: colorShapeLight.value,
        colorDark: colorShapeDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        colorShapeLight,
        colorShapeDark,
        isDisabled
    ], () => {
        updateIcon({
            id: idIconRight.value,
            colorLight: colorShapeLight.value,
            colorDark: colorShapeDark.value,
            isDisabled: isDisabled.value,
        });
    });

    const idIconLeft = ref(null);

    idIconLeft.value = createIcon({
        ...getStandardIcon('Moon'),
        colorLight: colorShapeLight.value,
        colorDark: colorShapeDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        colorShapeLight,
        colorShapeDark,
        isDisabled
    ], () => {
        updateIcon({
            id: idIconLeft.value,
            colorLight: colorShapeLight.value,
            colorDark: colorShapeDark.value,
            isDisabled: isDisabled.value,
        });
    });

    //Delete childrens when component unmounts and others
    onBeforeUnmount(() => {
        if (idIconRight.value) {
            deleteIcon(idIconRight.value);
        }
        if (idIconLeft.value) {
            deleteIcon(idIconLeft.value);
        }
        mediaQuery.removeEventListener('detectChangeTheme', detectChangeTheme);
        window.removeEventListener('resize', updateWindowSize);
    });

    //Actions
    const clickButton = () => {
        if (!isDisabled.value) {
            click.value();
            saveThemePreference();
        }
    };

    //Change styles switch
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;
        classes['right'] = isRight.value;

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

    //Change styles circle
    const circleClasses = computed(() => {
        const classes= {};

        classes['circle'] = true;

        return classes;
    });

    const circleStyles = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                styles.backgroundColor = colorCircleLight.value;
            }
            else {
                styles.backgroundColor = colorCircleDark.value;
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
        width: 3.5rem;
        height: 1.8rem;
        padding: 0.1rem;
        align-items: center;
        border-radius: 5rem;
        gap: 0.2rem;
    }
    .circle {
        display: flex;
        width: auto;
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20rem;
    }

    .isClickable {
        cursor: pointer;
    }
    
    .right {
        justify-content: flex-end;
    }

    @media (max-width: 744px) {
        .shape {
            width: 2.3rem;
            height: 1.2rem;
            padding: 0.1rem;
        }
    }
</style>