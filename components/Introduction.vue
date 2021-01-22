<template>
  <section id="introduction">
    <div class="inner">
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: 'Portfolio',
    msg: 'This page is a my self-introduction site.',
  })
}
</script>

<style>
  #introduction {
    width: 100%;
    padding: 200px 0 200px 0;
    text-align: center;
    background: url(../assets/img/riverbank.png) no-repeat;
    background-size: cover;
  }
  #introduction > .inner {
    width: 1000px;
    margin: 0 auto;
    color: rgb(255, 255, 255);
    background: linear-gradient(rgb(52,62,98), rgb(24,26,41));
    padding: 100px 0;
  }

  /* Responsive */
  @media screen and (max-width: 1000px) {
    #introduction > .inner {
      width: 700px;
    }
  }
  @media screen and (max-width: 750px) {
    #introduction > .inner {
      width: 500px;
    }
  }
  @media screen and (max-width : 599px) {
    #introduction > .inner {
      width: 300px;
    }
  }
</style>