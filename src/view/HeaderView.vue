<!--  -->
<template>
  <div class="header">
    <ul class="menu">
      <li v-for="(header, index) in headerList" v-bind:key="index">
        <a href="#">{{ header.name }}</a>
        <sub-menu
          class="sub-menu"
          v-bind:subMenuList="header.children"
          @onSubMenu="onSubMenu($event)"
        ></sub-menu>
      </li>
    </ul>
  </div>
</template>

<script>
import SubMenu from "@/view/SubMenu";

export default {
  name: "HeaderView",

  components: {
    SubMenu
  },

  data() {
    return {
      headerList: [
        {
          id: 0,
          name: "HelloWorld",
          children: [
            { id: 0, name: "HelloWorld" },
            { id: 1, name: "HelloWorld2" }
          ]
        },
        {
          id: 1,
          name: "CSS",
          children: [
            { id: 0, name: "FloatPage" },
            { id: 1, name: "HelloWorld" },
            { id: 2, name: "SlotView" }
          ]
        },
        {
          id: 2,
          name: "标签3",
          children: [
            { id: 0, name: "BodyView" },
            { id: 1, name: "BodyView" },
            { id: 2, name: "BodyView" }
          ]
        },
        {
          id: 3,
          name: "标签4",
          children: [
            { id: 0, name: "BodyView" },
            { id: 1, name: "BodyView" },
            { id: 2, name: "BodyView" }
          ]
        },
        {
          id: 4,
          name: "标签5",
          children: [
            { id: 0, name: "BodyView" },
            { id: 1, name: "BodyView" },
            { id: 2, name: "BodyView" }
          ]
        },
        {
          id: 5,
          name: "标签6",
          children: [
            { id: 0, name: "BodyView" },
            { id: 1, name: "BodyView" },
            { id: 2, name: "BodyView" }
          ]
        },
        {
          id: 6,
          name: "标签7",
          children: [
            { id: 0, name: "标签7" },
            { id: 1, name: "标签7" },
            { id: 2, name: "标签7" },
            { id: 0, name: "标签7" },
            { id: 1, name: "标签7" },
            { id: 2, name: "标签7" }
          ]
        }
      ]
    };
  },

  computed: {},

  methods: {
    onTabClick(header) {
      let name = "HelloWorld";
      let params = { tab: header.name };
      switch (header.id) {
        case 0:
          name = "HelloWorld";
          break;
        case 1:
          name = "FloatPage";
          break;
        case 2:
          name = "SlotView";
          break;
        case 3:
          name = "BodyView";
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;
        case 8:
          break;
        case 9:
          break;
      }
      this.$router.push({ name, params });
    },
    onSubMenu(subMenu) {
      console.log("subMenu =", subMenu);
      let name = subMenu.name;
      let params = { tab: subMenu.name };
      this.$router.push({ name, params });
    }
  }
};
</script>
<style lang="css" scoped>
.header {
  height: 50px;
  margin: 0 auto;
  background-color: #3a4953;
}

.menu {
  font: 12px verdana, arial, sans-serif;
}
.menu,
.menu li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu li {
  float: left; /* 往左浮动 */
}

.menu > li {
  display: block; /* 将链接设为块级元素 */
  width: 150px; /* 设置宽度 */
  height: 50px; /* 设置高度 */
  line-height: 50px; /* 设置行高，将行高和高度设置同一个值，可以让单行文本垂直居中 */
  text-align: center; /* 居中对齐文字 */
  background: #3a4953; /* 设置背景色 */
  color: #fff; /* 设置文字颜色 */
  text-decoration: none; /* 去掉下划线 */
  border-right: 1px solid #000; /* 在左侧加上分隔线 */
}
.menu > li > a {
  color: #fff; /* 设置文字颜色 */
  text-decoration: none; /* 去掉下划线 */
}

/* 设置二级菜单绝对定位，并隐藏 */
.menu > li > .sub-menu {
  position: absolute;
  display: none;
}
.menu > li:hover .sub-menu {
  display: block;
}

/* 鼠标放在一级菜单上*/
.menu > li:hover {
  background: #146c9c;
  color: #fff;
  text-decoration: none;
  border-right: 1px solid #000;
}
</style>
