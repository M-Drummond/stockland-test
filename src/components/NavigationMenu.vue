<template>
  <nav id="NavigationMenu" class="mb-4 space-x-4 font-bold">
    <RouterLink
      class="px-2 py-2 border border-black border-solid router-link rounded-xs shadow-frame"
      to="/"
      >Home</RouterLink
    >
    <RouterLink
      class="px-2 py-2 border border-black border-solid router-link rounded-xs shadow-frame"
      to="/about"
      >About</RouterLink
    >
  </nav>
</template>

<style scoped>
.router-link {
  transition:
    0.3s ease-in background,
    0.25s ease-in color,
    0.8s ease-in-out box-shadow;
}
.router-link-active {
  background: #000;
  color: #fff;
  @apply shadow-frame-gray;
}
</style>
