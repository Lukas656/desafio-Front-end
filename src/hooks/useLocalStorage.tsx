import { useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const itemValue = localStorage.getItem(item);
            return itemValue ? JSON.parse(itemValue) : initialValue;
        } catch (error) {
            console.error(`Erro ao ler o item "${item}" do localStorage`, error);
            return initialValue;
        }
    });

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        try {
            localStorage.setItem(item, JSON.stringify(newValue));
        } catch (error) {
            console.error(`Erro ao salvar o item "${item}" no localStorage`, error);
        }
    };

    return {
        value,
        updateLocalStorage
    };
}
