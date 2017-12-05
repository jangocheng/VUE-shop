import Vue from 'vue';

import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import Member from './components/Member/Member.vue';
import Search from './components/Search/Search.vue';
import Shopcart from './components/Shopcart/Shopcart.vue';
import Newslist from './components/News/NewsList.vue';
import Newsdetail from './components/News/NewsDetail.vue';


// 注册全局过滤器开始
import Moment from 'moment';
Vue.filter('convert-time', value=>{
    return Moment(value).format('YYYY-MM-DD');
})
Vue.filter('convert-title', (value, limit)=>{
    if(!value) return;
    if(value.length > limit){
        return value.substr(0, limit) + '...';
    }
    return value;
})
// 注册全局过滤器结束

// 注册全局组件
import Myli from './components/Comments/Myli.vue';
import Myul from './components/Comments/Myul.vue';
Vue.component(Myli.name, Myli);
Vue.component(Myul.name, Myul);


// 引入全局css
import './static/css/global.css';

import mitUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(mitUi);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    { path: '/', redirect: { name: 'home' } },
    { name: 'home', path: '/home', component: Home },
    { name: 'member', path: '/member', component: Member },
    { name: 'search', path: '/search', component: Search },
    { name: 'shopcart', path: '/shopcart', component: Shopcart },
    { name: 'news.list', path: '/news/list', component: Newslist },
    {name:'news.detail',path:'/news/detail',component:Newsdetail}
])

import Axios from 'axios';
Vue.prototype.$axios = Axios;
//设置默认URL请求基础地址
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';

new Vue({
    el:'#app',
    render:c=>c(App),
    router
});