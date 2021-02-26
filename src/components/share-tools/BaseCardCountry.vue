<template>
  <div class="card">
      <router-link :to="'/countries/'+countryData.alpha2Code">
      <div class="card-img">
        <img :src="countryData.flag" alt="flag" />
      </div>
      <div class="card-body">
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
export default {
    name: 'BaseCardCountry',
    props: ['countryData']
}
</script>

<style>

</style>