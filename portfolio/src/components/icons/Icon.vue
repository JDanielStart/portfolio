<template>
  <div
    class="icon"
  >
    <svg
      class="icon"
      :width="width"
      :height="height"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      :viewBox="viewBox"
    >
      <g
        :fill="color"
        class="icon-content"
      >
        <slot/>
      </g>
    </svg>
  </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';

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
      }, 
      viewBox: {
        type: String,
        default: '0 0 20 20'
      }
    });
    
    // States

    //Actions

    //Change styles

    //Events

  </script>

  <style scoped>
    .icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }

    .icon-content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  </style>