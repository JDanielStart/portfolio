<template>
  <g clip-path="url(#clip0_442_13444)">
    <path :fill="color" d="M11.4995 11.25H10.2495V8.75H11.4995V11.25ZM22.7495 6.25V13.75H11.4995V15H6.49951V13.75H0.249512V6.25H22.7495ZM6.49951 7.5H1.49951V12.5H3.99951V8.75H5.24951V12.5H6.49951V7.5ZM12.7495 7.5H7.74951V13.75H10.2495V12.5H12.7495V7.5ZM21.4995 7.5H13.9995V12.5H16.4995V8.75H17.7495V12.5H18.9995V8.75H20.2495V12.5H21.4995V7.5Z"/>
  </g>
  <defs>
    <clipPath id="clip0_442_13444">
      <rect width="22.5" height="20" fill="white" transform="translate(0.249512)"/>
    </clipPath>
  </defs>
</template>

<script setup>
  import { computed } from 'vue';

  //Props
  const props = defineProps({
        color: {
            type: String
        }
    });
    
    const color = computed(() => props.color);
</script>