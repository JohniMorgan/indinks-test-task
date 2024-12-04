<template>
    <header class="header">
        <h1>{{ title }}</h1>
        <nav class="navigation">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/cart">Магазин</nuxt-link>
        </nav>
        <icon-button 
            :count="count"
            @click="redirectToCart"
        >
            <cart-icon/>
        </icon-button>
    </header>
</template>
<script lang="ts">
import IconButton from './buttons/IconButton.vue';
import CartIcon from './icons/CartIcon.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {IconButton, CartIcon},
    props: {
        title: {
            type: String,
            default: () => "Штуки"
        }
    },
    methods: {
        redirectToCart() : void {
            this.$router.push('/cart');
        }
    },
    computed: {
        count() : number {
            return this.$store.getters['cart/getCartTotalCount'];
        }
    }
})
</script>
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px var(--color-border) solid;
        padding: 12px 24px;
        margin-bottom: 12px;
    }
    .navigation {
        display: grid;
        grid-auto-rows: auto;
        grid-template-columns: auto auto;
        gap: 32px;
    }
</style>