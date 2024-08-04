<template>
    <div
        :class="classes"
        :style="styles"
    >
        <div
            :class="classesHero"
        >
            <div
                :class="classesContent"
            >
                <img
                    :class="classesImg"
                    :src="urlImg"
                    :alt="altText"
                />
                <div
                    :class="classesText"
                >
                    <h1
                        :style="stylesTitle"
                        :class="classesTitle"
                        tabindex="0"
                    >
                        {{ textTitle }}
                    </h1>
                    <div
                        :class="classesSubcontent"
                    >
                        <h2
                            :style="stylesSubtitle"
                            :class="classesSubtitle"
                            tabindex="0"
                        >
                            {{ textSubtitle }}
                        </h2>
                        <Switch
                            :state="{ id: idSwitch }"
                            :class="animationSwitch"
                        />
                    </div>
                </div>
            </div>
            <div
                :class="classesIcons"
            >
                <Icon :state="{ id: 'Github' }"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21" fill="none">
                    <g clip-path="url(#clip0_1430_15394)">
                      <path d="M3.37386 20.5C5.21386 20.5 6.70719 19.0067 6.70719 17.1667V13.8334H3.37386C1.53386 13.8334 0.0405273 15.3267 0.0405273 17.1667C0.0405273 19.0067 1.53386 20.5 3.37386 20.5Z" fill="#0ACF83"/>
                      <path d="M0.0405273 10.5C0.0405273 8.65996 1.53386 7.16663 3.37386 7.16663H6.70719V13.8333H3.37386C1.53386 13.8333 0.0405273 12.34 0.0405273 10.5Z" fill="#A259FF"/>
                      <path d="M0.0405273 3.83333C0.0405273 1.99333 1.53386 0.5 3.37386 0.5H6.70719V7.16667H3.37386C1.53386 7.16667 0.0405273 5.67333 0.0405273 3.83333Z" fill="#F24E1E"/>
                      <path d="M6.70715 0.5H10.0405C11.8805 0.5 13.3738 1.99333 13.3738 3.83333C13.3738 5.67333 11.8805 7.16667 10.0405 7.16667H6.70715V0.5Z" fill="#FF7262"/>
                      <path d="M13.3738 10.5C13.3738 12.34 11.8805 13.8333 10.0405 13.8333C8.20049 13.8333 6.70715 12.34 6.70715 10.5C6.70715 8.65996 8.20049 7.16663 10.0405 7.16663C11.8805 7.16663 13.3738 8.65996 13.3738 10.5Z" fill="#1ABCFE"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1430_15394">
                        <rect width="13.3375" height="20" fill="white" transform="translate(0.0384521 0.5)"/>
                      </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <g clip-path="url(#clip0_1430_15400)">
                      <path d="M18.9108 0.5H23.5443L11.9605 20.4819L0.376831 0.5H9.23837L11.9605 5.13348L14.6248 0.5H18.9108Z" fill="#41B883"/>
                      <path d="M0.376831 0.5L11.9605 20.4819L23.5443 0.5H18.9108L11.9605 12.4891L4.9524 0.5H0.376831Z" fill="#41B883"/>
                      <path d="M4.95215 0.5L11.9603 12.5471L18.9105 0.5H14.6245L11.9603 5.13348L9.23812 0.5H4.95215Z" fill="#35495E"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1430_15400">
                        <rect width="23.1688" height="20" fill="white" transform="translate(0.375977 0.5)"/>
                      </clipPath>
                    </defs>
                </svg>
            </div>
            <div
                :class="classesNavigation"
            >
                <Navigation :state="{ id: idNavigation }"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, toRefs } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useHero } from '../../stores/HeroStore.js';

    //Components imports
    import Switch from '../buttons/Switch.vue';
    import Icon from '../icons/Icon.vue';
    import Navigation from '../navigations/Navigation.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const heroStore = useHero();

    //Actions store
    const { getText } = appStore;
    const { getHero } = heroStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        urlImg: urlImgStore,
        textTitle: textTitleStore,
        textSubtitle: textSubtitleStore,
        idSwitch: idSwitchStore,
        idNavigation: idNavigationStore,
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        colorTextTitleLight: colorTextTitleLightStore,
        colorTextTitleDark: colorTextTitleDarkStore,
        colorTextSubtitleLight: colorTextSubtitleLightStore,
        colorTextSubtitleDark: colorTextSubtitleDarkStore,
        isDisabled: isDisabledStore,
    } = toRefs(getHero(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const urlImg = computed(() => urlImgStore.value);
    const textTitle = computed(() => textTitleStore.value);
    const textSubtitle = computed(() => textSubtitleStore.value);
    const idSwitch = computed(() => idSwitchStore.value);
    const idNavigation = computed(() => idNavigationStore.value);
    const colorShapeLight = computed(() => colorShapeLightStore.value);
    const colorShapeDark = computed(() => colorShapeDarkStore.value);
    const colorTextTitleLight = computed(() => colorTextTitleLightStore.value);
    const colorTextTitleDark = computed(() => colorTextTitleDarkStore.value);
    const colorTextSubtitleLight = computed(() => colorTextSubtitleLightStore.value);
    const colorTextSubtitleDark = computed(() => colorTextSubtitleDarkStore.value);
    const isDisabled = computed(() => isDisabledStore.value);

    const altText = computed(() => getText('Hero', 'alt'));

    //Create childrens

    //Delete childrens when component unmounts

    //Actions

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape-hero'] = true;
        classes['animation-shape'] = true;

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

    const classesHero = computed(() => {
        const classes= {};

        classes['hero'] = true;

        return classes;
    });

    const classesContent = computed(() => {
        const classes= {};

        classes['content'] = true;

        return classes;
    });

    const classesImg = computed(() => {
        const classes= {};

        classes['img-hero'] = true;
        classes['animation-img'] = true;

        return classes;
    });

    const classesText = computed(() => {
        const classes= {};

        classes['text'] = true;

        return classes;
    });
    
    const classesTitle = computed(() => {
        const classes= {};

        classes['title'] = true;
        classes['animation-title'] = true;

        return classes;
    });

    const stylesTitle = computed(() => {
        const styles = {};

        if(!isDisabled.value) {
            if(isDark.value) {
                styles.color = colorTextTitleDark.value;
            }
            else {
                styles.color = colorTextTitleLight.value;
            }
        }
        else {
            styles.color = 'var(--general-neutral-300-light)';
        }

        return styles;
    });

    const classesSubcontent = computed(() => {
        const classes= {};

        classes['subcontent'] = true;

        return classes;
    });

    const classesSubtitle = computed(() => {
        const classes= {};

        classes['subtitle'] = true;
        classes['animation-subtitle'] = true;

        return classes;
    });

    const stylesSubtitle = computed(() => {
        const styles = {};

        if(!isDisabled.value) {
            if(isDark.value) {
                styles.color = colorTextSubtitleDark.value;
            }
            else {
                styles.color = colorTextSubtitleLight.value;
            }
        }
        else {
            styles.color = 'var(--general-neutral-300-light)';
        }

        return styles;
    });

    const classesIcons = computed(() => {
        const classes= {};

        classes['icons'] = true;
        classes['animation-icons'] = true;

        return classes;
    });

    const classesNavigation = computed(() => {
        const classes= {};

        classes['navigation'] = true;
        classes['animation-navigation'] = true;

        return classes;
    });

    const animationSwitch = computed(() => {
        const classes= {};

        classes['animation-switch'] = true;

        return classes;
    });

</script>

<style scoped>
    /* Component style */
    .shape-hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 2.4rem;
        top: 0;
        border-radius: 0rem 0rem 10rem 0rem;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px -1px 4.6px 0px #FDFDFD;
    }

    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        align-self: stretch;
        flex-wrap: wrap;
        gap: 0.4rem;
        padding: 2.4rem;
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .img-hero {
        width: 11.1rem;
        height: 10rem;
        -webkit-user-select: none;
        user-select: none;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .title {
        text-align: center;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-55);
        line-height: 0%;
    }

    .subcontent {
        display: flex;
        align-items: center;
        height: 1.7rem;
        gap: 0.4rem;
    }

    .subtitle {
        font-family: var(--font-family-body);
        font-size: var(--font-size-21);
        font-weight: var(--font-weight-600);
        line-height: 0%;
    }

    .icons {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        gap: 1.2rem;
    }

    .navigation {
        display: flex;
        justify-content: center;
        margin-top: 2.4rem;
        width: 100%;
    }

    @media (max-width: 501px) {
        .icons {
            min-width: 24rem;
        }
    }

    @media (max-width: 744px) {
        .img-hero {
            width: 8.3rem;
            height: 7.5rem;
        }

        .title {
            font-size: var(--font-size-34);
        }

        .subtitle {
            font-size: var(--font-size-13);
        }
    }

    /* Animation */
    .animation-shape {
        opacity: 0;
        animation: slideInFromLeft 0.5s ease-out forwards;
    }

    .animation-title {
        opacity: 0;
        animation: text-focus-in 1.5s ease-in-out forwards;
    }

    .animation-subtitle {
        opacity: 0;
        animation: text-focus-in 1.5s ease-in-out 0.5s forwards;
    }
    .animation-switch {
        opacity: 0;
        animation:
            invisibility 1s ease-in-out 1.5s forwards,
            jello-horizontal 1s ease-in-out 1.5s forwards;
    }

    .animation-navigation {
        opacity: 0;
        animation: scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    }

    .animation-img {
        opacity: 0;
        animation: invisibility 1s ease-in-out 3s forwards;
    }

    .animation-icons {
        opacity: 0;
        animation: slideInFromLeft 1s ease-out 3s forwards;
    }

    @keyframes invisibility {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes text-focus-in {
        0% {
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            filter: blur(0px);
            opacity: 1;
        }
    }

    @keyframes jello-horizontal {
        0% {
            transform: scale3d(1, 1, 1);
        }
        30% {
            transform: scale3d(1.25, 0.75, 1);
        }
        40% {
            transform: scale3d(0.75, 1.25, 1);
        }
        50% {
            transform: scale3d(1.15, 0.85, 1);
        }
        65% {
            transform: scale3d(0.95, 1.05, 1);
        }
        75% {
            transform: scale3d(1.05, 0.95, 1);
        }
        100% {
            transform: scale3d(1, 1, 1);
        }
      }

    @keyframes scale-in-center {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>