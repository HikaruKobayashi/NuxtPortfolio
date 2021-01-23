<template>
  <section id="parallax">
    <div class="inner"></div>
  </section>
</template>

<style>
  #parallax {
    width: 100%;
    height: 60vh;
    position: relative;
  }
  #parallax > .inner {
    height: 60vh;
    background-image: url(../assets/img/contact_bg.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  #parallax > .inner::before {
    width: 100%;
    height: 60vh;
    background: url(../assets/img/contact_bg.jpg) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  @media screen and (max-width: 1000px) {
    #parallax > .inner {
      height: 50vh;
    }
  }
  @media screen and (max-width: 750px) {
    #parallax > .inner {
      height: 40vh;
    }
  }
  @media screen and (max-width : 599px) {
    #parallax > .inner {
      height: 30vh;
    }
  }
</style>