"use client"

import { useEffect, useState } from "react"

export type Product = {
    id: number
    name: string
    description: string
    price: number
    images: string[]
    category: string
    slug: string
}

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    return { products, loading }
}