<template>
    <div
        :style="styles"
        :class="classes"
        @click="clickTag"
    >
        {{ text }}
        <Icon
            :state="{ id: idIcon }"
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
    import { useTagText } from '../../../stores/TagTextStore.js';
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
    const tagTextStore = useTagText();
    const iconStore = useIcon();

    //Actions store
    const { getText } = appStore;
    const { getTagText } = tagTextStore;
    const { createIcon, deleteIcon, getStandardIcon } = iconStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        name: nameStore,
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorTextLight: colorTextLightStore,
        colorTextDark: colorTextDarkStore,
        isSelected: isSelectedStore,
        isOnlyRead: isOnlyReadStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getTagText(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const name = computed(() => nameStore.value);
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorTextLight = computed(() => colorTextLightStore.value);
    const colorTextDark = computed(() => colorTextDarkStore.value);
    const isSelected = computed(() => isSelectedStore.value);
    const isOnlyRead = computed(() => isOnlyReadStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    const text = computed(() => getText('TagText', name.value));

    //Create childrens
    const idIcon = ref(null);

    idIcon.value = createIcon({
        ...getStandardIcon('X'),
        colorLight: colorTextLight.value,
        colorDark: colorTextDark.value,
        isDisabled: isDisabled.value,
    });

    //Delete childrens when component unmounts
    onBeforeUnmount(() => {
        if (idIcon.value) {
            deleteIcon(idIcon.value);
        }
    });

    //Actions
    const clickTag = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            click.value();
        }
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;
        classes['style-text'] = true;

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
        padding: 0.1rem 1.2rem;
        gap: 0.8px;
        justify-content: center;
        align-items: center;
        border-radius: 5.0rem;
        user-select: none;
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

    .isClickable {
        cursor: pointer;
    }
</style>