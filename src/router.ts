import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chats from './Pages/Chats.vue'

const routes  = <RouteRecordRaw[]>[
    {
        path: '/',
        component: Chats,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router