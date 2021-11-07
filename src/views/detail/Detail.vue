<template>
  <div id="detail">
    <detail-nav class="detail-nav" @navclick="navclick" ref="nav"></detail-nav>

    <scroll class="content" ref="scroll" @scroll="descroll">
      <detail-swiper :topimg="topimg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailinfo" @imageload="imgload"></detail-goods-info>
      <detail-param-info :param-info="paraminfo" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
    <detail-bottom-bar @addToCart="addcart"></detail-bottom-bar>
  </div>
</template>
<script>
  import DetailNav from './DetailNav.vue'
  import {
    itemListenerMixin,
    backTopMixin
  } from 'components/utils/mixin'
  import {
    getdetail,
    Goods,
    Shop,
    GoodsParam,
    getRecommend
  } from 'network/detail.js'
  import DetailSwiper from './DetailSwiper.vue'
  import DetailBaseInfo from './DetailBaseInfo.vue'
  import DetailShopInfo from './DetailShopInfo.vue'
  import Scroll from 'components/scroll/Scroll.vue'
  import DetailGoodsInfo from './DetailGoodsInfo.vue'
  import DetailParamInfo from './DetailParamInfo.vue'
  import DetailCommentInfo from './DetailCommentInfo.vue'
  import DetailRecommendInfo from './DetailRecommendInfo.vue'
  import GoodsList from 'components/goods/GoodsList.vue'
  import {
    debounce
  } from 'components/utils/debounce'
  import DetailBottomBar from './DetailBottomBar.vue'
  import BackTop from 'components/backTop/BackTop.vue'
  import {mapActions} from 'vuex'
  export default {
    name: 'Detail',
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      GoodsList,
      DetailBottomBar,
      BackTop,
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        res: null,
        topimg: [],
        goods: {},
        shop: {},
        detailinfo: {},
        paraminfo: {},
        commentInfo: {},
        recommends: [],
        detailscroll: [],
        getscroll: null,
        currentindex: 0,
      }
    },
    created() {
      this.iid = this.$route.params.iid
      getdetail(this.iid).then(res => {
        this.res = res
        const data = res.result
        this.topimg = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailinfo = data.detailInfo
        this.paraminfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
      this.getscroll = debounce(() => {
        this.detailscroll = []
        this.detailscroll.push(0)
        this.detailscroll.push(this.$refs.param.$el.offsetTop)
        this.detailscroll.push(this.$refs.comment.$el.offsetTop)
        this.detailscroll.push(this.$refs.recommend.$el.offsetTop)
        this.detailscroll.push(Number.MAX_VALUE)
      }, 100)
    },
    computed: {},
    methods: {
      imgload() {
        this.newrefresh()
        this.getscroll()
      },
      navclick(index) {
        this.$refs.scroll.scrollTo(0, -this.detailscroll[index], 500)
      },
      descroll(position) {
        const y = -position.y
        let length = this.detailscroll.length
        for (let i = 0; i < length - 1; i++) {
          if (this.currentindex !== i && (y >= this.detailscroll[i] && y < this.detailscroll[i + 1])) {
            this.currentindex = i
            this.$refs.nav.currentindex = this.currentindex
          }
        }
        this.showBackTop = y > 1000;
      },
      ...mapActions(['addcart1']),
      addcart() {
        const product = {}
        product.image = this.topimg[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        // this.$store.dispatch('addcart', product).then(res=>console.log(res))
        this.addcart1(product).then(res=>this.$toast.show(res,2000))
      }
    },
    mounted() {},
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
  }
</script>
<style lang="scss" scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 58px);
    overflow: hidden;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
