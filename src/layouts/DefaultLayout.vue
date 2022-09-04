<template>
  <div class="p-2">
    <ul class="my-2 flex">
      <li class="mr-4">
        <router-link to="/" class="text-blue-500">Home</router-link>
      </li>
      <li>
        <router-link to="/in/" class="text-blue-500">Dashboard</router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<style>
.router-link-active {
  @apply underline;
}
</style>
