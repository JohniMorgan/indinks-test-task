export class Field<T> {
    value: T;
    label: string;

    constructor(initValue: T, label: string) {
        this.value = initValue,
        this.label = label
    }

    set(newValue: T) : void {
        this.value = newValue
    }
}
export type Mapping = {
    label?: string,
    key: string,
}

export type SummaryInfo = {
    title?: string,
    price?: number,
    count?: number,
    total?: number,
}
/**
 * Функция-итератор по ключам 
 */
export const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) =>
    obj[key];