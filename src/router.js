import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
import HomePage from '@/views/HomePage.vue'

const { isAuthenticated } = useAuth()

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/question',
    name: 'Question',
    component: () => import('@/views/QuestionPage.vue'),
    meta: { requiresAuth: true },
  },
  { path: '/bookgenerator', name: 'Book Generator', component: () => import('@/views/BookGenerator.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginPage.vue') },
  { path: '/notfound', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
