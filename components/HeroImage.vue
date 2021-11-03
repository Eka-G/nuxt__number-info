<template>
  <v-container col="12" class="hero pa-0">
    <v-img
      class="hero__img white--text align-end"
      height="500px"
      src="/hero-img.jpg"
    >
      <div class="hero__info pa-10 pb-7 px-4">
        <h1>We can do anything</h1>
        <p class="ma-0">
          Awesome company do job quickly, efficiently, inexpensively. Click
          "contact us" button right now!
        </p>
      </div>
    </v-img>
  </v-container>
</template>

<style lang="scss">
  .hero {
    text-align: center;

    &__info {
      background: linear-gradient(
        to top,
        rgba(45, 48, 45, 0.87),
        rgba(0, 0, 0, 0)
      );
    }
  }
</style>
