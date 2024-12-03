import { NuxtState } from "@nuxt/types/app";
import { CartItem } from "~/models/cartItem";

export const state = () => ({
    cart: [] as Array<CartItem>
})

export const getters = {
    getCartTotalCount: (state: NuxtState) : number => state.cart.reduce(
        ((acc : number, curVal : CartItem) => acc + curVal.count.value), 0),
    getCartList: (state: NuxtState) => {
        return state.cart;
    }
}

export const mutations = {
    add(state : NuxtState, productId: number) {
        const product = state.cart.find((el : CartItem) => el.productId == productId);
        if (product) {
            console.log("Товар есть");
            product.increment();
        } else {
            console.log("Товара нет");
            const newProduct = new CartItem(productId);
            state.cart.push(newProduct);
        }
    },
    delete(state: NuxtState, id: number) {
        state.cart.splice(id, 1);
    }
}