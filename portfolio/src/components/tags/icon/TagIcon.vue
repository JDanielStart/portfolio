<template>
    <div
        :style="styles"
        :class="classes"
        @click="clickTag"
    >
        <Icon
            :state="{ id: idIconLeft }"
        />
        <Icon
            :state="{ id: idIconRight }"
            v-show="isSelected"
        />
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, ref, toRefs, watch, onBeforeUnmount  } from 'vue';

    //Store imports
    import { useAppStore } from '../../../stores/AppStore.js';
    import { useTagIcon } from '../../../stores/TagIconStore.js';
    import { useIcon } from '../../../stores/IconStore.js';

    //Components imports
    import Icon from '../../icons/Icon.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const tagIconStore = useTagIcon();
    const iconStore = useIcon();

    //Actions store
    const { getTagIcon } = tagIconStore;
    const { createIcon, updateIcon, deleteIcon, getStandardIcon } = iconStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        name: nameStore,
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorIconLight: colorIconLightStore,
        colorIconDark: colorIconDarkStore,
        isSelected: isSelectedStore,
        isOnlyRead: isOnlyReadStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getTagIcon(id));

    //States
    const isDark = computed(() => isDarkMode.value);
    
    const name = computed(() => nameStore.value);
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorIconLight = computed(() => colorIconLightStore.value);
    const colorIconDark = computed(() => colorIconDarkStore.value);
    const isSelected = computed(() => isSelectedStore.value);
    const isOnlyRead = computed(() => isOnlyReadStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    //Create childrens
    const idIconLeft = ref(null);

    idIconLeft.value = createIcon({
        ...getStandardIcon(name.value),
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
        ...getStandardIcon('X'),
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
    const clickTag = () => {
        if(!isDisabled.value && !isOnlyRead.value) {
            click.value();
        }
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
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
</script>

<style scoped>
    /* Component style */
    .shape {
        display: inline-flex;
        padding: 0.6rem;
        gap: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 5rem;
    }

    .isClickable {
        cursor: pointer;
    }
</style>