import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIconStore = defineStore('icon', () => {
    //States
    const iconName = ref('defaultIcon');
    const iconColor = ref('#000000');
    const width = ref('12');
    const height = ref('8');
    const viewBox = ref(`0 0 ${width.value} ${height.value}`);

    //Getters

    //Actions
    function setIconName(newIconName) {
        iconName.value = newIconName;
    }

    function setIconColor(newIconColor) {
        iconColor.value = newIconColor;
    }

    function setWidth(newWidth) {
        width.value = newWidth;
    }

    function setHeight(newHeight) {
        height.value = newHeight;
    }

    function setViewBox(newViewBox) {
        viewBox.value = newViewBox;
    }

    return {
        //States
        iconName,
        iconColor,
        width,
        height,
        viewBox,

        //Getters

        //Actions
        setIconName,
        setIconColor,
        setWidth,
        setHeight,
        setViewBox
    }
})