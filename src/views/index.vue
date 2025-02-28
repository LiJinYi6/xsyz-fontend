<template>
    <div class="homeContainer">
        <TopBar></TopBar>
    </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
</script>

<style  lang="less">

.homeContainer {
    font-size:@font-size-14;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: url('../assets/images/wall-bg.jpg');
}
</style>