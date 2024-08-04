<template>
    <div>
        <div
            :class="classes"
            @focusin="focusIn"
            @focusout="focusOut"
            tabindex="0"
            ref="containerCredential"
        >
            <div
                :class="icons"
                tabindex="0"
            >
                <Icon
                    :state="{ id: idIconDownload }"
                    @click="click"
                    @keydown.enter="click"
                    tabindex="0"
                />
                <Icon
                    :state="{ id: idIconShare }"
                    @click="click"
                    @keydown.enter="click"
                    tabindex="0"
                />
                <Icon
                    :state="{ id: idIconOpen }"
                    @click="click"
                    @keydown.enter="click"
                    tabindex="0"
                />
            </div>
            <img
                :class="image"
                :src="urlImage"
                :alt="altImage"
            >
        </div>
    </div>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, ref, toRefs, watch, onBeforeUnmount  } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useCredential } from '../../stores/CredentialStore.js';
    import { useIcon } from '../../stores/IconStore.js';

    //Components imports
    import Icon from '../icons/Icon.vue';

    //Props
    const props = defineProps({
        state: {
            type: Object
        },
    });

    const { id } = props.state;

    //Stores
    const appStore = useAppStore();
    const credentialStore = useCredential();
    const iconStore = useIcon();

    //Actions store
    const { getCredential } = credentialStore;
    const { createIcon, updateIcon, deleteIcon, getStandardIcon } = iconStore;

    //States store
    const { languageMode, isDarkMode } = storeToRefs(appStore);

    const {
        name: nameStore,
        urlImageEnglish: urlImageEnglishStore,
        urlImageFrench: urlImageFrenchStore,
        urlImageSpanish: urlImageSpanishStore,
        urlPDFSpanish: urlPDFSpanishStore,
        urlPDFEnglish: urlPDFEnglishStore,
        urlPDFFrench: urlPDFFrenchStore,
        urlImageEnglishDark: urlImageEnglishDarkStore,
        urlImageFrenchDark: urlImageFrenchDarkStore,
        urlImageSpanishDark: urlImageSpanishDarkStore,
        urlPDFEnglishDark: urlPDFEnglishDarkStore,
        urlPDFFrenchDark: urlPDFFrenchDarkStore,
        urlPDFSpanishDark: urlPDFSpanishDarkStore,
        colorShapeLight: colorShapeLightStore,
        colorShapeDark: colorShapeDarkStore,
        isOnlyRead: isOnlyReadStore,
        isDisabled: isDisabledStore,
    } = toRefs(getCredential(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const name = ref(nameStore.value);
    const urlImageEnglish = ref(urlImageEnglishStore.value);
    const urlImageFrench = ref(urlImageFrenchStore.value);
    const urlImageSpanish = ref(urlImageSpanishStore.value);
    const urlPDFSpanish = ref(urlPDFSpanishStore.value);
    const urlPDFEnglish = ref(urlPDFEnglishStore.value);
    const urlPDFFrench = ref(urlPDFFrenchStore.value);
    const urlImageEnglishDark = ref(urlImageEnglishDarkStore.value);
    const urlImageFrenchDark = ref(urlImageFrenchDarkStore.value);
    const urlImageSpanishDark = ref(urlImageSpanishDarkStore.value);
    const urlPDFEnglishDark = ref(urlPDFEnglishDarkStore.value);
    const urlPDFFrenchDark = ref(urlPDFFrenchDarkStore.value);
    const urlPDFSpanishDark = ref(urlPDFSpanishDarkStore.value);
    const colorShapeLight = ref(colorShapeLightStore.value);
    const colorShapeDark = ref(colorShapeDarkStore.value);
    const isOnlyRead = ref(isOnlyReadStore.value);
    const isDisabled = ref(isDisabledStore.value);

    const isFocused = ref(false);
    const containerCredential = ref(null);

    const urlImage = computed(() => {
        if (!isDark.value) {
            if (languageMode.value === 'en') {
                return urlImageEnglish.value;
            } else if (languageMode.value === 'fr') {
                return urlImageFrench.value;
            } else if (languageMode.value === 'es') {
                return urlImageSpanish.value;
            }
        }
        else {
            if (languageMode.value === 'en') {
                return urlImageEnglishDark.value;
            } else if (languageMode.value === 'fr') {
                return urlImageFrenchDark.value;
            } else if (languageMode.value === 'es') {
                return urlImageSpanishDark.value;
            }
        }
    });

    const urlPDF = computed(() => {
        if (!isDark.value) {
            if (languageMode.value === 'en') {
                return urlPDFEnglish.value;
            } else if (languageMode.value === 'fr') {
                return urlPDFFrench.value;
            } else if (languageMode.value === 'es') {
                return urlPDFSpanish.value;
            }
        }
        else {
            if (languageMode.value === 'en') {
                return urlPDFEnglishDark.value;
            } else if (languageMode.value === 'fr') {
                return urlPDFFrenchDark.value;
            } else if (languageMode.value === 'es') {
                return urlPDFSpanishDark.value;
            }
        }
    });

    const altImage = computed(() => {
        return name.value;
    });

    //Create childrens
    const idIconOpen = ref(null);

    idIconOpen.value = createIcon({
        ...getStandardIcon('Open2'),
        colorLight: colorShapeLight.value,
        colorDark: colorShapeDark.value,
        isOnlyRead: false,
        isDisabled: isDisabled.value,
        click: () => {
            window.open(urlPDF.value, '_blank');
        }
    });

    watch([
        colorShapeLight,
        colorShapeDark,
        isDisabled
    ], () => {
        updateIcon(idIconOpen.value, {
            colorLight: colorShapeLight.value,
            colorDark: colorShapeDark.value,
            isDisabled: isDisabled.value,
        });
    });

    const idIconDownload = ref(null);

    idIconDownload.value = createIcon({
        ...getStandardIcon('PDF'),
        colorLight: colorShapeLight.value,
        colorDark: colorShapeDark.value,
        isOnlyRead: false,
        isDisabled: isDisabled.value,
        click: async () => {
            try {
                const response = await fetch(urlPDF.value);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `${name.value}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log('Download the PDF successfully');
            } catch (error) {
                console.error('Error to download PDF', error);
            }
        }
    });

    watch([
        colorShapeLight,
        colorShapeDark,
        isDisabled
    ], () => {
        updateIcon(idIconDownload.value, {
            colorLight: colorShapeLight.value,
            colorDark: colorShapeDark.value,
            isDisabled: isDisabled.value,
        });
    });

    const idIconShare = ref(null);

    idIconShare.value = createIcon({
        ...getStandardIcon('Share'),
        colorLight: colorShapeLight.value,
        colorDark: colorShapeDark.value,
        isOnlyRead: false,
        isDisabled: isDisabled.value,
        click: async () => {
            console.log('Share button clicked');
            try {
                const shareData = {
                    title: 'Download PDF',
                    text: `Download the PDF of ${name.value}`,
                    url: urlPDF.value,
                };
                if (navigator.canShare && navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                    console.log('Link shared successfully');
                } else {
                    console.log('Your browser does not support sharing links. Copying to clipboard instead.');
                    await navigator.clipboard.writeText(shareData.url);
                    console.log('Link copied to clipboard');
                }
            } catch (error) {
                console.log('Error to share link', error);
            }
        }
    });

    watch([
        colorShapeLight,
        colorShapeDark,
        isDisabled
    ], () => {
        updateIcon(idIconShare.value, {
            colorLight: colorShapeLight.value,
            colorDark: colorShapeDark.value,
            isDisabled: isDisabled.value,
        });
    });

    //Delete childrens when component unmounts
    onBeforeUnmount(() => {
        if (idIconOpen .value) {
            deleteIcon(idIconOpen.value);
        }
        if (idIconDownload.value) {
            deleteIcon(idIconDownload.value);
        }
        if (idIconShare.value) {
            deleteIcon(idIconShare.value);
        }
    });

    //Actions
    const click = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            isFocused.value = false;
        }
    };

    const focusIn = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            isFocused.value = true;
        }
    };

    const focusOut = () => {
        setTimeout(() => {
            if (
                containerCredential.value
                &&
                !containerCredential.value.contains(document.activeElement)
            ) {
                isFocused.value = false;
            }
        }, 0);
    };

    //Change styles
    const classes = computed(() => {
        const classes= {};

        classes['shape'] = true;

        return classes;
    });

    const icons = computed(() => {
        const classes= {};

        classes['icons'] = true;

        if (isFocused.value) {
            classes['isVisible'] = true;
        } else {
            classes['isHidden'] = true;
        }

        return classes;
    });

    const image = computed(() => {
        const classes= {};

        classes['image'] = true;

        if (!isDisabled.value && !isOnlyRead.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });
</script>

<style scoped>
    /* Component style */
    .shape {
        max-width: 29.7rem;
        max-height: 21rem;
    }

    .image {
        width: 100%;
        height: 100%;
    }

    .icons {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 1.2rem;
    }

    .isClickable {
        cursor: pointer;
    }

    .isVisible {
        visibility: visible;
    }

    .isHidden {
        visibility: hidden;
    }
</style>