<!--  -->
<template>
  <div></div>
</template>

<script>
export default {
  name: "Life",

  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},

  beforeCreate() {
    console.log("beforeCreate:", "组件创建之前");
  },
  created() {
    console.log("created:", "组件创建完成，但是页面未显示");
  },
  beforeMount() {
    console.log(
      "beforeMount:",
      "组件挂载之前，页面任未展示，但是虚拟dom已经配置"
    );
  },
  mounted() {
    console.log("mounted:", "组件挂载后，页面显示");
  },
  beforeUpdate() {
    console.log("beforeUpdate:", "组件更新前，页面未更新，但是虚拟dom已经配置");
  },

  updated() {
    console.log("updated:", "组件更新完成");
  },
  beforeDestroy() {
    console.log("beforeDestroy:", "组件销毁前");
  },
  destroyed() {
    console.log("destroyed:", "组件销毁");
  }
};
</script>
<style lang="css" scoped></style>
