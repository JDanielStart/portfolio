<template>
    <nav
        :class="classesNavigation"
    >
        <div
            :class="classesSection"
            @click="clickProfile"
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
        </div>
        <div
            :class="classesSection"
            @click="clickCode"
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
        </div>
        <div
            :class="classesSection"
            @click="clickProject"
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
        </div>
        <div
            :class="classesSection"
            @click="clickCredential"
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
        </div>
        <div
            :class="classesSection"
            @click="clickSendEmail"
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
        </div>
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
    const { getNavigation, setSelection } = navigationStore;
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
            if (selection.value === 0) {
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
            if (selection.value === 1) {
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
            if (selection.value === 2) {
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
            if (selection.value === 3) {
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
            if (selection.value === 4) {
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
    const clickProfile = () => {
        if (!isDisabled.value) {
            setSelection(id, 0);
        }
    };

    const clickCode = () => {
        if (!isDisabled.value) {
            setSelection(id, 1);
        }
    };

    const clickProject = () => {
        if (!isDisabled.value) {
            setSelection(id, 2);
        }
    };

    const clickCredential = () => {
        if (!isDisabled.value) {
            setSelection(id, 3);
        }
    };

    const clickSendEmail = () => {
        if (!isDisabled.value) {
            setSelection(id, 4);
        }
    };

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
            if (selection.value === 0) {
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
            if (selection.value === 1) {
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
            if (selection.value === 2) {
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
            if (selection.value === 3) {
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
            if (selection.value === 4) {
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