<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物车（{{length}}）</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
  import NavBar from 'components/navbar/NavBar.vue'
  import {
    mapGetters
  } from 'vuex'
import CartList from './CartList.vue'
import CartBottomBar from './CartBottomBar.vue'
  export default {
    name: 'Shopcart',
    components: {
      NavBar,
        CartList,
        CartBottomBar,
    },
    data() {
      return {}
    },
    created() {},
    computed: {
      ...mapGetters({
        length: 'getlength'
      })
    },
    methods: {},
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
