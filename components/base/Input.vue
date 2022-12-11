<template>
  <div class="base-input-container">
    <div class="icon-container">
      <slot name="icon"></slot>
    </div>
    <input
      ref="input"
      class="base-input"
      :class="{ error: hasError }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="hasError" class="text-error">{{ textError }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "",
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
    required: true,
  },
  hasError: {
    type: Boolean,
    default: false,
    required: true,
  },
  textError: {
    type: String,
    default: "",
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.base-input-container {
  display: flex;
  flex-direction: column;
  .icon-container {
    display: flex;
    position: absolute;
    z-index: 1;
    width: 12px;
    height: 13px;
    margin: 12px;
  }
  .base-input {
    width: 100%;
    height: 40px;
    outline-color: #0284c7;
    padding: 0 30px;
    border-radius: 5px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
  }
  .error {
    border: 1px solid #ff4d4f;
  }
  .text-error {
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 21px;
    color: #ff4d4f;
  }
}
</style>
