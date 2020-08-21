<template>
  <Transition name="confirm">
    <div v-show="showFlag" class="confirm">
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">{{ content }}</p>
          <div class="operate">
            <div class="operate-btn left" @click="cancel">
              {{ cancelBtnText }}
            </div>
            <div class="operate-btn" @click="confirm">{{ confirmBtnText }}</div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
<<<<<<< HEAD
import { toRef } from "vue";
=======
import { ref } from "vue";
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    confirmBtnText: {
      type: String,
      default: "确认"
    }
  },
<<<<<<< HEAD
  setup(props, { attrs, emit }) {
    const showFlag = toRef(attrs, "modelValue");

    const cancel = () => {
      emit("update:modelValue", false);
=======
  setup(props, { emit }) {
    const showFlag = ref(false);

    const show = () => {
      showFlag.value = true;
    };

    const hide = () => {
      showFlag.value = false;
    };

    const cancel = () => {
      hide();
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
      emit("cancel");
    };

    const confirm = () => {
<<<<<<< HEAD
      emit("confirm");
    };

    return { showFlag, cancel, confirm };
=======
      hide();
      emit("confirm");
    };

    return { showFlag, show, hide, cancel, confirm };
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  }
};
</script>

<style lang="stylus" scoped>
.confirm
<<<<<<< HEAD
  page-fixed();
=======
  page-fixed()
  z-index: 99;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  background: rgba(0, 0, 0, 0.6);
  &.confirm-enter-active
    animation: confirm-fadein 0.3s;
    .confirm-content
      animation: confirm-zoom 0.3s;
  .confirm-wrapper
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
<<<<<<< HEAD
=======
    z-index: 100;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
    .confirm-content
      width: 270px;
      border-radius: 13px;
      background: rgba(255,255,255,0.9);
      .text
        padding: 19px 15px;
        line-height: 22px;
        text-align: center;
<<<<<<< HEAD
        color: $color-text-primary;
      .operate
        layout-flex(center);
=======
        color: #333;
      .operate
        display: flex;
        align-items: center;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
        text-align: center;
        .operate-btn
          flex: 1;
          line-height: 22px;
          padding: 10px 0;
<<<<<<< HEAD
          border-top: $bordered;
          color: #1e7dd7;
          &.left
            border-right: $bordered;
=======
          border-top: 1px solid #999;
          color: #1e7dd7;
          &.left
            border-right: 1px solid #999;
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
@keyframes confirm-fadein
  0%
    opacity: 0;
  100%
    opacity: 1;
@keyframes confirm-zoom
  0%
    transform: scale(0);
  50%
    transform: scale(1.1);
  100%
    transform: scale(1);
</style>
