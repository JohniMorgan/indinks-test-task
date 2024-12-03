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