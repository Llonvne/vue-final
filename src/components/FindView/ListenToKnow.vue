<template>
  <div>
    <van-cell @click="showPopup" icon="service-o"></van-cell>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '100%' }"
      closeable
      close-icon-position="left"
      >内容</van-popup
    >
  </div>
</template>

<script>
export default {
  name: "ListenToKnow",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped></style>
