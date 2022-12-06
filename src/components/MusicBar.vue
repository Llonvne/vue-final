<template>
  <v-footer app>
    <div v-if="showNowPlay">
      <v-expand-transition>
        <div v-if="showBigBar">
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card color="C7D8E0" dark max-width="400">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="$store.getters['music/curplay'].name"
                      ></v-card-title>

                      <v-card-subtitle
                        v-text="$store.getters['music/curplay'].author"
                      ></v-card-subtitle>

                      <v-card-actions>
                        <v-slider
                          :max="$store.getters['music/musicLength']"
                          :value="parseInt(currentSec)"
                          hint="进度"
                          min="0"
                          @change="onChangeSilder"
                        ></v-slider>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img
                        :src="$store.getters['music/curplay'].image"
                      ></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col> </v-row
          ></v-container>
        </div>
      </v-expand-transition>

      <v-row justify="space-around">
        <v-col align-self="center" cols="2" @click="showBigBar = !showBigBar">
          <v-avatar>
            <img :src="curPlay.image" alt="John" />
          </v-avatar>
        </v-col>
        <v-col
          align-self="center"
          class="overflow-hidden"
          cols="8"
          @click="showBigBar = !showBigBar"
        >
          <v-chip
            >{{ current }} @ {{ curPlay.name }} -
            {{ curPlay.author }}
          </v-chip>
        </v-col>
        <v-col align-self="center" cols="1" @click="play_pause">
          <v-icon v-show="audio.paused" size="30px">{{ playIcon }}</v-icon>
          <div v-show="!audio.paused" size="30px">
            <v-progress-circular
              :value="$store.getters['music/playrate']"
              color="red"
            >
            </v-progress-circular>
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <v-row justify="start">
        <v-col cols="3">
          <v-avatar>
            <img :src="$store.getters['user/getAvatar']" alt="John" />
          </v-avatar>
        </v-col>
        <v-col align-self="center" cols="9">
          <v-chip> 你还没有开始听歌哦~</v-chip>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MusicBar",
  data() {
    return {
      playIcon: "mdi-arrow-right-drop-circle-outline",
      pauseIcon: "mdi-pause-box",
      showBigBar: false,
    };
  },
  computed: {
    ...mapGetters({
      curPlay: "music/curplay",
      audio: "music/audio",
      current: "music/current",
      currentSec: "music/currentSec",
    }),
    showNowPlay() {
      return this.curPlay.name !== undefined;
    },
  },
  methods: {
    play_pause() {
      if (this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
    onChangeSilder(event) {
      this.$store.commit("music/reset", event);
    },
  },
};
</script>

<style scoped></style>
