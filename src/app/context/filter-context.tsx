"use client"

import { createContext, useState, ReactNode } from "react"
import { FilterType } from "../types/filter-types"
import { ProtectorType } from "../types/protections-Types"


interface FilterContextType {
    search: string
    page: number
    type: FilterType
    Protector: ProtectorType
    setProtector: (value: ProtectorType) => void
    setSearch: (value: string) => void
    setPage: (value: number) => void
    setType: (value: FilterType) => void
}


interface ProviderProps {
    children: ReactNode
}
export const FilterContext = createContext({} as FilterContextType)

export function FilterContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.All)
    const [Protector, setProtector] = useState(ProtectorType.ARM)

    return (
        <FilterContext.Provider
            value={{
                search,
                setSearch,
                page,
                setPage,
                type,
                setType,
                Protector,
                setProtector,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}