<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()
</script>

<template>
  <nav>
    <img class="logo" src="/pictures/logo.png" alt="Logo" srcset="" />
    <div class="wrapper">
      <RouterLink to="/" class="brand">📚</RouterLink>
    </div>
    <div class="menu">
      <p v-show="isAuthenticated" class="px-2 py-4">
        Welcome back
        <strong>
          <i>{{ user?.username }}</i>
        </strong>
      </p>
      <div v-if="isAuthenticated">
        <RouterLink :to="{ name: 'Questions' }" href="#" class="menu-item">Questions</RouterLink>
        <button class="menu-logout" @click="logout">Logout</button>
      </div>
      <div v-else>
        <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-8 bg-zinc-600 text-2xl text-sky-400;
  .logo {
    @apply h-14 w-14;
  }
  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
