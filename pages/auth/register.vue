<script setup>
import { ref } from "vue";
import { useAuth } from "~~/stores/auth";
import { useApplicationUser } from "~~/stores/applicationUser";

const register = useAuth();
const applicationUser = useApplicationUser()
const phoneNumber = ref("");
const recaptchaToken = ref("recaptchaToken");

function registerUser () {
  applicationUser.setPhoneNumber(phoneNumber)
  register.registerUser({ mobile: phoneNumber.value, token: recaptchaToken })
  navigateTo('/auth/otp')
}

</script>

<template>
  <div class="flex flex-row w-full">
    <div class="form-conteiner">
      <div class="form-box">
        <img class="logo" src="@/assets/icons/olestickLogo.svg" alt="logo" />
        <div class="flex mt-3">
          <span>{{$t('pages.register.sign_in')}}</span> 
          <span class="px-1">/</span>
          <span>{{$t('pages.register.sign_up')}}</span>
        </div>
        <div class="flex">
          <p>{{$t('pages.register.please_enter_phone_number')}}</p>
        </div>
        <BaseInput class="mt-5" placeholder="" v-model="phoneNumber">
          <template #icon>
            <img class="icon" src="@/assets/icons/mobile.svg" />
          </template>
        </BaseInput>
        <BaseButton
          @click.prevent="registerUser"
          class="mt-5"
          :text="$t('pages.register.submit')"
        ></BaseButton>
        <NuxtLink class="link pt-5" to="/auth/login">{{$t('pages.register.enter_with_password')}}</NuxtLink>
      </div>
      <div class="items-box">
        <div class="flex justify-center items-center w-full mt-5">
          <NuxtLink to="/blogs" class="px-5 item">صفحه اصلی</NuxtLink>
          <NuxtLink to="/blogs" class="item">بلاگ</NuxtLink>
        </div>
        <!-- <div class="flex justify-center items-center w-full mt-5">
          <h6>1401</h6>
          <h6 class="px-3">v0.0.1</h6>
          <img class="px-2" src="@/assets/icons/like.svg" alt="like" />
          <h6 class="px-3">پردازش مسیر آریا</h6>
          <img class="px-3" src="@/assets/icons/copyRight.svg" alt="copy right" />
        </div> -->
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
    // span {
    //   font-weight: 500;
    //   font-size: 16px;
    //   padding-top: 30px;
    // }
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
