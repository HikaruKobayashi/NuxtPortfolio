<template>
  <form id="contact" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact">
    <p>
      <label>Your Name: <input type="text" name="name" required="true"></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" required="true"></label>
    </p>
    <p>
      <label>Message: <textarea name="message" required="true"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
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
      params.append('message', this.content)

      axios
        .post('/', params)
        .then(() => {
          this.isSubmit = true
        })
    }
  }
}
</script>