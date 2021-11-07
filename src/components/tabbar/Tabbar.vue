<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Tabbar',
    components: {},
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
  #tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background:#f6f6f6;
    box-shadow: 0px -1px 1px rgba(100,100,100,.2);

  }
</style>
