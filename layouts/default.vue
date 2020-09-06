<template>
  <div>
    <Header />
    <Introduction />
    <Overview />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Overview from '~/components/Overview.vue'

export default {
  name: 'sample',
  components: {
    Header
  }
}
</script>
<style src='assets/css/main.css' />