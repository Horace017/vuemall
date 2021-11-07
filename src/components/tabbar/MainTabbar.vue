<template>
  <div>
    <tabbar>
      <tabbar-item path="/home">
        <img src="~img/tabbar/home.svg" alt="" slot="tabbar-icon">
        <img src="~img/tabbar/home_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-name">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img src="~img/tabbar/category.svg" alt="" slot="tabbar-icon">
        <img src="~img/tabbar/category_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-name">分类</div>
      </tabbar-item>
      <tabbar-item path='/shopcart'>
        <img src="~img/tabbar/shopcart.svg" alt="" slot="tabbar-icon">
        <img src="~img/tabbar/shopcart_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-name">购物车</div>
      </tabbar-item>
      <tabbar-item path='/profile'>
        <img src="~img/tabbar/profile.svg" alt="" slot="tabbar-icon">
        <img src="~img/tabbar/profile_active.svg" alt="" slot="tabbar-active-icon">
        <div slot="tabbar-name">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import Tabbar from './Tabbar.vue'
  import TabbarItem from './TabbarItem.vue'
  export default {
    name: 'demo',
    components: {
      Tabbar,
      TabbarItem
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

</style>
