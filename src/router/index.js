import Vue from 'vue'
import Router from 'vue-router'
import MyTinymce from '@/components/myTinymce'
import Myeditor from '@/components/myeditor'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/tinymce',
      name: 'tinymce',
      component: MyTinymce
    },
    {
      path: '/editor',
      name: 'myeditor',
      component: Myeditor
    }
  ]
})
