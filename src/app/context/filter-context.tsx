"use client"

import { createContext, useState, ReactNode } from "react"
import { FilterType } from "../types/filter-types"


interface FilterContextType {
    search: string
    page: number
    type: FilterType
    // priority: PriorityTypes
    //setPriority: (value: PriorityTypes) => void
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
    //const [priority, setPriority] = useState(FilterType.All)

    return (
        <FilterContext.Provider
            value={{
                search,
                setSearch,
                page,
                setPage,
                type,
                setType,
                //priority,
                //setPriority,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}