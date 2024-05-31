<template>
    <svg
      :width="width"
      :height="height"
      :viewBox="viewBox"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <g :fill="color">
        <slot/>
      </g>
    </svg>
  </template>
  
  <script setup>
    import { computed, defineProps } from 'vue';

    // Props
    const props = defineProps({
      color: {
        type: String,
        default: '#000000'
      },
      width: {
        type: String,
        default: '2rem'
      },
      height: {
        type: String,
        default: '2rem'
      }
    });

    // States
    const viewBox = computed(() => {
      `${-props.width / 2} ${-props.height / 2} ${props.width} ${props.height}`
    });
    

    //Actions

    //Change styles

    //Events

  </script>

  <style scoped>

  </style>