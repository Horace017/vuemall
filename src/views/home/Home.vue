<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control @tabclick="tabclick" class="tabcontrol" :tabdata="['流行','新款','精选']" ref="tabcontrol1" :class="{showtab:!isShowTab}"/>
    <scroll @pullingup="loadmore" class="content" ref="scroll" :probe-type="3" @scroll="contentscroll"
      :pullUpLoad="pullup">
      <home-swiper :banners="banners" @swiperload="swiperload" />
      <home-recommend :recommends="recommends" />
      <home-popular />
      <tab-control @tabclick="tabclick" :tabdata="['流行','新款','精选']" ref="tabcontrol2" />
      <goods-list :goods="showgoods" />
    </scroll>
    <back-top @click.native="backclick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
  import NavBar from 'components/navbar/NavBar.vue'
  import HomeSwiper from './HomeSwiper.vue'
  import HomeRecommend from './HomeRecommend.vue'
  import HomePopular from './HomePopular.vue'
  import Scroll from 'components/scroll/Scroll.vue'
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'
  import TabControl from 'components/tabcontrol/TabControl.vue'
  import GoodsList from 'components/goods/GoodsList.vue'
  import BackTop from 'components/backTop/BackTop.vue'
  import{itemListenerMixin} from 'components/utils/mixin'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data() {
      return {
        banners: [],
        saveY:0,
        taboffsettop: 0,
        recommends: [],
        currentType: 'pop',
        isShowBackTop: false,
        isShowTab: false,
        pullup: true,
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        }

      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed: {
      showgoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
      tabclick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabcontrol1.currentindex=index
        this.$refs.tabcontrol2.currentindex=index
      },
      backclick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentscroll(position) {
        this.isShowBackTop = Math.abs(position.y) > 1000
        if (Math.abs(position.y) > this.taboffsettop){
          this.isShowTab=true
        }else{
          this.isShowTab=false
        }
      },
      loadmore() {
        this.getHomeGoods(this.currentType)
      },
      swiperload() {
        this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop
      }

    },
    mixins:[itemListenerMixin],
    mounted() {

    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getScrollY()
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
  }
</script>

<style lang="scss" scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // z-index: 9;
  }

  #home {
    position: relative;
    height: 100vh;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .tabcontrol {
    position: relative;
    z-index: 10;
  }
  .showtab{
    display: none;
  }
</style>
