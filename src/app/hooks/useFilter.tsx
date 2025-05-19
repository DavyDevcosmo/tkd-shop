import { useContext } from "react";
import { FilterContext } from "../context/filter-context";

export function useFilter() {
    return useContext(FilterContext);
}