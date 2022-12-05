<template>
  <div>
    <van-share-sheet
      v-model="showShare"
      :options="options"
      title="立即分享给好友"
      @select="onSelect"
    />
    <van-cell icon="wap-nav" @click="showPopup"></van-cell>
    <van-popup
      v-model="show"
      :style="{ height: '100%', width: '80%' }"
      position="left"
      round
    >
      <div>
        <br />
        <van-row align="center" type="flex">
          <van-col offset="1" span="4">
            <van-image :src="$store.getters['user/getAvatar']" round>
            </van-image>
          </van-col>
          <van-col offset="2" span="5"
            >{{ $store.getters["user/getUsername"] }} >
          </van-col>
          <van-col offset="7" span="4">
            <van-icon name="scan" size="30px" />
          </van-col>
        </van-row>
        <br />
        <van-cell-group inset>
          <van-cell icon="chat-o" is-link title="消息中心" value="">
            <van-badge :content="200" max="99" />
          </van-cell>
          <van-cell
            icon="cart-circle-o"
            is-link
            title="云贝中心"
            value="签到 "
          />
          <van-cell icon="music-o" is-link title="创作者中心" value="" />
        </van-cell-group>

        <van-cell-group inset title="其他">
          <van-cell icon="setting-o" is-link title="设置"></van-cell>
          <van-cell icon="eye-o" title="暗色模式">
            <template #right-icon>
              <van-switch v-model="blackMode" size="24" />
            </template>
          </van-cell>
          <van-cell icon="clock-o" is-link title="定时关闭"></van-cell>
          <van-cell icon="flower-o" is-link title="个性装扮"></van-cell>
          <van-cell
            icon="down"
            is-link
            title="边听边存"
            value="已开启"
          ></van-cell>
          <van-cell icon="smile-o" is-link title="添加Siri捷径"></van-cell>
          <van-cell icon="delete-o" is-link title="音乐黑名单"></van-cell>
          <van-cell
            icon="shield-o"
            is-link
            title="青少年模式"
            value="未开启"
          ></van-cell>
          <van-cell icon="gem-o" is-link title="音乐闹钟"></van-cell>
        </van-cell-group>
        <br />
        <van-cell-group inset>
          <van-cell icon="service-o" is-link title="我的客服"></van-cell>
          <van-cell
            icon="share-o"
            is-link
            title="分享Llonvne音乐"
            @click="showShare = true"
          ></van-cell>
          <van-cell
            icon="other-pay"
            is-link
            title="个人信息收集与使用清单"
          ></van-cell>
          <van-cell
            icon="exchange"
            is-link
            title="个人信息与第三方共享清单"
          ></van-cell>
          <van-cell
            icon="closed-eye"
            is-link
            title="个人信息与隐私保护"
          ></van-cell>
          <van-cell icon="about-o" is-link title="关于"></van-cell>
        </van-cell-group>
        <van-row>
          <van-col span="2"></van-col>
          <van-col span="20">
            <v-alert color="#d72e34" dense outlined text type="warning"
              >退出登入
            </v-alert>
          </van-col>
          <van-col span="2"></van-col>
        </van-row>
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
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
      showShare: false,
      blackMode: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    // eslint-disable-next-line no-unused-vars
    onSelect(option) {
      this.showShare = false;
    },
  },
};
</script>

<style scoped></style>
