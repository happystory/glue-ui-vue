<template>
  <div id="app">

    <div class="box">
      <gl-input v-model="msg" @change="handleInput"></gl-input>
      <p @click="msg += '!'">{{msg}}</p>
      <gl-input value="输入框" readonly></gl-input>
      <gl-input value="输入框" disabled></gl-input>
      <gl-input value="" error="姓名不能为空"></gl-input>
    </div>

    <div class="box">
      <gl-button disabled :loading="loading1" icon="settings" @click="loading1 = !loading1">按钮</gl-button>
      <gl-button :loading="loading2" icon="settings" icon-position="right" @click="loading2 = !loading2">按钮</gl-button>
      <gl-button :loading="loading3" @click="loading3 = !loading3">按钮</gl-button>

      <gl-button-group>
        <gl-button icon="left">上一页</gl-button>
        <gl-button>更多</gl-button>
        <gl-button icon="right" icon-position="right">下一页</gl-button>
      </gl-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      msg: "hi"
    };
  },
  methods: {
    handleInput(e) {
      console.log(e.target.value);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  margin: 20px;
}
body {
  font-size: 12px;
}
.box {
  margin: 20px;
}
</style>
