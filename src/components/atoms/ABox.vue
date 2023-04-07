<script setup lang="ts"></script>

<template>
  <div class="box w-full"><slot /></div>
</template>

<style scoped lang="scss">
.box {
  @apply border p-2 border-black shadow-block;
}
</style>
