<template>
  <v-app-bar color="primary" height="65" fixed>
    <a href="/" class="header__logo-link">
      <img class="header__logo" alt="Awesome company" src="/logo.svg" />
    </a>

    <v-spacer></v-spacer>

    <v-btn
      type="button"
      color="secondary"
      elevation="2"
      to="/contact"
      depressed
    >
      <v-icon left> mdi-email </v-icon>
      Contact us
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss">
.header {
  &__logo-link {
    height: 35px;
  }

  &__logo {
    height: 100%;
  }
}
</style>
