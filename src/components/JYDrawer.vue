<template>
     <transition name="drawer-animation">
        <div class="jy-drawer" v-if="isVisible">
            <div class="drawer-head">
                <p class="drawer-name">{{ wallStore.wall.drawerTitle }}</p>
                <SvgIcon @click="closeDrawer" name="ego-close"></SvgIcon>
            </div>
            <div class="drawer-main">
                <slot class="slot">
                </slot>
            </div>
        </div>
     </transition>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue';
import { defineProps } from 'vue';
import { useWallStore } from '@/stores/wall';
const emit=defineEmits(['closeDrawer']);
let wallStore = useWallStore();
const closeDrawer = () => {
    emit('closeDrawer',false);
}
defineProps({
    isVisible: {
        type: Boolean
    }
})
</script>

<style scoped lang="less">
.drawer-animation{
  &-entry{
    &-from{
      transform: translateX(360px);
     
    }
    &-active{
      transition: all 0.3s ease-out;
    }
    &-to{
      transform: translateX(0px);
      
    }
  }
  &-leave{
    &-from{
      transform: translateX(0px);
     
    }
    &-active{
      transition: all 0.3s ease-in;
    }
    &-to{
      transform: translateX(360px);
      
    }
  }

}
.jy-drawer{
    background:rgba(255,255,255,0.3);
    width: 360px;
    height: 100%;
    position: fixed;
    top: 52px;
    right: 0;
    z-index: 9;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.08);
    backdrop-filter: blur(20px);//背景模糊
    padding: 20px;
    .drawer-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 35px;
        .drawer-name{
            font-size: 16px;
            font-weight: 600;
            color:black;
        }
        padding-bottom: 20px;
    }
    .drawer-main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
        height: calc(100% - 35px);
        
    }
    .slot{
        height: 1200px;
    }
}
</style>