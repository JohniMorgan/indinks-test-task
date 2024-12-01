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
</style>