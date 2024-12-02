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
import ShopItem from '~/models/shopItem';
import ProductsAPI from '~/services/products';
import {ShopItemType} from '~/models/shopItem'
import {mapMutations} from 'vuex'

export default {
  components: { AdsArea, ItemCard },
  mounted() {
    if (this.$store.getters['products/getList'].length == 0) {
        ProductsAPI.getAllProducts().then(res => {
            res.forEach((product: ShopItemType) => {
                this.add(new ShopItem(product));
            })
        })
    }
  },
  computed: {
    items() : ShopItem[] { 
        return this.$store.state.products.items;
    },
  },
  methods: {
    ...mapMutations({
        add: 'products/add'
    })
  }
}
</script>
<style>
    .items {
        display: grid;
        align-self: center;
        grid-template-columns: repeat(auto-fit, minmax(400px,auto));
        grid-auto-rows: max-content;
    }
</style>