"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const COLORS = ["Cinza", "Laranja", "Marfim", "Marrom", "Preto", "Amarela", "Azul Clara", "Azul Escura"];

const BELT_SIZES = ['G - 320cm (1)', 'M - 290cm (1)', 'P - 260cm (1)'];

const FilterTaekwondoBelt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedBeltSizes, setSelectedBeltSizes] = useState<string[]>([]);

    // Sincroniza os filtros com a URL ao montar/atualizar
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        setSelectedColors(params.getAll('color'));
        setSelectedBeltSizes(params.getAll('beltSize'));
    }, [searchParams]);

    function updateFilters(type: string, value: string, checked: boolean) {
        const params = new URLSearchParams(searchParams.toString());
        const current = params.getAll(type);
        let updated: string[] = [];

        if (checked) {
            updated = [...current, value];
        } else {
            updated = current.filter(v => v !== value);
        }

        params.delete(type);
        updated.forEach(v => params.append(type, v));
        router.push(`?${params.toString()}`);
    }

    return (
        <aside className="w-64 p-4 text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-yellow-500">Filtrar por</h2>

            {/* Cor */}
            <div className="mb-6 border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold mb-3">Cor</h3>
                <ul className="space-y-2">
                    {COLORS.map(color => (
                        <li key={color}>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedColors.includes(color)}
                                    onChange={e => updateFilters("color", color, e.target.checked)}
                                    className="form-checkbox h-5 w-5 text-yellow-500 bg-white border-gray-400 rounded focus:ring-yellow-500 transition duration-150 ease-in-out checked:bg-yellow-500 checked:border-yellow-500"
                                />
                                <span className="ml-2 text-gray-800 text-sm">{color}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Tamanho Faixa */}
            <div className="mb-6 border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold mb-3">Tamanho Faixa</h3>
                <ul className="space-y-2">
                    {BELT_SIZES.map(beltSize => (
                        <li key={beltSize}>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedBeltSizes.includes(beltSize)}
                                    onChange={e => updateFilters("beltSize", beltSize, e.target.checked)}
                                    className="form-checkbox h-5 w-5 text-yellow-500 bg-white border-gray-400 rounded focus:ring-yellow-500 transition duration-150 ease-in-out checked:bg-yellow-500 checked:border-yellow-500"
                                />
                                <span className="ml-2 text-gray-800 text-sm">{beltSize}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );


};
export default FilterTaekwondoBelt;