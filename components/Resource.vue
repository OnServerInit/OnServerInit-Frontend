<template>
  <div class="generic-body flex gap-3">
    <img
        v-bind:src="'data:image/jpeg;base64,' + logo"
        alt=""
        class="w-[100px] h-[100px] rounded-lg"
    />

    <div class="flex flex-col gap-1 flex-grow basis-0">
      <div class="flex gap-2">
        <span class="tag bg-red-500">Server Software</span>
        <span class="tag bg-red-500">Server Software</span>
        <span class="tag bg-red-500">Server Software</span>
      </div>

      <div class="flex flex-col flex-grow">
        <span class="font-semibold">{{ name }}</span>
        <span>{{ blurb }}</span>
      </div>
    </div>

    <div class="flex flex-col w-max h-full">
      <button class="bg-green-600 p-2 px-4 block rounded-md font-semibold">Download</button>
      <button
          class="border-2 border-green-600 border-solid bg-transparent p-2 px-4 mt-auto block rounded-md font-semibold">
        View Plugin
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resource",
  props: ["id", "name", 'blurb', 'downloads', 'logo']
};
</script>

<style scoped>

</style>