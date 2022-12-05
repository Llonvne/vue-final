import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    music: {
      namespaced: true,
      state: () => ({
        audio: document.createElement("audio"),
      }),
      mutations: {
        play(state) {
          state.audio.play();
        },
        setUrl(state, url) {
          state.audio.src = url;
        },
        pause(state) {
          state.audio.pause();
        },
        reset(state, time) {
          state.audio.currentTime = time;
        },
      },
      actions: {},
    },
    musicBank: {
      namespaced: true,
      state: () => ({
        bank: [
          {
            name: "别",
            author: "薛之谦",
            image: "",
            music: "/music/别.mp3",
          },
          {
            name: "听妈妈的话",
            author: "周杰伦",
            image: "",
            music: "/music/听妈妈的话.mp3",
          },
          {
            name: "温泉",
            author: "许嵩/徐美麟",
            image: "",
            music: "/music/温泉.mp3",
          },
          {
            name: "我想牵着你的手",
            author: "许嵩",
            image: "",
            music: "/music/我想牵着你的手.mp3",
          },
          {
            name: "在你的身边",
            author: "盛哲",
            image: "",
            music: "/music/在你的身边.mp3",
          },
        ],
      }),
      getters: {
        byName: (state) => (name) =>
          state.bank.filter((music) => music.name === name),
      },
    },
    user: {
      namespaced: true,
      state: () => ({
        avatarUrl: "/user/avatar.jpg",
        username: "Llonvne",
      }),
      getters: {
        getAvatar: (state) => state.avatarUrl,
        getUsername: (state) => state.username,
      },
    },
  },
});
