<template>
  <div class='overview'>
    <div class='overview_content_fade_in' v-scroll="handleScroll">
      <h1 class='overview_title'>Hikaru Kobayashi</h1>
      <p>Hikaru Kobayashi was born in Nagano in 1998.</p>
      <p>He has been active as a swimmer since he was an elementary school student.</p>
      <p>Encountered programming in the third year of university and decided to become an IT engineer.</P>
      <p>Ruby on Rails and JavaScript are unique languages.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 300) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        )
      }
      return window.scrollY > 300;
    }
  }
}
</script>