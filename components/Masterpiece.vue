<template>
  <div class="masterpiece" id="masterpiece">
    <div data-aos='fade-up'>
      <div class='masterpiece_content' v-for="(masterpiece, i) in masterpieces" :key="i" >
        <h1 class='masterpiece_title'>{{ masterpiece.name }}</h1>
        <div class='masterpiece_content'>
          <p class='masterpiece_msg'>{{ masterpiece.desciption }}</p>
          <div>
            <img src='@/assets/img/git-hub.png' class='masterpiece_git_img' />
            <a v-bind:href="`https://github.com/HikaruKobayashi/${masterpiece.name}`" class='git_link'>{{ git }}</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    masterpieces: [
      {
        name: 'MoneyHub',
        desciption: `
                    Money Hub is a household account book application that makes money in and out simpler.
                    By subdividing daily money transfer into and out of income, savings, fixed costs, and variable costs,
                    you can easily get information such as where you are spending most of your money and how many assets you currently have.
                    `
      },
      {
        name: 'Ringo',
        desciption: `
                    Ringo makes it possible to do LINE with the person you admire.
                    You can create the content of the reply yourself.
                    Also, if you use Heroku schedule function, LINE will be sent at a fixed time every day.
                    `
      },
      {
        name: 'NuxtPortfolio',
        desciption: `NuxtPortfolio is this site.
                    This site is my self-introduction site created using Nuxt.js.
                    I am using SPA mode in Nuxt.js. I am deploying with Netlify.
                    I hope you understand me through this site.
                    `
      },
    ],
    git: 'Git Hub'
  })
}
</script>

<style>
  .masterpiece {
    min-height: 80vh;
    background-color: rgb(41,41,48);
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 50px;
  }

  .masterpiece_title {
    padding: 10px;
  }

  .masterpiece_content {
    padding: 10px;
  }

  .masterpiece_git_img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .git_link, .git_link:hover {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  .masterpiece_msg {
    white-space: pre-wrap;
    word-wrap:break-word;
  }
</style>