import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    countries: [],
  },
  mutations: {
    mtnCountries(state, n) {
      state.countries = n;
    },
  },
  actions: {
    setCountries: async({commit}) => {
      try {
        let url = 'https://restcountries.eu/rest/v2/all';
        const res = await fetch(url);
        const data = await res.json();
        commit('mtnCountries', data)
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})

// const state = {
//   countries: [],
// }

// const mutations = {
//   mtnCountries(state, n) {
//     state.countries = n;
//   }
// }

// const actions = {
//   async setCountries({commit}) {
//     try {
//       let url = 'https://restcountries.eu/rest/v2/all';
//       const res = await fetch(url);
//       const data = await res.json();
//       commit('mtnCountries', data)
//     } catch (error) {
//       console.log(error);
//     } 
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
// }