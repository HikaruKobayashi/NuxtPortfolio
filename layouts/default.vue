<template>
  <div>
    <Header />
    <Introduction />
    <Overview />
    <Skill />
    <Masterpiece />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Overview from '~/components/Overview.vue'
import Skill from '~/components/Skill.vue'
import Masterpiece from '~/components/Skill.vue'

export default {
  name: 'sample',
  components: {
    Header
  }
}
</script>
<style src='assets/css/main.css' />