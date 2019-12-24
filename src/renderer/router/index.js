import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {path: '/', name: 'home', component: () => import('@/view/home')},
        {path: '/login', name: 'home', meta: {title: '用户登录'}, component: () => import('@/view/login')}
    ]
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title ? to.meta.title : '趣乐豆';
    next()
});

export default router;