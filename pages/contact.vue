<template>
  <v-container class="mt-4 d-flex flex-column justify-center align-center">
    <h1> Сontact with us </h1>
    <v-row class="d-flex justify-center align-center">
      <v-img
        src="/contact-us.svg"
        class="mr-5"
        max-width="150"
        alt="contact us"
        contain
      ></v-img>
      <p class="ma-0 contact__instruction">Fill out the contact form below and click "send"</p>
    </v-row>

    <ContactForm />
  </v-container>
</template>

<style lang="scss">
.content-wrapper {
  max-width: 900px;
  text-align: center;
}

.contact__instruction {
  max-width: 200px;
}
</style>
