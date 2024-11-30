/**
 * Модель данных для Продукт
 */
export default class ShopItem {
    id: Field<number> = new Field("Идентификатор")
    title: Field<string> = new Field("Название")
    price: Field<number> = new Field("Цена")
    description: Field<string> = new Field("Описание")
    image: string // Изображение не требует подписи

    constructor(data: ShopItemType) {
        this.id.set(data.id);
        this.title.set(data.title);
        this.description.set(data.description);
        this.price.set(data.price);
        this.image = data.image;
    }


}

//Отдельно предполагается создание моделей

// interface User
// interface CartItem

/**
 * Тип данных для модели Продукт
 */
export interface ShopItemType {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
}

class Field<T> {
    value: T | null;
    label: string;

    constructor(label: string) {
        this.value = null,
        this.label = label
    }

    set(newValue: T | null) : void {
        this.value = newValue
    }
}