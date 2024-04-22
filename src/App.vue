<script setup lang="ts">
import { ref, computed } from 'vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import { useUiStore } from '@/stores/UiStore'
const ui = useUiStore()
</script>

<template>
  <header>
    <NavigationMenu />
  </header>
  <div class="relative min-h-[500px]">
    <router-view v-slot="{ Component }">
      <Transition name="slide-fade">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  z-index: -1;
  opacity: 0.25s;
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  position: absolute;
}
</style>
