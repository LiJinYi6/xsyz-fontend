<template>
    <svg :class="name" :width="width" :height="height" :viewBox="viewBox" :style="{width,height}">
      <use :href="`#icon-${name}`" />
    </svg>
  </template>
  
  <script setup>
  import {defineProps} from 'vue'
  let props=defineProps({
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '1em',
    },
    height: {
      type: String,
      default: '1em',
    },
    viewBox: {
      type: String,
      default: '0 0 1024 1024',
    },
  })
  
  </script>
  
  <style scoped>
  svg {
    fill: currentColor;
  }
  </style>
  