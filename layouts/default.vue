<template>
  <div>
    <Header />
    <Introduction />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'

export default {
  name: 'sample',
  components: {
    Header
  }
}
</script>
<style src='assets/css/main.css' />