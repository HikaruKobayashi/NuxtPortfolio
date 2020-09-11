<template>
  <div v-if='loading' class='loading'>
    <div class='loading_loader'>Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: false
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
}
</script>

<style src='assets/sass/app.scss'></style>