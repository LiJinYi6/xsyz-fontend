<template>
 
    <div class="jy-pagination">
        <JYButton @click="prevPage" size="smaller" nom="pagination" :disabled="currentPage === 1">上一页</JYButton>
        <span>第 {{ currentPage }} 页，共 {{ props.totals }} 页</span>
        <JYButton nom="pagination" @click="nextPage" :disabled="currentPage === props.totals">下一页</JYButton>
    </div>
</template>

<script setup lang="ts">
import { ref,defineProps } from 'vue';
import JYButton from './JYButton.vue';
const props = defineProps({
    totals: {
        type: Number,
        required: true
    },
    pageSize: {
        type: Number,
        required: true
    }
});
const currentPage = ref(1);

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < props.totals) {
        currentPage.value++;
      }
    };
</script>

<style scoped lang="less">
.jy-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top:10px;
    span{
        margin: 0 10px;
    }
}
</style>