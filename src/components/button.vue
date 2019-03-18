<template>
  <button class="dh-button" :disabled="disabled" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <dh-icon v-if="icon && !loading" :name="icon" class="icon"></dh-icon>
    <dh-icon v-if="loading" name="loading" class="loading icon"></dh-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon.vue";

export default {
  name: "dh-button",
  components: {
    "dh-icon": Icon
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
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.dh-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    &:hover {
      background: #f5f5f5;
      border-color: var(--border-color);
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
