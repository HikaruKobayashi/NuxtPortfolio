<template>
  <client-only>
  <form id="contact" name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact">
    <p>
      <label>Your Name: <input type="text" name="name"></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email"></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
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