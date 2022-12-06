<template>
  <div>
    <van-search
      v-if="!hidden"
      disabled
      placeholder="请输入搜索关键词"
      @click="$store.commit('search/setShowSearch', true)"
    />

    <van-popup
      :style="{ height: '100%' }"
      :value="$store.getters['search/getShowSearch']"
      get-container="#app"
      position="bottom"
    >
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
        @focus="showres = true"
        @focusout="showres = false"
        @search="onSearch"
      />

      <van-cell-group v-if="value">
        <van-card
          v-for="(music, index) in result"
          :key="index"
          :desc="music.author"
          :tag="music.tag"
          :thumb="music.image"
          :title="music.name"
          @click="play(music)"
        />
      </van-cell-group>

      <div v-else>
        <FindTabBar :tabs="tabs" color="#1989fa"></FindTabBar>
        <div>历史</div>
        <v-chip-group>
          <v-chip
            v-for="(item, index) in $store.getters['search/getHistory']"
            :key="index"
            @click="doSearch(item)"
            >{{ item }}
          </v-chip>
        </v-chip-group>

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
  props: {
    hidden: {
      default: false,
    },
  },
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
      snackbar: false,
      text: "",
      showres: false,
    };
  },
  methods: {
    doSearch(value) {
      this.value = value;
      this.onSearch();
    },
    left() {
      this.$store.commit("search/setShowSearch", false);
      this.value = "";
      this.result = [];
    },
    onSearch() {
      if (this.value === "") {
        return;
      }
      this.result = this.$store.getters["musicBank/byName"](this.value);
      if (this.result.length >= 1) {
        this.$store.commit("search/addHistory", this.value);
      }
    },
    play(music) {
      console.log("play..");
      this.$store.commit("music/setUrl", music);
      this.$store.dispatch("music/play");
      this.left();
    },
    onCancel() {
      this.result = [];
    },
  },
  watch: {
    value(newValue) {
      this.doSearch(newValue);
    },
  },
};
</script>

<style scoped></style>
