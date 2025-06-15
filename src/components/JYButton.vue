<template>
    <button :class="[size,nom]" class="jy-button"><slot></slot></button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
let props=defineProps({
    size:{
        type:String,
        default:'base'
    },
    nom:{
        type:String,
        default:'primary'
    }
})
</script>

<style scoped lang="less">
.jy-button{
   text-align: center;
   border: none;
}
.bigger{
    width: 200px;
    height: 36px;
    border-radius: 24px;
    padding: 0 24px;
}
.smaller{
    width: 80px;
    height: 36px;
    padding: 0 24px;
    border-radius: 24px;
}
.base{
    width: 100px;
    height: 36px;
    border-radius: 24px;
    padding: 0 24px;
}
.primary{
    background: @gray-9;
    color:@gray-0
}
.secondary{
    background: @gray-0;
    color:@gray-9;
    border:1px solid @gray-9;
}
.top-primary{
    background:@primary-color;
    color:@gray-0;
}
.top-secondary{
    background: @gray-0;
    color: @gray-9;
}
.pagination{
    background: @gray-0;
    color: @gray-9;
    border: 1px solid @gray-9;
    width: 70px;
    height: 24px;
    padding: 0 10px;
    border-radius: 5px;
}
</style>