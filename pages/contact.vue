<template>
  <div>
    <form v-if="isSubmit === false" @submit.prevent="onSubmit">
      <input type="hidden" name="form-name" value="contact">
       <p>
        <label>Your Name: <input type="text" v-model="name" name="name" required="true"></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" v-model="email" name="email" required="true"></label>
      </p>
      <p>
        <label>Message: <textarea v-model="message" name="message" required="true"></textarea></label>
      </p>

      <button type="submit">Send</button>
    </form>

    <div v-if="isSubmit === true">
      <p>Thank you.</p>
    </div>

    <form name="contactform" netlify netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contact">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isSubmit: false
    }
  },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()

      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)

      axios
        .post('/', params)
        .then(() => {
          this.isSubmit = true
        })
    }
  }
}
</script>