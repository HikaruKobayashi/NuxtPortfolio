<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  name: 'sample',
  components: {
    Header
  }
}
</script>
<style src='assets/css/main.css' />