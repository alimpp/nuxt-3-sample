<script lang="ts" setup>
import { ref } from "vue";
import { useAuth } from "~~/stores/auth";
import { useApplicationUser } from "~~/stores/applicationUser";
const register = useAuth();
const applicationUser = useApplicationUser()

const recaptchaToken = ref("recaptchaToken");
const otpOneCode = ref();
const otpTwoCode = ref();
const otpThreeCode = ref();
const otpFourCode = ref();
const otpFiveCode = ref();
const oneCode = ref("");
const twoCode = ref("");
const threeCode = ref("");
const fourCode = ref("");
const fiveCode = ref("");


onMounted(() => {
  otpOneCode.value.focus();
});

watch(oneCode, () => {
  otpTwoCode.value.focus();
});

watch(twoCode, () => {
  otpThreeCode.value.focus();
});

watch(threeCode, () => {
  otpFourCode.value.focus();
});

watch(fourCode, () => {
  otpFiveCode.value.focus();
});

function sendOtp() {
  const otpCode = `${oneCode.value}${twoCode.value}${threeCode.value}${fourCode.value}${fiveCode.value}`;
  const data = {mobile : applicationUser.phoneNumber , code : otpCode , token : recaptchaToken}
  register.sendOtp(data)
  setTimeout(() => {
    navigateTo('/')
  }, 1000);
}

</script>

<template>
  <div class="flex flex-row w-full">
    <div class="form-conteiner">
      <div class="form-box">
        <img class="logo" src="@/assets/icons/olestickLogo.svg" alt="logo" />
        <p class="mt-5">{{$t("pages.otp.title")}}</p>
        <div class="otp-input-container">
          <input v-model="oneCode" ref="otpOneCode" maxlength="1" class="otp-input" />
          <input v-model="twoCode" ref="otpTwoCode" maxlength="1" class="otp-input" />
          <input v-model="threeCode" ref="otpThreeCode" maxlength="1" class="otp-input" />
          <input v-model="fourCode" ref="otpFourCode" maxlength="1" class="otp-input" />
          <input v-model="fiveCode" ref="otpFiveCode" maxlength="1" class="otp-input" />
        </div>
        <resendSmsCode></resendSmsCode>
        <BaseButton
          @click.prevent="sendOtp"
          class="mt-5"
          text="تایید"
        ></BaseButton>
        <NuxtLink class="link pt-5" to="/auth/register">{{$t("pages.otp.back_to_sign_in")}}</NuxtLink>
      </div>
      <div class="items-box">
        <div class="flex justify-center items-center w-full mt-5">
          <NuxtLink to="/blogs" class="px-5 item">صفحه اصلی</NuxtLink>
          <NuxtLink to="/blogs" class="item">بلاگ</NuxtLink>
        </div>
        <div class="flex justify-center items-center w-full mt-5">
          <h6>1401</h6>
          <h6 class="px-3">v0.0.1</h6>
          <img class="px-2" src="@/assets/icons/like.svg" alt="like" />
          <h6 class="px-3">پردازش مسیر آریا</h6>
          <img class="px-3" src="@/assets/icons/copyRight.svg" alt="copy right" />
        </div>
      </div>
    </div>
    <div class="image-conteiner"></div>
  </div>
</template>

<style scoped lang="scss">
.image-conteiner {
  width: 50%;
  height: 100vh;
  background: #0284c7;
}
.form-conteiner {
  width: 50%;
  height: 100vh;
  .otp-input-container {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    font-weight: 300;
    margin-top: 35px;
    .otp-input {
      width: 25px;
      height: 25px;
      text-align: center;
      background: none;
      border-bottom: 1px solid #d9d9d9;
      font-size: 18px;
      font-weight: 300;
      outline: none;
      text-decoration: center;
      margin: 0 10px;
    }
  }

  .form-box {
    width: 100%;
    height: 60vh;
    padding: 0 190px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    .logo {
      width: 160px;
      height: 70px;
      background: url(6.png);
    }
    span {
      font-weight: 500;
      font-size: 16px;
      padding-top: 30px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      color: #7a7a7a;
      padding-top: 10px;
    }
    .link {
      font-weight: 400;
      font-size: 14px;
      color: #0284c7;
    }
  }
  .items-box {
    width: 100%;
    height: 40vh;
    display: flex;
    padding: 25px 0;
    flex-direction: column;
    justify-content: end;
    .item {
      font-size: 12px;
      font-weight: 300;
      color: #d9d9d9;
    }
  }
}
</style>
