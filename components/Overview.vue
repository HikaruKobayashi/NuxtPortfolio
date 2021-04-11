<template>
  <section id="overview">
    <div class="inner text-center" data-aos="fade-up">
      <h2 class="text-3xl">Hikaru Kobayashi</h2>
      <p class="text-xl leading-9">Hikaru Kobayashi was born in Nagano in 1998.I have been active as a<br>swimmer since I was an elementary school student.Encountered programming<br>in the third year of university anddecided to become an IT engineer.<br>After gaining experience in a long-term internship,I successfully obtained<br>a job offer as an IT engineer.Ruby on Rails and JavaScript are unique languages.</p>
    </div>
  </section>
</template>

<style lang="sass" scoped>
#overview
  width: 100%
  padding: 100px 0
  background-color: rgb(255, 255, 255)
  .inner
    width: 85%
    padding: 50px 0
    border: 1px solid rgb(235, 235, 235)
    box-shadow: 1.5rem 2.5rem 2rem -2rem rgb(210,216,219)
    border-radius: 50px
    margin: 0 auto
@media (max-width: 600px)
  #overview 
    padding: 50px 0
    .inner
      border-radius: 20px
      p
        line-height: 30px
        font-size: 16px
</style>