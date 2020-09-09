<template>
  <div class="masterpiece">
    <section id="second">
      <div class="bg">
        <div />
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
      const scrollOffset = to + 50;
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
      background: linear-gradient(269.76deg, #1f3345 0%, #333a56 100.52%);
      transition: all 3s cubic-bezier(0.215, 0.61, 0.355, 1);
      display: block;
    }
  }
  &.animation {
    > .bg {
      div {
        width: 20% !important;
        display: block;
      }
    }
  }
}
</style>