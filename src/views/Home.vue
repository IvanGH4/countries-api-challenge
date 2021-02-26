<template>
  <div class="container">
    <div class="search-container">
      <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search for a country..." v-model="searchTerm" />
      </div>
      <div class="search-select">
          <select name="region" id="region" v-model="region" @change="filterByRegion">
              <option value="">Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
          </select>
          <img src="@/assets/imgs/arrow-down.svg" width="15" height="15" alt="arrow-down" />
      </div>
    </div>
    <!-- <BaseSearchInput /> -->
    <div class="cards-container">
      <BaseCardCountry
        v-for="country in filteredCountries"
        :key="country.name"
        :countryData="country"
       />
    </div>
  </div>
</template>

<script>
// import BaseSearchInput from '@/components/share-tools/BaseSearchInput.vue'
import BaseCardCountry from '@/components/share-tools/BaseCardCountry.vue'
import { mapState, mapActions } from 'vuex';
// @ is an alias to /src

export default {
  components: { BaseCardCountry },
  name: 'Home',
  data() {
    return {
      searchTerm: '',
      region: '',
      countriesList: []
    }
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    async filterByRegion() {
      try {
        const res = await fetch(`https://restcountries.eu/rest/v2/region/${this.region}`);
        const data = await res.json();
        this.$store.commit('mtnCountries', data); 
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions({
      getCountries: 'setCountries'
    })
  },
  computed: {
    ...mapState({
      countries: state => state.countries,
    }),
    filteredCountries() {
      return this.countries.filter((country) => {
        return country.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      }); 
    }
  }
}
</script>
