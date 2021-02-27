<template>
  <div :class="[{'card': true, 'dark': isDark}]">
      <router-link :to="'/countries/'+countryData.alpha2Code">
      <div class="card-img">
        <img :src="countryData.flag" alt="flag" />
      </div>
      <div :class="[{'card-body': true, 'dark': isDark}]">
          <h2>{{countryData.name}}</h2>
          <p>
              Population: <span>{{countryData.population}}</span>
          </p>
          <p>
              Region: <span>{{countryData.region}}</span>
          </p>
          <p>
              Capital: <span>{{countryData.capital}}</span>
          </p>
      </div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'BaseCardCountry',
    props: ['countryData'],
    computed: {
        ...mapState({
            isDark: state => state.isDark
        })
    }
}
</script>

<style>

</style>