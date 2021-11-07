<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
      <cart-item v-for="(item,index) in product" :key="index" :item-info="item"></cart-item>
    </scroll>
  </div>
</template>
<script>
  import Scroll from 'components/scroll/Scroll.vue'
  import {
    mapGetters
  } from 'vuex'
  import CartItem from './CartItem.vue'
  export default {
    name: 'CartList',
    components: {
      Scroll,
      CartItem
    },
    data() {
      return {}
    },
    created() {},
    computed: {
      ...mapGetters({
        product: 'getproduct'
      })
    },
    methods: {},
    mounted() {},
    activated() {
      this.$refs.scroll.refresh()
    },
  }
</script>

<style lang="scss" scoped>
  .cartlist {
    height: calc(100vh - 44px - 49px - 40px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
