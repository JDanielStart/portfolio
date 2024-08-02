<template>
    <nav
        :class="classesNavigation"
    >
        <a
            :class="classesSection"
            :aria-label="altProfile"
            href="#profile"
        >
            <div
                :style="stylesBar0"
                :class="classesBarStart"
            />
            <div
                :class="classesIcon"
            >
                <Icon :state="{id: idIconProfile}"/>
            </div>
        </a>
        <a
            :class="classesSection"
            :aria-label="altTechnology"
            href="#technology"
        >
            <div
                :style="stylesBar1"
                :class="classesBar"
            />
            <div
                :class="classesIcon"
            >
                <Icon :state="{id: idIconCode}"/>
            </div>
        </a>
        <a
            :class="classesSection"
            :aria-label="altProject"
            href="#project"
        >
            <div
                :style="stylesBar2"
                :class="classesBar"
            />
            <div
                :class="classesIcon"
            >
                <Icon :state="{id: idIconProject}"/>
            </div>
        </a>
        <a
            :class="classesSection"
            :aria-label="altCredential"
            href="#credential"
        >
            <div
                :style="stylesBar3"
                :class="classesBar"
            />
            <div
                :class="classesIcon"
            >
                <Icon :state="{id: idIconCredential}"/>
            </div>
        </a>
        <a
            :class="classesSection"
            :aria-label="altSendEmail"
            href="#sendEmail"
        >
            <div
                :style="stylesBar4"
                :class="classesBarEnd"
            />
            <div
                :class="classesIcon"
            >
                <Icon :state="{id: idIconSendEmail}"/>
            </div>
        </a>
    </nav>
</template>

