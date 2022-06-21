<template>
  <div class="generic-body gap-3">
    <h1>{{ error }} Error</h1><br> <!-- TODO: Fix h1 tag not doing anything -->
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "error",
  props: ["error", "text"]
};
</script>