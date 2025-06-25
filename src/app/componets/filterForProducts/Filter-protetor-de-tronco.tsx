"use client"

import { useState } from "react"

type FilterOption = {
    value: string
    label: string
    count: number
}

type FilterSection = {
    title: string
    options: FilterOption[]
}

export default function SizePriceFilters() {
    const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
    const [priceRange, setPriceRange] = useState({
        min: 333,
        max: 333
    })

    const toggleFilter = (sectionTitle: string, value: string) => {
        setActiveFilters(prev => {
            const sectionFilters = prev[sectionTitle] || []

            return {
                ...prev,
                [sectionTitle]: sectionFilters.includes(value)
                    ? sectionFilters.filter(v => v !== value)
                    : [...sectionFilters, value]
            }
        })
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
        const value = parseInt(e.target.value) || 0
        setPriceRange(prev => ({
            ...prev,
            [type]: value
        }))
    }

    const filterSections: FilterSection[] = [
        {
            title: "Tamanho",
            options: [
                { value: "1", label: "Nº 1 - 1,10m Até 1,30m", count: 1 },
                { value: "2", label: "Nº 2 - 1,30m Até 1,50m", count: 1 },
                { value: "3", label: "Nº 3 - 1,50 Até 1,75m", count: 1 },
                { value: "4", label: "Nº 4 - 1,75m Até 1,85m", count: 1 },
                { value: "5", label: "Nº 5 - 1,85m Até 2,00m", count: 1 },
            ]
        }
    ]

    return (
        <aside className="w-64 p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-6 text-gray-800">Filtrar por</h2>

            {/* Seção de Tamanhos */}
            {filterSections.map((section) => (
                <div key={section.title} className="mb-8">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">{section.title}</h3>

                    <ul className="space-y-2">
                        {section.options.map((option) => (
                            <li key={option.value}>
                                <button
                                    onClick={() => toggleFilter(section.title, option.value)}
                                    className={`flex items-center justify-between w-full text-left text-sm py-1 px-2 rounded ${activeFilters[section.title]?.includes(option.value) ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <span>
                                        {option.label} <span className="text-gray-400">({option.count})</span>
                                    </span>
                                    {activeFilters[section.title]?.includes(option.value) && (
                                        <span className="text-blue-600">✓</span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {/* Filtro de Preço */}
            <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Preço</h3>
                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">R$</span>
                            <input
                                type="number"
                                value={priceRange.min}
                                onChange={(e) => handlePriceChange(e, 'min')}
                                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <span className="text-gray-400">até</span>
                    <div className="flex-1">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">R$</span>
                            <input
                                type="number"
                                value={priceRange.max}
                                onChange={(e) => handlePriceChange(e, 'max')}
                                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Botão de Aplicar (opcional) */}
            <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                Aplicar Filtros
            </button>
        </aside>
    )
}