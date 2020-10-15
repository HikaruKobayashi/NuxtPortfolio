<template>
  <div class='introduction'>
    <div class="introduction_bg_img"></div>
    <div class='introduction_title'>
      <h1>{{ title }}</h1>
      <span>{{ msg }}</span>
    </div>
  </div>
</template>

<script>
$(document).ready(function() {
   $(window).on('scroll', function() {
    if($(window).scrollTop() < 1000) {
      $('.introduction_bg_img').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
    }
  });
});

export default {
  data: () => ({
    title: 'Portfolio',
    msg: 'This page is a my self-introduction site.',
  })
}
</script>

<style>
  .introduction {
    height: 100vh;
    position: relative;
  }

  .introduction_title {
    padding: 80px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background: linear-gradient(rgb(52,62,98), rgb(24,26,41));
    color: rgb(255, 255, 255);
    font-weight: bold;
  }

  .introduction_bg_img {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgb(41,41,48);
    background-image: url(~@/assets/img/landscape.jpg);
    background-repeat: no-repeat;
    background-size: 130%;
    overflow: hidden;
  }
</style>