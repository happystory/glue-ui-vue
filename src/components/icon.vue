<template>
  <svg class="dh-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg-logo";

export default {
  name: "dh-icon",
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.dh-icon {
  width: 1em;
  height: 1em;
}
</style>
