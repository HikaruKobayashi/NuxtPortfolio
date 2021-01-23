<template>
  <section id="skill">
    <h2 data-aos='fade-up'>
      {{ title }}
    </h2>
    <div class="inner">
      <p data-aos='fade-up'>{{ msg }}</p>
      <ul>
        <li v-for="(skill, i) in skills" :key="i" data-aos='fade-up'>
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.content }}</p>
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
        content: `
                 Ruby is my favorite programming language.
                 During my long-term internship with the framework, I was involved in service development using Ruby on Rails.
                 Recently, it is often used as an API.
                 `
      },
      {
        title: 'Vue',
        content: `
                 JavaScript is indispensable for me as a front-end engineer.
                 Recently, I've been focusing on the framework Vue.js.
                 The site you are looking at is created using Nuxt.js.
                 I also want to try TypeScript.
                 `
      },
      {
        title: 'React',
        content: `
                 Before I got hooked on Vue, I mainly studied React.
                 Through React I understood the concept of components.
                 I also enthusiastically developed native apps using React Native.
                 `
      },
      {
        title: 'Docker',
        content: `
                 Docker has dramatically improved my development environment.
                 I have had a significant decrease in computer performance due to the accumulation of unnecessary images.
                 Be careful to delete images that you do not use regularly.
                 `
      },
      {
        title: 'Firebase',
        content: `
                 My knowledge of Firebase is still poor.
                 I have used Firestore, RDB, Hosting, etc.
                 It seems that the day to master Firebase is still ahead, but I want to deepen my understanding every day.
                 `
      },
      {
        title: 'Git',
        content: `
                 You can use the Git command to break a branch and work.
                 I feel good when I commit diligently and push them all together.
                 I'm addicted to growing grass.
                 `
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
    padding: 0;
  }
  #skill > .inner > ul > li {
    width: 475px;
    margin: 0 auto 20px auto;
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
    background-image: url("../img/../assets/img/vue.png");
  }
  #skill > .inner > ul > li:nth-child(3) {
    background-image: url("../img/../assets/img/react.png");
  }
  #skill > .inner > ul > li:nth-child(4) {
    background-image: url("../img/../assets/img/docker.png");
  }
  #skill > .inner > ul > li:nth-child(5) {
    background-image: url("../img/../assets/img/firebase.png");
  }
  #skill > .inner > ul > li:nth-child(6) {
    background-image: url("../img/../assets/img/git-hub.png");
  }
  #skill > .inner > ul > li:nth-last-child(1), #skill > .inner > ul > li:nth-last-child(2) {
    margin-bottom: 0;
  }
  #skill > .inner > ul > li > p {
    font-weight: bold;
  }

  @media screen and (max-width: 1000px) {
    #skill > .inner {
      width: 700px;
    }
    #skill > .inner > ul > li {
      width: 300px;
    }
  }
  @media screen and (max-width: 750px) {
    #skill > .inner {
      width: 500px;
    }
    #skill > .inner > ul > li {
      width: 480px;
    }
    #skill > .inner > ul > li:nth-last-child(1), #skill > .inner > ul > li:nth-last-child(2) {
      margin-bottom: 50px;
    }
  }
  @media screen and (max-width : 599px) {
    #skill > .inner {
      width: 100%;
      padding: 0;
    }
    #skill > .inner > ul > li {
      width: 90%;
      background-position: center center;
    }
  }
</style>