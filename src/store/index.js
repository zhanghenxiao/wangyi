import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e) {

}

export default new Vuex.Store({
  state: {
    // localStorage类似cookie的效果， 优先从localStorage缓存中获取，获取不到再使用上海'
    // 有个问题就是用户关闭了浏览器的cookie或者隐身模式使用  会导入程序无法运行 故需加try catch
    city: defaultCity
  },
  // actions 异步操作
  // 储存同步操作
  mutations: {
    changeCity(state, city) {
      state.city = city
      try{
        localStorage.city = city
      }catch(e){}
      
    }
  }
})