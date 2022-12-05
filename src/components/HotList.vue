<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-card
      v-for="(music, index) in result"
      :key="index"
      :tag="(index + 1).toString()"
      :thumb="music.img"
      :title="music.name"
    />
  </van-list>
</template>

<script>
export default {
  name: "HotList",
  props: ["datasource"],
  data() {
    return {
      result: [],
      loading: false,
      finished: false,
      count: 0,
    };
  },
  methods: {
    onLoad() {
      console.log("loading ...");
      if (this.count > this.datasource.length - 20) {
        this.count = 0;
      }
      let newAppend = [];
      for (let i = this.count; i < this.count + 20; i++) {
        newAppend.push(this.datasource[i]);
      }
      newAppend = randomize(newAppend);

      for (let i = 0; i < newAppend.length; i++) {
        this.result.push(newAppend[i]);
      }
      this.count += 20;
      this.loading = false;
    },
  },
};

function randomize(values) {
  let index = values.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (index !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
}
</script>

<style scoped></style>
