<template>
  <v-footer app>
    <div v-if="showNowPlay">
      <v-row justify="space-around">
        <v-col align-self="center" cols="2">
          <v-avatar>
            <img :src="curPlay.image" alt="John" />
          </v-avatar>
        </v-col>
        <v-col align-self="center" class="overflow-hidden" cols="8">
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
    };
  },
  computed: {
    ...mapGetters({
      curPlay: "music/curplay",
      audio: "music/audio",
      current: "music/current",
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
  },
};
</script>

<style scoped></style>
