<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
  import MainTabbar from 'components/tabbar/MainTabbar';
  export default {
    name: 'app',
    components: {
      MainTabbar
    },
    data() {
      return {}
    },
    created() {},
    computed: {},
    methods: {},
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  @import 'assets/css/base.css'
</style>
