<template>
  <div class='skill' id='skill'>
    <div class='skill_container' data-aos='fade-up'>
      <h1 class='skill_title'>{{ title }}</h1>
      <div class='skill_content'>
        <p class="skill_msg">{{ msg }}</p>
      </div>
      <div>
        <img class='skill_icon' v-for="(skill, i) in skills" :key="i" :src="skill.link" data-aos='fade-up' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'My Skills',
    skills : [
      {
        link: require('@/assets/img/rails.png')
      },
      {
        link: require('@/assets/img/docker.png')
      },
      {
        link: require('@/assets/img/nuxt.png')
      },
      {
        link: require('@/assets/img/git-hub.png')
      }
    ],
    msg: `
         There aren't many techniques I can master.
         However, I am confident in the technical level of Ruby on Rails and Javascript.
         I have an internship experience developing with Ruby on Rails and Docker.
         I want to continue improving my skill level.
         `,
  })
}
</script>

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

  .skill_msg {
    white-space: pre-wrap;
    word-wrap:break-word;
  }
</style>