import { useEffect, useState } from "react";
import { useFilter } from "./useFilter";
import { Product } from "@prisma/client";

export function useProducts() {
    const { category } = useFilter();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const query = category ? `?category=${category}` : '';
            const response = await fetch(`/api/products${query}`);
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [category]);

    return { products };
}