<template>
  <div class="test">
    <h2>{{ data }}</h2>
    <a v-link="{ path: '/' }">Go to Index</a>
    <a v-link="{ path: '/bar/bar' }">Go to baz</a>
    <router-view></router-view>
  </div>
  <div>
    <p>当前路径: {{$route.path}}</p>
    <p>当前路由参数: {{$route.params | json}}</p>
    <p>当前路由auth: {{$route.auth | json}}</p>
  </div>
</template>
<style scoped>
  h2 {
    color: red;
    text-shadow: 1px 1px 5px blue;
  }
</style>
<script>
  export default{
    data() {
      return {
        data: 'just for testing',
      };
    },
  };
</script>
