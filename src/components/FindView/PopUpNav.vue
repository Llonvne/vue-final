<template>
  <div>
    <van-cell @click="showPopup" icon="wap-nav"></van-cell>
    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%', width: '80%' }"
      round
    >
      <div>
        <van-row type="flex" align="center">
          <van-col span="4" offset="1">
            <van-image round :src="$store.getters['user/getAvatar']">
            </van-image>
          </van-col>
          <van-col span="5" offset="2"
            >{{ $store.getters["user/getUsername"] }} >
          </van-col>
          <van-col span="4" offset="7"
            ><van-icon name="scan" size="30px"
          /></van-col>
        </van-row>

        <van-cell-group inset>
          <van-cell title="消息中心" value="" is-link
            ><van-badge :content="200" max="99" />
          </van-cell>
          <van-cell title="云贝中心" value="签到 " is-link />
          <van-cell title="创作者中心" value="" is-link />
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "PopUpNav",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped></style>
