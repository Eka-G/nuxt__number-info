<template>
  <v-carousel class="carousel" cycle>
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: ['/slide-1.svg', '/slide-2.svg', '/slide-3.svg'],
    }
  },
}
</script>

<style lang="scss">
  .carousel {
    max-width: 900px;
  }
</style>
