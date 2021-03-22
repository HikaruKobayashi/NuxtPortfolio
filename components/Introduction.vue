<template>
  <section id="introduction">
    <div class="inner">
      <h1
        v-for="(t, index) in title"
        :key="index"
        class="item"
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

<style lang="sass">
#introduction
  width: 100%
  padding: 200px 0 200px 0
  text-align: center
  background: url(../assets/img/city.jpg) no-repeat
  background-size: cover
  .inner
    width: 1000px
    margin: 0 auto
    color: rgb(255, 255, 255)
    // background: linear-gradient(rgb(52,62,98), rgb(24,26,41))
    padding: 100px 0

.item
  display: inline-block
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