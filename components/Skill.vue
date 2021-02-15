<template>
  <section id="skill">
    <h2 data-aos='fade-up'>Skill</h2>
    <div class="inner">
      <ul>
        <li v-for="(skill, i) in skills" :key="i" data-aos='fade-up'>
          <img :src="skill.link" />
          <div>
            <h3>{{ skill.title }}</h3>
            <p>{{ skill.content }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills : [
      {
        title: 'Ruby on Rails',
        link: require('@/assets/img/rails.jpg'),
        content: `Ruby is my favorite programming language.During my long-term internship with the framework, I was involved in service development using Ruby on Rails.Recently, it is often used as an API.`
      },
      {
        title: 'Vue',
        link: require('@/assets/img/nuxt.jpg'),
        content: `JavaScript is indispensable for me as a front-end engineer.Recently, I've been focusing on the framework Vue.js.The site you are looking at is created using Nuxt.js.I also want to try TypeScript.`
      },
      {
        title: 'React',
        link: require('@/assets/img/react.jpg'),
        content: `Before I got hooked on Vue, I mainly studied React.Through React I understood the concept of components.I also enthusiastically developed native apps using React Native.`
      },
      {
        title: 'Docker',
        link: require('@/assets/img/docker.jpg'),
        content: `Docker has dramatically improved my development environment.I have had a significant decrease in computer performance due to the accumulation of unnecessary images.Be careful to delete images that you do not use regularly.`
      },
      {
        title: 'Firebase',
        link: require('@/assets/img/firebase.jpg'),
        content: `My knowledge of Firebase is still poor.I have used Firestore, RDB, Hosting, etc.It seems that the day to master Firebase is still ahead, but I want to deepen my understanding every day.`
      },
      {
        title: 'Git',
        link: require('@/assets/img/git.jpg'),
        content: `I can use the Git command to break a branch and work.I feel good when I commit diligently and push them all together.I'm addicted to growing grass.`
      }
    ],
  })
}
</script>

<style lang="sass">
#skill
  width: 100%
  padding: 100px 0
  text-align: center
  background-color: rgb(243, 243, 243)
  .inner
    max-width: 1200px
    margin: 0 auto
    p
      font-size: 20px
    ul
      display: flex
      flex-wrap: wrap
      list-style: none
      padding: 0
      li
        width: 30%
        margin: 100px auto 0 auto
        background-color: rgb(255, 255, 255)
        border: 1px solid rgb(250, 250, 250)
        box-shadow: 1.5rem 2.5rem 2rem -2rem rgb(210,216,219)
        border-radius: 10px
        overflow: hidden
        div
          width: 85%
          margin: 0 auto
        img
          width: 100%
          height: auto

@media (min-width: 1200px)
  #skill
    .inner
      ul
        li:hover
          border: 1px solid rgb(253, 253, 253)
          box-shadow: 0 1px 4px rgba(0,0,0,.2)
          transform: translateY(3px)
@media (max-width: 800px)
  #skill
    padding: 50px 0
    .inner
      ul
        li
          width: 45%
@media (max-width: 600px)
  #skill
    .inner
      ul
        li 
          width: 90%
</style>