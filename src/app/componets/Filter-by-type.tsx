import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { FILTER_TYPE_LABELS, FilterType } from "../types/Filter-types";


export function FilterByTypes() {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category') || FilterType.ALL;

    return (
        <section className="w-full py-2 bg-white shadow-sm pb-4">
            <nav className="flex justify-center items-center h-full">
                <ul className="flex items-center justify-center gap-16">
                    {Object.values(FilterType).map((filterType) => (
                        <li key={filterType}>
                            <Link
                                href={filterType === FilterType.ALL ? '/' : `/?category=${filterType}`}
                                scroll={false}
                                className={`${currentCategory === filterType ? "font-semibold border-b-2 border-red-500" : ""}`}
                            >
                                {FILTER_TYPE_LABELS[filterType] || "Todos"}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}
