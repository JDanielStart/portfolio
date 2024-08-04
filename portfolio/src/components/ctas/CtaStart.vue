<template>
    <div
        :class="classes"
    >
        <div
            :class="classesText"
        >
            <div
                :style="stylesTitle"
                :class="classesTitle"
                tabindex="0"
            >
                {{ title }}
            </div>
            <div
                :style="stylesDescription"
                :class="classesDescription"
                tabindex="0"
            >
                {{ description }}
            </div>
        </div>
        <ButtonRoundFill
            :state="{id: idButtonRoundFill}"
            :class="animationButton"
        />
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, toRefs } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useCtaStart } from '../../stores/CtaStartStore.js';

    //Components imports
    import ButtonRoundFill from '../buttons/ButtonRoundFill.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        }
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore()
    const ctaStartStore = useCtaStart();

    //Actions store
    const { getText } = appStore;
    const { getCtaStart } = ctaStartStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        idButtonRoundFill: idButtonRoundFillStore,
        colorTextTitleLight: colorTextTitleLightStore,
        colorTextTitleDark: colorTextTitleDarkStore,
        colorTextDescriptionLight: colorTextDescriptionLightStore,
        colorTextDescriptionDark: colorTextDescriptionDarkStore,
    } = toRefs(getCtaStart(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const idButtonRoundFill = computed(() => idButtonRoundFillStore.value);
    const colorTextTitleLight = computed(() => colorTextTitleLightStore.value);
    const colorTextTitleDark = computed(() => colorTextTitleDarkStore.value);
    const colorTextDescriptionLight = computed(() => colorTextDescriptionLightStore.value);
    const colorTextDescriptionDark = computed(() => colorTextDescriptionDarkStore.value);

    const title = computed(() => getText('CtaStart', 'title'));
    const description = computed(() => getText('CtaStart', 'description'));

    //Actions

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;

        return classes;
    });

    const classesText = computed(() => {
        const classes= {};

        classes['shape-text'] = true;

        return classes;
    });

    const classesTitle = computed(() => {
        const classes= {};

        classes['title'] = true;

        return classes;
    });

    const stylesTitle = computed(() => {
        const styles = {};

        if (isDark.value) {
            styles.color = colorTextTitleDark.value;
        }
        else {
            styles.color = colorTextTitleLight.value;
        }

        return styles;
    });

    const classesDescription = computed(() => {
        const classes= {};

        classes['description'] = true;
        
        return classes;
    });

    const stylesDescription = computed(() => {
        const styles = {};

        if (isDark.value) {
            styles.color = colorTextDescriptionDark.value;
        }
        else {
            styles.color = colorTextDescriptionLight.value;
        }

        return styles;
    });

    const animationButton = computed(() => {
        const classes= {};

        classes['buttonCTA'] = true;
        classes['animationButton'] = true;

        return classes;
    });
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        max-width: 60rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
    }

    .shape-text {
        display: flex;
        padding: 1.2rem 0.8rem;
        flex-direction: column;
        gap: 2.4rem;
    }

    .title {
        text-align: center;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-21);
        line-height: 2.4rem;
    }

    .description {
        text-align: center;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-21);
        line-height: 2.4rem;
    }

    /* Animation */
    .animationButton {
        opacity: 0;
        animation:
            invisibility 2s ease-in-out 4.5s forwards,
            float 4s ease-in-out 4.5s infinite,
            glow 1.5s ease-in-out 5s infinite;
    }

    @keyframes float {
        0% {
            text-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
        50% {
            text-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translatey(-5px);
        }
        100% {
            text-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
    }

    @keyframes invisibility {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes glow {
        0% {
          box-shadow: 0 0 1px #3CB371, 0 0 1px #3CB371 , 0 0 2px #3CB371, 0 0 4px #3CB371, 0 0 8px #3CB371, 0 0 16px #3CB371;
        }
        50% {
          box-shadow: 0 0 2px #3CB371, 0 0 2px #3CB371, 0 0 4px #3CB371, 0 0 8px #3CB371, 0 0 16px #3CB371, 0 0 32px #3CB371;
        }
        100% {
          box-shadow: 0 0 1px #3CB371, 0 0 1px #3CB371, 0 0 2px #3CB371, 0 0 4px #3CB371, 0 0 8px #3CB371, 0 0 16px #3CB371;
        }
    }
</style>