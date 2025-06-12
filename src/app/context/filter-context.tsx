"use client"

import { createContext, useState, ReactNode } from "react"
import { FILTER_TYPE_TO_CATEGORY, FilterType } from "../types/Filter-types"
import { ProtectorType } from "../types/Protections-Types"

interface FilterContextType {
    search: string;
    page: number;
    type: FilterType;
    Protector: ProtectorType;
    category: string;
    setType: (type: FilterType) => void;
    setCategory: (category: string) => void;
    setProtector: (value: ProtectorType) => void;
    setSearch: (value: string) => void;
    setPage: (value: number) => void;
}

interface ProviderProps {
    children: ReactNode
}

export const FilterContext = createContext({} as FilterContextType)

export function FilterContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [Protector, setProtector] = useState(ProtectorType.ARM)
    const [category, setCategory] = useState("")

    const handleSetType = (newType: FilterType) => {
        setType(newType);
        setCategory(FILTER_TYPE_TO_CATEGORY[newType]);
    };

    return (
        <FilterContext.Provider
            value={{
                search,
                setSearch,
                page,
                setPage,
                type,
                setType: handleSetType,
                Protector,
                setProtector,
                category,
                setCategory,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}