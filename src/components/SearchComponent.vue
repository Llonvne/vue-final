<template>
  <div>
    <van-search
      disabled
      placeholder="请输入搜索关键词"
      @click="$store.commit('search/setShowSearch', true)"
    />

    <van-popup v-model="search" :style="{ height: '100%' }" position="bottom">
      <van-nav-bar title="搜索" @click-left="left">
        <template #left>
          <van-icon color="#A3A3A3" name="arrow-left" size="18" />
        </template>
      </van-nav-bar>

      <van-search
        v-model="value"
        autofocus
        placeholder="请输入搜索关键词"
        @cancel="onCancel"
        @search="onSearch"
      />

      <van-cell-group v-if="value.trim() !== ''">
        <van-card
          v-for="(music, index) in result"
          :key="index"
          :desc="music.author"
          :tag="music.tag"
          :thumb="music.image"
          :title="music.name"
          @click="play(music.music)"
        />
      </van-cell-group>

      <div v-else>
        <FindTabBar :tabs="tabs" color="#1989fa"></FindTabBar>
        <div>历史</div>
        <van-button
          v-for="(history, index) in $store.getters['search/getHistory']"
          :key="index"
          color="#202023"
          hairline="true"
          plain
          round
          size="small"
          type="info"
          @click="doSearch(history)"
        >
          {{ history }}
        </van-button>

        <van-tabs v-model="active">
          <van-tab title="热搜榜">
            <HotList :datasource="$store.getters.getSearch"></HotList>
          </van-tab>
          <van-tab title="原创榜">
            <HotList :datasource="$store.getters.getSearch"></HotList>
          </van-tab>
          <van-tab title="新歌榜">
            <HotList :datasource="$store.getters.getSearch"></HotList>
          </van-tab>
          <van-tab title="畅销榜">
            <HotList :datasource="$store.getters.getSearch"></HotList>
          </van-tab>
        </van-tabs>
      </div>
    </van-popup>
  </div>
</template>

<script>
import FindTab from "@/FindTab";
import FindTabBar from "@/components/FindView/FindTabBar.vue";
import HotList from "@/components/HotList.vue";

export default {
  name: "SearchComponent",
  components: { HotList, FindTabBar },
  data() {
    return {
      value: "",
      result: [],
      tabs: [
        new FindTab("star-o", "歌手", "https://www.baidu.com"),
        new FindTab("tv-o", "曲分", "https://www.baidu.com"),
        new FindTab("music", "专区", "https://www.baidu.com"),
        new FindTab("hot", "识曲", "https://www.baidu.com"),
      ],
      active: 0,
    };
  },
  computed: {
    search: {
      get() {
        return this.$store.getters["search/getShowSearch"];
      },
      set(val) {
        this.$store.commit("search/setShowSearch", val);
      },
    },
  },
  methods: {
    doSearch(value) {
      this.value = value;
      this.onSearch();
    },
    left() {
      this.search = false;
      this.value = "";
      this.result = [];
    },
    onSearch() {
      this.$store.commit("search/addHistory", this.value);
      this.result = this.$store.getters["musicBank/byName"](this.value);
    },
    play(url) {
      this.$store.commit("music/setUrl", url);
      this.$store.commit("music/play");
    },
    onCancel() {
      this.value = "";
      this.result = [];
    },
  },
};
</script>

<style scoped></style>
