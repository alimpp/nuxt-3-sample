<template>
  <div class="resend-sms-code-container">
    <div class="resend-code-container">
      <p v-if="resendCode">{{$t("pages.otp.receive_again_code")}}</p>
    </div>
    <div class="timer-container" v-if="timer">
      <p>{{ second }}</p>
      <p>: {{ min }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let second = ref(59);
let min = ref(1);
let resendCode = ref(false)
let timer = ref(true)

onMounted(() => {

  setInterval(() => {
    second.value--;
    if (second.value === 0) {
      second.value = 59;
    }
  }, 1000);

  setInterval(() => {
    if(second.value == 1){
      min.value --
    }
  }, 1000);

  setTimeout(() => {
    resendCode.value = true
    timer.value = false
  } , 117000)

});
</script>

<style scoped lang="scss">
.resend-sms-code-container {
  width: 100%;
  display: flex;
  .resend-code-container {
    width: 50%;
    display: flex;
    justify-content: start;
    p {
      font-size: 12px;
      font-weight: 300;
      color: #d9d9d9;
      padding: 10px 0;
      cursor: pointer;
    }
  }
  .timer-container {
    width: 50%;
    display: flex;
    justify-content: end;
    p {
      font-size: 12px;
      font-weight: 600;
      color: #0284c7;
      padding: 10px 0;
    }
  }
}
</style>
