<template>
  <header class="header">
    <div class="logo">
      <i class="back" />
    </div>
    <div class="tabs">
<<<<<<< HEAD
      <div class="tab-item" v-for="item in tabList" :key="item.name">
        <RouterLink :to="item.link">{{ item.name }}</RouterLink>
      </div>
    </div>
    <RouterLink class="user" to="/user">
      <i class="iconfont icon-user" />
    </RouterLink>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",
  setup() {
    const tabList = [
      { name: "首页", link: "/recommend" },
      { name: "分类", link: "/category" },
      { name: "榜单", link: "/rank" },
      { name: "搜索", link: "/search" }
    ];

    return {
      tabList
    };
  }
});
=======
      <div class="item">
        <RouterLink to="/recommend">首页</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/category">分类</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/rank">榜单</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/search">搜索</RouterLink>
      </div>
    </div>
    <div class="user" @click="onClick">
      <i class="iconfont icon-user" />
    </div>
  </header>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "TheHeader",
  setup() {
    /* 用户icon点击 */
    const router = useRouter();
    const onClick = () => {
      router.push("/user");
    };

    return { onClick };
  }
};
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</script>

<style lang="stylus" scoped>
.header
  position: fixed;
  display: flex;
  width: 100%;
  height: $headerHeight;
  line-height: $headerHeight;
<<<<<<< HEAD
  color: $color-text-regular;
  background: $color-theme;
=======
  color: $gray;
  background: $theme-color;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  .logo
    width: 25%;
    padding: 15px;
    box-sizing: border-box;
    .back
      display: block;
      height: 100%;
<<<<<<< HEAD
      background: url('~@/assets/images/logo.png') no-repeat center;
=======
      background: url('~common/images/logo.png') no-repeat center;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      background-size: contain;
  .tabs
    display: flex;
    flex: 1;
<<<<<<< HEAD
    font-size: $font-size-medium;
    .tab-item
=======
    font-size: 17px;
    .item
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      flex: 1;
      text-align: center;
      a
        height: 56px;
<<<<<<< HEAD
        color: $color-text-secondary;
=======
        color: $gray;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
        display: inline-block;
        box-sizing: border-box;
  .user
    width: 15%;
    text-align: center;
    .icon-user
<<<<<<< HEAD
      font-size: $font-size-extra-large;
      color: $color-text-secondary;
  .router-link-active
    font-weight: 700;
    color: $color-white!important;
    border-bottom: 3px solid $color-white;
=======
      font-size: 25px;
  .router-link-active
    font-weight: 700;
    color: $white!important;
    border-bottom: 3px solid #fff;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
