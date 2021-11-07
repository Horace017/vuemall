<template>
  <div id="recommend">
    <div class='recommend-item' v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components: {},
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
  #recommend{
    width: 100%;
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;

  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>
