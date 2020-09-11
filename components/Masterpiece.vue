<template>
  <div class="masterpiece">
    <section>
      <div id="second">
        <div class="bg">
          <div />
        </div>
      </div>
      <div class='masterpiece_container'>
        <h2>Money Hub</h2>
        <p>Money Hub is a household account book application that makes money in and out simpler.</p>
        <p>By subdividing daily money transfer into and out of income, savings, fixed costs, and variable costs, you can easily get information such as where you are spending most of your money and how many assets you currently have.</p>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      positionY: 0,
      positions: {
        second: 0,
      },
    };
  },
  watch: {
    positionY(to, from) {
      const scrollOffset = to + 300;
      let el;

      if (this.positions.second <= scrollOffset) {
        el = document.getElementById("second");
        el.setAttribute("class", "animation");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);

    this.positions = {
      second: document.getElementById("second").getBoundingClientRect().top,
    };

    this.positionY++;
  },
  methods: {
    checkScroll() {
      this.positionY = window.scrollY ? window.scrollY : window.pageYOffset;
    },
  },
};
</script>

<style lang="scss" scoped>
#second {
  > .bg {
    width: 100%;
    height: 100%;

    div {
      width: 100%;
      height: 200px;
      background:rgb(22,23,34);
      transition: all 3s cubic-bezier(0.215, 0.61, 0.355, 1);
      position: absolute;
      z-index: 10;
    }
  }
  &.animation {
    > .bg {
      div {
        width: 20% !important;
        position: absolute;
      }
    }
  }
}
</style>