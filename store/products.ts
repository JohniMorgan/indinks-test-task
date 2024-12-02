import { NuxtState } from "@nuxt/types/app"
import { CartItem } from "~/models/cartItem"
import ShopItem from "~/models/shopItem"

export const state = () => ({
    items: [] as Array<ShopItem>,
    cart: [] as Array<CartItem>,
})

export const getters = {
    getItemById: (state: NuxtState) => (id: number) : ShopItem => 
        state.items.find((pid : ShopItem) => pid.id.value == id),
    getList: (state: NuxtState) : ShopItem[] => state.items,
}

export const mutations = {
    add(state : NuxtState, payload: ShopItem) : void {
        state.items.push(payload);
    },
    addToCart(state : NuxtState, productId: number) {
        const product = state.cart.find((el : CartItem) => el.productId == productId);
        console.log(product);
    }
}
