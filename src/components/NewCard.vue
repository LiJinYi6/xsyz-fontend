<template>
    <div class="new-card">
        <div class="card-color">
            <div ref="colorItem"  class="color-item" @click="handleSelect(item,index)" v-for="(item,index) in colorList" :key="index" :style="{background: item}">
            </div>
        </div>
        <div class="card-main" :style="{background: chooseColor}">
            <textarea class="content"  placeholder="留言" maxlength="100"></textarea>
            <input class="name" type="text" placeholder="签名">
        </div>
        <div class="labels">
            <p class="title">选择标签</p>
            <div class="label-list">
                <div :class="chooseLabel==label[wallStore.wall.id].length?'label-item-active':''" @click="handleSelectLabel(label[wallStore.wall.id].length)" class="label-item">全部</div>
                <div :class="chooseLabel==index?'label-item-active':''" @click="handleSelectLabel(index)" class="label-item" v-for="(item,index) in label[wallStore.wall.id]" :key="index" >
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="mianze">
            <p class="title">
                免责声明
            </p>
            <p class="mianze-content">
                本网站为个人兴趣制作，不涉及任何商业行为，所有留言均为用户个人行为，与本网站无关。<br/>
                1.请不要发布一些违法乱纪的信息，否则自己承担相关责任。<br/>
                2.请不要发布一些涉及隐私的信息，否则自己承担相关责任。<br/>
                3.请不要发布一些涉及人身攻击的信息，否则自己承担相关责任。<br/>
                4.请不要发布一些涉及政治敏感的信息，否则自己承担相关责任。<br/>
                1.请不要发布一些违法乱纪的信息，否则自己承担相关责任。<br/>
                2.请不要发布一些涉及隐私的信息，否则自己承担相关责任。<br/>
                3.请不要发布一些涉及人身攻击的信息，否则自己承担相关责任。<br/>
                4.请不要发布一些涉及政治敏感的信息，否则自己承担相关责任。<br/>
                2.请不要发布一些涉及隐私的信息，否则自己承担相关责任。<br/>
                3.请不要发布一些涉及人身攻击的信息，否则自己承担相关责任。<br/>
                4.请不要发布一些涉及政治敏感的信息，否则自己承担相关责任。<br/>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {colorList} from '@/utils/data'
import { ref } from 'vue'
import { label } from '@/utils/data'
import { useWallStore } from '@/stores/wall'
let chooseColor = ref<string>(' rgba(252,175,162,1)')
let wallStore=useWallStore()
let colorItem = ref<any>()
const handleSelect = (item: string,index:any) => {
    chooseColor.value = item
    if(colorItem)
    for(let i=0;i<colorItem.value.length;i++){
        if(i === index){colorItem.value[i].style.border = '2px solid skyblue'}
        else{colorItem.value[i].style.border = 'none'    }
    }
}
let chooseLabel=ref(label[wallStore.wall.id].length)
const handleSelectLabel = (index:any) => {
    chooseLabel.value = index
}
</script>

<style scoped lang="less">
.new-card::-webkit-scrollbar {
    width: 1px;
}
.new-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y:auto;
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
        .labels{
        margin-top: 10px;
        height: 10%;
        font-size:12px;
        font-weight: bolder;
        .label-list{
            padding-top: 10px;
            display: grid;
            grid-template-columns: repeat(6,1fr);
            grid-gap:5px;
            align-items: center;
            justify-content: flex-start;
            .label-item{
                text-align: center;
                border-radius: 12px;
                color: @gray-6;
                font-weight: normal;
                cursor: pointer;
            }
            .label-item-active{
                background-color: @gray-1;
                color:@gray-9;
                font-weight: bolder;
            }
        }
    }
    .mianze{
        height: 50%;
        padding-top: 20px;
        .title{
            font-size: 12px;
            font-weight: bolder;
            margin-bottom: 10px;
        }
        .mianze-content{
            font-size: 12px;
            color: @gray-7;
            line-height: 20px;
        }
    }
}

</style>