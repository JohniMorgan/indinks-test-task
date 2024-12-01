<template>
    <div>
        <ads-area/>
        <div class="items">
            <item-card v-for="item in items" :key="item.id.value" :item="item"/>
        </div>
    </div>
</template>

<script lang="ts">
import AdsArea from '~/components/advertisting/AdsArea.vue'
import ItemCard from '~/components/item-card/ItemCard.vue'
import ShopItem from '~/models/shopItem'
export default {
  components: { AdsArea, ItemCard },
  data() {
    return {
        items: [new ShopItem({
            id: 0,
            title: 'Отличная ваза',
            description: 'Главный помощник на кухне, который «подставит вам плечо» в нужный момент. ',
            category: 'Кухня',
            rating: {
                rate: 4.1,
                count: 259,
            },
            price: 1000,
            image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
        }),
        new ShopItem({
            id: 1,
            title: 'Белый дом',
            description: 'Описание отличной вазы',
            price: 100.2,
            category: 'Кухня',
            rating: {
                rate: 4.1,
                count: 259,
            },
            image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
        }),
        new ShopItem({
            id: 2,
            title: 'Кусочек бересты',
            description: 'Описание отличной вазы',
            price: 100.2,
            category: 'Кухня',
            rating: {
                rate: 4.1,
                count: 259,
            },
            image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
        })]
    }
  }
}
</script>
<style>
    .items {
        display: flex;
        justify-items: space-between;
    }
    .items > * {
        margin-right: 30px;
    }
</style>