<template>
  <section id="overview">
    <h2>
      {{ title }}
    </h2>
    <div class="inner">
      <p>{{ msg }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: 'Hikaru Kobayashi',
    msg:`
        Hikaru Kobayashi was born in Nagano in 1998.
        I have been active as a swimmer since he was an elementary school student.
        Encountered programming in the third year of university and decided to become an IT engineer.
        After gaining experience in a long-term internship, I successfully obtained a job offer as an IT engineer.
        Ruby on Rails and JavaScript are unique languages.
        `,
  })
}
</script>

<style>
  #overview {
    width: 100%;
    text-align: center;
    padding: 100px 0 100px 0;
    background-color: rgb(243, 243, 243);
  }
  #overview > .inner {
    width: 1000px;
    margin: 0 auto;
    white-space: pre-wrap;
    word-wrap:break-word;
  }
  #overview > .inner > p {
    font-size: 20px;
  }

  /* Responsive */
  @media screen and (max-width: 1000px) {
    #overview > .inner {
      width: 700px;
    }
  }
  @media screen and (max-width: 750px) {
    #overview > .inner {
      width: 500px;
    }
  }
  @media screen and (max-width : 599px) {
    #overview > .inner {
      width: 300px;
    }
  }
</style>