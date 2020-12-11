<!--  -->
<template>
  <div>
    <ul class="menu">
      <li
        v-for="(subMenu, index) in subMenuList"
        :key="index"
        @click="onSubMenu(subMenu)"
      >
        <a href="#">
          {{ subMenu.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SubMenu",

  props: {
    subMenuList: {
      type: Array,
      require: true
    }
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    onSubMenu(subMenu) {
      this.$emit("onSubMenu", subMenu);
    }
  }
};
</script>
<style lang="css" scoped>
.menu {
  font: 12px verdana, arial, sans-serif;
}
.menu,
.menu li {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 二级菜单 */
.menu > li > a {
  width: 150px;
  line-height: 36px;
  color: #fff;
  background-color: #3a4953;
  text-align: center;
  border: 1px solid #ccc;
  border-top: none;
  display: block;
  color: #fff; /* 设置文字颜色 */
  text-decoration: none; /* 去掉下划线 */
}

/* 在二级菜单中，第一个设置顶边框 */
.menu > li:first-child > a {
  border-top: 1px solid #ccc;
}

/* 在二级菜单中，鼠标放上去的样式 */
.menu > li > a:hover {
  color: #ccc;
  background-color: #146c9c;
}
</style>
