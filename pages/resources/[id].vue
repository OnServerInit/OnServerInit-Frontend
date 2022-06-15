<template>
  <router-view>
    <div class="flex gap-5" v-if="isLoaded">
      <div class="flex flex-grow flex-col gap-4">
        <div class="generic-body !bg-red-500 relative" id="error">
          <button class="absolute right-3" v-on:click="closeError">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h1 class="text-2xl font-semibold">Error</h1>
          <h1 class="text-xl">That action could not be performed</h1>
        </div>

        <div class="generic-body flex flex-col gap-3 relative">
          <button
              class="
              bg-green-600
              p-2
              px-5
              block
              rounded-md
              font-semibold
              absolute
              right-3
            "
          >
            Download
          </button>

          <div class="flex gap-3">
            <img
                v-bind:src="'data:image/jpeg;base64,' + this.resource.logo"
                alt=""
                class="w-[100px] h-[100px] rounded-lg"
            />

            <div class="flex flex-col gap-1 flex-grow basis-0">
              <div class="flex flex-col flex-grow">
                <span class="font-semibold text-4xl">{{ this.resource.name }}</span>
                <span>{{ this.resource.blurb }}
                </span>
              </div>

              <div class="flex gap-2">
                <span class="tag bg-gray-600">Server Software</span>
                <span class="tag bg-gray-600">Server Software</span>
                <span class="tag bg-gray-600">Server Software</span>
              </div>
            </div>
          </div>

          <div class="flex gap-4 border-b-2 border-green-600 border-solid">
            <a href="" class="bg-green-600 p-1 pb-2 px-4 block rounded-t-md font-semibold">Overview</a>
            <a href="" class="p-1 pb-2 px-4 block rounded-t-md font-semibold">Updates</a>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex gap-2 align-middle">
              <p>Supported Servers</p>
              <span class="tag-r bg-gray-500">Spigot</span>
              <span class="tag-r bg-gray-500">Paper</span>
            </div>

            <div class="flex gap-2 align-middle">
              <p>Supported Versions</p>
              <span class="tag-r bg-gray-500">1.18.x</span>
              <span class="tag-r bg-gray-500">1.17.x</span>
              <span class="tag-r bg-gray-500">1.16.x</span>
              <span class="tag-r bg-gray-500">1.15.x</span>
              <span class="tag-r bg-gray-500">1.14.x</span>
            </div>
          </div>

          <div class="">
            <p class="leading-tight">{{ this.resource.description }}</p>
          </div>
        </div>

        <div class="generic-body relative">
          <h1 class="text-2xl font-semibold">Leave a Review!</h1>
          <textarea name="" id="" cols="30" rows="5"
                    class="w-full rounded-md bg-gray-600 focus:outline-none p-2 mt-2"></textarea>
          <!-- <h1 class="text-xl">That action could not be performed</h1> -->

          <button
              class="
              mt-3
              bg-green-600
              p-2
              px-5
              block
              rounded-md
              font-semibold
            "
          >
            Leave Review
          </button>

        </div>

        <div class="generic-body relative">
          <h1 class="text-2xl font-semibold">Reviews</h1>

          <div class="flex flex-col gap-3 mt-1">
            <div class="bg-gray-600 p-3 w-full rounded-md flex gap-3">
              <img src="https://via.placeholder.com/100" alt="" class="w-[40px] h-[40px] rounded-full">

              <div class="flex flex-col">
                <span class="font-semibold">Super bad dont recooment</span>
                <span class="text-gray-400 text-sm">Posted 5 months ago</span>
                <span>a really cool descriptioon for an equally cool plugin. a really cool descriptioon for an equally cool plugin. a really cool descriptioon...</span>
              </div>
            </div>
            <div class="bg-gray-600 p-3 w-full rounded-md flex gap-3">
              <img src="https://via.placeholder.com/100" alt="" class="w-[40px] h-[40px] rounded-full">

              <div class="flex flex-col">
                <span class="font-semibold">Super bad dont recooment</span>
                <span class="text-gray-400 text-sm">Posted 5 months ago</span>
                <span>a really cool descriptioon for an equally cool plugin. a really cool descriptioon for an equally cool plugin. a really cool descriptioon...</span>
              </div>
            </div>
            <div class="bg-gray-600 p-3 w-full rounded-md flex gap-3">
              <img src="https://via.placeholder.com/100" alt="" class="w-[40px] h-[40px] rounded-full">

              <div class="flex flex-col">
                <span class="font-semibold">Super bad dont recooment</span>
                <span class="text-gray-400 text-sm">Posted 5 months ago</span>
                <span>a really cool descriptioon for an equally cool plugin. a really cool descriptioon for an equally cool plugin. a really cool descriptioon...</span>
              </div>
            </div>
            <div class="bg-gray-600 p-3 w-full rounded-md flex gap-3">
              <img src="https://via.placeholder.com/100" alt="" class="w-[40px] h-[40px] rounded-full">

              <div class="flex flex-col">
                <span class="font-semibold">Super bad dont recooment</span>
                <span class="text-gray-400 text-sm">Posted 5 months ago</span>
                <span>a really cool descriptioon for an equally cool plugin. a really cool descriptioon for an equally cool plugin. a really cool descriptioon...</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="min-w-[25%] flex flex-col gap-4">
        <div class="generic-body bg-gray-700 h-min">
          <img src="https://via.placeholder.com/100" alt="" class="mx-auto w-[80px] h-[80px] rounded-full">
          <h1 class="text-2xl font-semibold text-center mt-3">DevName</h1>
          <div class="flex gap-3 mt-4">
            <button class="bg-green-600 p-1 px-4 block rounded-md font-semibold flex-grow basis-0">Download</button>
            <button
                class="border-2 border-green-600 border-solid bg-transparent p-1 px-4 mt-auto block rounded-md font-semibold flex-grow basis-0">
              View Plugin
            </button>
          </div>
        </div>

        <div class="generic-body bg-gray-700 h-min">
          <h1 class="text-2xl font-semibold">Statistics</h1>
          <div class="flex flex-col mt-2">
            <div class="flex text-xl"><span>Total Reviews</span><span
                class="text-green-600 font-semibold ml-auto block">53</span></div>
            <div class="flex text-xl"><span>Review Score</span><span class="text-green-600 font-semibold ml-auto block">53</span>
            </div>
            <div class="flex text-xl"><span>Total Downloads</span><span
                class="text-green-600 font-semibold ml-auto block">{{ this.resource.totalDownloads }}</span></div>
            <div class="flex text-xl"><span>Total Views</span><span class="text-green-600 font-semibold ml-auto block">53</span>
            </div>
          </div>
        </div>

        <div class="generic-body bg-gray-700 h-min">
          <h1 class="text-2xl font-semibold">Links</h1>
          <div class="flex flex-col mt-2 gap-2">
            <div class="flex"><span class="text-xl">Source Code</span>
              <nuxt-link :to="this.resource.source"
                         class="bg-green-600 p-1 px-4 block rounded-md font-semibold ml-auto">Github
              </nuxt-link>
            </div>
            <div class="flex"><span class="text-xl">Support</span>
              <nuxt-link :to="this.resource.support"
                         class="bg-green-600 p-1 px-4 block rounded-md font-semibold ml-auto">Discord
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-view>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    closeError() {
      document.getElementById("error").remove();
    }
  },
  data() {
    return {
      isLoaded: false,
      title: "Loading...",
      resource: {}
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    try {
      const res = await axios.get(`http://localhost:8080/resources/${this.$route.params.id}`, config);

      this.resource = res.data;
      this.isLoaded = true;

      // TODO: "Fix ReferenceError: document is not defined" error
      document.title = "Plugin - " + this.resource.name;
    } catch (err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: "Loading...",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "cool projects"
        }
      ]
    };
  }
}
</script>