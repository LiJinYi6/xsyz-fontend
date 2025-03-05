<template>
    <div class="message-wall">
        <p class="title">{{ useWall.wall.title }}</p>
        <p class="slogan">{{ useWall.wall.slogan }}</p>
        <div class="label">
            <p @click="handleSelect(label[id].length)" 
            class="label-list" 
            :class="selectNum==label[id].length?'label-selected':''">全部</p>
            <p 
            @click="handleSelect(index)"  
            :class="selectNum==index?'label-selected':''"
            class="label-list" v-for="(item, index) in label[id]" 
            :key="index">{{ item }}</p>
        </div>
        <div class="notecard-list" v-if="id==0" >
            <template  v-for="item in noteList " :key="item.id">
                <NoteCard :note="item" ></NoteCard>
            </template>
        </div>
        <div class="add">
            <SvgIcon @click.native="handleAdd()" name="tianjia" :fill="true?'red':''" height="35px" width="35px"></SvgIcon>
        </div>
        <JYPagination :totals="8" :page-size="8"></JYPagination>
        <JYDrawer :isVisible="isVisible" @close-drawer="isVisible=false">
            <NewCard></NewCard>
        </JYDrawer>
    </div>
</template>

<script setup lang="ts">
import { label,wallType} from '@/utils/data';
import { onMounted, reactive, ref } from 'vue';
import JYDrawer from '@/components/JYDrawer.vue';
import NoteCard from '@/components/NoteCard.vue'
import SvgIcon from '@/components/SvgIcon.vue';
import NewCard from '@/components/NewCard.vue';
import { apiGetMessage } from '@/api/api';
import { useWallStore } from '@/stores/wall';
import JYPagination from '@/components/JYPagination.vue';
const useWall=useWallStore()
let id=ref(useWall.wall.id)
let selectNum=ref(label[id.value].length)
let handleSelect=(index:number)=>{
    selectNum.value=index
}
let noteList=reactive<Array<object>>([])
const  getMessages=async ()=>{
    let res:any=await apiGetMessage()
    console.log(res)
    noteList=res.data.NoteList
}
let isVisible=ref<boolean>(false)
const handleAdd=()=>{
    console.log('触发')
    isVisible.value=true
}
onMounted(()=>{
    getMessages()
})
</script>

<style scoped lang="less">
.message-wall{
    min-height: 700px;
    padding-top: 30px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    .title{
        padding-top: 40px;
        padding-bottom: 8px;
        font-size:56px;
        color:@gray-8;
        text-align: center;
        font-weight: 600;
        transition: all 0.3s ease-in-out;
    }
    .slogan{
        color:@gray-7;
        text-align: center;
        transition: all 0.3s ease-in-out;
    }
    .label{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 25px;
        .label-list{
            padding:0,14px;
            line-height: 28px;
            margin:4px;
            color:@gray-7;
            width: 56px;
            height: 28px;
            text-align: center;
            border: 1px solid #202020;
            border-radius: 16px;
        }
        .label-list:hover{
            cursor: pointer;
        }
        .label-selected{
            color:@gray-0;
            background-color: #202020;
            font-weight: bolder;
        }
    }
    .notecard-list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 300px));
        justify-content: center; /* 水平居中 */
        align-items: flex-start; /* 垂直对齐 */
        margin:0 auto;
    }
    .add{
        width: 56px;
        height: 56px;
        position: fixed;
        background-color: @gray-9;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
        border-radius: 28px;
        bottom: 30px;
        right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>