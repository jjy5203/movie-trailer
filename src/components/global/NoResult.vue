<template>
  <div class="no-result-page">
<<<<<<< HEAD
    <img src="@/assets/images/noresult.png" class="img" />
=======
    <img src="~common/images/noresult.png" class="img" />
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    <p class="text">{{ text }}</p>
  </div>
</template>

<<<<<<< HEAD
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
=======
<script>
export default {
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  props: {
    text: {
      type: String,
      default: "没有找到相关内容"
    }
  }
<<<<<<< HEAD
});
=======
};
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</script>

<style lang="stylus" scoped>
.no-result-page
  height: 100%;
<<<<<<< HEAD
  layout-flex(center, center);
  flex-direction: column;
  color: $color-text-secondary;
  .img
    width: 100px;
    height: 100px;
    filter: grayscale(1);
    margin-bottom: 15px;
=======
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color #999
  .img
    margin-top: 40%;
    width 100px
    height 100px
    filter grayscale(1)
    margin-bottom 15px
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
