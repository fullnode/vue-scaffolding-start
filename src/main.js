import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from './components/Hello.vue';
import Test from './components/test.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  history: false,
});

router.map({
  '/foo/:username': {
    component: Hello,
    auth: true, // 这里 auth 是一个自定义字段
  },
  '/bar': {
    component: Test,
    subRoutes: {
      '/': {
        // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
        // 为了简便，这里使用了一个组件的定义
        component: {
          template: '<p>Default sub view for Foo</p>',
        },
      },
      '/bar': {
        // 当匹配到/bar/bar，会在bar's <router-view>内渲染
        // 一个Test组件
        component: Test,
      },
    },
  },
});

/* eslint-disable no-new */
//  this type definition has been disabled
// const com = new Vue({
//   el: 'body',
//   components: { App },
// });

const com2 = Vue.extend({
  el: 'body',
  components: { App },
});


router.start(com2, 'body');
