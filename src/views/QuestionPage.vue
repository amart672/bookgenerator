<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-yellow-200">
    <form class="questions-form" @submit.prevent="questionsform">
      <input v-model="booksetting" type="text" placeholder="Book Setting" />
      <input v-model="bookgenre" type="text" placeholder="Book Genre" />
      <input v-model="bookrate" type="number" placeholder="Book Rate" />
      <input v-model="bookprice" type="money" placeholder="Book Price" />

      <button type="submit" class="bg-gray-500 px-4 py-2">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="postcss">
.questions-form {
  @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-fuchsia-500 p-8 shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }
}
</style>
