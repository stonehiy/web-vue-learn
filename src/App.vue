<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <header-view class="header"></header-view>
    <!-- <router-view id="containner" /> -->

    <!-- 使用动态的 transition name -->
    <transition>
      <router-view id="containner"></router-view>
    </transition>
    <footer-view></footer-view>

    <!-- <home></home> -->
    <!-- <user></user> -->
  </div>
</template>

<script>
import HeaderView from "@/view/HeaderView";
import FooterView from "@/view/FooterView";

export default {
  name: "App",
  components: {
    HeaderView,
    FooterView
  }
};
</script>

<style>
#app {
  /* position: relative; */
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#containner {
  margin-top: 50px;
  min-height: 800px;
}
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
