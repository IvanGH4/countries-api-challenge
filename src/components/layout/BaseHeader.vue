<template>
  <header :class="[{'dark': isDark}]">
    <div class="container">
      <h2 :class="[{'dark': isDark}]">  
        Where in the world?
      </h2>
      <div :class="[{'theme-switch': true}, {'dark': isDark}]">
        <button @click="toggleTheme">
          <i :class="[{'far fa-moon': !isDark, 'fas fa-moon': isDark}]"></i>
          <span>Dark Mode</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseHeader',
  methods: {
    toggleTheme() {
      this.$store.dispatch('setIsDark', !this.isDark);
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