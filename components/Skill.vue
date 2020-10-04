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
  </div>
</template>

<style>
  .skill {
    background-color: rgb(255,255,255);
    text-align: center;
    z-index: 2;
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