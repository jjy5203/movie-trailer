<template>
  <div class="rank">
<<<<<<< HEAD
    <Scroll v-show="movieList.length && !loading" :data="movieList">
      <Card
        v-for="(movie, index) in movieList"
        :key="movie.id"
        :movie="movie"
        :sort="index + 1"
      />
    </Scroll>
    <Loading v-show="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRequest } from "@/assets/js/request";
import { Movie } from "@/types/movie";

export default defineComponent({
  setup() {
    const initialData: Movie[] = [];

    const { data, loading } = useRequest("/api/movie/rank", undefined, {
      initialData
    });

    return { movieList: data, loading };
  }
});
</script>
=======
    <ScrollView v-show="movieList.length && !loading" :data="movieList">
      <Card
        v-for="(movie, index) in movieList"
        :key="movie._id"
        :movie="movie"
        :sort="index + 1"
        @select="gotoDetail"
      />
    </ScrollView>
    <NoResult v-show="!loading && !movieList.length" />
    <div v-show="loading" class="loading-wrap">
      <Loading />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAxios } from "@/common/js/axios";

export default {
  setup() {
    const router = useRouter();

    const movieList = ref([]);

    const { loading } = useAxios("/api/movie/get_rank", result => {
      movieList.value = result.movies;
    });

    const gotoDetail = id => {
      router.push(`/movie/${id}`);
    };

    return { movieList, gotoDetail, loading };
  }
};
</script>

<style lang="stylus" scoped>
.rank
  height: 100%;
  .loading-wrap
    display: flex;
    align-items: center;
    height: 100%;
</style>
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
