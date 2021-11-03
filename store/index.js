export const state = () => ({
  numberInfo: 'Send a request and you will see the result in this place',
  requestError: null,
});

export const getters = {
  numberInfo: (state) => state.numberInfo,
  requestError: (state) => state.requestError,
};

const mutationTypes = {
  SET_NUMBER_INFO: 'SET_NUMBER_INFO',
  SET_REQUEST_ERROR: 'SET_REQUEST_ERROR',
  RESET_REQUEST_ERROR: 'RESET_REQUEST_ERROR',
};

export const mutations = {
  [mutationTypes.SET_NUMBER_INFO](state, info) {
    state.numberInfo = info;
  },
  [mutationTypes.SET_REQUEST_ERROR](state, errorText) {
    state.requestError = errorText;
  },
  [mutationTypes.RESET_REQUEST_ERROR](state, errorText) {
    state.requestError = null;
  },
};

export const actions = {
  async getNumberInfo({ commit }, number) {
    try {
      commit(mutationTypes.RESET_REQUEST_ERROR);
      const info = await this.$axios.$get(`http://numbersapi.com/${number}`);

      commit(mutationTypes.SET_NUMBER_INFO, info);
    } catch ({ responce: { statusText } }) {
      commit(mutationTypes.SET_REQUEST_ERROR, statusText);
    }
  }
};
