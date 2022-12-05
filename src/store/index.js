import Vue from "vue";
import Vuex from "vuex";
import getHotList from "../api/hotlist";

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
            image: "/cover/别.jpg",
            music: "/music/别.mp3",
          },
          {
            name: "听妈妈的话",
            author: "周杰伦",
            image: "/cover/听妈妈的话.jpg",
            music: "/music/听妈妈的话.mp3",
          },
          {
            name: "温泉",
            author: "许嵩/徐美麟",
            image: "/cover/温泉.jpg",
            music: "/music/温泉.mp3",
          },
          {
            name: "我想牵着你的手",
            author: "许嵩",
            image: "/cover/我想牵着你的手.jpg",
            music: "/music/我想牵着你的手.mp3",
            tag: "爆火",
          },
          {
            name: "在你的身边",
            author: "盛哲",
            image: "/cover/在你的身边.jpg",
            music: "/music/在你的身边.mp3",
          },
        ],
      }),
      getters: {
        byName: (state) => (name) =>
          state.bank.filter((music) => music.name.includes(name)),
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
    search: {
      namespaced: true,
      state: () => ({
        showSearch: false,
        history: [],
      }),
      getters: {
        getShowSearch: (state) => state.showSearch,
        getHistory: (state) => state.history,
      },
      mutations: {
        setShowSearch(state, showSearch) {
          state.showSearch = showSearch;
        },
        addHistory(state, newSearch) {
          if (state.history.length >= 5) {
            state.history = state.history.slice(1);
          }
          state.history.push(newSearch);
          const nonrepeat = [];
          for (let i = 0; i < state.history.length; i++) {
            if (!nonrepeat.includes(state.history[i])) {
              nonrepeat.push(state.history[i]);
            }
          }
          state.history = nonrepeat;
        },
      },
    },
    hotlist: {
      state: () => ({
        search: getHotList(),
        topic: [],
        news: [],
        origin: [],
      }),
      getters: {
        getSearch: (state) => state.search,
      },
    },
  },
});
