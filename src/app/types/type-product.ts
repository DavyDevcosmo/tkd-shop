
export type Product = {
    id: number
    name: string
    description: string
    price: number
    images: { url: string }[]
    category: { name: string }
    slug: string
    color?: string | null
    sizeDobok?: string | null
}

 export type ProductListProps = {
    products: Product[]
}