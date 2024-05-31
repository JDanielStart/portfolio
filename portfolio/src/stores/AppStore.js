import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    //States
    const isDarkMode = ref(false);
    const language = ref('en');

    //Getters

    //Actions
    const toggleDark = () => {
        isDarkMode.value = !isDarkMode.value;
    }

    const changeLanguage = (lang) => {
        language.value = lang;
    }

    return {
        //States
        isDarkMode,
        language,

        //Getters

        //Actions
        toggleDark,
        changeLanguage
    }
})