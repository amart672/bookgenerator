<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
</script>

<template>
  <div>
    <form class="login-form" @submit.prevent="logUserIn">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <RouterLink to="/" type="submit" class="bg-blue-700 px-4 py-2">Login</RouterLink>
    </form>
  </div>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-60 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 text-center shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }
}
</style>
