<template>
  <div>
    <div class="flex gap-5">
      <div class="flex flex-grow flex-col gap-4">
        <!-- <Resource v-for="resource in resources" :name="resources.name" :id="resource.id"></Resource> -->
        <Resource v-for="item in resources" :name="item['name']" :id="item['id']" :blurb="item['blurb']"
                  :downloads="'0'" :logo="item['logo']"></Resource>
      </div>

      <div class="generic-body min-w-[25%] bg-gray-700 h-min">
        <h1 class="text-2xl">Categories</h1>
        <div class="flex flex-col">
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Resource from "../../components/resource";

export default {
  components: {
    Resource
  },
  data() {
    return {
      resources: []
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get('http://localhost:8080/resources', config);

      for (let i = 0; i < res.data.content.length; i++) {
        const res1 = await axios.get('http://localhost:8080/resources/' + res.data.content[i].id, config);
        this.resources.push(res1.data);
      }
    } catch (e) {
      console.log(e);
    }
  },
  head() {
    return {
      title: 'JustDoom Site',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "JustDooms Site"
        }
      ]
    };
  }
}
</script>
