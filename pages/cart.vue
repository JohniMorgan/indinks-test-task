<template>
    <div class="cart">
        <cart-table/>
    </div>
</template>
<script>
import CartTable from '@/components/cart/СartTable'

export default {
    components: {CartTable}
}
</script>
<style>
    .cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>