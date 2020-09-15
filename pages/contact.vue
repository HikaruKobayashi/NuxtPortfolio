<template>
  <client-only>
  <form id="contact" action="thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
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
  </client-only>
</template>

<script>
  $("#contact").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you!");
    });
  });
</script>