import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import './css/index.css';
import "./js/common";
import ElementUI from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router'
import router from './routes';
import helper from './js/helper';
import VDisplay from './layout/VDisplay';
import './layout/ref';
import '@dir/dir'
import $ from 'jquery';
import store from "./js/store"


Vue.component(CollapseTransition.name, CollapseTransition);

Vue.use(VueRouter);
Vue.use(ElementUI);

helper.init(router);
helper.routerGo('/index');
var getSize = () => {
    return {
        "_menu_height": window.innerHeight - $('#head').height(),
        "_route_width": window.innerWidth - $('#menu').width(),
        "_menu_width": $('#menu').width(),
        "_nav_height": $('#head').height()
    }
}

var resizeSquare = () => {
    $('#menu').height(getSize()._menu_height);
}

var resizeRouterView = () => {
    $('#router')[0].style.width = getSize()._route_width;
    $('#router').css({
        "min-height": getSize()._menu_height,
        "marginLeft": getSize()._menu_width,
        "marginTop": getSize()._nav_height,
        "padding-left": 15,
        "padding-right": 15,
        "box-sizing": "border-box"
    });
}
const app = new Vue({
    el: '#app',
    data: function () {
        return {
            name: '学习管理系统',
        }
    },
    methods:{
        dialogClose:function(){
            this.dialogVisiable = false;
        }
    },
    created:function(){
       var lastPath = helper.sessionGet('lastPath') ||　'/index';
       helper.routerGo(lastPath);
       var user = helper.localStroageGet('user') || null;
       if(user) {
           this.$store.commit("changeStatus");
           this.$store.commit("changeUserInfo",JSON.parse(user));
       }
    },
    mounted: function () {
        // resizeSquare();
        // resizeRouterView();
        // window.onresize = () => {
        //     resizeSquare();
        //     resizeRouterView();
        // }
    },
    store, // 引入仓库
    router: router
})

// 路由守卫 进入路由前校验
router.beforeEach((to,from,next)=>{
    if(to.path == "/personal") { // 个人中心的路由限制
        if(!helper.localStroageGet('user')){
            helper.showMessage('请先登录',"warning");
            setTimeout(()=>{
                store.commit("loginDialog");
            },2000)
            return;
        }
    }
    next();
})

// 离开路由时
router.afterEach((to,from,next) => {
    // 路由刷新时进入当前route
    helper.sessionSet('lastPath',to.fullPath);
})