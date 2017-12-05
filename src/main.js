//引入vue包
import Vue from 'vue'
import global from './static/css/global.css'
// 注册全局过滤器
import Moment from 'moment'
//时间过滤器
Vue.filter('convertTime',(value)=>{
    return Moment(value).format("YYYY-MM-DD")
})
//标题过滤器
Vue.filter('covertTitle',(value,limit)=>{
    if(!value) return;
     if(value.length>limit){
         return value.substr(0,limit)+"......"
     }
     return limit+'......';
})
//注册全局组件
import Myul from './components/commons/Myul.vue'
import Myli from './components/commons/Myli.vue'
// 导航标题
import NavBar from './components/commons/Navbar.vue'
Vue.component(Myul.name,Myul)
Vue.component(Myli.name,Myli)
Vue.component(NavBar.name,NavBar)
//引入路由相关的组件
import App from './components/App.vue'
import Home from './components/home/Home.vue'
import Member from './components/member/Member.vue'
import ShopCat from './components/shopcat/ShopCat.vue'
import Search from './components/search/Search.vue'
import NewList from './components/news/NewList.vue'
import NewDetails from './components/news/NewDetails.vue'
import PhotoList from './components/photo/PhotoList.vue'
import ImgDetail from './components/photo/ImgDetail.vue'
//路由分配
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)
//创建路由对象
var router=new VueRouter();
//路由分配
router.addRoutes([{
    path:'/',
    redirect:{
        name:'home'
    }},
    {name:'home',path:'/home',component:Home},
    {name:'member',path:'/member',component:Member},
    {name:'shopcat',path:'/shopcat',component:ShopCat},
    {name:'search',path:'/search',component:Search},
    {name:'news.list',path:'/news/list',component:NewList},
    {name:'news.detail',path:'/news/detail',component:NewDetails},
    {name:'photo.list',path:'/photo/photolist/:categoryId',component:PhotoList},
    {name:'img.detail',path:'/photo/imgdetail/:imgId',component:ImgDetail}
])
//引入mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi);
//VuePreview 开始
import VuePreview from 'vue-preview';
Vue.use(VuePreview)
//VuePreview 结束
//axios请求
import Axios from 'axios'
Vue.prototype.$axios=Axios;
Axios.defaults.baseURL='http://vue.studyit.io/api/';
//启动
new Vue({
    el:"#app",
    render:c=>c(App),
    router
})
