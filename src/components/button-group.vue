<template>
  <div class="gl-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gl-button-group",
  mounted() {
    // TODO 应为g-button实例
    for (let node of this.$el.children) {
      if (node.nodeName !== "BUTTON") {
        // console.warn('g-button-group的子元素应该全是g-button');
      }
    }
  }
};
</script>

<style lang="scss">
@import "./styles/vars.scss";

.gl-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .gl-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
