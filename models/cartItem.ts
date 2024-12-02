export class CartItem {
    productId: number = 0;
    count: number = 0;

    constructor(productId: number) {
        this.productId = productId;
    }

    increment() {
        this.count++;
    }
}