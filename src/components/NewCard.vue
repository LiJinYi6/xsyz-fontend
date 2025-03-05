<template>
    <div class="new-card">
        <div class="card-color">
            <div class="color-item" @click="handleSelect(item)" v-for="(item,index) in colorList" :key="index" :style="{background: item}">
            </div>
        </div>
        <div class="card-main" :style="{background: chooseColor}">
            <textarea class="content"  placeholder="留言" maxlength="100"></textarea>
            <input class="name" type="text" placeholder="签名">
        </div>
        <div class="card-footer">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import {colorList} from '@/utils/data'
import { ref } from 'vue'
let chooseColor = ref<string>(' rgba(252,175,162,1)')
const handleSelect = (item: string) => {
    chooseColor.value = item
}
</script>

<style scoped lang="less">
.new-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .card-color {
        display: flex;
        justify-content: flex-start;
        height: 5%;
        .color-item {
            width: 24px;
            height: 24px;
            cursor: pointer;
            margin-right: 8px;
        }
    }
    .card-main{
        height: 35%;
        width: 100%;
        padding:3%;
        .content{
            background: none;
            border:none;
            resize: none;
            height: 84%;
            width: 96%;
        }
        .name{
            background: none;
            border:white 1px solid;
            height: 10%;
            resize: none;
            width: 96%;
            line-height: 20px;
        }
        }
    }

</style>