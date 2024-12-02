<template>
    <div class="item-card ">
        <img class="card-img" :src="item.image" @click="openDialog">
        <label class="title">{{ item.title.value }}</label>
        <text-button label="Купить" @click="addToCart"/>
        <item-dialog v-show="isDialogOpened" :id="item.id.value" @close="closeDialog"/>
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
        closeDialog() {
            this.isDialogOpened = false;
            console.log('Диалог закрывается');
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
        width: 100%;
        min-width: 300px;
        max-width: 380px;
        margin-bottom: 32px;
    }
    .card-img {
        cursor: pointer;
        width: 100%;
        max-width: 380px;
        aspect-ratio: 1 / 1;
    }
    .title {
        margin: 16px 0px;
    }
    .item-card button {
        margin-top: auto;
    }
</style>