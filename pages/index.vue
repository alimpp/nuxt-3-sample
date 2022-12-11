<script lang="ts" setup>
import { useApplicationUser } from "~/stores/applicationUser";
const userApplication = useApplicationUser();
const token = ref(userApplication.token);
const phoneNumber = ref(userApplication.phoneNumber);

definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});
</script>

<template setup>
  <div class="w-full px-5 pt-5">
    {{ token }}
    <hr>
   mobile : {{ phoneNumber }}
  </div>
</template>

<style></style>
