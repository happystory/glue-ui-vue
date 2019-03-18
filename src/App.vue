<template>
  <div id="app">
    <dh-button disabled :loading="loading1" icon="settings" @click="loading1 = !loading1">按钮</dh-button>
    <dh-button :loading="loading2" icon="settings" icon-position="right" @click="loading2 = !loading2">按钮</dh-button>
    <dh-button :loading="loading3" @click="loading3 = !loading3">按钮</dh-button>

    <dh-button-group>
      <dh-button icon="left">上一页</dh-button>
      <dh-button>更多</dh-button>
      <dh-button icon="right" icon-position="right">下一页</dh-button>
    </dh-button-group>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: #fff;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #999;
  --border-color: #999;
  --border-color-hover: #666;
}
#app {
  margin: 20px;
}
body {
  font-size: var(--font-size);
}
</style>
