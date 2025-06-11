import { useFilter } from "../hooks/useFilter";
import { FILTER_TYPE_TO_CATEGORY, FilterType } from "../types/Filter-types";

export function FilterByTypes() {
    const { type, setType } = useFilter();

    return (
        <section className="w-full py-2 bg-white shadow-sm pb-4">
            <nav className="flex justify-center items-center h-full">
                <ul className="flex items-center justify-center gap-16">
                    {Object.values(FilterType).map((filterType) => (
                        <li key={filterType}>
                            <button
                                onClick={() => setType(filterType)}
                                className={`${type === filterType ? "font-semibold border-b-2 border-red-500" : ""}`}
                            >
                                {FILTER_TYPE_TO_CATEGORY[filterType] || "Todos"}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}