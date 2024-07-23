<template>
    <div
        :class="classes"
        @focusin="focusIn"
        @focusout="focusOut"
        tabindex="0"
    >
        <div
            :class="icons"
        >
            <Icon :state="{ id: idIconLeft }"/>
            <Icon :state="{ id: idIconRight }"/>
        </div>
        <img
            :class="image"
            :src="urlImage"
            :alt="altImage"
        >
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
    const { isDarkMode } = storeToRefs(appStore);

    const {
        name: nameStore,
        urlImageEnglish: urlImageEnglishStore,
        urlImageFrench: urlImageFrenchStore,
        urlImageSpanish: urlImageSpanishStore,
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
    const colorShapeLight = ref(colorShapeLightStore.value);
    const colorShapeDark = ref(colorShapeDarkStore.value);
    const isOnlyRead = ref(isOnlyReadStore.value);
    const isDisabled = ref(isDisabledStore.value);

    const isFocused = ref(false);

    const urlImage = computed(() => {
        if (appStore.languageMode === 'en') {
            return urlImageEnglish.value;
        } else if (appStore.languageMode === 'fr') {
            return urlImageFrench.value;
        } else if (appStore.languageMode === 'es') {
            return urlImageSpanish.value;
        }
    });

    const altImage = computed(() => {
        return name.value;
    });

    //Create childrens
    const idIconLeft = ref(null);

    idIconLeft.value = createIcon({
        ...getStandardIcon('PDF'),
        colorLight: colorShapeLight.value,
        colorDark: colorShapeDark.value,
        isOnlyRead: false,
        isDisabled: isDisabled.value,
        click: async () => {
            try {
                const response = await fetch(urlImage.value);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'imagen.jpg';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log('Imagen descargada exitosamente');
            } catch (error) {
                console.error('Error al descargar la imagen:', error);
            }
        }
    });

    watch([
        colorShapeLight,
        colorShapeDark,
        isDisabled
    ], () => {
        updateIcon(idIconLeft.value, {
            colorLight: colorShapeLight.value,
            colorDark: colorShapeDark.value,
            isDisabled: isDisabled.value,
        });
    });

    const idIconRight = ref(null);

    idIconRight.value = createIcon({
        ...getStandardIcon('Share'),
        colorLight: colorShapeLight.value,
        colorDark: colorShapeDark.value,
        isOnlyRead: false,
        isDisabled: isDisabled.value,
        click: async () => {
            if (navigator.canShare && navigator.canShare({ files: [new File([], '')] })) {
                // Caso 1: Compartir el archivo de imagen
                try {
                    const response = await fetch(urlImage.value);
                    const blob = await response.blob();
                    const file = new File([blob], 'imagen.jpg', { type: blob.type });

                    await navigator.share({
                        title: 'Compartir imagen',
                        text: 'Mira esta imagen',
                        files: [file]
                    });
                    console.log('Imagen compartida exitosamente');
                } catch (error) {
                    console.error('Error al compartir la imagen:', error);
                }
            } else if (navigator.share) {
                // Caso 2: Compartir la URL de la imagen
                try {
                    await navigator.share({
                        title: 'Compartir imagen',
                        text: 'Mira esta imagen',
                        url: urlImage.value
                    });
                    console.log('URL de la imagen compartida exitosamente');
                } catch (error) {
                    console.error('Error al compartir la URL de la imagen:', error);
                }
            } else {
                // Caso 3: Copiar la URL de la imagen al portapapeles
                try {
                    await navigator.clipboard.writeText(urlImage.value);
                    console.log('URL de la imagen copiada al portapapeles');
                    alert('La URL de la imagen ha sido copiada al portapapeles');
                } catch (error) {
                    console.error('Error al copiar la URL al portapapeles:', error);
                }
            }
        },
        });

    watch([
        colorShapeLight,
        colorShapeDark,
        isDisabled
    ], () => {
        updateIcon(idIconRight.value, {
            colorLight: colorShapeLight.value,
            colorDark: colorShapeDark.value,
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
    const focusIn = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            isFocused.value = true;
        }
    };

    const focusOut = () => {
        if (!isDisabled.value && !isOnlyRead.value) {
            isFocused.value = false;
        }
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

        classes['shape'] = true;

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
        display: flex;
        max-width: 29.7rem;
        max-height: 21rem;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .icons {
        max-width: 29.7rem;
        max-height: 21rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 1.2rem;
        flex: 1 0 0;
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