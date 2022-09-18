import { watch } from 'vue'

const STORAGE_VAR_NAME = 'state'
const STORAGE_ENGINE = localStorage

export const persistPinia = (piniaInstance: any) => {
  const state = STORAGE_ENGINE.getItem(STORAGE_VAR_NAME)
  if (state) {
    piniaInstance.state.value = JSON.parse(state)
  }

  watch(
    piniaInstance.state,
    (state) => {
      STORAGE_ENGINE.setItem(STORAGE_VAR_NAME, JSON.stringify(state))
    },
    { deep: true }
  )
}
