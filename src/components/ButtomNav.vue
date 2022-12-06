<template>
  <div>
    <MusicBar></MusicBar>
    <v-bottom-navigation v-model="value" app grow height="auto">
      <v-btn to="/find">
        <span :class="getClass(0)">发现</span>

        <v-icon :color="getColor(0)">mdi-music-circle-outline</v-icon>
      </v-btn>

      <v-btn to="/my">
        <span :class="getClass(1)">我的</span>

        <v-icon :color="getColor(1)">mdi-account</v-icon>
      </v-btn>

      <v-btn to="/star">
        <span :class="getClass(2)">关注</span>

        <v-icon :color="getColor(2)">mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import MusicBar from "@/components/MusicBar.vue";

export default {
  name: "ButtomNav",
  components: { MusicBar },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    getColor(index) {
      if (index === this.value) {
        return "red darken-2";
      } else {
        return "grey darken-3";
      }
    },
    getClass(index) {
      if (index === this.value) {
        return "red1";
      } else {
        return "grey1";
      }
    },
  },
};
</script>

<style scoped>
.red1 {
  color: darkred;
}

.grey1 {
  color: #7f7f7f;
}
</style>
