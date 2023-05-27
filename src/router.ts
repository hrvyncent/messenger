import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

const routes  = <RouteRecordRaw[]>[]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router as Router