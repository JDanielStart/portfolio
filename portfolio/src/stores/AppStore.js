import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    //States
    const isDarkMode = ref(false);
    const languageMode = ref('en');

    //Getters
    function getText(component, type='none') {
        const texts = {
            ButtonRoundFill: {
                none: {
                    en: 'CONTACT ME',
                    es: 'CONTÁCTAME',
                    fr: 'CONTACTEZ-MOI',
                },
            },
            ButtonLanguage: {
                none: {
                    en: 'EN',
                    es: 'ES',
                    fr: 'FR',
                },
            },
        };
    
        return texts[component]?.[type]?.[languageMode.value];
    }

    //Actions
    const toggleDark = () => {
        isDarkMode.value = !isDarkMode.value;
    }

    const changeLanguage = (lang) => {
        languageMode.value = lang;
    }

    return {
        //States
        isDarkMode,
        languageMode,

        //Getters
        getText,

        //Actions
        toggleDark,
        changeLanguage
    }
})