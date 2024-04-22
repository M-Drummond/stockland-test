import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => {
    return {
      mode: ref<string>('linear'),
    }
  },
  actions: {
    setMode(selectedMode: string) {
      console.log(selectedMode)
      this.mode = selectedMode
    },
  }
})
