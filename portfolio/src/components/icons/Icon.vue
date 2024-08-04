<template>
    <svg
        :class="classes"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        @click="clickIcon"
        @keydown.enter="clickIcon"
    >
        <component
            :is="iconComponent"
            :color="color"
        />
    </svg>
</template>
  
<script setup>
    //General imports
    import { computed, defineAsyncComponent, toRefs } from 'vue';
    import { storeToRefs } from 'pinia';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useIcon } from '../../stores/IconStore.js';

    //Props
    const props = defineProps({
        state: {
            type: Object
        }
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const iconStore = useIcon();

    //Actions store
    const { getIcon } = iconStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        name: nameStore,
        width: widthStore,
        height: heightStore,
        viewBox: viewBoxStore,
        colorLight: colorLightStore,
        colorDark: colorDarkStore,
        isOnlyRead: isOnlyReadStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getIcon(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const name = computed(() => nameStore.value);
    const width = computed(() => widthStore.value);
    const height = computed(() => heightStore.value);
    const viewBox = computed(() => viewBoxStore.value);
    const colorLight = computed(() => colorLightStore.value);
    const colorDark = computed(() => colorDarkStore.value);
    const isOnlyRead = computed(() => isOnlyReadStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    const iconComponent = computed(() => {
        return defineAsyncComponent(() =>
            import(`../../assets/icons/${name.value}.vue`).catch(() => {
                console.error(`Icon ${name.value} not found.`);
                return import('../../assets/icons/Ada.vue');
            })
        );
    });

    //Actions
    const clickIcon = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            click.value();
        }
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['icon'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const color = computed(() => {
        if (!isDisabled.value) {
            if (isDark.value) {
                return colorDark.value;
            }
            else {
                return colorLight.value;
            }
        }
        return 'var(--general-neutral-white-light)';
    });
</script>

<style scoped>
    .icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }

    .isClickable {
        cursor: pointer;
    }
</style>