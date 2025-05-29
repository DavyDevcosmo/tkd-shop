import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../types/Filter-types";
import { ProtectionFilterModal } from "./Protection-filter-modal";

export const FILTERS = [
    { key: FilterType.All, label: "Todos os produtos" },
    { key: FilterType.DOBOK, label: "Dobok" },
    { key: FilterType.PROTECTION, label: "Proteção" },
    { key: FilterType.TAEKWONDOBELT, label: "Faixa Taekwondo" },
    { key: FilterType.TAEKWONDO, label: "Sobre o Taekwondo" },
];

export function FilterByTypes() {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
        console.log("Novo type:", value);
    }

    return (
        <section className="w-full py-2 bg-white shadow-sm pb-4">
            <nav className="flex justify-center items-center h-full" aria-label="Filtro de Produtos">
                <ul className="flex items-center justify-center gap-16 text-md font-Poppins text-primary">
                    {FILTERS.map((filter) => (
                        <li key={filter.key}>
                            {filter.key === FilterType.PROTECTION ? (
                                <ProtectionFilterModal
                                    onSelect={() => setType(FilterType.PROTECTION)}
                                />
                            ) : (
                                <button
                                    type="button"
                                    aria-current={type === filter.key ? "page" : undefined}
                                    onClick={() => setType(filter.key)}
                                    className={` ${type === filter.key ? "font-semibold border-b-2 border-red-500" : ""} focus-visible:border-red-500`}
                                >
                                    {filter.label}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );

}
