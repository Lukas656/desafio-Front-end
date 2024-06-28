import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let value = localStorage.getItem(item)
        if (value) setValue(JSON.parse(value))
    },[window])

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
