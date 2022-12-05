import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import { useAuth } from '@/composables/useAuth'

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
