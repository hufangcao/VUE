<template>
  <div>
  <router-view/>
    <Tab v-show="$route.meta.showTab"/>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
