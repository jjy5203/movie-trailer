<template>
<<<<<<< HEAD
  <div class="user-page">
    <div class="userinfo-wrapper">
      <div class="avatar">
        <img src="@/assets/images/user.png" width="32" />
      </div>
      <div class="info">
        <span class="text">{{ user.email }}</span>
        <span class="text">{{ user.userName }}</span>
      </div>
      <i class="iconfont icon-left" @click="back" />
    </div>
    <div class="menu-wrapper">
      <ul class="menus">
        <li class="menu-item" @click="redirect(0)">
          <i class="iconfont icon-user1" />
          <span class="text">我的资料 <em>(Blog)</em></span>
          <i class="iconfont icon-right" />
        </li>
        <li class="menu-item" @click="redirect(1)">
          <i class="iconfont icon-collect" />
          <span class="text">我的收藏 <em>(Github)</em></span>
          <i class="iconfont icon-right" />
        </li>
      </ul>
    </div>
    <div class="btn-wrapper">
      <button class="logout-btn" @click="logout">退出</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import axios, { useRequest } from "@/assets/js/request";

export default defineComponent({
  setup() {
    const router = useRouter();

    const { data } = useRequest("/api/user/getInfo", {
      initialData: { email: "-", userName: "" },
      onFail() {
        router.replace("/login");
      }
    });

    const logout = async () => {
      await axios.post("/api/user/logout");
=======
  <Transition name="fade">
    <div v-if="user" class="user">
      <div class="userinfo-wrapper">
        <div class="avatar">
          <img src="~common/images/user.png" width="32" />
        </div>
        <div class="info">
          <span class="text">{{ user.email }}</span>
          <span class="text">{{ user.username }}</span>
        </div>
        <i class="iconfont icon-left" @click="back" />
      </div>
      <div class="menu-wrapper">
        <ul class="menus">
          <li class="menu-item" @click="redirect(0)">
            <i class="iconfont icon-user1" />
            <span class="text">我的资料 <em>(Blog)</em></span>
            <i class="iconfont icon-right" />
          </li>
          <li class="menu-item" @click="redirect(1)">
            <i class="iconfont icon-collect" />
            <span class="text">我的收藏 <em>(Github)</em></span>
            <i class="iconfont icon-right" />
          </li>
        </ul>
      </div>
      <div class="btn-wrapper">
        <button class="logout-btn" @click="logout">退出</button>
      </div>
    </div>
  </Transition>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import axios from "@/common/js/axios";

export default {
  name: "User",
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed(() => store.state.user);

    const logout = async () => {
      await axios.post("/api/user/logout");
      store.dispatch("setUserInfo", {});
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      router.replace("/");
    };

    const back = () => {
      window.history.back();
    };

<<<<<<< HEAD
    const redirect = (idx: number) => {
      const url = ["http://cvnull.com/", "https://github.com/lhz960904"];
      location.href = url[idx];
    };

    return {
      user: data,
      back,
      redirect,
      logout
    };
  }
});
</script>

<style lang="stylus" scoped>
.user-page
  page-fixed();
  .userinfo-wrapper
    layout-flex(center, center);
    height: 175px;
    background: url('~@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    .avatar
      layout-flex(center, center);
      width: 67px;
      height: 67px;
      background: $color-background;
      border-radius: 50%;
    .info
      layout-flex();
      flex-direction: column;
      padding-left: 10px;
      font-size: $font-size-medium;
      color: $color-white;
=======
    const redirect = idx => {
      const url = ["http://ihaoze.cn/", "https://github.com/lhz960904"];
      location.href = url[idx];
    };

    return { logout, user, back, redirect };
  }
};
</script>

<style lang="stylus" scoped>
.user
  page-fixed()
  .userinfo-wrapper
    display: flex;
    justify-content: center;
    align-items: center;
    height: 175px;
    background: url('~common/images/background.jpg') no-repeat;
    background-size: cover;
    .avatar
      display: flex;
      align-items: center;
      justify-content: center;
      width: 67px;
      height: 67px;
      background: #eee;
      border-radius: 50%;
    .info
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      font-size: 18px;
      color: #fff;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      .text
        flex: 1;
        line-height: 33px;
    .icon-left
      position: absolute;
      top: 10px;
      left: 10px;
<<<<<<< HEAD
      font-size: $font-size-extra-large;
      color: $color-white;
=======
      font-size: 25px;
      color: #fff;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  .menu-wrapper
    .menus
      padding-left: 10px;
      .menu-item
        padding: 10px;
<<<<<<< HEAD
        font-size: $font-size-medium;
        line-height: 25px;
        list-style: none;
        border-bottom: $bordered;
        color: $color-primary;
        em
          font-size: $font-size-small;
          color: $$color-text-regular;
          font-weight: bold;
        .iconfont
          vertical-align: text-bottom;
          font-size: $font-size-extra-large;
          color: $color-text-secondary;
=======
        font-size: 18px;
        line-height: 25px;
        list-style: none;
        border-bottom: 1px solid #d8d8d8;
        color: #333;
        em
          font-size: 13px;
          color: #777;
          font-weight: bold;
        .iconfont
          vertical-align: text-bottom;
          font-size: 25px;
          color: #999;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
          margin-right: 8px;
        .count
          float: right;
          margin-right: 5px;
<<<<<<< HEAD
          color: $color-text-secondary;
          font-size: $font-size-large;
=======
          color: #999;
          font-size: 15px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
        .icon-right
          font-size: 20px;
          float: right;
  .btn-wrapper
    padding: 20px;
    .logout-btn
      width: 100%;
      height: 48px;
      line-height: 48px;
<<<<<<< HEAD
      font-size:$font-size-medium;
      border: none;
      border-radius: 48px;
      color: $color-white;
      background-color: $color-danger;
      outline: none;
=======
      font-size: 18px;
      border: none;
      border-radius: 48px;
      color: #fff;
      background-color: #f13900;
      outline: none;
.fade-enter-active, .fade-leave-active
  transition: all .5s;
.fade-enter-from, .fade-leave-to
  transform: translateX(100%);
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
