import { Field } from "./base"
/**
 * Модель данных для Продукт
 */
export default class ShopItem {
    id: Field<number> = new Field(0, "Идентификатор")
    title: Field<string> = new Field('' ,"Товар")
    price: Field<number> = new Field(0, "Цена, руб")
    rate: Field<number> = new Field(0, "Рейтинг")
    category: Field<string> = new Field('', "Категория")
    description: Field<string> = new Field('', "Описание")
    image: string // Изображение не требует подписи

    constructor(data: ShopItemType) {
        this.id.set(data.id);
        this.title.set(data.title);
        this.price.set(data.price);
        this.rate.set(data.rating.rate);
        this.category.set(data.category);
        this.description.set(data.description);
        this.image = data.image;
    }

    get keys() { return ['description', 'category', 'rate'] };

}

//Отдельно предполагается создание моделей

// interface User
// interface CartItem

/**
 * Тип данных для модели Продукт
 */
export type ShopItemType = {
    id: number,
    title: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    }
    category: string,
    description: string,
    image: string,
}