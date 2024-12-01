import { NuxtState } from "@nuxt/types/app"
import ShopItem from "~/models/shopItem"

export const state = () => ({
    items: [] as Array<ShopItem>,
})

export const getters = {
    getItemById: (state: NuxtState) => (id: number) : ShopItem => 
        state.items.find((pid : ShopItem) => pid.id.value == id),
    getList: (state: NuxtState) : ShopItem[] => state.items,
}

export const mutations = {
    add(state : NuxtState, payload: ShopItem) : void {
        state.items.push(payload);
    }
}
