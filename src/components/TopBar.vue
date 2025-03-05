<template>
    <div class="topContainer">
        <div class="logo">
            <SvgIcon name="xinshengqiang" width="32px" height="32px"></SvgIcon>
            <p class="title">心声驿站</p>
        </div>
        <div class="menu">
            <JYButton @click="handleClick(0)" size="base" :nom="wallStore.wall.id==0?'top-primary':'top-secondary'">留言墙</JYButton>
            <JYButton @click="handleClick(1)" size="base" :nom="wallStore.wall.id?'top-primary':'top-secondary'">照片墙</JYButton>
        </div>
        <div class="user">
            <div class="userAvatar"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import JYButton from './JYButton.vue';
import { useWallStore } from '@/stores/wall';
const wallStore = useWallStore()
const handleClick = (data:number)=>{
    wallStore.wallChange(data)
}
</script>

<style scoped lang="less">
.topContainer {
    z-index: 10;
    width: 100%;
    height: 52px;
    background: rgba(255,255,255,0.8);
    box-shadow: 0px 0px 4px 8px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    .logo{
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 300px;

        .title{
            padding-left: 10px;
            font-weight: 600;
            font-size: 20px;
            color: @gray-9;
            letter-spacing: 0;
            text-align: justify;
        }
    }
  
    .user{
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .userAvatar{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: red;
        }
    }
}
</style>