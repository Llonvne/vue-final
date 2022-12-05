<template>
  <div>
    <van-cell>
      <!--通过 sticky 标签使得被固定在顶部-->
      <van-sticky>
        <!--使用 row 骨架定制大小-->
        <van-row type="flex" justify="center">
          <!--用户侧边栏-->
          <van-col span="3"><PopUpNav></PopUpNav></van-col>
          <!--搜索功能-->
          <van-col span="18"><SearchComponent></SearchComponent></van-col>
          <!--听歌识曲功能-->
          <van-col span="3"><ListenToKnow></ListenToKnow></van-col>
        </van-row>
      </van-sticky>
    </van-cell>
  </div>
</template>

<script>
import ListenToKnow from "@/components/FindView/ListenToKnow.vue";
import PopUpNav from "@/components/FindView/PopUpNav.vue";
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  name: "FindHeader",
  components: { SearchComponent, PopUpNav, ListenToKnow },
};
</script>

<style scoped></style>
