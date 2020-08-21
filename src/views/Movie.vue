<template>
<<<<<<< HEAD
  <div class="movie-page">
    <div class="player-wrapper" @touchmove.prevent>
      <div ref="playerRef" class="player" />
      <i class="iconfont icon-left" @click="back" />
    </div>
    <div class="info-wrapper">
      <Scroll :data="relativeMovies">
        <section v-if="movie.title" class="info">
          <div class="title">{{ movie.title }}</div>
          <div class="descript">{{ movieDesc }}</div>
          <div class="switch-wrapper" @click="toggleLayer">
            <span>简介</span>
            <i class="iconfont icon-right" />
          </div>
        </section>
        <Spacing />
        <section v-if="relativeMovies.length" class="relative-movies">
          <h1 class="text">相关推荐</h1>
          <div class="list">
            <div
              v-for="item in relativeMovies"
              :key="item.id"
              class="item"
              @click="goToDetail(item.id)"
            >
              <img v-lazy="item.poster" width="56" height="80" />
              <div class="desc">
                <p class="title">{{ item.title }}</p>
                <div v-if="item.isPlay === '1'" class="rate">
                  <span>豆瓣评分: </span>
                  <span class="text">{{ item.rate || "暂无" }}</span>
                </div>
                <p v-else class="pubdate">
                  <span>上映时间: </span>
                  <span>{{ item.pubdate.replace("(中国大陆)", "") }}</span>
                </p>
                <p>类型: {{ renderMovieTypes(item.movieTypes) }}</p>
              </div>
            </div>
          </div>
        </section>
        <Loading v-if="loading" />
      </Scroll>
      <Transition name="layer">
        <div v-show="state.isShow" class="layer-wrapper">
          <div class="title">
            <span class="text">{{ movie.title }}</span>
            <i class="iconfont icon-down" @click="toggleLayer" />
          </div>
          <div v-if="movie.title" class="desc">
            <div class="descript">
              <div v-if="movie.rate !== 0" class="star item">
                <span class="name">评分: </span>
                <span class="text">{{ movie.rate }}</span>
              </div>
              <div v-else class="pubdate item">
                <span class="name">上映时间: </span>
                <span class="text">{{ moviepubdate }}</span>
              </div>
              <div class="author item">
                <span class="name">导演: </span>
                <span class="text">{{ movie.author }}</span>
              </div>
              <div class="cast item">
                <span class="name">影人: </span>
                <span class="text">
                  {{ movie.casts.map(it => it.name).join("/") }}
                </span>
              </div>
              <div class="category item">
                <span class="name">类型: </span>
                <span class="text">
                  {{ renderMovieTypes(movie.movieTypes, "·") }}
                </span>
              </div>
            </div>
            <div class="casts">
              <div v-for="item in movie.casts" :key="item.name" class="cast">
                <img v-lazy="item.avatar" class="img" />
                <h3 class="name">{{ item.name }}</h3>
              </div>
            </div>
            <div class="summary">
              <h1 class="title">简介</h1>
              <span class="text">{{ movie.summary }}</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, watch } from "vue";
import DPlayer from "dplayer";
import { useRoute, useRouter } from "vue-router";
import { useRequest } from "@/assets/js/request";
import { Movie } from "@/types/movie";

interface MovieData {
  movie: Movie;
  relativeMovies: Movie[];
}

