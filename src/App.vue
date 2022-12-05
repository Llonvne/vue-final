<template>
  <div id="app">
    <!--显示内容-->
    <router-view></router-view>
    <nav>
      <!-- 通过 v-model 绑定到 active 变量，用于检测检测页面切换-->
      <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="music-o" replace to="/find"
          >发现</van-tabbar-item
        >
        <van-tabbar-item icon="user-o" replace to="/my">我的</van-tabbar-item>
        <van-tabbar-item icon="like-o" replace to="/star">关注</van-tabbar-item>
      </van-tabbar>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
