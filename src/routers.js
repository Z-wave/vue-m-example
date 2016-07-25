/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter({
    // 是否开启HTML5的history模式,开启后,需服务端支持,否则404
    history: false
});

router.map({
    '/index': {
        name: 'index',
        title:'这是首页',
        component: function (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/order': {
        name: 'order',
        title:'订单页面',
        component: function (resolve) {
            require(['./views/order.vue'], resolve);
        }
    },
    '/user': {
        name: 'user',
        title:'个人中心',
        component: function (resolve) {
            require(['./views/user.vue'], resolve);
        }
    }
});

//访问记录
window.routeList = [];

router.beforeEach(function (transition) {

    if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
        routeList.splice(routeList.length-1,1);
        //console.log(routeList);
    } else {
        routeList.push({
            name : transition.to.name,
            path : transition.to.path,
            query : transition.to.query,
            params : transition.to.params,
            timer: +new Date
        });
    }    

    //切换title
    document.title = transition.to.title || document.title

    transition.next();
});

router.afterEach(function () {

});

router.redirect({
    '*': "/index"
});
router.start(App, '#app');