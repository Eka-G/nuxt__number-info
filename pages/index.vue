<template>
  <v-container col="12" class="pa-0">
    <HeroImage class="mb-12" />

    <v-container>
      <section class="mb-12 d-flex flex-column justify-center align-center">
        <h2>Demonstration</h2>
        <p>Check out our wonderful examples:</p>

        <Carousel />
      </section>

      <section class="numbers mb-12 d-flex flex-column justify-center align-center">
        <h2>How much do you know about numbers?</h2>
        <p class="numbers__instruction">Until you get an answer from us, don't get bored - you can find out a couple of interesting facts about numbers! Enter a number from 0 to 1000000 in the field below.</p>
        <Search />

        <p class="mt-5 font-weight-black"> {{numberInfo}} </p>
        <p v-if="requestError" class="error--text"> {{requestError}} </p>
      </section>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    computed: {
      numberInfo() {
        return this.$store.getters.numberInfo;
      },
      requestError() {
        return this.$store.getters.requestError;
      }
    },
  }
</script>

<style lang="scss">
  .numbers {
    text-align: center;

    &__instruction {
      max-width: 650px;
    }
  }
</style>
