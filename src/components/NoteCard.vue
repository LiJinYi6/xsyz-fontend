<template>
    <div class="noteCard" :style="{'background':note.bgColor}">
        <div class="top">
            <p class="time">{{ note.date }}</p>
            <p class="label">{{ note.label }}</p>
        </div>
        <div class="content">
            {{ note.content }}
        </div>
        <div class="foot">
            <div class="foot-left">
                <SvgIcon @click="handleLike()" name="aixin" :fill="isLike?'red':''"><span class="icons">{{ note.likeNum }}</span ></SvgIcon>
                <SvgIcon name="liuyan"><span class="icons">{{ note.commentNum }}</span></SvgIcon>
            </div>
            <div class="foot-right">
                {{ note.name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SvgIcon from './SvgIcon.vue';
let isLike=ref(false)
let {note}=defineProps(['note'])
const handleLike=()=>{
    isLike.value=!isLike.value
    console.log(isLike.value)
}
onMounted(()=>{
    console.log('iadjf')
})
</script>

<style scoped lang="less">
.noteCard{
    width: 280px;
    height: 240px;
    background: rgba(252, 175, 162, 0.3);
    padding: 18px 20px;
    margin:5px 5px;
    .top{
        display: flex;
        justify-content: space-between;
        height: 17px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 12px;
        color: #5B5B5B;
        
    }
    .content{
        height: 140px;
        margin:16px 0px;
        font-size: 14px;
        color: #202020;
        overflow: hidden;
    }
    .foot{
        height: 25px;
        display: flex;
        justify-content: space-between;
        .foot-left{
            .icons{
                margin-right: 10px;
                margin-left: 5px;
            }
        }
        .foot-right{
            font-weight:bolder;
            font-size: 14px;
            color: #202020;
            text-align: right;
    
        }
    }
}
</style>