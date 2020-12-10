
#### 浮动的基本特点  
修改float属性值为：  
left:左浮动，元素靠上靠左  
right:右浮动，元素靠上靠右  
默认值none  
1. 当一个元素浮动后，元素必定为块盒（更改display属性为block）  
2. 浮动元素包含块，和常规流一样，为父元素的内容盒 

#### 盒子的尺寸
1. 宽度为auto时，适用内容的宽度  
2. 宽度为auto时，与常规流一致，适应内容的高度  
3. margin为auto,为0    
4. 边框、内边距、百分比设置与常规流一致  

#### 盒子排列
1. 左浮动的盒子靠上靠左排列  
2. 右浮动的盒子靠上靠右排列  
3. 浮动盒子在包含常规流的盒子时会避开常规流块盒
4. 常规流块盒在前是，浮动的盒子会覆盖常规流盒子上面
5. 行盒在在排列时，会避开浮动盒子

> 如果文字没有在行盒中，浏览器会自动生成一个行盒包裹文字


#### 高度坍塌

高度坍塌的原因：  
常规流盒子的自动高度，在计算时不会考虑浮动盒子  


解决问题：    
清除浮动，涉及css属性：clear   
默认值：none   
left:清除左浮动，该元素必须出现在前面所有左浮动盒子的下方  
right:清除右浮动，该元素必须出现在前面所有右浮动盒子的下方  
both::清除左右浮动，该元素必须出现在前面所有浮动盒子的下方  



```
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

```
