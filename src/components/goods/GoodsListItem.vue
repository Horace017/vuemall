<template>
  <div class="goods-item" @click="itemclick">
    <img v-lazy="showImage" alt="" @load="imageload">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsitem: {
        type: Object,
        default () {
          return {
          }
        }
      }
    },
    components: {},
    data() {
      return {

      }
    },
    created() {

    },
    computed: {
      showImage(){
        return this.goodsitem.image || this.goodsitem.show.img
      }
    },
    methods: {
      imageload() {
        this.$bus.$emit('itemImageLoad')
      },
      itemclick(){
        this.$router.push('/detail/'+this.goodsitem.iid)
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .goods-item {
    width: 48%;
  }

  .goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
