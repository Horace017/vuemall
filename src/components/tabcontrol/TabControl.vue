<template>
  <div class="tab-control">
    <div :class="{active:currentindex===index}" class="tab-control-item" v-for="(item,index) in tabdata" :key="index">
      <span @click="itemclick(index)">{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabControl',
    props: {
      tabdata: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {},
    data() {
      return {
        currentindex: 0
      }
    },
    created() {},
    computed: {},
    methods: {
      itemclick(index) {
        this.currentindex = index
        this.$emit('tabclick', index)
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);

  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
