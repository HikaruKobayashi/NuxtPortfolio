<template>
  <div class='introduction'>
    <div class="hero"></div>
    <div class='site_title'>
      <h1>Portfolio</h1>
      <span>This page is a my self-introduction site.</span>
    </div>
  </div>
</template>

<script>
$(document).ready(function() {
   $(window).on('scroll', function() {
    if($(window).scrollTop() < 1000) {
      $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
    }
  });
});
</script>