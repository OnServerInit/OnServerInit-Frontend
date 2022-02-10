<template>
  <footer
    class="bg-gray-700 px-96 py-4 flex flex-col text-white"
  >
    &#169; 2022 AnythingMC
    <NuxtLink
      class="font-semibold"
      to="/privacy"
    >
      Privacy Policy
    </NuxtLink>
    <NuxtLink
      class="font-semibold"
      to="/terms"
    >
      Terms and Conditions
    </NuxtLink>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>

</style>
