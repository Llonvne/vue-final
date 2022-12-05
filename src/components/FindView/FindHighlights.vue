<template>
  <div>
    <div style="color: #7f7f7f; font-size: 14px">{{ title }}></div>
    <van-cell-group inset>
      <van-cell
        size="small"
        center
        v-for="(item, index) in items"
        :key="index"
        :url="item.url"
      >
        <van-card :desc="item.author" :title="item.name" :thumb="item.image" />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "FindHighlights",
  components: {},
  props: ["items", "title"],
};
</script>

<style scoped></style>
