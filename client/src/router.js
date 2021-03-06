import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/register',
            component: () => import('./views/Register.vue'),
        },
        {
            path: '/my-question',
            component: () => import('./views/MyQuestion/MyQuestion.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/MyQuestion/ArticleList.vue'),
                },
                {
                    path: '/:QuestionId',
                    component: () => import('./views/MyQuestion/Detail.vue'),
                }
            ],
        },
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '',
                    component: () => import('./views/Home/ArticleList.vue'),
                },
                {
                    path: '/:QuestionId',
                    component: () => import('./views/Home/Detail.vue'),
                }
            ],
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ],
});