<template >
    <div id="app">
        <base-header/>
        <Nuxt />
        <base-footer/>
    </div>
</template>
<script>
import BaseFooter from '~/components/BaseFooter.vue'
import BaseHeader from '~/components/BaseHeader.vue'
export default {
  components: { BaseHeader, BaseFooter },
}
</script>
<style>
  #app {
    margin: 0 auto;
    padding: 24px 40px 60px 40px;
    max-width: 1200px;
    font-weight: normal;
  }
</style>