<script setup>
    //General imports
    import { storeToRefs } from 'pinia';
    import { computed, ref, toRefs, watch, onBeforeUnmount  } from 'vue';

    //Store imports
    import { useAppStore } from '../../stores/AppStore.js';
    import { useNavigation } from '../../stores/NavigationStore.js';
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
    const navigationStore = useNavigation();
    const iconStore = useIcon();

    //Actions store
    const { getText } = appStore;
    const { getNavigation } = navigationStore;
    const { createIcon, updateIcon, deleteIcon, getStandardIcon, changeColor } = iconStore;

    //States store
    const { isDarkMode } = storeToRefs(appStore);

    const {
        selection: selectionStore,
        colorSelectionLight: colorSelectionLightStore,
        colorSelectionDark: colorSelectionDarkStore,
        colorNotSelectionLight: colorNotSelectionLightStore,
        colorNotSelectionDark: colorNotSelectionDarkStore,
        isDisabled: isDisabledStore,
    } = toRefs(getNavigation(id));

    //States
    const isDark = computed(() => isDarkMode.value);

    const selection = computed(() => selectionStore.value);
    const colorSelectionLight = computed(() => colorSelectionLightStore.value);
    const colorSelectionDark = computed(() => colorSelectionDarkStore.value);
    const colorNotSelectionLight = computed(() => colorNotSelectionLightStore.value);
    const colorNotSelectionDark = computed(() => colorNotSelectionDarkStore.value);
    const isDisabled = computed(() => isDisabledStore.value);

    const altProfile = computed(() => getText('Navigation', 'profile'));
    const altTechnology = computed(() => getText('Navigation', 'technology'));
    const altProject = computed(() => getText('Navigation', 'projects'));
    const altCredential = computed(() => getText('Navigation', 'credential'));
    const altSendEmail = computed(() => getText('Navigation', 'sendEmail'));

    //Create childrens
    const idIconProfile = ref(null);

    idIconProfile.value = createIcon({
        ...getStandardIcon('Profile'),
        colorLight: colorSelectionLight.value,
        colorDark: colorSelectionDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        selection,
        isDark,
        colorSelectionLight,
        colorSelectionDark,
        colorNotSelectionLight,
        colorNotSelectionDark,
        isDisabled,
    ], () => {
        if (!isDisabled.value) {
            if (selection.value === 'profile') {
                changeColor(
                    idIconProfile.value, 
                    colorSelectionLight.value,
                    colorSelectionDark.value
                );
            } else {
                changeColor(
                    idIconProfile.value, 
                    colorNotSelectionLight.value,
                    colorNotSelectionDark.value
                );
            }
        }
        else {
            updateIcon({
            id: idIconProfile.value,
            isDisabled: isDisabled.value,
            });
        }
    });

    const idIconCode = ref(null);

    idIconCode.value = createIcon({
        ...getStandardIcon('Code'),
        colorLight: colorNotSelectionLight.value,
        colorDark: colorNotSelectionDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        selection,
        isDark,
        colorSelectionLight,
        colorSelectionDark,
        colorNotSelectionLight,
        colorNotSelectionDark,
        isDisabled,
    ], () => {
        if (!isDisabled.value) {
            if (selection.value === 'technology') {
                changeColor(
                    idIconCode.value, 
                    colorSelectionLight.value,
                    colorSelectionDark.value
                );
            } else {
                changeColor(
                    idIconCode.value, 
                    colorNotSelectionLight.value,
                    colorNotSelectionDark.value
                );
            }
        }
        else {
            updateIcon({
            id: idIconCode.value,
            isDisabled: isDisabled.value,
            });
        }
    });

    const idIconProject = ref(null);

    idIconProject.value = createIcon({
        ...getStandardIcon('Project'),
        colorLight: colorNotSelectionLight.value,
        colorDark: colorNotSelectionDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        selection,
        isDark,
        colorSelectionLight,
        colorSelectionDark,
        colorNotSelectionLight,
        colorNotSelectionDark,
        isDisabled,
    ], () => {
        if (!isDisabled.value) {
            if (selection.value === 'project') {
                changeColor(
                    idIconProject.value, 
                    colorSelectionLight.value,
                    colorSelectionDark.value
                );
            } else {
                changeColor(
                    idIconProject.value, 
                    colorNotSelectionLight.value,
                    colorNotSelectionDark.value
                );
            }
        }
        else {
            updateIcon({
            id: idIconProject.value,
            isDisabled: isDisabled.value,
            });
        }
    });

    const idIconCredential = ref(null);

    idIconCredential.value = createIcon({
        ...getStandardIcon('Credential'),
        colorLight: colorNotSelectionLight.value,
        colorDark: colorNotSelectionDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        selection,
        isDark,
        colorSelectionLight,
        colorSelectionDark,
        colorNotSelectionLight,
        colorNotSelectionDark,
        isDisabled,
    ], () => {
        if (!isDisabled.value) {
            if (selection.value === 'credential') {
                changeColor(
                    idIconCredential.value, 
                    colorSelectionLight.value,
                    colorSelectionDark.value
                );
            } else {
                changeColor(
                    idIconCredential.value, 
                    colorNotSelectionLight.value,
                    colorNotSelectionDark.value
                );
            }
        }
        else {
            updateIcon({
            id: idIconCredential.value,
            isDisabled: isDisabled.value,
            });
        }
    });

    const idIconSendEmail = ref(null);

    idIconSendEmail.value = createIcon({
        ...getStandardIcon('SendEmail'),
        colorLight: colorNotSelectionLight.value,
        colorDark: colorNotSelectionDark.value,
        isDisabled: isDisabled.value,
    });

    watch([
        selection,
        isDark,
        colorSelectionLight,
        colorSelectionDark,
        colorNotSelectionLight,
        colorNotSelectionDark,
        isDisabled,
    ], () => {
        if (!isDisabled.value) {
            if (selection.value === 'sendEmail') {
                changeColor(
                    idIconSendEmail.value, 
                    colorSelectionLight.value,
                    colorSelectionDark.value
                );
            } else {
                changeColor(
                    idIconSendEmail.value, 
                    colorNotSelectionLight.value,
                    colorNotSelectionDark.value
                );
            }
        }
        else {
            updateIcon({
                id: idIconSendEmail.value,
                isDisabled: isDisabled.value,
            });
        }
    });

    //Delete childrens when component unmounts
    onBeforeUnmount(() => {
        if (idIconProfile.value) {
            deleteIcon(idIconProfile.value);
        }
        if (idIconCode.value) {
            deleteIcon(idIconCode.value);
        }
        if (idIconProject.value) {
            deleteIcon(idIconProject.value);
        }
        if (idIconCredential.value) {
            deleteIcon(idIconCredential.value);
        }
        if (idIconSendEmail.value) {
            deleteIcon(idIconSendEmail.value);
        }
    });

    //Actions

    //Change styles
    const classesNavigation = computed(() => {
        const classes= {};

        classes['shape'] = true;

        return classes;
    });

    const classesSection = computed(() => {
        const classes= {};

        classes['section'] = true;

        if (!isDisabled.value) {
            classes['isClickable'] = true;
        }

        return classes;
    });

    const classesBarStart = computed(() => {
        const classes= {};

        classes['bar'] = true;
        classes['barStart'] = true;

        return classes;
    });

    const classesBar = computed(() => {
        const classes= {};

        classes['bar'] = true;

        return classes;
    });

    const classesBarEnd = computed(() => {
        const classes= {};

        classes['bar'] = true;
        classes['barEnd'] = true;

        return classes;
    });

    const stylesBar0 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (selection.value === 'profile') {
                if (isDark.value) {
                    styles.backgroundColor = colorSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorSelectionLight.value;
                }
            }
            else {
                if (isDark.value) {
                    styles.backgroundColor = colorNotSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorNotSelectionLight.value;
                }
            }
        }
        else {
            styles.backgroundColor = 'var(--general-neutral-300-light)';
        }

        return styles;
    });

    const stylesBar1 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (selection.value === 'technology') {
                if (isDark.value) {
                    styles.backgroundColor = colorSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorSelectionLight.value;
                }
            }
            else {
                if (isDark.value) {
                    styles.backgroundColor = colorNotSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorNotSelectionLight.value;
                }
            }
        }
        else {
            styles.backgroundColor = 'var(--general-neutral-300-light)';
        }

        return styles;
    });

    const stylesBar2 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (selection.value === 'project') {
                if (isDark.value) {
                    styles.backgroundColor = colorSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorSelectionLight.value;
                }
            }
            else {
                if (isDark.value) {
                    styles.backgroundColor = colorNotSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorNotSelectionLight.value;
                }
            }
        }
        else {
            styles.backgroundColor = 'var(--general-neutral-300-light)';
        }

        return styles;
    });

    const stylesBar3 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (selection.value === 'credential') {
                if (isDark.value) {
                    styles.backgroundColor = colorSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorSelectionLight.value;
                }
            }
            else {
                if (isDark.value) {
                    styles.backgroundColor = colorNotSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorNotSelectionLight.value;
                }
            }
        }
        else {
            styles.backgroundColor = 'var(--general-neutral-300-light)';
        }

        return styles;
    });

    const stylesBar4 = computed(() => {
        const styles = {};

        // states classes
        if (!isDisabled.value) {
            if (selection.value === 'sendEmail') {
                if (isDark.value) {
                    styles.backgroundColor = colorSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorSelectionLight.value;
                }
            }
            else {
                if (isDark.value) {
                    styles.backgroundColor = colorNotSelectionDark.value;
                }
                else {
                    styles.backgroundColor = colorNotSelectionLight.value;
                }
            }
        }
        else {
            styles.backgroundColor = 'var(--general-neutral-300-light)';
        }

        return styles;
    });

    const classesIcon = computed(() => {
        const classes= {};

        classes['icon'] = true;

        return classes;
    });
</script>

<style scoped>
    /* Component style */
    .shape {
        display: flex;
        width: 100%;
        max-width: 50.5rem;
    }

    .section {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 0.4rem;
    }

    .bar {
        height: 0.4rem;
        flex: 0 0 auto;
    }

    .barStart {
        border-radius: 5rem 0rem 0rem 5rem;
    }

    .barEnd {
        border-radius: 0rem 5rem 5rem 0rem;
    }

    .icon {
        display: flex;
        justify-content: center;
    }

    .isClickable {
        cursor: pointer;
    }
</style>