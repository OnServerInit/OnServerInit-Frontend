<template>
  <nav
    class="bg-gray-300 py-2 md:py-4 sticky top-0 z-20 font-body shadow-card px-96"
  >
    <div
      class="flex items-center justify-between"
    >
      <div>
        <NuxtLink
          class="font-semibold text-red-600 px-2"
          to="/"
        >
          Home
        </NuxtLink>
        <NuxtLink
          class="font-semibold text-red-600 px-2"
          to="/resources"
        >
          Resources
        </NuxtLink>
        <a
          class="font-semibold text-red-600 px-2"
          href="https://discord.gg/Qw8N9J9zEc"
          target="_blank"
        >
          Discord
        </a>
      </div>
      <Auth />
    </div>
  </nav>
</template>

<script>
import Auth from './auth'
export default {
  name: 'Header',
  components: { Auth },
}
</script>

<style scoped>

</style>
