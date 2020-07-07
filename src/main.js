import Vue from 'vue'
import App from './App.vue'
//导入js ele
import ElementUI from 'element-ui'
//导入css ele
import 'element-ui/lib/theme-chalk/index.css'

//注册 ele
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')