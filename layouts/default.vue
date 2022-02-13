<template>
  <div
    class="flex flex-col min-h-screen"
  >
    <Header />
    <div class="overflow-y-auto">
      <div
        class="mx-96 my-8  h-[75vh]"
      >
        <slot />
      </div>
    </div>
    <Footer class="mt-auto" />
  </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'

export default {
  components: { Footer, Header },
}
</script>
