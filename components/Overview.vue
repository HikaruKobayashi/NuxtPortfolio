<template>
  <div class='overview' id='overview'>
    <div class='overview_container' data-aos='fade-up'>
      <h1 class='overview_title'>{{ title }}</h1>
      <div class='overview_content'>
        <p class='overview_msg'>{{ msg }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Hikaru Kobayashi',
    msg: `
         Hikaru Kobayashi was born in Nagano in 1998.
         I have been active as a swimmer since he was an elementary school student.
         Encountered programming in the third year of university and decided to become an IT engineer.
         Ruby on Rails and JavaScript are unique languages.
         `,
  })
}
</script>

<style>
  .overview {
    min-height: 40vh;
    background-color: rgb(41,41,48);
    color: rgb(255, 255, 255);
    text-align: center;
  }

  .overview_container {
    padding: 50px;
  }

  .overview_title {
    padding: 10px;
  }

  .overview_content {
    padding: 10px;
  }

  .overview_msg {
    white-space: pre-wrap;
    word-wrap:break-word;
  }
</style>