<template>
  <section id="skill">
    <h2>
      {{ title }}
    </h2>
    <div class="inner">
      <p>{{ msg }}</p>
      <ul>
        <li v-for="(skill, i) in skills" :key="i" data-aos='fade-up'>
          <h3>{{ skill.title }}</h3>
          <p>{{ msg }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: 'Skill',
    skills : [
      {
        title: 'Ruby on Rails',
      },
      {
        title: 'Vue',
      },
      {
        title: 'React',
      },
      {
        title: 'Docker',
      },
      {
        title: 'Firebase',
      },
      {
        title: 'Git',
      }
    ],
    msg: `
         There aren't many techniques I can master.
         However, I am confident in the technical level of Ruby on Rails and Javascript.
         I have an internship experience developing with Ruby on Rails and Docker.
         I want to continue improving my skill level.
         `
  })
}
</script>

<style>
  #skill {
    width: 100%;
    text-align: center;
    padding: 100px 0 100px 0;
    text-align: center;
    background-color: rgb(243, 243, 243);
  }
  #skill > .inner {
    width: 1000px;
    margin: 0 auto;
  }
  #skill > .inner > p {
    white-space: pre-wrap;
    word-wrap:break-word;
    font-size: 20px;
  }
  #skill > .inner > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
  }
  #skill > .inner > ul > li {
    width: 475px;
    margin-bottom: 50px;
    padding: 40px 60px;
    border: 1px solid rgb(230, 230, 230);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
    background-image: url("../img/../assets/img/rails.png");
    background-color:rgba(255,255,255,0.8);
    background-blend-mode:lighten;
    box-shadow: 0px 0px 16px -6px rgba(233,233,233,0.6);
  }
  #skill > .inner > ul > li:nth-child(2) {
    background-image: url("../img/../assets/img/rails.png");
  }
  #skill > .inner > ul > li:nth-child(3) {
    background-image: url("../img/../assets/img/docker.png");
  }
  #skill > .inner > ul > li:nth-child(4) {
    background-image: url("../img/../assets/img/git-hub.png");
  }
  #skill > .inner > ul > li:nth-last-child(1), #skill > .inner > ul > li:nth-last-child(2) {
    margin-bottom: 0;
  }
  #skill > .inner > ul > li > p {
    font-weight: bold;
  }
</style>