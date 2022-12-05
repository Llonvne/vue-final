<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a :href="image.url"><van-image :src="image.image"></van-image></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "FindImages",
  props: ["images"],
};
</script>

<style scoped></style>
