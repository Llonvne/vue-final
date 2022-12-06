<template>
  <div>
    <SearchComponent hidden="true"></SearchComponent>
    <PopUpNav hidden="true"></PopUpNav>
    <van-share-sheet
      v-model="showShare"
      :options="options"
      title="立即分享给好友"
      @select="onSelect"
    />
    <v-app-bar elevation="3" text>
      <v-btn text>
        <van-icon
          name="wap-nav"
          @click="$store.commit('popupnav/setShowNav', true)"
        ></van-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-badge
        :content="content"
        :value="content"
        color="red"
        offset-y="50"
        overlap
      >
        <v-avatar>
          <img :src="$store.getters['user/getAvatar']" alt="John" />
        </v-avatar>
      </v-badge>
      <v-spacer></v-spacer>
      <v-btn text @click="$store.commit('search/setShowSearch', true)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> 听你想听</v-card-title>

            <v-card-subtitle>随时随地,听你想听</v-card-subtitle>

            <v-card-actions>
              <v-btn text @click="$store.commit('search/setShowSearch', true)">
                Search Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="#e03230" dark max-width="400">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">我喜欢的音乐</v-card-title>

                <v-card-subtitle
                  >{{ $store.getters["musicBank/bank"].length }}首
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="play(item)"
                  >
                    LISTEN NOW
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="$store.getters['musicBank/bank'][0].image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>TOP 10 Vae Xu</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> 许嵩十佳</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>素颜</div>

              <div>有何不可</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text @click="showShare = true">
                Share
              </v-btn>

              <v-btn color="orange" text> Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card class="mx-auto" color="#26c6da" dark max-width="400">
            <v-card-title>
              <v-icon large left> mdi-twitter</v-icon>
              <span class="text-h6 font-weight-light">QUOTE</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              "音乐可以称做是人类的万能语言，人类的感情用这种语言能够向任何心灵说话，被一切人理解。"
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    :src="$store.getters['user/getAvatar']"
                    alt=""
                    class="elevation-6"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Llonvne</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1"> mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    height="40px"
                    icon
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="play(item)"
                  >
                    PLAY NOW
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-alert type="success">已经到底啦～</v-alert>
        </v-col>
      </v-row>
    </v-container>

    <ButtomNav></ButtomNav>
  </div>
</template>

<script>
import ButtomNav from "@/components/ButtomNav.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import PopUpNav from "@/components/FindView/PopUpNav.vue";

export default {
  name: "MyView",
  components: { PopUpNav, SearchComponent, ButtomNav },
  methods: {
    play(item) {
      console.log(this.$store.getters["musicBank/byName"](item.title)[0].music);
      this.$store.commit(
        "music/setUrl",
        this.$store.getters["musicBank/byName"](item.title)[0]
      );
      this.$store.commit("music/play");
    },
  },
  data() {
    return {
      showNav: false,
      content: 99,
      show: false,
      items: [
        {
          color: "#1F7087",
          src: this.$store.getters["musicBank/byName"]("我想牵着你的手")[0]
            .image,
          title: "我想牵着你的手",
          music: this.$store.getters["musicBank/byName"]("温泉")[0],
        },
        {
          color: "#C3D9E1",
          src: this.$store.getters["musicBank/byName"]("温泉")[0].image,
          title: "温泉",
          artist: "许嵩",
        },
        {
          color: "#BFA992",
          src: this.$store.getters["musicBank/byName"]("在你的身边")[0].image,
          title: "在你的身边",
          artist:
            this.$store.getters["musicBank/byName"]("在你的身边")[0].author,
        },
        {
          color: "#AFAFAF",
          src: this.$store.getters["musicBank/byName"]("别")[0].image,
          title: "别",
          artist: this.$store.getters["musicBank/byName"]("别")[0].author,
        },
        {
          color: "#D6D6D4",
          src: this.$store.getters["musicBank/byName"]("听妈妈的话")[0].image,
          title: "听妈妈的话",
          artist:
            this.$store.getters["musicBank/byName"]("听妈妈的话")[0].author,
        },
      ],
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
      // eslint-disable-next-line no-unused-vars
      onSelect(option) {
        this.showShare = false;
      },
    };
  },
};
</script>

<style scoped></style>
