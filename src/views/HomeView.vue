<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUiStore } from '@/stores/UiStore.ts'
const ui = useUiStore()

console.log(ui.mode)

const example = ref('example text')
const exampleFlipped = computed(() => {
  return example.value.split('').reverse().join('')
})
</script>

<template>
  <main>
    <h1 class="mb-4 text-2xl font-black md:text-3xl">Stockland Test App</h1>
    <p>{{ ui.mode }} - {{ example }} / {{ exampleFlipped }}</p>
    <button
      :class="ui.mode === 'linear' ? 'bg-black text-white' : 'rounded-sm'"
      class="p-2 my-8 mr-4 transition-all border border-black rounded-lg shadow-frame-gray active:translate-y-1"
      @click="ui.setMode('linear')"
    >
      Linear
    </button>
    <button
      :class="ui.mode === 'exponential' ? 'bg-black text-white rounded-lg' : 'rounded-sm'"
      class="p-2 my-8 transition-all border border-black shadow-frame-gray active:translate-y-1"
      @click="ui.setMode('exponential')"
    >
      Exponential
    </button>
  </main>
</template>
