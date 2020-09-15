<template>
  <form id="contact" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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