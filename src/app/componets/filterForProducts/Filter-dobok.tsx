// components/ProductFilters.jsx
"use client";


import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Colors = ["Cinza", "Laranja", "Marfim", "Marrom", "Preto", "Amarela", "Azul Clara", "Azul Escura"];

const ProductFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleFilterChange(type: string, value: string) {
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value);
        router.push(`?${params.toString()}`)
    }

    return (
        <aside className="w-64 p-4 text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-yellow-500">Filtrar por</h2>

            <div className="mb-6 border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold mb-3">Cor</h3>
                <ul className="space-y-2">
                    {Colors.map((color) => (
                        <li key={color}>
                            <button
                                type='button'
                                className="text-gray-800 text-sm hover:underline"
                                onClick={() => handleFilterChange("color", color)}>
                                {color}
                            </button>
                        </li>
                    ))}
                </ul>

            </div>




            <div className="mb-6 border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold mb-3">Tamanho</h3>
                <ul className="space-y-2">
                    {['A1- 150cm A 160cm (14)', 'A2 - 160cm A 170cm (14)', 'A3 - 170cm A 180cm (14)', 'A4 - 180cm A 190cm (11)', 'A5 - 190cm A 200cm (7)', 'G - 320cm (3)', 'Gg - 340cm (1)', 'M - 290cm (3)'].map((size) => (
                        <li key={size}>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-yellow-500 bg-white border-gray-400 rounded focus:ring-yellow-500 transition duration-150 ease-in-out checked:bg-yellow-500 checked:border-yellow-500"
                                />
                                <span className="ml-2 text-gray-800 text-sm">{size}</span>
                            </label>
                        </li>
                    ))}
                    <li className="text-yellow-500 hover:underline cursor-pointer text-sm mt-2">Ver todos</li>
                </ul>
            </div>



            {/* Filtro por Tamanho Faixa */}
            <div className="mb-6 border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold mb-3">Tamanho Faixa</h3>
                <ul className="space-y-2">
                    {['G - 320cm (1)', 'M - 290cm (1)', 'P - 260cm (1)'].map((beltSize) => (
                        <li key={beltSize}>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-yellow-500 bg-white border-gray-400 rounded focus:ring-yellow-500 transition duration-150 ease-in-out checked:bg-yellow-500 checked:border-yellow-500"
                                />
                                <span className="ml-2 text-gray-800 text-sm">{beltSize}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Filtro por Preço */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3">Preço</h3>
                <div className="flex space-x-3">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="priceFrom" className="text-sm mb-1 text-gray-600">De</label>
                        <input
                            type="number"
                            id="priceFrom"
                            placeholder="0"

                            className="p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:border-yellow-500 text-gray-800 placeholder-gray-500"
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="priceTo" className="text-sm mb-1 text-gray-600">Até</label>
                        <input
                            type="number"
                            id="priceTo"
                            placeholder="9999"
                            className="p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:border-yellow-500 text-gray-800 placeholder-gray-500"
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ProductFilters;