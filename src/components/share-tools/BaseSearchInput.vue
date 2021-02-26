<template>
<div class="search-container">
    <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..." v-model="searchTerm" @change="filterCountries" />
    </div>
    <div class="search-select">
        <select name="region" id="region">
            <option value="">Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        <img src="@/assets/imgs/arrow-down.svg" width="15" height="15" alt="arrow-down" />
    </div>
</div>
</template>

<script>

export default {
    name: 'BaseSearchInput',
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        filterCountries() {
            this.$store.dispatch('searchCountry', this.searchTerm);
        },
    }
}
</script>