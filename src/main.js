import { createApp,Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
const app =  createApp(App)
app.use(Vant)
app.use(store).use(router).mount('#app')
