<template>
  <div>
    <Loading v-show="loading" :loading="this.loading" />
    <Nuxt v-show="!loading" />
  </div>
</template>

<script>

import Loading from '~/components/Loading.vue'

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  components: {
    Loading,
  },
};
</script>