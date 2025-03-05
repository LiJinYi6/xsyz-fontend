import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useWallStore = defineStore('Wall', () => {
//   const doubleCount = computed(() => count.value * 2)
  let wall=reactive<any>({
    id:0,
    title:'留言墙',
    slogan:'留下你的足迹',
    drawerTitle:'添加留言',
    drawerIcon:'',
  })
  function wallChange(data:number) {
    if(data==0){
      wall.id=data
      wall.drawerTitle='添加留言'
      wall.title='留言墙'
      wall.slogan='留下你的足迹'
    }else{
      wall.id=data
      wall.drawerTitle='上传照片'
      wall.title='照片墙'
      wall.slogan='记录美好瞬间'
    }

  }

  return { wall,wallChange }
})