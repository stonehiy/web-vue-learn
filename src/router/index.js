import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SlotView from '@/view/SlotView'
import Home from '@/view/Home'
import BodyView from '@/view/BodyView'
import FloatPage from '@/page/FloatPage'

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Home',
      name:'Home',
      component:Home,
    },
    {
      path:'/SlotView',
      name:'SlotView',
      component:SlotView,
    },
    {
      path:'/BodyView/:tab',
      name:'BodyView',
      component:BodyView,
    },
    {
      path:'/FloatPage',
      name:'FloatPage',
      component:FloatPage,
    },
    
  ]
})
