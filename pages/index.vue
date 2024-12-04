<template>
    <div>
        <ads-area/>
        <h1 class="page-title">Новинки</h1>
        <v-loader v-if="isLoading" :range="loadingTimeOut"/>
        <div class="items" v-else>
            <item-card v-for="item in items" :key="item.id.value" :item="item"/>
        </div>
    </div>
</template>

<script lang="ts">
import AdsArea from '~/components/advertisting/AdsArea.vue'
import ItemCard from '~/components/item-card/ItemCard.vue'
import VLoader from '~/components/VLoader.vue';
import ShopItem from '~/models/shopItem';
import ProductsAPI from '~/services/products';
import { ShopItemType } from '~/models/shopItem'
import { mapMutations } from 'vuex'
import { defineComponent } from 'vue';

type TimeLimit = {
    current: number,
    limit: number,
}

export default defineComponent({
  components: { AdsArea, ItemCard, VLoader },
  data() {
    return {
        isLoading: false,
        currentTry: 1,
        maxTry: 3,
    }
  },
  mounted() {
    if (this.$store.getters['products/getList'].length == 0) {
        this.isLoading = true;
        const req = ( type: Promise<any>) => type.then(res => {
            this.isLoading = false;
            res.forEach((product: ShopItemType) => {
                this.add(new ShopItem(product));
            })
        }).catch(err => {
            if (this.currentTry < this.maxTry) {
                this.currentTry++;
                req(type);
            } else {
                this.isLoading = false;
                this.currentTry = 1;
                console.log(err);
                req(ProductsAPI.getAllProductsReserv());
            }
        })
        req(ProductsAPI.getAllProducts());
    }
  },
  computed: {
    items() : ShopItem[] { 
        return this.$store.state.products.items;
    },
    loadingTimeOut() : TimeLimit  {
        return {
            current: this.currentTry,
            limit: this.maxTry
        }
    }
  },
  methods: {
    ...mapMutations({
        add: 'products/add'
    })
  }
})
</script>
<style>
    .items {
        display: grid;
        align-self: center;
        grid-template-columns: repeat(auto-fit, minmax(400px,auto));
        grid-auto-rows: max-content;
    }
</style>