<template>
  <section id="overview">
    <h2 data-aos="fade-up">Hikaru Kobayashi</h2>
    <div class="inner">
      <p data-aos="fade-up">Hikaru Kobayashi was born in Nagano in 1998.<br>I have been active as a swimmer since he was an elementary school student.<br>Encountered programming in the third year of university and decided to become an IT engineer.<br>After gaining experience in a long-term internship, I successfully obtained a job offer as an IT engineer.<br>Ruby on Rails and JavaScript are unique languages.</p>
    </div>
  </section>
</template>

<style>
  #overview {
    width: 100%;
    padding: 100px 0;
    background-color: rgb(255, 255, 255);
    text-align: center;
  }
  #overview > .inner {
    width: 85%;
    margin: 50px auto 0 auto;
  }
  #overview > .inner > p {
    line-height: 40px;
    font-size: 20px;
  }

  /* Responsive */
  @media (max-width: 600px) {
    #overview {
      padding: 50px 0;
    }
    #overview > .inner > p {
      line-height: 30px;
      font-size: 16px;
    }
  }
</style>