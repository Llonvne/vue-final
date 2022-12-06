<template>
  <div>
    <v-subheader>{{ title }}</v-subheader>
    <van-cell-group inset>
      <van-cell
        v-for="(item1, index) in items"
        :key="index"
        :url="item1.url"
        center
        size="small"
      >
        <van-card
          :key="index"
          :desc="item1.author"
          :thumb="item1.image"
          :title="item1.name"
        />
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
