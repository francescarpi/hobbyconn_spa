import { watch } from 'vue'

export const persistPinia = (piniaInstance) => {
  watch(
    piniaInstance.state,
    (state) => {
      localStorage.setItem('piniaState', JSON.stringify(state))
    },
    { deep: true }
  )
}
