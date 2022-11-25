<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-zinc-600">
    <div>
      <img class="bookcover" /><img :src="'/public/pictures/touchofdarkness'" alt="Touch of Darkness" srcset="" />
      <img class="bookcover" /><img
        :src="'/public/pictures/faultinourstars'"
        alt="Fault in our Stars"
        srcset="'/public/pictures/faultinourstars'"
      />
      <img class="bookcover" /><img
        :src="'/public/pictures/twilight'"
        alt="Twilight"
        srcset="'/public/pictures/twilight'"
      />
    </div>
  </main>
</template>

<style scoped lang="postcss">
.div {
  @apply cursor-pointer overflow-hidden rounded-md bg-slate-100 p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-900;
  &-class {
    @apply mx-auto rounded-full object-contain;
  }
}
</style>
