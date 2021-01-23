<template>
  <section id="work">
    <h2>
      {{ title }}
    </h2>
    <div class="inner">
      <ul>
        <li>
          <div>
            <h3 data-aos='fade-up'>Money Hub</h3>
            <p data-aos='fade-up'>Money Hub is a household account book application<br>that makes money in and out simpler.<br>By subdividing daily money transfer into and out of income,<br>savings, fixed costs, and variable costs,<br>you can easily get information such as where you are spending <br>most of your money and how many assets you currently have.<br></p>
            <a data-aos='fade-up' href="https://github.com/HikaruKobayashi/MoneyHub">{{ git }}</a>
          </div>
          <img src='@/assets/img/money-hub.png'>
        </li>
        <li>
          <img src='@/assets/img/ringo.png' class="work_ringo_pc_img">
          <div>
            <h3 data-aos='fade-up'>Ringo</h3>
            <p data-aos='fade-up'>Money Hub is a household account book<br>application that makes money in and<br> out simpler.By subdividing daily money<br>transfer into and out of income,<br>savings, fixed costs, and variable costs,<br>you can easily get information<br>such as where you are spending most of your money<br>and how many assets you currently have.<br></p>
            <a data-aos='fade-up' href="https://github.com/HikaruKobayashi/Ringo">{{ git }}</a>
          </div>
          <img src='@/assets/img/ringo.png' class="work_ringo_mobile_img">
        </li>
        <li>
          <div>
            <h3 data-aos='fade-up'>Self-introduction site</h3>
            <p data-aos='fade-up'>Money Hub is a household account book application<br>that makes money in and out simpler.<br>By subdividing daily money transfer into and out of income,<br>savings, fixed costs, and variable costs,<br>you can easily get information such as where you are spending <br>most of your money and how many assets you currently have.<br></p>
            <a data-aos='fade-up' href="https://github.com/HikaruKobayashi/NuxtPortfolio">{{ git }}</a>
          </div>
          <img src='@/assets/img/portfolio.png'>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Work',
      git: 'Git Hub'
    }
  }
}
</script>

<style>
  #work {
    width: 100%;
    text-align: center;
    padding: 100px 0 150px 0;
    background-color: rgb(17, 32, 63);
    color: rgb(255, 255, 255);
  }
  #work > h2 {
    margin-bottom: 50px;
  }
  #work > .inner {
    width: 1000px;
    margin: 0 auto;
  }
  #work > .inner > ul {
    list-style: none;
  }
  #work > .inner > ul > li {
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    display: flex;
  }
  #work > .inner > ul > li > div > p {
    padding: 20px 0;
  }
  #work > .inner > ul > li > div > a {
    color: #f3f3f3;
    background-color: rgb(2,115,236);
    padding: 15px 60px;
    border-radius: 50px;
    text-decoration: none;
  }
  #work > .inner > ul > li > img {
    width: 450px;
    height: 100%;
  }
  #work > .inner > ul > li > img:nth-child(1) {
    width: 400px;
  }
  #work > .inner > ul > li > .work_ringo_mobile_img {
    display: none;
  }

  /* Responsive */
  @media screen and (max-width: 1000px) {
    #work > .inner {
      width: 700px;
    }
    #work > .inner > ul {
      padding: 0;
    }
    #work > .inner > ul > li {
      flex-direction: column;
      justify-content: center;
    }
    #work > .inner > ul > li > img {
    padding-top: 40px;
    }
    #work > .inner > ul > li > img:nth-child(1) {
      padding-bottom: 40px;
    }
  }
  @media screen and (max-width: 800px) {
    #work > .inner {
      width: 500px;
    }
    #work > .inner > ul {
      padding: 0;
    }
    #work > .inner > ul > li > .work_ringo_mobile_img {
      display: inline;
    }
    #work > .inner > ul > li > .work_ringo_pc_img {
      display: none;
    }
  }
  @media screen and (max-width : 599px) {
    #work {
      padding: 50px 0 50px 0;
    }
    #work > .inner {
      width: 300px;
    }
    #work > .inner > ul {
      padding: 0;
    }
    #work > .inner > ul > li > img {
      width: 290px;
      height: 100%;
      padding-top: 40px;
    }
    #work > .inner > ul > li > img:nth-child(1) {
      width: 270px;
      padding-top: 0;
    }
  }
</style>