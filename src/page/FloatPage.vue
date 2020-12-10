<!--  -->
<template>
  <div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <div class="container clear-float">
      <div class="item" v-for="i in 22" v-bind:key="i">{{ i }}</div>
      <div class="clear-float"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatPage",

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {}
};
</script>
<style lang="css" scoped>
.container {
  margin: 5px;
  width: 500px;
  height: auto;
  background-color: aqua;
}

.container .item {
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 5px;
  float: left;
}

.clear-float::after {
  content: "";
  display: block;
  clear: both;
}

.container .left {
  float: left;
}
.container .right {
  float: right;
}
</style>
