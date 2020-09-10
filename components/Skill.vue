<template>
  <div class='skill'>
    <div class='skill_img_container overview_content_fade_in' v-scroll="handleScroll">
      <h1 class='skill_title'>My Skills</h1>
      <p>There aren't many techniques I can master.</p>
      <p>However, I am confident in the technical level of Ruby on Rails and Javascript.</p>
      <p>I have an internship experience developing with Ruby on Rails and Docker.</p>
      <p>I want to continue improving my skill level.</p>
    </div>
    <div class='parallax bg-01'></div>
  </div>
</template>


<script>
export default {
  methods: {
    handleScroll: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 550) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        )
      }
      return window.scrollY > 550;
    }
  }
}
</script>

<style src='assets/css/main.css' />