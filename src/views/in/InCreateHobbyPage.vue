<script setup lang="ts">
import ALink from '../../components/atoms/ALink.vue'
import ATitle from '../../components/atoms/ATitle.vue'
import { createHobby } from '../../services/hobbies'
import { IHobbyCreate } from '../../models/hobbies'
import { ref } from 'vue'
import type { Ref } from 'vue'

const formData: Ref<IHobbyCreate> = ref({
  name: '',
  require_geolocation: false
})
const formSchema = [
  {
    $formkit: 'text',
    name: 'name',
    label: 'Name',
    validation: 'required|length:3,100'
  },
  {
    $formkit: 'textarea',
    name: 'description',
    label: 'Description',
    validation: 'required|length:10,300'
  },
  {
    $formkit: 'checkbox',
    name: 'require_geolocation',
    label: 'Require geolocation'
  }
]

const creationError = ref(false)
const creationMessage = ref('')
const handleSubmit = async () => {
  const response = await createHobby(formData.value)
  creationError.value = !response.success
  creationMessage.value = response.message
}
</script>

<template>
  <div>
    <a-title class="mb-4">Create new hobby</a-title>
    <p v-if="creationError" class="text-red-600 mb-4">{{ creationMessage }}</p>
    <p v-if="!creationError && creationMessage" class="text-green-600 mb-4">{{ creationMessage }}</p>
    <form-kit type="form" @submit="handleSubmit" v-model="formData" submit-label="Create">
      <form-kit-schema :schema="formSchema" />
    </form-kit>
    <div class="mt-8">
      <a-link :href="{ name: 'subscribe' }">Back to subscribe</a-link>
    </div>
  </div>
</template>
