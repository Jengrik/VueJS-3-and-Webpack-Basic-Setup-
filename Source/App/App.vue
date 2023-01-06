<template>
  <h1>Hello World!</h1>
  <h2>{{message}}</h2>
  <div v-outer-html="{ color: 'blue', text: '2023' }"></div>
</template>

<script>
  export default {
    name: 'VueApp',
    props: {
      message: String,
    },
    data() {
      return {};
    },
  }
</script>

<style>
  h1 {
    color: red;
  }
</style>