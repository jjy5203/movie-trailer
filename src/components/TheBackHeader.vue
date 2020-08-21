<template>
  <header class="back-header">
    <i class="iconfont icon-left" @click="onBack()" />
    <slot />
  </header>
</template>

<<<<<<< HEAD
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheBackHeader",
  setup(props, { attrs, emit }) {
    const onBack = () => {
      if (typeof attrs.onBack === "function") {
        emit("back");
=======
<script>
export default {
  name: "TheBackHeader",
  props: {
    back: {
      type: Function
    }
  },
  setup(props) {
    const onBack = () => {
      if (typeof props.back === "function") {
        props.back();
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
        return;
      }
      window.history.back();
    };

    return { onBack };
  }
<<<<<<< HEAD
});
=======
};
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</script>

<style lang="stylus" scoped>
.back-header
  position: fixed;
  top: 0;
<<<<<<< HEAD
  layout-flex(center, center);
  width: 100%;
  height: $headerHeight;
  color: $color-white;
  background: $color-theme;
  .iconfont
    position: absolute;
    left: 10px;
    font-size: $font-size-extra-large;
=======
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: $headerHeight;
  color: $white;
  background: $theme-color;
  text-align: center;
  .iconfont
    position: absolute;
    left: 10px;
    font-size: 25px;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
