<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backclick"><img src="~img/common/back.svg" alt=""></div>
      <div slot="center" class="navcenter">
        <div v-for="(item,index) in title" :key="index" class="centeritem" :class="{active:currentindex===index}"><span
            @click="detailnavclick(index)">{{item}}</span></div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/navbar/NavBar.vue'
  export default {
    name: 'DetailNav',
    components: {
      NavBar
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentindex: 0,
      }
    },
    created() {},
    computed: {},
    methods: {
      detailnavclick(index) {
        this.$emit('navclick',index)
        this.currentindex = index
      },
      backclick(){
        this.$router.back()
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .navcenter {
    display: flex;
    font-size: 13px;
  }

  .centeritem {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);

  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
  .back img{
    margin-top: 12px;
  }
</style>
