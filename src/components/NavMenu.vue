<template>
  <nav>
    <RouterLink to="/">📚</RouterLink>
    <RouterLink to="/question">Questions</RouterLink>
    <RouterLink to="/login" href="#" class="menu-login">Login</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-8 bg-zinc-600 text-2xl text-sky-400;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
