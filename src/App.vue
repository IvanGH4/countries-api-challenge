<template>
  <div id="app" :class="[{'app-container': true, 'dark': isDark}]">
    <BaseLayout />
  </div>
</template>

<script>
import BaseLayout from '@/components/layout/BaseLayout'
import { mapState } from 'vuex';

export default {
  components: {
    BaseLayout
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