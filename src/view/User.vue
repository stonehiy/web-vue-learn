<template>
  <div>
    <h1>{{ title }}</h1>
    <h5>{{ count }}</h5>
    <button v-on:click="add()">单击事件++</button>
    <button @click="subtrct()">单击事件--</button>
    <button @dblclick="add()">双击事件++</button>
    <div id="canvas" @mousemove="updateXY($event)">
      窗口x->{{ x }} 窗口y->{{ y }}
    </div>

    <label>姓名：</label>
    <input ref="name" type="text" v-model="name" />
    <label>{{ name }}</label>
    <users v-bind:users="users" v-on:changeTitle="updateTitle($event)"></users>
  </div>
</template>

<script>
import Users from "./Users";
export default {
  name: "User",
  data() {
    return {
      title: "标题",
      count: 0,
      x: 0,
      y: 0,
      name: "haha",
      users: [{ name: "lisi" }, { name: "zhangsan" }, { name: "wangwu" },{ name: "wangwu" }]
    };
  },
  components: {
    users: Users
  },
  computed: {},

  methods: {
    add() {
      this.count++;
    },
    subtrct() {
      this.count--;
    },
    updateXY(event) {
      // console.log(event);
      this.x = event.x;
      this.y = event.y;
    },
    logName() {},

    updateTitle(title){
      this.title = title
    },
  }
};
</script>
<style lang="css" scoped>
#canvas {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: aqua;
}
</style>
