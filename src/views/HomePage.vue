<script setup>
import { ref } from 'vue'
const title = ref('Click on Questions')
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-zinc-600">
    <h1 class="text-6xl font-bold text-purple-400">{{ title }}</h1>
  </main>
</template>
