<template>
    <div>
        <h3
            :style="stylesTitle"
            :class="classesTitle"
        >
            {{ text }}
        </h3>
        <div
            :style="styles"
            :class="classes"
        >
            <GroupRating
                style="box-shadow: none"
                :state="{id: idGroupRating}"
            />
        </div>
    </div>

</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, toRefs, watch } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useCardTechnology } from '../../stores/CardTechnologyStore.js';
    import { useGroupRating } from '../../stores/GroupRatingStore.js';
    import { useRating } from '../../stores/RatingStore.js';


    //Components imports
    import GroupRating from '../../components/groupRating/GroupRating.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const cardTechnology = useCardTechnology();
    const groupRating = useGroupRating();
    
    //Actions store
    const { getText } = appStore;
    const { getGroupRating } = groupRating;
    const { getRating, updateRating } = useRating();
    const { getCardTechnology } = cardTechnology;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        name: nameStore,
        idGroupRating: idGroupRatingStore,
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorTextLight: colorTextLightStore,
        colorTextDark: colorTextDarkStore,
        isDisabled: isDisabledStore,
    } = toRefs(getCardTechnology(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const name = computed(() => nameStore.value);
    const idGroupRating = computed(() => idGroupRatingStore.value);
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorTextLight = computed(() => colorTextLightStore.value);
    const colorTextDark = computed(() => colorTextDarkStore.value);
    const isDisabled = computed(() => isDisabledStore.value);

    const text = computed(() => getText('CardTechnology', name.value));

    //Actions

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;

        return classes;
    });

    const styles = computed(() => {
        const styles = {};

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

    const classesTitle = computed(() => {
        const classes = {};

        classes['title'] = true;

        return classes;
    });

    const stylesTitle = computed(() => {
        const styles = {};

        if (!isDisabled.value) {
            if (isDark.value) {
                styles.color = colorTextDark.value;
            }
            else {
                styles.color = colorTextLight.value;
            }
        }
        else {
            styles.backgroundColor = 'var(--general-neutral-300-light)';
            styles.color = 'var(--general-neutral-white-light)';
        }

        return styles;
    });

    watch(isDisabled, (newVal) => {
        if (!newVal) {
            const { containerGroupRating } = getGroupRating(idGroupRating.value);
            containerGroupRating.forEach(({ id }) => updateRating({ id, isDisabled: false }));
        } else {
            const { containerGroupRating } = getGroupRating(idGroupRating.value);
            containerGroupRating.forEach(({ id }) => updateRating({ id, isDisabled: true }));
        }
    }, { immediate: true });

</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        width: 20rem;
        height: 20rem;
        padding: 0 0.4rem 0.4rem 0.4rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .title {
        margin: 0;
        width: 20rem;
        padding: 0.4rem 0.4rem 0.4rem 1rem;
        display: flex;
        align-items: flex-start;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-13);
        user-select: none;
    }
</style>