<template>
  <section id="overview">
    <div class="inner" data-aos="fade-up">
      <h2>Hikaru Kobayashi</h2>
      <p>Hikaru Kobayashi was born in Nagano in 1998.I have been active as a<br>swimmer since I was an elementary school student.Encountered programming<br>in the third year of university anddecided to become an IT engineer.<br>After gaining experience in a long-term internship,I successfully obtained<br>a job offer as an IT engineer.Ruby on Rails and JavaScript are unique languages.</p>
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
    padding: 50px 0;
    border: 1px solid rgb(235, 235, 235);
    box-shadow: 1.5rem 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
    border-radius: 50px;
    margin: 0 auto;
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
    #overview > .inner {
      border-radius: 20px;
    }
    #overview > .inner > p {
      line-height: 30px;
      font-size: 16px;
    }
  }
</style>