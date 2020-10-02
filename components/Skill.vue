<template>
  <div class='skill' id='skill'>
    <div class='skill_container' data-aos='fade-up'>
      <h1 class='skill_title'>My Skills</h1>
      <div class='skill_content'>
        <p>There aren't many techniques I can master.</p>
        <p>However, I am confident in the technical level of Ruby on Rails and Javascript.</p>
        <p>I have an internship experience developing with Ruby on Rails and Docker.</p>
        <p>I want to continue improving my skill level.</p>
      </div>
      <div>
        <img src='@/assets/img/rails.png' class='skill_icon' data-aos='fade-up' />
        <img src='@/assets/img/docker.png' class='skill_icon' data-aos='fade-up' />
        <img src='@/assets/img/nuxt.png' class='skill_icon' data-aos='fade-up' />
        <img src='@/assets/img/git-hub.png' class='skill_icon' data-aos='fade-up' />
      </div>
    </div>
    <div class='parallax parallax_bg_img'></div>
  </div>
</template>

<style>
  .parallax {
    width: 100%;
    min-height: 300px;
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;    
  }

  .parallax::before {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    -webkit-transform: translate3d(0, 0, -1px);
    transform: translate3d(0, 0, -1px);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .parallax_bg_img {
    background-image: url(~@/assets/img/riverbank.png);
  }
  .parallax_bg_img::before {
    background-image: url(~@/assets/img/riverbank.png);
  }

  .skill {
    text-align: center;
  }

  .skill_container {
    padding: 50px;
  }
  .skill_title {
    padding: 10px;
  }

  .skill_content {
    padding: 10px;
  }

  .skill_icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px;
  }
</style>