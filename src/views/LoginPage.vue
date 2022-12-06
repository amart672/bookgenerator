<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
const { login, logout } = useAuth()
const router = useRouter()
const route = useRoute()
const username = ref('')
const password = ref('')
const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-green-200">
    <form class="login-form" @submit.prevent="logUserIn">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit" class="bg-blue-700 px-4 py-2">Login</button>
    </form>
  </div>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto flex max-w-md flex-col gap-4 rounded-md bg-white p-8 text-center shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }
}
</style>
