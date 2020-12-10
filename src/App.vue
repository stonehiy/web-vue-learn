<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <header-view></header-view>
    <!-- <router-view id="containner" /> -->

    <!-- 使用动态的 transition name -->
    <transition :name="fade">
      <router-view  id="containner"></router-view>
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
  },
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
#containner {
  min-height: 800px;
}
</style>
