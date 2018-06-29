import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/myTinymce'
import Myeditor from '@/components/myeditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editor',
      name: 'myeditor',
      component: Myeditor
    }
  ]
})
