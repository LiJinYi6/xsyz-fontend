<template>
    <div class="message-wall">
        <p class="title">{{ wallType[id].title }}</p>
        <p class="slogan">{{ wallType[id].slogan }}</p>
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
        <div class="notecard-list" >
            <template v-for="(item, index) in noteList " :key="item.id">
                <NoteCard :note="item" ></NoteCard>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { label,wallType} from '@/utils/data';
import { onMounted, reactive, ref } from 'vue';
import NoteCard from '@/components/NoteCard.vue'
import { apiGetMessage } from '@/api/api';
let id=ref(0)
let selectNum=ref(label[id.value].length)
let handleSelect=(index:number)=>{
    selectNum.value=index
}
let noteList=reactive([])
const  getMessages=async ()=>{
    let res:any=await apiGetMessage()
    console.log(res)
    noteList=res.data.NoteList
}
onMounted(async ()=>{
    getMessages()
})
</script>

<style scoped lang="less">
.message-wall{
    min-height: 700px;
    padding-top: 52px;
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
    }
    .slogan{
        color:@gray-7;
        text-align: center;
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
        // margin:8px ;
        margin:0 5px;
        width: 1480px;
        height: 500px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
    }
}
</style>