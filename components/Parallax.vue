<template>
  <div class="parallax_box">
    <div class='parallax parallax_bg_img'></div>
  </div>
</template>

<style>
  .parallax_box {
    width: 100%;
    height: 50vh;
    position: relative;
  }

  .parallax {
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .parallax::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .parallax_bg_img {
    background-image: url(~@/assets/img/riverbank.png);
  }
  .parallax_bg_img::before {
    background-image: url(~@/assets/img/riverbank.png);
  }
</style>