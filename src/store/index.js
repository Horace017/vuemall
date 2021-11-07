import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist:[]
  },
  mutations: {
    pluscart(state,payload){
    payload.count+=1
  },
    addtocart(state,payload){
      payload.checked=true
      state.cartlist.push(payload)
    }
  },
  actions: {
    addcart1(context,payload){
      return new Promise((resolve,reject)=>{
      let oldproduct=context.state.cartlist.find(item=>item.iid===payload.iid)
      if(oldproduct){
        context.commit('pluscart',oldproduct)
        resolve('成功添加商品')
      }else{ 
        payload.count=1
       
        context.commit('addtocart',payload) 
       resolve('成功添加至购物车')
      }
      })
      
    }
  },
  getters:{
    getlength(state){
      return state.cartlist.length
    },
    getproduct(state){
      return state.cartlist
    }
  },
  modules: {
  }
})
