<template>
  <div>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
    <van-cell @click="showPopup" icon="wap-nav"></van-cell>
    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%', width: '80%' }"
      round
    >
      <div>
        <br />
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
        <br />
        <van-cell-group inset>
          <van-cell title="消息中心" value="" is-link icon="chat-o"
            ><van-badge :content="200" max="99" />
          </van-cell>
          <van-cell
            title="云贝中心"
            value="签到 "
            is-link
            icon="cart-circle-o"
          />
          <van-cell title="创作者中心" value="" is-link icon="music-o" />
        </van-cell-group>

        <van-cell-group inset title="其他">
          <van-cell is-link title="设置" icon="setting-o"></van-cell>
          <van-cell title="暗色模式" icon="eye-o">
            <template #right-icon>
              <van-switch size="24" v-model="blackMode" />
            </template>
          </van-cell>
          <van-cell is-link title="定时关闭" icon="clock-o"></van-cell>
          <van-cell is-link title="个性装扮" icon="flower-o"></van-cell>
          <van-cell
            is-link
            title="边听边存"
            value="已开启"
            icon="down"
          ></van-cell>
          <van-cell is-link title="添加Siri捷径" icon="smile-o"></van-cell>
          <van-cell is-link title="音乐黑名单" icon="delete-o"></van-cell>
          <van-cell
            is-link
            title="青少年模式"
            value="未开启"
            icon="shield-o"
          ></van-cell>
          <van-cell is-link title="音乐闹钟" icon="gem-o"></van-cell>
        </van-cell-group>
        <br />
        <van-cell-group inset>
          <van-cell is-link title="我的客服" icon="service-o"></van-cell>
          <van-cell
            is-link
            title="分享Llonvne音乐"
            icon="share-o"
            @click="showShare = true"
          ></van-cell>
          <van-cell
            is-link
            title="个人信息收集与使用清单"
            icon="other-pay"
          ></van-cell>
          <van-cell
            is-link
            title="个人信息与第三方共享清单"
            icon="exchange"
          ></van-cell>
          <van-cell
            is-link
            title="个人信息与隐私保护"
            icon="closed-eye"
          ></van-cell>
          <van-cell is-link title="关于" icon="about-o"></van-cell>
        </van-cell-group>

        <br />

        <van-row>
          <van-col span="2"></van-col>
          <van-col span="20">
            <van-button color="#7232dd" plain block
              >退出登入</van-button
            ></van-col
          >
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
