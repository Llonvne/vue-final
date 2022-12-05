<template>
  <div>
    <a :href="item.url">
      <van-image :src="item.image"></van-image>
      <div class="text">{{ item.text }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "FindRecommendItem",
  props: ["item"],
};
</script>

<style scoped>
.text {
  color: #7f7f7f;
  font-size: 12px;
}
</style>
