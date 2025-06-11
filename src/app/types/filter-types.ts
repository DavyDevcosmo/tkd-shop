export enum FilterType {
    ALL = 'ALL',
    PROTECTION = 'PROTECTION',
    DOBOK = 'DOBOK',
    TAEKWONDOBELT = 'TAEKWONDOBELT',
    TAEKWONDO = 'TAEKWONDO',
}

export const FILTER_TYPE_TO_CATEGORY: Record<FilterType, string> = {
    [FilterType.ALL]: "Todos",
    [FilterType.DOBOK]: "Doboks",
    [FilterType.PROTECTION]: "Proteções",
    [FilterType.TAEKWONDOBELT]: "Faixas",
    [FilterType.TAEKWONDO]: "Taekwondo" // Ajuste conforme sua categoria real
} as const;