<head>
<title>这一个网站</title>
Access-Control-Allow-Origin:*
</head>
<template>
  <div id="app">
    <v-app>
      <!--显示内容，作为下面 van-tabber-item to 的出口-->
      <router-view></router-view>
      <v-system-bar app>
        <nav>
          <!-- 通过 v-model 绑定到 active 变量，用于检测检测页面切换-->
          <!-- 通过 van-tabbar 实现底边栏效果-->
          <van-tabbar
            v-model="active"
            active-color="#ee0a24"
            inactive-color="#000"
          >
            <van-tabbar-item icon="music-o" replace to="/find"
              >发现
            </van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/my"
              >我的
            </van-tabbar-item>
            <van-tabbar-item icon="like-o" replace to="/star"
              >关注
            </van-tabbar-item>
          </van-tabbar>
        </nav>
      </v-system-bar>
    </v-app>
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
