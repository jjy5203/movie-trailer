<template>
  <div class="card" :class="{ 'rank-card': isRank }" @click="onClick()">
<<<<<<< HEAD
    <p v-if="isRank" class="rank-text" :class="'rank-' + sort">{{ sort }}</p>
=======
    <p v-if="isRank" class="text" :class="'rank-' + sort">{{ sort }}</p>
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    <div class="image">
      <img v-lazy="movie.poster" />
    </div>
    <div class="descript">
      <h1 class="title">{{ movie.title }}</h1>
<<<<<<< HEAD
      <p v-if="movie.isPlay == '1'" class="rate">
        观众评:
        <span :class="{ text: movie.rate > 0 }">
          {{ movie.rate || "暂无" }}
        </span>
=======
      <p v-if="movie.isPlay === 1" class="rate">
        观众评:
        <span :class="{ text: movie.rate > 0 }">{{
          movie.rate || "暂无"
        }}</span>
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      </p>
      <p v-else class="pubdate">上映时间: {{ removeZh(movie.pubdate) }}</p>
      <p class="cast">主演: {{ casts }}</p>
      <p class="duration">时长: {{ movie.duration || "未知" }}</p>
    </div>
  </div>
</template>

<<<<<<< HEAD
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Movie, Performer } from "@/types/movie";

interface CardProps {
  movie?: Movie;
  sort?: number;
}

export default defineComponent({
  name: "Card",
  props: ["movie", "sort"],
  setup(props: Readonly<CardProps>, { emit }) {
    const router = useRouter();

    return {
      removeZh(str: string) {
        return str.replace("(中国大陆)", "");
      },
      casts: computed(() => {
        if (!props.movie) return "未知";
        return props.movie.casts.map((it: Performer) => it.name).join(",");
      }),
      isRank: computed(() => {
        return typeof props.sort === "number";
      }),
      onClick() {
        if (!props.movie) return;
        router.push(`/movie/${props.movie.id}`);
        emit("select", props.movie.id);
      }
    };
  }
});
=======
<script>
import { computed } from "vue";
export default {
  props: {
    movie: {
      type: Object,
      required: true
    },
    sort: {
      type: Number,
      default: -1
    }
  },
  setup(props, { emit }) {
    return {
      removeZh(str) {
        return str.replace("(中国大陆)", "");
      },
      casts: computed(() => {
        return props.movie.casts.map(it => it.name).join(",");
      }),
      isRank: computed(() => {
        return props.sort !== -1;
      }),
      onClick() {
        emit("select", props.movie._id);
      }
    };
  }
};
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</script>

<style lang="stylus" scoped>
.card
<<<<<<< HEAD
  layout-flex(center);
  padding: 10px 20px;
  height: 140px;
  box-sizing: border-box;
  &.rank-card
    padding-left: 0;
    .rank-text
      width: 30px;
      height: 30px;
      margin: 0 10px;
      line-height: 30px;
      text-align: center;
      background-color: $color-background;
      color: $color-text-secondary;
      font-weight: 700;
      &.rank-1
        background: #ef4238;
        color: $color-white;
      &.rank-2
        background: #ffb400;
        color: $color-white;
      &.rank-3
        background: #FFB47A;
        color: $color-white;
=======
  display: flex;
  padding: 10px 20px;
  height: 140px;
  align-items: center;
  box-sizing: border-box;
  &.rank-card
    padding-left: 0;
  .text
    width: 30px;
    height: 30px;
    margin: 0 10px;
    line-height: 30px;
    text-align: center;
    background-color: #f7f7f7;
    color: #999;
    font-weight: 700;
    &.rank-1
      background: #ef4238;
      color: $white;
    &.rank-2
      background: #ffb400;
      color: $white;
    &.rank-3
      background: #FFB47A;
      color: $white;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  .image img
    width: 80px;
    height: 120px;
  .descript
    flex: 1;
<<<<<<< HEAD
    layout-flex();
    margin-left: 10px;
=======
    margin-left: 10px;
    display: flex;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    flex-direction: column;
    box-sizing: border-box;
    line-height: 30px;
    font-size: 13px;
<<<<<<< HEAD
    color: $color-text-regular;
    border-bottom: 1px solid $border-color-base ;
    overflow: hidden;
    .title
      width: 100%;
      color: $color-text-primary;
      font-size: $font-size-medium;
      font-weight: 700;
      text-ellipsis();
    .rate
      .text
        font-size: $font-size-base;
        font-weight: 700;
        color: $color-golden;
    .cast
      width: 100%;
      text-ellipsis();
=======
    color: #666;
    border-bottom: 1px solid #e6e6e6;
    overflow: hidden;
    white-space: nowrap;
    .title
      flex: 1;
      color: #333;
      font-size: 17px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
    .rate
      flex: 1;
      .text
        font-size: 15px;
        font-weight: 700;
        color: #faaf00;
    .cast
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    .duration
      flex: 1;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
