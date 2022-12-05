<template>
  <div>
    <div style="color: #7f7f7f; font-size: 14px">{{ title }}></div>
    <van-grid :border="false" :column-num="recommends.length">
      <van-grid-item v-for="(item, index) in recommends" :key="index">
        <FindRecommendItem :item="item"></FindRecommendItem>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import FindRecommendItem from "@/components/FindView/FindRecommendItem.vue";

export default {
  name: "FindRecommend",
  components: { FindRecommendItem },
  props: ["title", "recommends"],
};
</script>

<style scoped></style>
