<template>
  <TheHeader />
<<<<<<< HEAD
  <div class="layout-content">
=======
  <div class="content">
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    <RouterView />
  </div>
</template>

<<<<<<< HEAD
<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    TheHeader
  }
});
</script>

<style lang="stylus">
#app
  height: 100vh;
  .layout-content
    position: absolute;
    top: $headerHeight;
    bottom: 0;
    width: 100%;
    > div
      height: 100%;
=======
<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>

<style lang="stylus">
.content {
  position: absolute;
  top: $headerHeight;
  bottom: 0;
  width: 100%;
}
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</style>
