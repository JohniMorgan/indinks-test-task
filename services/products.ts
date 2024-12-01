export default class ProductsAPI {
    static getAllProducts() {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
    }
}