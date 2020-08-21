<template>
<<<<<<< HEAD
  <div class="loading-wrap" :style="{ height: height }">
    <div class="spinner">
      <div class="rect rect1" />
      <div class="rect rect2" />
      <div class="rect rect3" />
      <div class="rect rect4" />
      <div class="rect rect5" />
    </div>
=======
  <div class="spinner">
    <div class="rect rect1" />
    <div class="rect rect2" />
    <div class="rect rect3" />
    <div class="rect rect4" />
    <div class="rect rect5" />
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "Loading",
  props: {
    height: {
      type: String,
      default: "100%"
    }
  }
=======
  name: "Loading"
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
};
</script>

<style lang="stylus" scoped>
<<<<<<< HEAD
.loading-wrap
  layout-flex(center);
.spinner
  layout-flex(center, center);
  width: 100%;
  height: 40px;
  .rect
    background: $color-theme;
=======
.spinner
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  .rect
    background: $theme-color;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    height: 100%;
    width: 5px;
    margin-right: 1px;
    animation: scale-y 1.2s infinite ease-in-out;
    &.rect2
      animation-delay: -1.1s;
    &.rect3
      animation-delay: -1.0s;
    &.rect4
      animation-delay: -0.9s;
    &.rect5
      animation-delay: -0.8s;
@keyframes scale-y
  0%, 40%, 100%
<<<<<<< HEAD
    transform: scaleY(0.4);
  20%
    transform: scaleY(1);
=======
    transform: scaleY(0.4)
  20%
    transform: scaleY(1)
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
