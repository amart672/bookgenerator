<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated, logout } = useAuth()
</script>

<template>
  <nav>
    <div class="menu">
      <p v-show="isAuthenticated" class="px-2 py-4 text-2xl">Welcome back</p>
      <div v-if="isAuthenticated">
        <RouterLink :to="{ name: 'Home' }" href="#" class="menu-item text-3xl">📚</RouterLink>
        <RouterLink :to="{ name: 'Question' }" href="#" class="menu-item text-3xl">Questions</RouterLink>
        <button class="menu-logout text-3xl" @click="logout">Logout</button>
      </div>
      <div v-else>
        <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login text-3xl">Login</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 bg-yellow-400 text-slate-800;
}
.menu {
  @apply flex gap-4;
  & div {
    @apply py-4;
  }
  &-item {
    @apply rounded-md px-2 py-2 hover:bg-lime-500 hover:text-slate-900;
  }
  &-logout {
    @apply rounded-md px-4 py-2 hover:bg-fuchsia-400 hover:text-slate-900;
  }
}
</style>
