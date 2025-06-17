export enum FilterType {
    ALL = 'ALL',
    PROTECTION = 'PROTECTION',
    DOBOK = 'DOBOK',
    TAEKWONDOBELT = 'TAEKWONDOBELT',
    TAEKWONDO = 'TAEKWONDO',
}

export const FILTER_TYPE_LABELS: Record<FilterType, string> = {
    [FilterType.ALL]: "Todos",
    [FilterType.PROTECTION]: "Proteções",
    [FilterType.DOBOK]: "Doboks",
    [FilterType.TAEKWONDOBELT]: "Faixas",
    [FilterType.TAEKWONDO]: "Taekwondo"
};