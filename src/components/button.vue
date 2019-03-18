<template>
  <button class="gl-button" :disabled="disabled" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <gl-icon v-if="icon && !loading" :name="icon" class="icon"></gl-icon>
    <gl-icon v-if="loading" name="loading" class="loading icon"></gl-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon.vue";

export default {
  name: "gl-button",
  components: {
    "gl-icon": Icon
  },
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import "./styles/vars.scss";

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.gl-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    &:hover {
      background: #f5f5f5;
      border-color: $border-color;
    }
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }

  .loading {
    animation: spin 2s linear infinite;
  }
}
</style>
