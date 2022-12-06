<script setup>
import { ref } from 'vue'
const title = ref('Book Generator!')
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-indigo-300">
    <img class="logo" src="/pictures/logo.png" alt="Logo" srcset="" />
    <h1 class="text-8xl font-bold text-purple-400">
      {{ title }}
      <p class="text-center font-serif text-4xl text-lime-400">Click on Questions to Start</p>
    </h1>
  </main>
</template>

<style scopped lang="postcss">
.logo {
  @apply place-items-start;
}
</style>
