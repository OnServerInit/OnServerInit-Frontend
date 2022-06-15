<template>
  <nav class="bg-gray-700 p-14 relative">
    <div class="ml-[50%] transform -translate-x-1/2 flex gap-7 w-[80%]">
      <nuxt-link to="/"><h1 class="text-white font-bold text-3xl block">OSI</h1></nuxt-link>

      <div class="flex w-full rounded-md overflow-hidden">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a plugin"
          class="p-1 px-2 flex-grow"
        />
        <button class="bg-green-600 px-5 p-1 text-white font-semibold">
          Search
        </button>
      </div>

      <button class="block text-white font-semibold">Login</button>
    </div>

    <div class="absolute bottom-0 left-[20%] flex gap-3">
      <NuxtLink class="block text-white bg-gray-600 p-1 rounded-t-md" to="/">
        Home
      </NuxtLink>
      <NuxtLink class="block text-white p-1 rounded-t-md" to="/resources">
        Resources
      </NuxtLink>
      <div class="w-[2px] bg-white block">ㅤ</div>
      <NuxtLink class="block text-white p-1 rounded-t-md" to="/discord">
        Discord
      </NuxtLink>
    </div>
  </nav>
  <!-- <nav
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
  </nav> -->
</template>

<script>
import Auth from "./auth";
export default {
  name: "Header",
  components: { Auth },
};
</script>

<style scoped>
</style>
