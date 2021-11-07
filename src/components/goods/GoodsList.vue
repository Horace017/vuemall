<template>
  <div class="good-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item"></goods-list-item>
  </div>
</template>
<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name: 'GoodsList',
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components: {
      GoodsListItem
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
  .good-list{
    display: flex;
    flex-wrap: wrap;
   justify-content: space-around; 
  }
</style>
