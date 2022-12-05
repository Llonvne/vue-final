<template>
  <div>
    <van-grid :border="false" :column-num="tabs.length">
      <van-grid-item v-for="(tab, index) in tabs" :key="index">
        <van-icon :name="tab.iconName"></van-icon>
        <a :href="tab.url">
          <div
            :style="{
              fontSize: '10px',
              color: '#7f7f7f',
            }"
          >
            {{ tab.text }}
          </div>
        </a>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "FindTabBar",
  props: ["tabs"],
};
</script>

<style scoped></style>
