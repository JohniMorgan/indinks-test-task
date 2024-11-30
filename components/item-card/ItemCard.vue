<template>
    <div class="item-card ">
        <img class="card-img" :src="item.image" @click="openDialog">
        <label class="title">{{ item.title.value }}</label>
        <text-button label="Купить" @click="addToCart"/>
    </div>
</template>
<script lang="ts">
import ShopItem from "@/models/shopItem"
import TextButton from "@/components/buttons/TextButton.vue"
import { PropType } from 'vue'

export default {
    components: { TextButton },
    props: {
        item: {
            type: Object as PropType<ShopItem>,
            required: true,
        }
    },
    data() {
        return {
            isDialogOpened: false
        }
    },
    methods: {
        openDialog() {
            this.isDialogOpened = true;
            console.log('Диалог открывается');
        },
        addToCart() {
            console.log('Товар добавляется в корзину');
        }
    }
}
</script>
<style scoped>
    .item-card {
        display: flex;
        flex-direction: column;
        width: 380px;
    }
    .card-img {
        cursor: pointer;
        height: 380px;
        width: 380px;
    }
    .title {
        margin: 16px 0px;
    }
</style>