<template>
    <div class="cart">
        <h1 class="page-title">Корзина</h1>
        <cart-table/>
        <text-button label="Плачу за всё!" :alt-color="true"/>
    </div>
</template>
<script>
import CartTable from '@/components/cart/СartTable'
import TextButton from '~/components/buttons/TextButton.vue'

export default {
    components: {CartTable, TextButton}
}
</script>
<style scoped>
    .cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .text-button {
        align-self: flex-end;
        margin-bottom: 40px;
    }
</style>