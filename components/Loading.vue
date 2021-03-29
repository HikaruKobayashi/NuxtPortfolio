<template>
  <div v-show="loading">
    <div class="fullview">
      <div class="loading_spacer"></div>
      <client-only>
        <vue-loading
          type="balls"
          color="#343e62"
          :size="{ width: '100px', height: '100px' }"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
    }
  }
}
</script>

<style>
.fullview {
  width: 100%;
  height: 100%;
  background: #fefefe;
  position: fixed;
  top: 0;
  left: 0;
}
.loading_spacer {
  height: 30%;
}
</style>