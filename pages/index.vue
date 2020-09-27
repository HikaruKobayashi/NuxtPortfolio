<template>
  <div id='app'>
    <Header />
    <Introduction />
    <Overview />
    <Skill />
    <Masterpiece />

    <div class='contact_area'>
      <h1 class='contact_title' data-aos='fade-up'>Contact</h1>
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

    <div class="Page-Btn" @click="scrollTop">
      <fa class="fas fa-chevron-up Page-Btn-Icon" :icon="['fas', 'chrome']" area-hidden="true" />
    </div>
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
    },
    scrollTop: function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
  .contact-container {
    padding: 64px;
    text-align: center;
  }

  .input-text {
    display: block;
    width: 100%;
    height: 36px;
    border-width: 0 0 2px 0;
    border-color: #000;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    outline: none;
  }
  .contact_area {
    padding: 50px;
    text-align: center;
  }
  .contact_title {
    padding: 10px;
  }

  .Page-Btn{
    position: fixed;
    right: 14px;
    bottom: 14px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    background: #5bc8ac;
  }

  .Page-Btn-Icon{
    color: #fff;
    font-size: 16px;
  }
</style>