<template>
    <table>
        <table-header :labels="header"/>
        {{ cartItems }}
    </table>
</template>
<script>
import { CartItem } from '~/models/cartItem';
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue';
export default {
  components: { TableHeader, TableRow },

  computed: {
    header() {
        return CartItem.tableMapping;
    },
    cartItems() {
        return this.$store.getters['cart/getCartList'];
    }
  }
}
</script>
<style>
    table {
        border: 2px var(--color-border) solid;
    }
</style>