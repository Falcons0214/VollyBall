<template>
  <v-carousel :show-arrows="false" cycle interval="8000">
    <v-carousel-item v-for="img in paths" :key="img.id">
      <v-img :src="img.url" lazy-src contain width="95%" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Vue from "vue";

export default Vue.component(
  "slide-show",
  Vue.extend({
    props: {
      paths: Array,
    },
  })
);
</script>
