<template>
    <div class="homeContainer">
        <TopBar></TopBar>
        <routerView></routerView>
    </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
</script>

<style  lang="less">

.homeContainer {
    font-size:@font-size-14;
}
</style>