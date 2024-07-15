<template>
    <figure
        :style="styles"
        :class="classesFigure"
    >
        <div
            :class="opacity"
        >
            <img
                :src="srcImg"
                :alt="textTitle"
                :class="classesImg"
                @click="clickImg"
            />
        </div>
        <figcaption
        >
            <section>
                <h2
                    :class="classesTitle"
                >
                {{ textTitle }}
                </h2>
                <h3
                    :class="classesDescription"
                >
                    {{ textDescription }}
                </h3>
            </section>
            <section
                :class="classesTechnology"
            >
                <GroupTagText
                    :class="classesContainer"
                    :state="{ id: idGroupTagText }"
                />
                <GroupTagIcon
                    :class="classesContainerIcons"
                    :state="{ id: idGroupTagIcon }"
                />
            </section>
        </figcaption>
        <ButtonsCard
            :state="{ id: idGroupButtonCard }"
        />
    </figure>

</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, toRefs  } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useTagIcon } from '../../stores/TagIconStore.js';
    import { useTagText } from '../../stores/TagTextStore.js';
    import { useGroupTagIcon } from '../../stores/GroupTagIconStore.js';
    import { useGroupTagText } from '../../stores/GroupTagTextStore.js';
    import { useButtonCardWhiteboard } from '../../stores/ButtonCardWhiteboardStore.js';
    import { useButtonCardFigma } from '../../stores/ButtonCardFigmaStore.js';
    import { useButtonCardGithub } from '../../stores/ButtonCardGithubStore.js';
    import { useGroupButtonCard } from '../../stores/GroupButtonCardStore.js';
    import { useCardProject } from '../../stores/CardProjectStore.js';

    //Components imports
    import GroupTagText from '../groupTags/text/GroupTagText.vue';
    import GroupTagIcon from '../groupTags/icon/GroupTagIcon.vue';
    import ButtonsCard from '../groupButtons/GroupButtonCard.vue';

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
    const tagTextStore = useTagText();
    const groupTagIconStore = useGroupTagIcon();
    const groupTagTextStore = useGroupTagText();
    const buttonCardWhiteboardStore = useButtonCardWhiteboard();
    const buttonCardFigmaStore = useButtonCardFigma();
    const buttonCardGithubStore = useButtonCardGithub();
    const groupButtonCardStore = useGroupButtonCard();
    const cardProjectStore = useCardProject();

    //Actions store
    const { getText } = appStore;
    const { updateTagIcon } = tagIconStore;
    const { updateTagText } = tagTextStore;
    const { getGroupTagIcon } = groupTagIconStore;
    const { getGroupTagText } = groupTagTextStore;
    const { updateButtonCardWhiteboard } = buttonCardWhiteboardStore;
    const { updateButtonCardFigma } = buttonCardFigmaStore;
    const { updateButtonCardGithub } = buttonCardGithubStore;
    const { getGroupButtonCard } = groupButtonCardStore;
    const { getCardProject } = cardProjectStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        srcImg: srcImgStore,
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorTextLight: colorTextLightStore,
        colorTextDark: colorTextDarkStore,
        title: titleStore,
        idGroupTagText: idGroupTagTextStore,
        idGroupTagIcon: idGroupTagIconStore,
        idGroupButtonCard: idGroupButtonCardStore,
        isDisabled: isDisabledStore,
        click: clickStore,
    } = toRefs(getCardProject(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const srcImg = computed(() => srcImgStore.value);
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorTextLight = computed(() => colorTextLightStore.value);
    const colorTextDark = computed(() => colorTextDarkStore.value);
    const textTitle = computed(() => titleStore.value);
    const idGroupTagText = computed(() => idGroupTagTextStore.value);
    const idGroupTagIcon = computed(() => idGroupTagIconStore.value);
    const idGroupButtonCard = computed(() => idGroupButtonCardStore.value);
    const isDisabled = computed(() => isDisabledStore.value);
    const click = computed(() => clickStore.value);

    const textDescription = computed(() => getText('CardProject', id));

    //Actions
    const clickImg = () => {
        if (!isDisabled.value) {
            click.value();
        }
    };

    //Change styles
    const classesFigure = computed(() => {
        const classes= {};

        classes['figure'] = true;

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

            const { containerGroupTagIcon } = getGroupTagIcon(idGroupTagIcon.value);
            containerGroupTagIcon.forEach(({ id }) => updateTagIcon({ id, isDisabled: true }));

            const { containerGroupTagText } = getGroupTagText(idGroupTagText.value);
            containerGroupTagText.forEach(({ id }) => updateTagText({ id, isDisabled: true }));

            const { idButtonCardWhiteboard } = getGroupButtonCard(idGroupButtonCard.value);
            updateButtonCardWhiteboard({ id: idButtonCardWhiteboard, isDisabled: true });

            const { idButtonCardFigma } = getGroupButtonCard(idGroupButtonCard.value);
            updateButtonCardFigma({ id: idButtonCardFigma, isDisabled: true });

            const { idButtonCardGithub } = getGroupButtonCard(idGroupButtonCard.value);
            updateButtonCardGithub({ id: idButtonCardGithub, isDisabled: true });

        }

        return styles;
    });

    const opacity = computed(() => {
        const opacity = {};

        if (isDisabled.value) {
            opacity['image-overlay'] = true;
        }

        return opacity;
    });

    const classesImg = computed(() => {
        const classesImg = {};

        classesImg['img'] = true;

        if (!isDisabled.value) {
            classesImg['isClickable'] = true;
        }
        else {
            classesImg['image-overlay'] = true;
        }

        return classesImg;
    });

    const classesTitle = computed(() => {
        const classesTitle = {};

        classesTitle['style-text-title'] = true;

        return classesTitle;
    });

    const classesDescription = computed(() => {
        const classesDescription = {};

        classesDescription['style-text-description'] = true;

        return classesDescription;
    });

    const classesTechnology = computed(() => {
        const technology = {};

        technology['technology'] = true;

        return technology;
    });

    const classesContainer = computed(() => {
        const classesContainer = {};

        classesContainer['container'] = true;

        return classesContainer;
    });

    const classesContainerIcons = computed(() => {
        const classesContainerIcons = {};

        classesContainer['container'] = true;
        classesContainerIcons['container-icons'] = true;

        return classesContainerIcons;
    });
</script>

<style scoped>
    /* Component style */
    .figure {
        display: flex;
        width: 30rem;
        flex-direction: column;
        border-radius: 0rem 0rem 1.2rem 1.2rem;
        box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    }

    .img {
        width: 100%;
        height: auto;
        user-select: none;
    }

    .style-text-title {
        display: flex;
        padding: 0 1.2rem;
        justify-content: center;
        text-align: center;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-21);
        line-height: normal;
    }

    .style-text-description {
        display: flex;
        padding: 0 1.2rem;
        margin-top:3.2rem;
        justify-content: center;
        text-align: center;
        font-family: var(--font-family-body);
        font-size: var(--font-size-13);
    }

    .technology {
        display: flex;
        padding: 3.2rem 1.2rem;
        flex-direction: column;
        gap: 2.4rem;
        align-self: stretch;
    }

    .isClickable {
        cursor: pointer;
    }

    .image-overlay {
        position: relative;
        display: inline-block;
    }
    
    .image-overlay img {
        display: block;
        width: 100%;
    }
    
    .image-overlay::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5); /* Blanco con opacidad */
        mix-blend-mode: screen; /* Mezcla los colores */
        pointer-events: none; /* Asegura que la capa sea no interactiva */
    }
</style>