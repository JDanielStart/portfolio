<template>
    <div
        :class="classes"
    >
        <div
            :class="classesCredential"
        >
            <div>
                <Credential :state="{id: idCredential}"/>
            </div>
            <div
                :style="stylesText"
                :class="classesText"
                tabindex="0"
            >
                {{ text }}
            </div>
        </div>
        <div
            :class="classesContactMe"
        >
            <img
                :class="classesImg"
                :src="urlImage"
                :alt="altText"
                @click="clickFunko"
                @keydown.enter="clickFunko"
                tabindex="0"
                ref="funkoElement"
            >
            <ButtonRoundFill
                :state="{id: idButtonRoundFill}"
                :class="animateButton"
            />
        </div>
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, toRefs, ref } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useCtaEnd } from '../../stores/CtaEndStore.js';

    //Components imports
    import ButtonRoundFill from '../buttons/ButtonRoundFill.vue';
    import Credential from '../credentials/Credential.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        }
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore()
    const ctaEndStore = useCtaEnd();

    //Actions store
    const { getText } = appStore;
    const { getCtaEnd } = ctaEndStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        idCredential: idCredentialStore,
        urlImage: urlImageStore,
        idButtonRoundFill: idButtonRoundFillStore,
        colorTextLight: colorTextDescriptionLightStore,
        colorTextDark: colorTextTitleDarkStore,
    } = toRefs(getCtaEnd(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const idCredential = computed(() => idCredentialStore.value);
    const urlImage = computed(() => urlImageStore.value);
    const idButtonRoundFill = computed(() => idButtonRoundFillStore.value);
    const colorTextDescriptionLight = computed(() => colorTextDescriptionLightStore.value);
    const colorTextTitleDark = computed(() => colorTextTitleDarkStore.value);

    const text = computed(() => getText('CtaEnd'));
    const altText = computed(() => getText('CtaEnd', 'alt'));

    const funkoElement = ref(null);

    //Actions
    const clickFunko = () => {
        if (funkoElement.value) {
                funkoElement.value.classList.remove('animate-funko');
                void funkoElement.value.offsetWidth;
                funkoElement.value.classList.add('animate-funko');
        }
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;

        return classes;
    });

    const classesCredential = computed(() => {
        const classes= {};

        classes['credential'] = true;

        return classes;
    });

    const classesContactMe = computed(() => {
        const classes= {};

        classes['contact-me'] = true;

        return classes;
    });

    const classesImg = computed(() => {
        const classes= {};

        classes['img'] = true;
        classes['animate-funko'] = true;

        return classes;
    });

    const classesText = computed(() => {
        const classes= {};

        classes['text'] = true;

        return classes;
    });

    const stylesText = computed(() => {
        const styles = {};

        if (isDark.value) {
            styles.color = colorTextTitleDark.value;
        } else {
            styles.color = colorTextDescriptionLight.value;
        }

        return styles;
    });

    const animateButton = computed(() => {
        const classes = {};

        classes['animate-button'] = true;

        return classes;
    });
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1.8rem;
        flex-wrap: wrap;
    }

    .credential {
        display: flex;
        min-width: 31.2rem;
        max-width: 60rem;
        min-height: 26rem;
        max-height: 80rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20rem;
        flex: 1 0 0;
    }

    .contact-me {
        display: flex;
        min-width: 20rem;
        min-height: 11rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
    }

    .img {
        width: 7.5rem;
        height: 7.5rem;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
    }

    .text {
        text-align: center;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-21);
        line-height: 2.4rem;
    }

    /* Animation */
    .animate-button {
        animation: glow 1.5s ease-in-out infinite;
    }

    .animate-funko {
        animation:
            vibrate 0.3s linear both;
    }
    
    @keyframes vibrate{
        0%{
            transform:translate(0)
        }
        20%{
            transform:translate(-2px,2px)
        }
        40%{
            transform:translate(-2px,-2px)
        }
        60%{
            transform:translate(2px,2px)
        }
        80%{
            transform:translate(2px,-2px)
        }
        100%{
            transform:translate(0)
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