export default defineComponent({
=======
  <Transition name="fade">
    <div class="movie">
      <div class="player-wrapper" @touchmove.prevent>
        <div ref="playerRef" class="player" />
        <i class="iconfont icon-left" @click="back" />
      </div>
      <div class="info-wrapper">
        <ScrollView :data="state.relativeMovies">
          <section v-if="state.movie.title" class="info">
            <div class="title">{{ state.movie.title }}</div>
            <div class="descript">{{ state.desc }}</div>
            <div class="switch-wrapper" @click="toggleLayer">
              <span>简介</span>
              <i class="iconfont icon-right" />
            </div>
          </section>
          <Spacing :height="10" bg-color="#f9f9f9" />
          <section v-if="state.relativeMovies" class="relative-movies">
            <h1 class="text">相关推荐</h1>
            <div class="list">
              <div
                v-for="item in state.relativeMovies"
                :key="item._id"
                class="item"
                @click="goToDetail(item._id)"
              >
                <img v-lazy="item.poster" width="56" height="80" />
                <div class="desc">
                  <p class="title">{{ item.title }}</p>
                  <div v-if="item.isPlay === 1" class="rate">
                    <span>豆瓣评分: </span>
                    <span class="text">{{ item.rate || "暂无" }}</span>
                  </div>
                  <p v-else class="pubdate">
                    <span>上映时间: </span>
                    <span>{{ item.pubdate.replace("(中国大陆)", "") }}</span>
                  </p>
                  <p>类型: {{ item.movieTypes.join("/") }}</p>
                </div>
              </div>
            </div>
          </section>
          <div v-if="!state.relativeMovies" class="loading-wrap">
            <Loading />
          </div>
        </ScrollView>
        <Transition name="layer">
          <div v-show="state.isShow" class="layer-wrapper">
            <div class="title">
              <span class="text">{{ state.movie.title }}</span>
              <i class="iconfont icon-down" @click="toggleLayer" />
            </div>
            <div v-if="state.movie.title" class="desc">
              <div class="descript">
                <div v-if="state.movie.rate !== 0" class="star item">
                  <span class="name">评分: </span>
                  <span class="text">{{ state.movie.rate }}</span>
                </div>
                <div v-else class="pubdate item">
                  <span class="name">上映时间: </span>
                  <span class="text">{{ state.pubdate }}</span>
                </div>
                <div class="author item">
                  <span class="name">导演: </span>
                  <span class="text">{{ state.movie.author }}</span>
                </div>
                <div class="cast item">
                  <span class="name">影人: </span>
                  <span class="text">{{ state.casts }}</span>
                </div>
                <div class="category item">
                  <span class="name">类型: </span>
                  <span class="text">{{
                    state.movie.movieTypes.join("·")
                  }}</span>
                </div>
              </div>
              <div class="casts">
                <div
                  v-for="item in state.movie.casts"
                  :key="item._id"
                  class="cast"
                >
                  <img v-lazy="item.avatar" class="img" />
                  <h3 class="name">{{ item.name }}</h3>
                </div>
              </div>
              <div class="summary">
                <h1 class="title">简介</h1>
                <span class="text">{{ state.movie.summary }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script>
import axios from "@/common/js/axios";
import DPlayer from "dplayer";
import { ref, reactive, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Movie",
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  setup() {
    const route = useRoute();
    const router = useRouter();

<<<<<<< HEAD
    const playerRef = ref<HTMLElement>();

    const state = reactive({
      isShow: false
    });

    const initialData = { movie: {} as Movie, relativeMovies: [] };
    const reqUrl = computed(() => `/api/movie/${route.params.id}`);
    const { data, loading, fetch } = useRequest<MovieData>(reqUrl, {
      initialData,
      onSuccess(result) {
        if (!playerRef.value) return;
        const { movie } = result.data;
        new DPlayer({
          container: playerRef.value,
          video: {
            url: movie.video,
            pic: movie.cover
          }
        });
      }
    });

    const movieDesc = computed<string>(() => {
      if (!data.value) return "";
      const { movie } = data.value;
      const duration =
        movie.duration || movie.pubdate.replace("(中国大陆)", "");
      const rate = movie.rate ? `${movie.rate}分` : "即将上映";
      const categories = movie.movieTypes.map(({ name }) => name).join("/");
      return `${rate} · ${categories} · ${duration}`;
    });

    const toggleLayer = () => {
      state.isShow = !state.isShow;
    };

    watch(
      () => route.params.id,
      () => {
        fetch();
      }
    );

    const goToDetail = (id: number) => {
      router.replace(`/movie/${id}`);
    };

    const back = () => {
      window.history.back();
    };

    const renderMovieTypes = (types: Movie["movieTypes"], symbol = "/") => {
      return types.map(it => it.name).join(symbol);
    };

    return {
      state,
      loading,
      movie: computed(() => data.value.movie),
      relativeMovies: computed(() => data.value.relativeMovies),
      movieDesc,
      playerRef,
      back,
      goToDetail,
      toggleLayer,
      renderMovieTypes
    };
  }
});
</script>

<style lang="stylus" scoped>
.movie-page
  page-fixed();
.player-wrapper
  height: 210px;
  .player
    height: 210px;
  .icon-left
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: $font-size-extra-large;
    color: $color-white;
    font-weight: bold;
.info-wrapper
=======
    const player = ref(null);
    const playerRef = ref(null);

    const state = reactive({
      movie: {},
      relativeMovies: [],
      isShow: false,
      desc: computed(() => {
        const duration =
          state.movie.duration || state.movie.pubdate.replace("(中国大陆)", "");
        const rate = state.movie.rate ? `${state.movie.rate}分` : "即将上映";
        return `${rate} · ${state.movie.movieTypes.join("/")} · ${duration}`;
      }),
      casts: computed(() => {
        const casts = state.movie.casts;
        return casts.map(it => it.name).join("/");
      })
    });

    onMounted(() => {
      getDetail();
    });

    watch(
      () => route.params.id,
      val => {
        if (val) {
          getDetail();
        }
      }
    );

    const getDetail = async () => {
      const { id } = route.params;
      const { movie, relativeMovies } = await axios.get(
        `/api/movie/get_detail/${id}`
      );
      state.movie = movie;
      state.relativeMovies = relativeMovies;
      initPlayer();
    };

    const initPlayer = () => {
      player.value = new DPlayer({
        container: playerRef.value,
        video: {
          // url: 'http://cdn.m.ihaoze.cn/' + this.movie.doubanId,
          url: state.movie.video,
          pic: state.movie.cover
        }
      });
    };

    const toggleLayer = () => {
      state.isShow = !state.isShow;
    };

    const goToDetail = id => {
      router.replace(`/movie/${id}`);
    };

    const back = () => {
      window.history.back();
    };

    return { state, playerRef, toggleLayer, goToDetail, back };
  }
  // beforeRouteUpdate(to, from, next) {
  //   next();
  //   this.getDetail();
  // },
};
</script>

