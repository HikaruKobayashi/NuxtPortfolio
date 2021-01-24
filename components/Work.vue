<template>
  <section id="work">
    <h2 data-aos="fade-up">Work</h2>
    <div class="inner">
      <ul>
        <li>
          <div class="work_img">
            <img src='@/assets/img/portfolio.png'>
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
            <img src='@/assets/img/portfolio.png'>
          </div>
          <div>
            <h3>Ringo</h3>
            <p>Line Bot that can talk to Ringo Sheena</p>
            <a href="https://github.com/HikaruKobayashi/Ringo">Git Hub</a>
          </div>
          <div class="work_img pc_img">
            <img src='@/assets/img/portfolio.png'>
          </div>
        </li>
        <li>
          <div class="work_img">
            <img src='@/assets/img/portfolio.png'>
          </div>
          <div>
            <h3>Self-introduction Site</h3>
            <p>My portfolio site</p>
            <a href="https://github.com/HikaruKobayashi/Self-introductionSite">Git Hub</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  data(){
    return{
      countNumber: 0
    }
  },
  methods: {
    click_count_up() {
      this.countNumber++
      let Ref = firebase.database().ref('count').child(`ringo`)
      Ref.push({ number: this.countNumber })
    }
  }
}
</script>

<style>
  #work {
    width: 100%;
    text-align: center;
    background-color: rgb(255, 255, 255);
    padding: 100px 0;
  }
  #work > .inner {
    max-width: 1400px;
    margin: 50px auto 0 auto;
  }
  #work > .inner > ul {
    padding-left: 0;
  }
  #work > .inner > ul > li {
    margin-bottom: 150px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #work > .inner > ul > li > .work_img, #work > .inner > ul > li > .mobile_img {
    width: 60%;
    overflow: hidden;
    border: 1px solid rgb(230, 230, 230);
    box-shadow: 1.5rem 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
    border-radius: 50px;
  }
  #work > .inner > ul > li > .mobile_img {
    display: none;
  }
  #work > .inner > ul > li > div {
    width: 30%;
  }
  #work > .inner > ul > li > div > p {
    margin: 25px 0;
  }
  #work > .inner > ul > li > div > img {
    width: 100%;
  }
  #work > .inner > ul > li > div > a {
    font-size: 20px;
    color: #f3f3f3;
    background: linear-gradient(rgb(52,62,98), rgb(24,26,41));
    padding: 10px 60px;
    border-radius: 50px;
    text-decoration: none;
  }
  /* .good_icon {
    color: rgb(255, 0, 0);
    cursor: pointer;
  } */

  /* Responsive */
  @media (max-width: 600px) {
    #work {
      padding: 50px 0;
    }
    #work > .inner > ul > li {
      margin-bottom: 100px;
      display: inline-block;
    }
    #work > .inner > ul > li > .work_img, #work > .inner > ul > li > .mobile_img {
      width: 90%;
      margin: auto;
      border-radius: 20px;
    }
    #work > .inner > ul > li > .pc_img {
      display: none;
    }
    #work > .inner > ul > li > .mobile_img {
      display: inline-block;
    }
    #work > .inner > ul > li > div {
      width: 100%;
    }
  }
</style>