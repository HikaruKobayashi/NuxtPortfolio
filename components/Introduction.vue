<template>
  <div class='introduction'>
    <div class='site_title'>
      <h1>Portfolio</h1>
      <span>This page is a my self-introduction site.</span>
    </div>
    <div class='introduction_img_fade_out' v-scroll="handleScrollFadeOut">
      <img src='@/assets/img/work-environment.jpg' class='introduction_img introduction_img_work-environment' />
    </div>
    <div class='introduction_img_fade_out' v-scroll="handleScrollFadeOut">
      <img src='@/assets/img/swimming.jpg' class='introduction_img introduction_img_swimming' />
    </div>
    <div class='introduction_img_fade_out' v-scroll="handleScrollFadeOut">
      <img src='@/assets/img/dive.jpg' class='introduction_img introduction_img_dive' />
    </div>
    <div class='introduction_img_fade_out' v-scroll="handleScrollFadeOut">
      <img src='@/assets/img/outdoors.png' class='introduction_img introduction_img_outdoors' />
    </div>
    <div class='introduction_img_fade_out' v-scroll="handleScrollFadeOut">
      <img src='@/assets/img/riverbank.png' class='introduction_img introduction_img_river_bank' />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScrollFadeOut: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        el.setAttribute(
          "style",
          "opacity: 0; transform: translate3d(0, -10px, 0)"
        )
      }
      return window.scrollY > 100;
    }
  }
}
</script>

<style src='assets/css/main.css' />