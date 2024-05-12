<script setup>
    import ButtonCardFigma from '../buttons/ButtonCardFigma.vue';
    import ButtonCardWhiteBoard from '../buttons/ButtonCardWhiteBoard.vue';
    import ButtonCardGithub from '../buttons/ButtonCardGithub.vue'

</script>

<template>
    <div>
        <ButtonCardFigma></buttonCardFigma>
        <ButtonCardWhiteboard></buttonCardWhiteboard>
        <ButtonCardGithub></buttonCardGithub>
    </div>
</template>

<style scoped>
    .buttonGroup {
        display: flex;
    }
</style>