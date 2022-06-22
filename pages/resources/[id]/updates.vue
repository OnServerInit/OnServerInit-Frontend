<template>
  <router-view v-if="isLoaded">
    <div class="flex gap-5" v-if="this.resource.error === undefined">
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
            <nuxt-link :to="'/resources/' + this.$route.params.id" class="p-1 pb-2 px-4 block rounded-t-md font-semibold">Overview</nuxt-link>
            <nuxt-link :to="'/resources/' + this.$route.params.id + '/updates'" class="bg-green-600 p-1 pb-2 px-4 block rounded-t-md font-semibold">Updates</nuxt-link>
          </div>

          <update v-for="update in resource.updates" :id="update.id" :name="update.name" :downloads="update.downloads" :version="update.version"></update>
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
            <div v-if="this.resource.source !== ''" class="flex"><span class="text-xl">Source Code</span>
              <a :href="httpify(this.resource.source)"
                 class="bg-green-600 p-1 px-4 block rounded-md font-semibold ml-auto">Github
              </a>
            </div>
            <div v-if="this.resource.support !== ''" class="flex"><span class="text-xl">Support</span>
              <a :href="httpify(this.resource.support)"
                 class="bg-green-600 p-1 px-4 block rounded-md font-semibold ml-auto">Discord
              </a>
            </div>
            <div v-if="this.resource.donation !== ''" class="flex"><span class="text-xl">Donation</span>
              <a :href="httpify(this.resource.donation)"
                 class="bg-green-600 p-1 px-4 block rounded-md font-semibold ml-auto">Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <error v-else :error="this.resource.error" :text="this.resource.errorText"></error>
  </router-view>
</template>

<script>
import axios from "axios";
import Error from "../../../components/error";
import Update from "../../../components/update";

export default {
  components: {Update, Error},
  methods: {
    closeError() {
      document.getElementById("error").remove();
    },
    httpify(link) {
      if (!link.startsWith("https://") && !link.startsWith("http://")) {
        return "http://" + link;
      }
      return link;
    },
    urlEncode(text) {

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
      document.title = "Plugin - " + this.resource.name + " - Updates";
    } catch (err) {
      //console.log(err);
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