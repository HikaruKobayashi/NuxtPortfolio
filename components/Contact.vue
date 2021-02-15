<template>
  <section id="contact">
    <h2>
      {{ title }}
    </h2>
    <div class="inner">
      <template v-if="!finished">
        <form name="contact" method="POST" data-netlify="true" @submit.prevent>
          <p>
            Name
            <input class="input-text" v-model="form.name" type="text" name="name" required="true" />
          </p>
          <p>
            E-mail
            <input class="input-text" v-model="form.email" type="email" name="email" required="true" />
          </p>
          <p>
            Message
            <textarea class="input-text" id="form-content" v-model="form.content" name="content" required="true" />
          </p>
          <button @click="handleSubmit" v-text="'Send'" class="btn" />
        </form>
      </template>
      <template v-else>
        <p v-text="'お問い合わせ頂きありがとうございました。'" />
        <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
      </template>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: 'Contact',
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

<style lang="sass">
#contact
  width: 100%
  padding: 50px 0 150px 0
  text-align: center
  background-color: rgb(255, 255, 255)
  .inner
    width: 1000px
    margin: 0 auto

.input-text
  display: block
  width: 100%
  height: 36px
  border-width: 0 0 2px 0
  border-color: #000
  font-size: 18px
  line-height: 26px
  font-weight: 400
  outline: none

.btn, .btn:hover
  font-size: 20px
  color: #f3f3f3
  background: linear-gradient(rgb(52,62,98), rgb(24,26,41))
  padding: 10px 60px
  border-radius: 50px
  text-decoration: none

@media screen and (max-width: 1000px)
  #contact
    .inner
      width: 700px
@media screen and (max-width: 750px)
  #contact
    .inner
      width: 500px
@media screen and (max-width : 599px)
  #contact
    padding: 0 0 100px 0
    .inner
      width: 300px
</style>