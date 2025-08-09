"use client"

import { createContext, useState, ReactNode } from "react";
import { Product } from "../types/type-product";

type CartItem = Product & { quantity: number };

interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (item: Product) => void;
    clear: () => void;
    changeQuantity: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextType>({
    items: [],
    addItem: () => { },
    removeItem: () => { },
    clear: () => { },
    changeQuantity: () => { },
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (item: CartItem) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((i) => i.id === item.id);

            if (existingItem) {
                return currentItems.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            } else {
                return [...currentItems, item];
            }
        });
    };

    const removeItem = (item: Product) => {
        setItems((currentItems) => currentItems.filter((i) => i.id !== item.id));
    };

    const clear = () => {
        setItems([]);
    };

    const changeQuantity = (item: CartItem) => {
        setItems((currentItems) =>
            currentItems.map((i) => (i.id === item.id ? item : i))
        );
    };

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, clear, changeQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};
