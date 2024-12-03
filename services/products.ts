export default class ProductsAPI {
    static getAllProducts() {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
    }
    static getAllProductsReserv() {
        return fetch('/fake-reserv-data.json')
            .then(res => res.json());
    }
}