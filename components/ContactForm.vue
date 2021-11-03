<template>
<v-container class="pa-5 contact">
  <v-form
    ref="form"
    v-model="isValid"
    @submit.prevent="onSubmit"
  >
    <v-text-field
      v-model="firstName"
      :rules="rules.firstName"
      label="First name"
      outlined
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :rules="rules.lastName"
      label="Last name"
      outlined
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="rules.email"
      label="Email"
      outlined
    ></v-text-field>

    <v-textarea
      v-model="message"
      :rules="rules.message"
      label="Your message"
      outlined
      no-resize
    ></v-textarea>

    <v-btn
      class="primary btn"
      type="submit"
      :disabled="!isValid"
    >
      send
    </v-btn>
  </v-form>

  <v-snackbar
    v-model="isSnackbarVisible"
  >
    {{resultMessage}}

    <template #action="{ attrs }">
      <v-btn
        color="primary"
        text
        v-bind="attrs"
        @click="toggleSnackbar"
      >
        close
      </v-btn>
    </template>
  </v-snackbar>
</v-container>
</template>

<script>
import { required, email as checkEmail } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      rules: {
        firstName: [
          (value) => required(value) || 'please fill in the field',
        ]
        ,
        lastName: [
          (value) => required(value) || 'please fill in the field',
        ],
        email: [
          (value) => required(value) || 'please fill in the field',
          (value) => checkEmail(value) || 'incorrect email',
        ],
        message: [
          (value) => required(value) || 'please fill in the field',
        ],
      },
      resultMessage: 'Your message has just been sent',
      isValid: false,
      isSnackbarVisible: false,
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.reset();
      this.toggleSnackbar();
    },
    toggleSnackbar() {
      this.isSnackbarVisible = !this.isSnackbarVisible;
    }
  },
}
</script>

<style lang="scss">
.contact {
  max-width: 500px;
}
</style>
