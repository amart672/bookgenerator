<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
</script>

<template>
  <div>
    <img class="bookcover" /><img :src="'/pictures/touchofdarkness.jpg'" alt="Touch of Darkness" srcset="" />
    <img class="bookcover" /><img :src="'/pictures/faultinourstars.jpg'" alt="Fault in our Stars" srcset="" />
    <img class="bookcover" /><img :src="'/pictures/twilight.jpg'" alt="Twilight" srcset="" />
    <img class="bookcover" /><img :src="'/pictures/lovehypothesis.jpg'" alt="Love Hypothesis" srcset="" />
    <img class="bookcover" /><img :src="'/pictures/hauntedhotels.jpg'" alt="Haunted Hotels" srcset="" />
    <img class="bookcover" /><img :src="'/pictures/uglylove.jpg'" alt="Ugly Love" srcset="" />
    <img class="bookcover" /><img :src="'/pictures/youwillpay.jpg'" alt="You Will Pay" srcset="" />
    <img class="bookcover" /><img :src="'/pictures/stealingmonalisa.jpg'" alt="Stealing Mona Lisa" srcset="" />
  </div>
</template>

<style scoped lang="postcss">
.div {
  @apply cursor-pointer overflow-hidden rounded-md bg-slate-800;
  &-class {
    @apply mx-auto rounded-full object-contain;
  }
}
</style>
