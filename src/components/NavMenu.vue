<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/question">Questions</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4 bg-zinc-600 text-sky-400;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
