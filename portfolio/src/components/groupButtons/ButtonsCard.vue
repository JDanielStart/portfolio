<script setup>
    import ButtonCardFigma from '../buttons/ButtonCardFigma.vue';
    import ButtonCardWhiteBoard from '../buttons/ButtonCardWhiteBoard.vue';
    import ButtonCardGithub from '../buttons/ButtonCardGithub.vue'

</script>

<template>
    <div class="buttonGroup">
        <ButtonCardWhiteBoard></ButtonCardWhiteBoard>
        <ButtonCardFigma></buttonCardFigma>
        <ButtonCardGithub></buttonCardGithub>
    </div>
</template>

<style scoped>
    .buttonGroup {
        display: flex;
    }
</style>