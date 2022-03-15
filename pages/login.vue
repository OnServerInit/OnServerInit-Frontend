<template>
  <div>
    <div class="absolute left-1/2 top-10 transform -translate-x-1/2 bg-gray-700 p-4 rounded-lg w-[30%] flex flex-col gap-4">
      <h1 class="text-white font-bold text-3xl">Login</h1>
      <input type="text" name="" id="" placeholder="username" class="p-1 px-2 rounded-md w-full">
      <input type="password" name="" id="" placeholder="password" class="p-1 px-2 rounded-md w-full">
      <button class="text-white bg-green-600 w-full rounded-md py-1 font-semibold">Login</button>
      <NuxtLink class="block text-white text-center -mt-2" to="/register">
        Dont have an account?
      </NuxtLink>
    </div>
  </div>
</template>
