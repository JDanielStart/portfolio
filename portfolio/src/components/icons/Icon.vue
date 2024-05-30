<template>
    <svg
      :width="width"
      :height="height"
      :viewBox="viewBox"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <g :fill="iconColor">
        <slot/>
      </g>
    </svg>
  </template>
  
  <script setup>
    import { useIconStore } from '../../stores/IconStore.js';
    import { inject } from 'vue';
    import { storeToRefs } from 'pinia';

    //Stores
    const store = inject('store') || useIconStore();

    //States
    const { iconColor, width, height, viewBox,} = storeToRefs(store);

    //Actions

    //Change styles

  </script>

  <style scoped>

  </style>