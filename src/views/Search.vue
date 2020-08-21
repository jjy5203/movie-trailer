<template>
  <div class="search">
<<<<<<< HEAD
    <Scroll>
      <div class="search-input-wrapper">
        <Input v-model="state.keyword" @change="search" />
      </div>
      <div class="search-keys-wrapper">
        <h1 class="title">热门搜索</h1>
        <div class="list">
          <span
            v-for="item in hotSearchKeys"
            :key="item.name"
=======
    <ScrollView :data="state.list">
      <div class="input-wrap">
        <SearchBox ref="searchBox" @input="search" @clear="clear" />
      </div>
      <div class="hotkey-wrap">
        <h1 class="title">热门搜索</h1>
        <div class="list">
          <span
            v-for="item in state.hotKeys"
            :key="item._id"
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
            class="item"
            @click="addQuery(item.name)"
          >
            {{ item.name }}
          </span>
        </div>
      </div>
<<<<<<< HEAD
      <div v-if="state.searchHistory.length" class="search-history-wrapper">
        <h1 class="title">
          <span>历史</span>
          <i class="iconfont icon-clear" @click="state.isShowConfirm = true" />
        </h1>
        <div class="list">
          <div v-for="item in state.searchHistory" :key="item" class="item">
            <i class="iconfont icon-history" />
            <span class="text" @click="addQuery(item)">{{ item }}</span>
            <i class="iconfont icon-del" @click="deleteSearchHistory(item)" />
          </div>
        </div>
      </div>
    </Scroll>
    <div v-show="state.isShow" class="movie-list">
      <Scroll :data="movieList" v-show="movieList.length">
        <Card v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </Scroll>
      <NoResult v-show="!movieList.length" />
    </div>
  </div>
  <Confirm
    v-model="state.isShowConfirm"
    content="是否删除所有搜索历史"
    @confirm="clearSearch"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore, mapMutations } from "vuex";
import { useRequest } from "@/assets/js/request";
import useDebounce from "@/assets/js/useDebounce";

