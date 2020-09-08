<template>
  <div class='introduction'>
    <div class='site-title'>
      <h1>Portfolio</h1>
      <span>This page is a my self-introduction site.</span>
    </div>
    <div :class="{fadeOut: visible}">
      <img src='@/assets/img/work-environment.jpg' class='introduction_img work-environment' />
    </div>
    <div :class="{fadeOut: visible}">
      <img src='@/assets/img/swimming.jpg' class='introduction_img swimming' />
    </div>
    <div :class="{fadeOut: visible}">
      <img src='@/assets/img/dive.jpg' class='introduction_img dive' />
    </div>
    <div :class="{fadeOut: visible}">
      <img src='@/assets/img/outdoors.png' class='introduction_img outdoors' />
    </div>
    <div :class="{fadeOut: visible}">
      <img src='@/assets/img/riverbank.png' class='introduction_img river_bank' />
    </div>
  </div>
</template>

<style src='assets/css/main.css' />

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        const top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    }
  }
}
</script>