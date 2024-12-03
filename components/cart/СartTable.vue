<template>
    <table>
        <table-header :mapping="header"/>
        <table-row v-for="(item, index) in cartItems"
            :key="item.productId"
            :item="itemData(item)"
            @delete="deleteItemFromCart(index)"/>
        <table-footer :mapping="header" :fill="summary"/>
    </table>
</template>
<script lang="ts">
import { CartItem } from '~/models/cartItem';
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue';
import TableFooter from './TableFooter.vue';

export default {
  components: { TableHeader, TableRow, TableFooter },
  computed: {
    header() {
        return CartItem.tableMapping;
    },
    cartItems() {
        return this.$store.getters['cart/getCartList'];
    },
    itemData()  {
        return (cartItem: CartItem) => ({
                title: this.$store.getters['products/getItemById'](cartItem.productId).title.value,
                price: this.$store.getters['products/getItemById'](cartItem.productId).price.value,
                count: cartItem.count.value,
            })
    },
    summary() {
        return {
            title: 'Итого',
            count: this.$store.getters['cart/getCartTotalCount'],
            total: this.cartItems.reduce((acc, cur) => {
                const price = this.$store.getters['products/getItemById'](cur.productId).price.value;
                return acc + price * cur.count.value;
            }, 0)
        }
    }
  },
  methods: {
    deleteItemFromCart(id: number) {
        this.$store.commit('cart/delete', id);
    }
  }
}
</script>
<style>
    table {
        border: 2px var(--color-border) solid;
        margin-bottom: 60px;
    }
</style>