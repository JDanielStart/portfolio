<template>
    <div
        :class="classes"
    >
        <div
            :class="classesTagIcon"
            @click="clickTagIcon"
        >
            <TagIcon
                class="fixed-width-icon"
                :state="{ id: idTagIcon }"
            />
        </div>
        <TagText
            :state="{ id: idTagText }"
            v-show="noRating"
        />
        <div
            :class="classesRating"
            v-show="!noRating"
        >
            <div
                :style="stylesRating1"
                :class="classesRating1"
                @click="clickRating1"
            />
            <div
                :style="stylesRating2"
                :class="classesRating2"
                @click="clickRating2"
            />
            <div
                :style="stylesRating3"
                :class="classesRating3"
                @click="clickRating3"
            />
            <div
                :style="stylesRating4"
                :class="classesRating4"
                @click="clickRating4"
            />
            <div
                :style="stylesRating5"
                :class="classesRating5"
                @click="clickRating5"
            />
        </div>
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, ref, toRefs, watch, onBeforeUnmount  } from 'vue';

    //Store imports
    import { useAppStore } from '../../../stores/AppStore.js';
    import { useRating } from '../../../stores/RatingStore.js';
    import { useTagIcon } from '../../../stores/TagIconStore.js';
    import { useTagText } from '../../../stores/TagTextStore.js';

    //Components imports
    import TagIcon from '../../tags/icon/TagIcon.vue';
    import TagText from '../../tags/text/TagText.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const ratingStore = useRating();
    const tagIconStore = useTagIcon();
    const tagTextStore = useTagText();

    //Actions store
    const { getText } = appStore;
    const { getRating, toggleNoRating } = ratingStore;
    const { getStandardTagIcon, getTagIcon, createTagIcon, updateTagIcon, deleteTagIcon } = tagIconStore;
    const { getStandardTagText, getTagText, createTagText, updateTagText, deleteTagText } = tagTextStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        name: nameStore,
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        rating: ratingInStore,
        noRating: noRatingStore,
        isOnlyRead: isOnlyReadStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getRating(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const name = computed(() => nameStore.value);
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const rating = computed(() => ratingInStore.value);
    const noRating = computed(() => noRatingStore.value);
    const isOnlyRead = computed(() => isOnlyReadStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    const text = computed(() => getText('TagText', 'studying'));


    //Create childrens
    const idTagIcon = ref(null);

    idTagIcon.value = createTagIcon({
        ...getStandardTagIcon(name.value),
        isOnlyRead: true,
        isDisabled: isDisabled.value,
    });

    watch([
        name,
        isDisabled
    ], () => {
        updateIcon(idIconLeft.value, {
            isDisabled: isDisabled.value,
        });
    });
    
    const idTagText = ref(null);

    idTagText.value = createTagText({
        ...getStandardTagText('studying'),
        isOnlyRead: true,
        isDisabled: isDisabled.value,
    });

    watch([
        text,
        isDisabled
    ], () => {
        updateTagText(idTagText.value, {
            text: text.value,
            isDisabled: isDisabled.value,
        });
    });

    //Delete childrens when component unmounts
    onBeforeUnmount(() => {
        if (idTagIcon.value) {
            deleteTagIcon(idTagIcon.value);
        }
        if (idTagText.value) {
            deleteTagText(idTagText.value);
        }
    });

    //Actions
    const clickRating1 = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            if (rating.value === 1) {
                click.value(0);
            }
            else {
                click.value(1);
            }
        }
    };

    const clickRating2 = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            if (rating.value === 2) {
                click.value(0);
            }
            else {
                click.value(2);
            }
        }
    };

    const clickRating3 = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            if (rating.value === 3) {
                click.value(0);
            }
            else {
                click.value(3);
            }
        }
    };

    const clickRating4 = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            if (rating.value === 4) {
                click.value(0);
            }
            else {
                click.value(4);
            }
        }
    };

    const clickRating5 = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            if (rating.value === 5) {
                click.value(0);
            }
            else {
                click.value(5);
            }
        }
    };

    const clickTagIcon = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            toggleNoRating(id);
        }
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;

        return classes;
    });

    const classesTagIcon = computed(() => {
        const classes= {};

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const classesRating = computed(() => {
        const classes= {};

        classes['ratings'] = true;

        return classes;
    });

    const classesRating1 = computed(() => {
        const classes= {};

        classes['rate'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const stylesRating1 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                styles.borderColor = colorShapeDark.value;

                if (rating.value >= 1) {
                    styles.backgroundColor = colorShapeDark.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
            else {
                styles.backgroundColor = colorShapeLight.value;

                if (rating.value >= 1) {
                    styles.backgroundColor = colorShapeLight.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
        }
        else {
            styles.borderColor = 'var(--general-neutral-white-light)';

            if (rating.value >= 1) {
                styles.backgroundColor = 'var(--general-neutral-300-light)';
            }
            else {
                styles.backgroundColor = 'transparent';
            }
        }

        return styles;
    });

    const classesRating2 = computed(() => {
        const classes= {};

        classes['rate'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const stylesRating2 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                styles.borderColor = colorShapeDark.value;

                if (rating.value >= 2) {
                    styles.backgroundColor = colorShapeDark.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
            else {
                styles.backgroundColor = colorShapeLight.value;

                if (rating.value >= 2) {
                    styles.backgroundColor = colorShapeLight.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
        }
        else {
            styles.borderColor = 'var(--general-neutral-white-light)';

            if (rating.value >= 2) {
                styles.backgroundColor = 'var(--general-neutral-300-light)';
            }
            else {
                styles.backgroundColor = 'transparent';
            }
        }

        return styles;
    });

    const classesRating3 = computed(() => {
        const classes= {};

        classes['rate'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const stylesRating3 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                styles.borderColor = colorShapeDark.value;

                if (rating.value >= 3) {
                    styles.backgroundColor = colorShapeDark.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
            else {
                styles.backgroundColor = colorShapeLight.value;

                if (rating.value >= 3) {
                    styles.backgroundColor = colorShapeLight.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
        }
        else {
            styles.borderColor = 'var(--general-neutral-white-light)';

            if (rating.value >= 3) {
                styles.backgroundColor = 'var(--general-neutral-300-light)';
            }
            else {
                styles.backgroundColor = 'transparent';
            }
        }

        return styles;
    });

    const classesRating4 = computed(() => {
        const classes= {};

        classes['rate'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const stylesRating4 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                styles.borderColor = colorShapeDark.value;

                if (rating.value >= 4) {
                    styles.backgroundColor = colorShapeDark.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
            else {
                styles.backgroundColor = colorShapeLight.value;

                if (rating.value >= 4) {
                    styles.backgroundColor = colorShapeLight.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
        }
        else {
            styles.borderColor = 'var(--general-neutral-white-light)';

            if (rating.value >= 4) {
                styles.backgroundColor = 'var(--general-neutral-300-light)';
            }
            else {
                styles.backgroundColor = 'transparent';
            }
        }

        return styles;
    });

    const classesRating5 = computed(() => {
        const classes= {};

        classes['rate'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const stylesRating5 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (isDark.value) {
                styles.borderColor = colorShapeDark.value;

                if (rating.value >= 5) {
                    styles.backgroundColor = colorShapeDark.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
            else {
                styles.backgroundColor = colorShapeLight.value;

                if (rating.value >= 5) {
                    styles.backgroundColor = colorShapeLight.value;
                }
                else {
                    styles.backgroundColor = 'transparent';
                }
            }
        }
        else {
            styles.borderColor = 'var(--general-neutral-white-light)';

            if (rating.value >= 5) {
                styles.backgroundColor = 'var(--general-neutral-300-light)';
            }
            else {
                styles.backgroundColor = 'transparent';
            }
        }

        return styles;
    });
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        width: 12rem;
        align-items: center;
        gap: 0.4rem;
    }

    .fixed-width-icon {
        width: auto;
        flex: 0 0 auto;
    }

    .ratings {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1 0 0;
    }

    .rate {
        width: 1.2rem;
        height: 0.6rem;
        border-radius: 5rem;
        border: 0.1rem solid;
        margin-left: 0.2rem;
    }

    .isClickable {
        cursor: pointer;
    }
</style>