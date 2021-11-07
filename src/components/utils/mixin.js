import {POP, NEW, SELL} from "./const";
import { debounce } from "./debounce";
export const itemListenerMixin={
  data(){
    return{
       itemImgListener:null,
       newrefresh:null
    }
  },
  mounted() {
     this.newrefresh = debounce(this.$refs.scroll.refresh, 100)
     let itemImgListener = () => {
      this.newrefresh()
    }
    this.$bus.$on('itemImageLoad', itemImgListener)
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.refresh()
    // })
  }
}
export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
