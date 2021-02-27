<template>
  <div class="container">
    <button :class="[{'back-btn': true, 'dark': isDark}]">
        <router-link to="/"><i :class="[{'fas fa-long-arrow-alt-left': true, 'dark': isDark}]"></i> <span :class="[{'dark': isDark}]">Back</span></router-link>
    </button>
    <section :class="[{'country-section': true, 'dark': isDark}]" v-for="item in country" :key="item">
        <div class="country-flag">
            <img :src="item.flag" alt="flag" />
        </div>
        <div class="country-info">
            <h2>{{item.name}}</h2>
            <div class="country-stats">
                <div>
                    <p>Native Name: <span>{{item.nativeName}}</span></p>
                    <p>Population: <span>{{item.population}}</span></p>
                    <p>Region: <span>{{item.region}}</span></p>
                    <p>Sub Region: <span>{{item.subregion}}</span></p>
                    <p>Capital: <span>{{item.capital}}</span></p>
                </div>
                <div>
                    <p>Top Level Domain: <span>{{item.topLevelDomain[0]}}</span></p>
                    <p>Currencies: <span v-for="currency in item.currencies" :key="currency">{{currency.name}}</span></p>
                    <p>Languages: <span v-for="language in item.languages" :key="language">{{language.name}} </span></p>
                </div>
            </div>
        </div>
        <div class="border-countries" v-if="item.borders.length > 0">
            <p>Border Countries: <span v-for="border in item.borders" :key="border">{{border}} ,</span></p>
        </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'SingleCountry',
    data() {
        return {
            country: []
        }
    },
    mounted() {
        this.fetchCountry();
    },  
    methods: {
        async fetchCountry() {
            try {
                let url = `https://restcountries.eu/rest/v2/alpha/${this.$route.params.id}`;
                const res = await fetch(url);
                const data = await res.json();
                this.country.push(data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        ...mapState({
            isDark: state => state.isDark
        })
    }
}
</script>

<style>

</style>