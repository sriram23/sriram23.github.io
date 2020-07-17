<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
#app {
  min-width: 100%;
  min-height: 100%;
}
// * {
//   padding: unset !important;
//   margin: unset !important;
// }
</style>
