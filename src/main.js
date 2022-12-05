import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 全局引入 Vant 依赖
import Vant from "vant";
import "vant/lib/index.css";
import vuetify from "./plugins/vuetify";
Vue.use(Vant);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
