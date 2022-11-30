<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
</script>

<template>
  <main class="main">
    <div>
      <img class="bookcover" /><img
        :src="'/pictures/touchofdarkness.jpg'"
        height="150"
        width="150"
        alt="Touch of Darkness"
        srcset=""
      />
      <img class="bookcover" /><img
        :src="'/pictures/faultinourstars.jpg'"
        height="150"
        width="150"
        alt="Fault in our Stars"
        srcset=""
      />
      <img class="bookcover" /><img :src="'/pictures/twilight.jpg'" height="150" width="150" alt="Twilight" srcset="" />
      <img class="bookcover" /><img
        :src="'/pictures/lovehypothesis.jpg'"
        height="150"
        width="150"
        alt="Love Hypothesis"
        srcset=""
      />
      <img class="bookcover" /><img
        :src="'/pictures/hauntedhotels.jpg'"
        height="150"
        width="150"
        alt="Haunted Hotels"
        srcset=""
      />
      <img class="bookcover" /><img
        :src="'/pictures/uglylove.jpg'"
        height="150"
        width="150"
        alt="Ugly Love"
        srcset=""
      />
      <img class="bookcover" /><img
        :src="'/pictures/youwillpay.jpg'"
        height="150"
        width="150"
        alt="You Will Pay"
        srcset=""
      />
      <img class="bookcover" /><img
        :src="'/pictures/stealingmonalisa.jpg'"
        height="150"
        width="150"
        alt="Stealing Mona Lisa"
        srcset=""
      />
    </div>
  </main>
</template>

<style scoped lang="postcss">
.main {
  @apply flex min-h-screen items-center justify-center bg-zinc-600;
  &-bookcover {
    @apply flex columns-3;
  }
}
</style>
