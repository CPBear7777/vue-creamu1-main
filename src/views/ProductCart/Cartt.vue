<template>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 mb-4">
                <div style="font-size: 32px;">

                    <span class="progress-icon" style="background-color: rgb(255, 204, 133);">1</span>
                    <span class="progressbar-text" style="background-color: rgb(255, 204, 133);">確認購物車</span>

                    <span class="progress-icon">2</span>
                    <span class="progressbar-text">選擇取貨方式</span>

                    <span class="progress-icon">3</span>
                    <span class="progressbar-text">選擇付款方式</span>

                    <span class="progress-icon">4</span>
                    <span class="progressbar-text">訂單完成</span>
                </div>
            </div>
        </div>
    </div>
    <br>
    <!-- 商品明細區這裡要串接資料庫並且會讀資料庫有多少筆資料跟著變長 -->


    <!-- 商品title -->


    <!-- 商品細節 -->
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-4">
                <table class="table">
                    <thead>
                        <tr style="font-size: 28px;">
                            <th scope="col">名稱</th>
                            <th scope="col">商品描述</th>
                            <th scope="col">單價</th>
                            <th scope="col">數量</th>
                            <th scope="col">小計</th>
                            <th scope="col">修改</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in todData" style="font-size: 20px;">
                            <td>{{ i.pName }}</td>
                            <td style="font-size: 20px;">{{ i.descript }}</td>
                            <td style="font-size: 24px;">{{ i.unitPrice }}</td>
                            <td style="font-size: 24px;">{{ i.qty }}</td>
                            <td style="font-size: 24px; color: rgb(218, 120, 0);">{{ i.subtotal }}</td>
                            <td><button class="btn btn-primary" @click="delTOD(i.id)">del</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 商品總價與次要選項 -->
    <div class="container">
        <span class="d-flex justify-content-end" style="font-size: 32px; color: rgb(218, 120, 0);">Total: {{ totalPrice }}
        </span>
    </div>

    <!-- 下方按鈕取消與確認按鈕 -->

    <div class="container d-flex mb-3">
        <button class="btn btn-primary p-2" style="font-size: 36px;">取消</button>
        <button class="btn btn-success ms-auto p-2" style="font-size: 36px;" @click="comfirmPurchase">確認結帳</button>
    </div>

    <!-- 購買規範說明 -->
    <div>
        <br>
        <br>
        <br>
    </div>


    <!-- footer -->
</template>
    
<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const apiurl = "https://localhost:7098/";
const getAll = "api/TempOrderDetailsAPI";
const deleteById = "api/TempOrderDetailsAPI"
const postById = "api/TempOrderDetailsAPI";
let memberIdTosql = 1;
const employeeId = 1;

//temporderdata
const todData = ref([]);

const totalPrice = ref(0);

function initV() {
    //checkMemberLogin();
    searchTODData();
   
}

//check member login
function checkMemberLogin() {
    let loginmemberId = 1;
    memberIdTosql = loginmemberId;
    if (memberIdTosql == -1) {
        return "please sign in";
    }
}


//search data
async function searchTODData() {
    let response = await axios.get(`${apiurl}${getAll}/${memberIdTosql}`);
    
    if (response === null) {
        todData.value = [];
    }
    else {
        todData.value = [];
        todData.value = response.data;
        totalPrice.value = 0;
        todData.value.forEach(element => {
            totalPrice.value = totalPrice.value + element.subtotal
        });
    }
}

//delete cart ,temporderdetail
async function delTOD(id) {
    try {
        const response = await axios.delete(`${apiurl}${deleteById}/${id}`);
        alert(response.data);
    }
    catch (error) {
        return "process error";
    }
    initV();
}

//comfirm purchase
async function comfirmPurchase() {
    // let response = await axios.get(`${apiurl}${postById}${memberIdTosql}`);

    const res = await axios.get(`${apiurl}${getAll}`);
    if (res.data === 'None Data') {
        return 'None Data';
    } else {
        initV();
        //go next payment page
        alert(res.data);
        return res.data;
    }

}

initV();
</script>

<style></style>
