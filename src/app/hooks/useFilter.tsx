import { useContext } from "react";
import { FilterContext } from "../context/Filter-context";

export function useFilter() {
    return useContext(FilterContext);
}