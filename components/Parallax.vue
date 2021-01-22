<template>
  <section id="parallax">
    <div class="inner"></div>
  </section>
</template>

<style>
  #parallax {
    width: 100%;
  }
  #parallax > .inner {
    height: 60vh;
    background-image: url(../assets/img/contact_bg.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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