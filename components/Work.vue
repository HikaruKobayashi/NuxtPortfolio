<template>
  <section id="work">
    <h2 data-aos="fade-up">Work</h2>
    <div class="inner">
      <ul>
        <li>
          <div class="work_img">
            <img src='@/assets/img/money.png'>
            <!-- <div>
              <p>{{ countNumber }}</p>
              <fa class="good_icon" :icon="['fas', 'heart']" area-hidden="true" @click="click_count_up" />
            </div> -->
          </div>
          <div>
            <h3>Money Hub</h3>
            <p>Accounting book app</p>
            <a href="https://github.com/HikaruKobayashi/MoneyHub">Git Hub</a>
          </div>
        </li>
        <li>
          <div class="mobile_img">
            <img src='@/assets/img/ringo.jpg'>
          </div>
          <div>
            <h3>Ringo</h3>
            <p>Line Bot that can talk to Ringo Sheena</p>
            <a href="https://github.com/HikaruKobayashi/Ringo">Git Hub</a>
          </div>
          <div class="work_img pc_img">
            <img src='@/assets/img/ringo.jpg'>
          </div>
        </li>
        <li>
          <div class="work_img">
            <img src='@/assets/img/portfolio.jpg'>
          </div>
          <div>
            <h3>Self-introduction Site</h3>
            <p>My portfolio site</p>
            <a href="https://github.com/HikaruKobayashi/Self-introductionSite">Git Hub</a>
          </div>
        </li>
        <li>
          <div class="mobile_img">
            <img src='@/assets/img/sns.jpg'>
          </div>
          <div>
            <h3>SNS</h3>
            <p>This site that I started to make, longing for Mark Zuckerberg</p>
            <a href="https://github.com/HikaruKobayashi/SNS">Git Hub</a>
          </div>
          <div class="work_img pc_img">
            <img src='@/assets/img/sns.jpg'>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="sass">
#work
  width: 100%
  text-align: center
  background-color: rgb(255, 255, 255)
  padding: 100px 0
  .inner
    max-width: 1400px
    margin: 50px auto 0 auto
    ul
      padding-left: 0
      li
        margin-bottom: 150px
        list-style: none
        display: flex
        align-items: center
        justify-content: center
        .work_img, .mobile_img
          width: 60%
          overflow: hidden
          border: 1px solid rgb(230, 230, 230)
          box-shadow: 1.5rem 2.5rem 2rem -2rem rgb(210,216,219)
          border-radius: 50px
        .mobile_img
          display: none
        div
          width: 30%
          p
            margin: 25px 0
          img
            width: 100%
          a
            font-size: 20px
            color: #f3f3f3
            background: linear-gradient(rgb(52,62,98), rgb(24,26,41))
            padding: 10px 60px
            border-radius: 50px
            text-decoration: none
// .good_icon
//   color: rgb(255, 0, 0)
//   cursor: pointer
@media (max-width: 600px)
  #work
    padding: 50px 0
    .inner
        ul
          li
            margin-bottom: 100px
            display: inline-block
            .work_img, .mobile_img
              width: 90%
              margin: auto
              border-radius: 20px
            .pc_img
              display: none
            .mobile_img
              display: inline-block
            div
              width: 100%
              h3
                margin-top: 30px
</style>