import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/question', name: 'Question', component: () => import('@/views/QuestionPage.vue') },
  { path: '/bookgenerator', name: 'Book Generator', component: () => import('@/views/BookGenerator.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginPage.vue') },
  { path: '/bookgenerator', name: 'Book Generator', component: () => import('@/views/BookGenerator.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