export default defineComponent({
  setup() {
    const store = useStore();

    const state = reactive({
      isShow: false,
      isShowConfirm: false,
      keyword: "",
=======
      <div v-if="state.searchHistory.length" class="history-wrap">
        <div class="title">
          <span>搜索历史</span>
          <i class="iconfont icon-clear" @click="showConfirm" />
        </div>
        <div v-for="item in state.searchHistory" :key="item" class="item">
          <i class="iconfont icon-history" />
          <span class="text" @click="addQuery(item)">{{ item }}</span>
          <i class="iconfont icon-del" @click="deleteSearchHistory(item)" />
        </div>
      </div>
    </ScrollView>
    <div v-show="state.isShow" class="result-wrap">
      <ScrollView :data="state.movieList" v-show="state.movieList.length">
        <Card
          v-for="movie in state.movieList"
          :key="movie._id"
          :movie="movie"
          @select="selectItem"
        />
      </ScrollView>
      <NoResult v-show="!state.movieList.length" />
    </div>
    <Confirm
      ref="confirm"
      content="是否删除所有搜索历史"
      @confirm="clearSearchHistory"
    />
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import { reactive, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore, mapMutations } from "vuex";
import axios, { useAxios } from "@/common/js/axios";
import useDebounce from "@/common/js/useDebounce";

export default {
  name: "Search",
  components: {
    SearchBox
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const searchBox = ref(null);
    const confirm = ref(null);

    const state = reactive({
      hotKeys: [],
      movieList: [],
      isShow: false,
      list: computed(() => {
        return state.hotKeys;
      }),
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      searchHistory: computed(() => {
        return store.state.searchHistory;
      })
    });

<<<<<<< HEAD
    const { data: hotSearchKeys } = useRequest("/api/keyword");

    const params = computed(() => ({ keyword: state.keyword }));
    const { data: movieList, fetch } = useRequest("/api/movie/search", params, {
      immediate: false,
      initialData: []
    });

    const search = useDebounce(() => {
      if (!state.keyword.trim()) {
        movieList.value = [];
        state.isShow = false;
      } else {
        fetch().then(() => {
          state.isShow = true;
          store.commit("saveSearchHistory", state.keyword);
        });
      }
    });

    const addQuery = (word: string) => {
      state.keyword = word;
      search();
    };

    const clearSearch = () => {
      store.commit("clearSearchHistory", state.keyword);
      state.isShowConfirm = false;
=======
    const { loading } = useAxios("/api/movie/get_hot_search", result => {
      state.hotKeys = result.keywords;
    });

    const search = useDebounce(async query => {
      if (!query.trim()) {
        clear();
        return;
      }

      const params = { keyword: query };

      const { movies } = await axios.get("api/movie/search", { params });
      state.movieList = movies;
      state.isShow = true;
      store.commit("saveSearchHistory", query);
    });

    const addQuery = query => {
      searchBox.value.setQuery(query);
      search(query);
    };

    const clear = () => {
      state.movieList = [];
      state.isShow = false;
    };

    const selectItem = id => {
      router.push(`/movie/${id}`);
    };

    const showConfirm = () => {
      confirm.value.show();
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    };

    return {
      state,
<<<<<<< HEAD
      hotSearchKeys,
      movieList,
      addQuery,
      search,
      clearSearch,
      ...mapMutations(["deleteSearchHistory"])
    };
  }
});
</script>

<style lang="stylus" scoped>
.search-input-wrapper
  background: $color-background;
  padding: 10px 15px;
.search-keys-wrapper
  padding: 0 15px 8px 15px;
  background-color: $color-white;
  .title
    padding: 15px 0;
    font-size: $font-size-base;
    color: $color-text-regular;
  .list
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .item
      padding: 6px 12px;
      margin: 0 12px 12px 0;
      border-radius: $border-radius-base;
      font-size: $font-size-small;
      color: $color-text-primary ;
      background-color: $color-background;
.search-history-wrapper
  padding: 0 15px 8px 15px;
  background-color: $color-white;
  .title
    padding-bottom: 15px;
    font-size: $font-size-base;
    color: $color-text-regular;
    .icon-clear
      float: right;
      font-size: $font-size-base;
  .list
=======
      searchBox,
      confirm,
      loading,
      search,
      clear,
      addQuery,
      selectItem,
      showConfirm,
      ...mapMutations(["deleteSearchHistory", "clearSearchHistory"])
    };
  }
};
</script>

<style lang="stylus" scoped>
.search
  height: 100%;
  background: #f9f9f9;
  .input-wrap
    background: #f5f5f5;
    padding: 10px 15px;
  .hotkey-wrap
    padding: 0 0 8px 15px;
    background-color: #fff;
    .title
      padding: 15px 0;
      font-size: 15px;
      color: #666;
    .list
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      .item
        padding: 6px 12px;
        margin: 0 12px 12px 0;
        border-radius: 4px;
        font-size: 13px;
        color: #333;
        background-color: #f5f5f5;
  .history-wrap
    .title
      padding: 15px 0;
      font-size: 15px;
      color: #666;
      .icon-clear
        float: right;
        font-size: 15px;
    margin-top: 10px;
    padding: 0 15px 8px 15px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    .item
      height: 40px;
      line-height: 40px;
      display: flex;
<<<<<<< HEAD
      font-size: $font-size-base;
      color: $color-text-primary;
      border-bottom: $bordered;
      .icon
        font-size: $font-size-base;
        color: $color-text-secondary;
=======
      font-size: 15px;
      color: #333;
      border-bottom: 1px solid #e5e5e5;
      .icon
        font-size: 15px;
        color: #999;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      .icon-history
        margin-right: 10px;
      .text
        flex: 1;
<<<<<<< HEAD
.movie-list
  page-fixed(111px);
=======
  .result-wrap
    position: fixed;
    top: 111px;
    bottom: 0;
    width: 100%;
    overflow: scroll;
    background: #fff;
    .no-result
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #999;
      text-align: center;
      .img
        width: 100px;
        height: 100px;
        filter: grayscale(1);
        margin-bottom: 15px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
