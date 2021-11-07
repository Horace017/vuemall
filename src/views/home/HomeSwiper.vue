<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key=index>
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/swiper/index'
  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        isswiperload: false
      }
    },
    created() {},
    computed: {},
    methods: {
      swiperload() {
        if (!this.isswiperload) {
          this.$emit('swiperload')
          this.isswiperload = true
        }
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>

</style>
