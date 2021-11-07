<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in topimg" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/swiper/index'
export default {
  name: 'demo',
  props:{
    topimg:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {}
  },
  created () {
  },
  computed: {},
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>
