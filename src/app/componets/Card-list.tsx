"use client" // Adicione isso se estiver usando Next.js 13+

import { useEffect, useState } from "react";

import { useFilter } from "../hooks/useFilter";
import type { Product } from "@prisma/client";
import ProductCard from "./Product-card";


export default function ProductList() {
    const { type } = useFilter();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const url = type === "ALL"
            ? "/api/products"
            : `/api/products-by-category?category=${type}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [type]);

    return (
        <div className="flex flex-wrap gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}