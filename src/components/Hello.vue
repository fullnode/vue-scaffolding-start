<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a v-link="{ path: '/' }">Go to Index</a>
  </div>
  <div>
    <p>当前路径: {{$route.path}}</p>
    <p>当前路由参数: {{$route.params | json}}</p>
    <p>当前路由auth: {{$route.auth | json}}</p>
    <p>用户名是{{$route.params.username}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
