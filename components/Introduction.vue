<template>
  <section id="introduction">
    <div class="inner text-center w-3/6 text-white mx-auto my-0">
      <h1
        v-for="(t, index) in title"
        :key="index"
        class="item font-bold text-4xl inline-block"
        :style="{animationDelay: index*100+'ms'}"
        v-text="t"
      >{{ title }}</h1>
      <p>{{ msg }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class introduction extends Vue {
  title: string = 'Portfolio';
  msg: string = 'This page is a my self-introduction site.'
}
</script>

<style lang="sass" scoped>
#introduction
  width: 100%
  padding: 200px 0
  background: url(../assets/img/city.jpg) no-repeat
  background-size: cover
  .inner
    padding: 100px 0
.item
  min-width: 0.3em
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards

@keyframes text-in
  0%
    transform: translate(0, -20px)
    opacity: 0

@media screen and (max-width: 1000px)
  #introduction
    .inner
      width: 700px
@media screen and (max-width: 750px)
  #introduction
    .inner
      width: 500px
@media screen and (max-width : 599px)
  #introduction
    padding: 120px 0 120px 0
  #introduction
    .inner
      width: 300px
</style>