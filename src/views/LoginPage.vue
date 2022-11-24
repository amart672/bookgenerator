<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
const { login, logout } = useAuth()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (useRoute.query.redirect) {
      useRouter.push(useRoute.query.redirect)
    } else {
      useRouter.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-blue-700 px-4 py-2">Log In</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }
}
</style>
