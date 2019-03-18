<template>
  <svg class="gl-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg-logo";

export default {
  name: "gl-icon",
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.gl-icon {
  width: 1em;
  height: 1em;
}
</style>
