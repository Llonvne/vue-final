<template>
  <div>
    <FindHeader></FindHeader>
    <FindImages :images="images"></FindImages>
    <FindTabBar :tabs="tabs" color="#ee0a24"></FindTabBar>
    <FindRecommend :recommends="recommends" title="推荐歌单"></FindRecommend>
    <FindHighlights
      :items="highlights"
      title="一人一首华语经典"
    ></FindHighlights>
    <FindRecommend
      :recommends="radars"
      title="Llonvne 的雷达歌单"
    ></FindRecommend>
    <FindHighlights :items="popularPodcast" title="热门播客"></FindHighlights>
    <ButtomNav></ButtomNav>
  </div>
</template>

<script>
import FindHeader from "@/components/FindView/FindHeader.vue";
import FindImages from "@/components/FindView/FindImages.vue";
import ImageWithURL from "@/Image";
import FindTab from "@/FindTab";
import FindTabBar from "@/components/FindView/FindTabBar.vue";
import FindRecommend from "@/components/FindView/FindRecommend.vue";
import FindHighlights from "@/components/FindView/FindHighlights.vue";
import FindRecommendItem from "@/FindRecommendItem";
import ButtomNav from "@/components/ButtomNav.vue";

export default {
  name: "FindView",
  methods: {},
  components: {
    ButtomNav,
    FindHighlights,
    FindRecommend,
    FindTabBar,
    FindImages,
    FindHeader,
  },
  data() {
    return {
      value: 1,
      images: [
        new ImageWithURL("/find_1.jpg", "https://www.baidu.com"),
        new ImageWithURL("/find_2.jpg", "https://www.baidu.com"),
      ],
      tabs: [
        new FindTab("star-o", "每日推荐", "https://www.baidu.com"),
        new FindTab("tv-o", "私人FM", "https://www.baidu.com"),
        new FindTab("music", "歌单", "https://www.baidu.com"),
        new FindTab("hot", "排行榜", "https://www.baidu.com"),
        new FindTab("new-o", "一歌一遇", "https://www.4399.com"),
      ],
      recommends: [
        new FindRecommendItem(
          "/rec_1.JPG",
          "节奏控|那些超带感的英文歌",
          "https://www.baidu.com"
        ),
        new FindRecommendItem(
          "/rec_2.jpg",
          "私藏|一定会听第二遍的歌",
          "https://www.baidu.com"
        ),
        new FindRecommendItem(
          "/rec_3.jpg",
          "Rapper超甜｜沉溺在你爱的告白",
          "https://www.baidu.com"
        ),
      ],
      highlights: [
        {
          name: "Lover",
          author: "Taylor Swift",
          image: "/highlights/1.JPG",
          url: "http://www.4399.com",
        },
        {
          name: "Perfect",
          author: "Ed Sheeran",
          image: "/highlights/2.JPG",
          url: "http://www.4399.com",
        },
        {
          name: "Star Walkin",
          author: "Troy Tha Studio Rat",
          image: "/highlights/3.JPG",
          url: "http://www.4399.com",
        },
      ],
      radars: [
        new FindRecommendItem(
          "/ld/1.JPG",
          "听你爱过的《明天过后》｜时光雷达",
          "https://www.baidu.com"
        ),
        new FindRecommendItem(
          "/ld/2.jpg",
          "梁静茹的歌，总令人心动｜华语私人雷达",
          "https://www.baidu.com"
        ),
        new FindRecommendItem(
          "/ld/3.jpg",
          "AFMC黑子新鲜发型趁热听｜新歌雷达",
          "https://www.baidu.com"
        ),
      ],
      popularPodcast: [
        {
          name: "甄嬛传皇上rap",
          author: "甄嬛传rap",
          image: "/popularcast/1.JPG",
          url: "http://www.4399.com",
        },
        {
          name: "始祖尤弥尔",
          author: "动漫语录",
          image: "/popularcast/2.JPG",
          url: "http://www.4399.com",
        },
        {
          name: "王者荣耀 王昭君皮肤应约",
          author: "存一些没有的歌",
          image: "/popularcast/3.JPG",
          url: "http://www.4399.com",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
