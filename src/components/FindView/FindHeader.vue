<template>
  <div>
    <van-sticky>
      <!--使用 row 骨架定制大小-->
      <van-row justify="center" type="flex">
        <!--用户侧边栏-->
        <van-col span="3">
          <PopUpNav></PopUpNav>
        </van-col>
        <!--搜索功能-->
        <van-col span="18">
          <SearchComponent></SearchComponent>
        </van-col>
        <!--听歌识曲功能-->
        <van-col span="3">
          <ListenToKnow></ListenToKnow>
        </van-col>
      </van-row>
    </van-sticky>
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
