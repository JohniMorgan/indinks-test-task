import { Field } from "./base";

export class CartItem {
    productId: number = 0;
    count: Field<number> = new Field<number>(1, "Кол-во");

    constructor(productId: number) {
        this.productId = productId;
    }

    increment() {
        this.count.set(this.count.value + 1)
    }

    static get tableMapping() {
        return ['Товар', 'Цена, руб', 'Кол-во', 'Сумма', ''];
    }
}