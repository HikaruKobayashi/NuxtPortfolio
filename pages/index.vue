<template>
  <div>
    <Header />
    <Introduction />
    <Overview />
    <Skill />
    <Masterpiece />

    <section class="contact-container" data-aos='fade-up'>
      <template v-if="!finished">
        <form name="contact" method="POST" data-netlify="true" @submit.prevent>
          <p>
            <label>
              Name
              <input class="input-text" v-model="form.name" type="text" name="name" required="true" />
            </label>
          </p>
          <p>
            <label>
              E-mail
              <input class="input-text" v-model="form.email" type="email" name="email" required="true" />
            </label>
          </p>
          <p>
            <label>
              Message
              <textarea class="input-text" id="form-content" v-model="form.content" name="content" required="true" />
            </label>
          </p>
          <p>
            <button @click="handleSubmit" v-text="'Send'" class="btn btn-dark" />
          </p>
        </form>
      </template>
      <template v-else>
        <p v-text="'お問い合わせ頂きありがとうございました。'" />
        <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
      </template>
    </section>
  </div>
</template>

<script>
import Header       from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Overview     from '~/components/Overview.vue'
import Skill        from '~/components/Skill.vue'
import Masterpiece  from '~/components/Masterpiece.vue'
import axios from 'axios'

export default {
  components: {
    Header,
    Introduction,
    Overview,
    Skill,
    Masterpiece,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        content: ''
      },
      finished: false
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true
        })
    }
  }
}
</script>

<style src='assets/css/main.css' />