<style lang="stylus" scoped>
.movie
  page-fixed()
  z-index: 20
  overflow: hidden;
  .player-wrapper
    height: 210px;
    .player
      height: 210px;
    .icon-left
      position: absolute;
      top: 15px;
      left: 15px;
      font-size: 25px;
      color: $white;
      font-weight: bold;
  .info-wrapper
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    position: relative;
    height: calc(100% - 210px);
    section
      position: relative;
<<<<<<< HEAD
      padding: $font-size-base;
      background: $color-white;
    .info
      .title
        font-size: $font-size-large;
        font-weight: bold;
        padding-right: 100px;
        text-ellipsis();
      .descript
        margin-top: 20px;
        color: $color-text-regular;
        font-size: $font-size-base;
=======
      padding: 15px;
      min-height: 70px;
      background: #fff;
    .info
      .title
        font-size: 20px;
        font-weight: bold;
        padding-right: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      .descript
        margin-top: 20px;
        color: #777;
        font-size: 15px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      .switch-wrapper
        position: absolute;
        top: 15px;
        right: 15px;
<<<<<<< HEAD
        color: $color-text-regular;
        .text
          font-size: $font-size-base;
=======
        color: #777;
        .text
          font-size: 15px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
        .icon
          font-weight: bold;
          vertical-align: text-bottom;
          line-height: 20px;
    .relative-movies
      .text
        font-weight: bold;
<<<<<<< HEAD
        font-size: $font-size-base;
=======
        font-size: 15px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      .list
        margin-top: 15px;
        .item
          display: flex;
          flex-direction: row;
<<<<<<< HEAD
          padding: 10px 0;
          line-height: 23px;
          border-bottom: $bordered;
          .desc
            flex: 1;
            layout-flex(normal, space-between);
            flex-direction: column;
            margin-left: 15px;
            overflow: hidden;
            .title
              width: 100%;
              text-ellipsis();
            .rate .text
              color: $color-golden;
=======
          // margin-bottom 5px
          padding: 10px 0;
          line-height: 23px;
          border-bottom: 1px solid #eee;
          .desc
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 15px;
            overflow: hidden;
            .title
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            .rate
              .text
                color: #faaf00;
    .loading-wrap
      margin-top: 150px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    .layer-wrapper
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background: #fff;
      .title
        padding: 5px 10px;
        height: 20px;
        line-height: 20px;
        font-size: 15px;
        font-weight: bold;
<<<<<<< HEAD
        .text
          width: calc(100% - 20px);
          display: inline-block;
          text-ellipsis();
=======
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
        .icon-down
          float: right;
      .desc
        position: absolute;
        top: 30px;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 10px;
        overflow: scroll;
        .descript
          margin: 10px 0;
<<<<<<< HEAD
          font-size: $font-size-small;
          border-bottom: $bordered;
=======
          font-size: 13px;
          border-bottom: 1px solid #eee;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
          .item
            display: flex;
            margin-bottom: 10px;
            line-height: 20px;
            .name
              margin-right: 8px;
              white-space: nowrap;
        .casts
          font-size: 0;
          white-space: nowrap;
          overflow-x: scroll;
<<<<<<< HEAD
          border-bottom: $bordered;
=======
          border-bottom: 1px solid #eee;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
          .cast
            width: 70px;
            margin-bottom: 10px;
            overflow: hidden;
            display: inline-block;
<<<<<<< HEAD
            font-size: $font-size-small;
=======
            font-size: 13px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
            text-align: center;
            .img
              width: 60px;
            .name
<<<<<<< HEAD
              margin-top: 10px;
              text-ellipsis();
        .summary
          .title
            font-size: $font-size-base;
=======
              overflow: hidden;
              margin-top: 10px;
              text-overflow: ellipsis;
        .summary
          .title
            font-size: 14px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
            font-weight: bold;
            margin: 15px 0;
            padding: 0;
          .text
            font-size: 12px;
            line-height: 20px;
.layer-enter-active, .layer-leave-active
    transition: all .3s;
.layer-enter-from, .layer-leave-to
  transform: translateY(100%);
.fade-leave-active
  transition: all .5s;
.fade-leave-to
  transform: translateX(100%);
</style>
