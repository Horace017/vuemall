<template>
    <div class="tabbar-item" @click="barclick">
      <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
      <div v-else><slot name="tabbar-active-icon"></slot></div>
      <div :style="isActiveColor"><slot name="tabbar-name"></slot></div> 
    </div>


</template>
<script>
  export default {
    name: 'TabbarItem',
    components: {},
    data() {
      return {
      }
    },
    props:{
      path:{
        type:String
      },
      activeColor:{
        type:String,
        default:'pink'
      }
    },
    created() {},
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      isActiveColor(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      barclick(){
        this.$router.replace(this.path)
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 2px;
    font-size: 14px;
  }

  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-bottom: -1px;
  }
  .active{
    color:red;
  }
</style>
