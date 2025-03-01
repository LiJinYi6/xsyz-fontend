<template>
    <svg :class="name" 
    :viewBox="viewBox" 
    :style="{width,height,fill}"
    @click="$emit('click')">
      <use :href="`#icon-${name}`" />
    </svg>
    <slot></slot>
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
    fill:{
      type: String,
      default: 'currentColor',
    }
  })
  
  </script>
  
  <style scoped>

  </style>
  