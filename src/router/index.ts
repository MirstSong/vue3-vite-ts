import { createRouter, RouteRecordRaw ,createWebHashHistory} from 'vue-router'
import Client from '@/view/client/index.vue'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import("@/view/login/index.vue"),
  },
  {
    name: 'Home',
    path:'/Home',
    redirect: '/Client',
    component: Layout,
    children: [
      {
        path: '/Client',
        name: 'Client',
        component: Client
      },
      {
        path: '/List',
        name: 'List',
        component: () => import("@/view/list/index.vue")
      },
      {
        path: '/User',
        name: 'User',
        component: () => import("@/view/user/index.vue")
      },
    ]
  }
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router