<template>
    <div v-show="(sw == 'pl')">
        <pages1 :va="sentToPL" @func="goToProductDetail"></pages1>
    </div>

    <div v-show="(sw == 'pd')">
        <detail1 :va="sentToPD" @func="backToProductList"></detail1>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import pages1 from './vuepages.vue';
import detail1 from './productdetailt1.vue';

const sw = ref('pl');
//parrent to child
const sentToPD = ref([]);
const sentToPL = ref(1);
//switch page to product list value
function backToProductList(datas) {
    sw.value = 'pl';
}
//switch page to product detail value
function goToProductDetail(datas) {
    sw.value = 'pd';
    sentToPD.value = [];
    sentToPD.value = datas;
}
</script>
    
<style></style>