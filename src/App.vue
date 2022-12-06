<head>
<title>这一个网站</title>
Access-Control-Allow-Origin:*
</head>
<template>
  <div id="app">
    <v-app>
      <v-main app>
        <router-view></router-view>
      </v-main>
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
