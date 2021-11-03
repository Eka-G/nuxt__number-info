<template>
  <v-form
    ref="form"
    v-model="isValid"
    class="search d-flex flex-column justify-center align-center"
    @submit.prevent="onSubmit"
  >
    <v-text-field
      v-model="searchValue"
      type="number"
      :rules="searchRules"
      class="mr-5 search__input"
      placeholder="Start typing..."
      outlined
    ></v-text-field>
    <v-btn
      class="primary btn"
      type="submit"
      :disabled="!isValid"
    >
      search
    </v-btn>
  </v-form>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        searchValue: '',
        searchRules: [
          (value) => required(value) || 'please fill in the field',
          (value) => value >= 0 && value <= 1000000 || 'enter number from 0 to 1000000',
        ],
        isValid: false,
      }
    },

    methods: {
      async onSubmit() {
        await this.$store.dispatch('getNumberInfo', this.searchValue);
      },
    },
  }
</script>

<style lang="scss">
  .search {
    max-width: 500px;

    &__input {
      width: 200px;
    }
  }
</style>
