<template>
  <div id='app'>
    <Header />
    <Introduction />
    <Overview />
    <Skill />
    <Work />
    <!-- <Contact /> -->
    <Footer />
    <ScrollBtn />
  </div>
</template>

<script>
import Header       from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Overview     from '~/components/Overview.vue'
import Skill        from '~/components/Skill.vue'
import Work         from '~/components/Work.vue'
// import Contact      from '~/components/Contact.vue'
import Footer       from '~/components/Footer.vue'
import ScrollBtn    from '~/components/ScrollBtn.vue'
import axios        from 'axios'

export default {
  components: {
    Header,
    Introduction,
    Overview,
    Skill,
    Work,
    // Contact,
    Footer,
    ScrollBtn,
  }
}
</script>