<template>
<<<<<<< HEAD
  <div class="page-list">
    <TheBackHeader @back="onBack">
      <div class="tabs">
        <div
          v-for="(name, index) in tabs"
          :key="name"
          :class="{ active: +state.activeIdx === index }"
          class="item"
          @click="switchTab(index)"
        >
          <span>{{ name }}</span>
        </div>
      </div>
    </TheBackHeader>
    <div class="content-wrapper" v-show="movieList.length">
      <Scroll :data="movieList" :pull-up-load="true" @pulling-up="loadMore">
        <Card v-for="movie in movieList" :key="movie.id" :movie="movie" />
        <div class="pull-up-wrap">
          <p v-show="pullUpLoading">正在加载...</p>
          <p v-show="noMore">没有更多了~</p>
        </div>
      </Scroll>
    </div>
    <Loading v-show="totalLoading" height="80%" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, toRef } from "vue";
import { useRoute, useRouter } from "vue-router";
import TheBackHeader from "@/components/TheBackHeader.vue";
import { useRequest } from "@/assets/js/request";
import useScrollMore from "@/assets/js/useScrollMore";
import { Movie } from "@/types/movie";

interface ListByStatusData {
  total: number;
  list: Movie[];
}

export default defineComponent({
=======
  <Transition name="fade">
    <div class="list">
      <TheBackHeader :back="onBack">
        <div class="tabs">
          <div
            v-for="(name, index) in tabs"
            :key="name"
            :class="{ active: state.activeIdx === index }"
            class="item"
            @click="switchTab(index)"
          >
            <span>{{ name }}</span>
          </div>
        </div>
      </TheBackHeader>
      <div class="content-wrapper">
        <ScrollView
          :data="state.movieList"
          :pull-up-load="true"
          @pulling-up="loadMore"
        >
          <Card
            v-for="movie in state.movieList"
            :key="movie._id"
            :movie="movie"
            @select="gotoDetail"
          />
          <div class="pull-up-wrap">
            <p v-show="state.pullUpLoading">正在加载...</p>
            <p v-show="state.noMore">没有更多了~</p>
          </div>
        </ScrollView>
      </div>
      <div v-show="!state.movieList.length" class="loading-wrap">
        <Loading />
      </div>
    </div>
  </Transition>
</template>

<script>
import TheBackHeader from "components//TheBackHeader";
import { reactive, computed, onMounted, watch, toRef } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "@/common/js/axios";

export default {
  name: "List",
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  components: {
    TheBackHeader
  },
  setup() {
<<<<<<< HEAD
=======
    const tabs = ["即将上映", "正在热映"];

>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
<<<<<<< HEAD
      page: 0,
      pageSize: 10,
      activeIdx: route.params.type,
      pullUpLoading: false
    });

    const initialData: ListByStatusData = { total: 0, list: [] };

    const params = computed(() => ({
      page: state.page,
      pageSize: state.pageSize,
      status: state.activeIdx
    }));

    const { data, loading, fetch } = useRequest("/api/movie/status", params, {
      initialData
    });

    const { refresh, loadMore, noMore, ...rest } = useScrollMore(
      data,
      state,
      fetch
    );
    const { loading: pullUpLoading, list: movieList } = rest;

    watch(toRef(state, "activeIdx"), refresh);

    const tabs = ["即将上映", "正在热映"];

    const switchTab = (idx: number) => {
      state.activeIdx = String(idx);
      router.push(`/list/${idx}`);
=======
      movieList: [],
      count: 0,
      page: 1,
      activeIdx: +route.params.type,
      pullUpLoading: false,
      noMore: computed(() => {
        return state.count === state.movieList.length && state.count !== 0;
      })
    });

    onMounted(async () => {
      getMovieList();
    });

    const activeIdx = toRef(state, "activeIdx");

    watch(activeIdx, () => {
      state.page = 1;
      state.movieList = [];
      state.count = 0;
      getMovieList();
    });

    const getMovieList = async () => {
      const params = {
        page: state.page,
        page_size: 10,
        type: state.activeIdx
      };
      const { count, movies } = await axios.get("/api/movie/get_movies", {
        params
      });
      state.movieList = state.movieList.concat(movies);
      state.count = count;
      state.pullUpLoading = false;
    };

    const switchTab = idx => {
      state.activeIdx = idx;
      router.push(`/list/${idx}`);
    };

    const loadMore = () => {
      const { movieList, count } = state;
      if (movieList.length === count) return;
      state.page += 1;
      state.pullUpLoading = true;
      getMovieList();
    };

    const gotoDetail = id => {
      router.push(`/movie/${id}`);
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    };

    const onBack = () => {
      router.replace(`/recommend`);
    };

<<<<<<< HEAD
    return {
      state,
      movieList,
      totalLoading: loading,
      pullUpLoading,
      noMore,
      tabs,
      loadMore,
      switchTab,
      onBack
    };
  }
});
</script>

<style lang="stylus" scoped>
.page-list
  page-fixed($headerHeight);
=======
    return { state, tabs, switchTab, loadMore, gotoDetail, onBack };
  }
};
</script>

<style lang="stylus" scoped>
.list
  page-fixed()
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  .tabs
    width: 210px;
    height: 30px;
    line-height: 30px;
    font-size: 0;
    border: 1px solid #0d121a;
    border-radius: 100px;
    background: #0d121a;
    .item
      display: inline-block;
      width: 50%;
<<<<<<< HEAD
      text-align: center;
      font-size: 15px;
      border-radius: 100px;
      &.active
        background: $color-theme;
  .content-wrapper
    height: calc(100% - 56px);
=======
      font-size: 15px;
      border-radius: 100px;
      &.active
        background: $theme-color;
  .content-wrapper
    position: absolute;
    top: $headerHeight;
    bottom: 0;
    width: 100%;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    .pull-up-wrap
      height: 30px;
      line-height: 30px;
      text-align: center;
<<<<<<< HEAD
      font-size: $font-size-small;
      color: $color-text-regular;
=======
      color: $gray;
  .loading-wrap
    display: flex;
    align-items: center;
    height: 100%;
.fade-leave-active
  transition: all .5s;
.fade-leave-to
  transform: translateX(100%);
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
