import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Films from './views/home/films.vue'
import Cinemas from './views/home/cinemas'
import City from './views/city/index.vue'
import Login from './views/login/index.vue'
import FilmInfo from './views/film/index.vue'
import Money from './views/money/index.vue'
import Center from './views/home/center.vue'
Vue.use(Router)
const router = new Router({
    routes:[
        {
            path:'/',
            component:Home,
            //路由表形成嵌套 子路由路径不加/
                children:[
                    {
                        path:'films',
                        component:Films
                    },
                    {
                        path:'cinemas',
                        component:Cinemas
                    },
                    {
                        path:'center',
                        component:Center
                    }
                ]
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/film/:id',
            component:FilmInfo
        },
        {
            path:'/money',
            component:Money
        }
    ]
});

export default router ; 