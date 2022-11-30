<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-yellow-200">
    <form class="questions-form" @submit.prevent="questionsform">
      <input v-model="booksetting" type="text" placeholder="Book Setting" />
      <input v-model="bookgenre" type="text" placeholder="Book Genre" />
      <input v-model="bookprice" type="number" min="10.00" max="20.00" maplaceholder="Book Price" />
      <input v-model="bookprice" type="range" min="1" max="10" placeholder="Book Rate" />
      <RouterLink to="/bookgenerator" button type="submit" class="bg-gray-500 px-4 py-2 text-center">Submit</RouterLink>
    </form>
  </div>
</template>

<style scoped lang="postcss">
.questions-form {
  @apply mx-auto flex max-w-md flex-col gap-4 rounded-md bg-fuchsia-500 p-4 shadow-lg;
  & input {
    @apply rounded-md px-2 py-2 text-xl ring-slate-300;
  }
}
</style>
