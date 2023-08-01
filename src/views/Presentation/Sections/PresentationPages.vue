<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";
// import movie1 from "C:/Users/USER/Desktop/vue-creamu/src/assets/img/showcase";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="success" class="mb-3"
              >當你沒有靈感時</MaterialBadge
            >
            <h2 class="">參考一下過往客戶的大作吧!</h2>
            <!-- <p class="lead">
              能夠在這裡DIY的過往客戶們 <br />
              創造力肯定是大神等級的啦<br />
              <h6>(已取得原客戶授權，請安心使用)</h6>
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Emma"
                image="https://p.turbosquid.com/ts-thumb/FM/XjGktc/2dbaAajl/01/jpg/1551970490/1920x1080/fit_q87/68e002f1ed081383c5e2ffda1c4f85028235fdaa/01.jpg"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Wendy"
                image="https://p.turbosquid.com/ts-thumb/Cf/cOmiJQ/PUKyythu/02/jpg/1551601331/1920x1080/fit_q87/3b3c8980dcb5d3176daa60bad8f227adda5c8068/02.jpg"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="M.J."
                image="https://p.turbosquid.com/ts-thumb/Bu/spClZA/iK/001/jpg/1686900701/1920x1080/fit_q87/8ecc9f6945a5b7121468d2699161c377bf5deb15/001.jpg"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Cindy"
                image="https://p.turbosquid.com/ts-thumb/pH/OfltUI/ra/001/jpg/1687065238/1920x1080/fit_q87/cf26ce5b76976c63ad8024bb5f21cce2ce315ccd/001.jpg"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              能夠在這裡DIY的過往客戶們 <br />
              創造力肯定是大神等級的啦<br />
            </h3>
            <h6 class="text-secondary font-weight-normal">
              (已取得原客戶授權，請安心使用)
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
