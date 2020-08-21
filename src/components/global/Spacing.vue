<template>
  <div class="spacing" :style="style" />
</template>

<<<<<<< HEAD
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Spacing",
=======
<script>
import { computed } from "vue";

export default {
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  props: {
    height: {
      type: Number,
      default: 10
    },
    bgColor: {
      type: String,
      default: "#f6f6f6"
    }
  },
  setup(props) {
    const style = computed(() => {
      return {
        height: props.height + "px",
        backgroundColor: props.bgColor
      };
    });

    return { style };
  }
<<<<<<< HEAD
});
=======
};
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
</script>
