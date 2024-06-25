"use client"
import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import styled from "styled-components"

interface FilterItemProps {
    selected: boolean
}
const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? `600` : '400'};
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);

    border-bottom: ${props => props.selected ? `4px solid var(--orage-low)` : ''};


`

export function FilterByType() {
    const { type, setType } = useFilter();

    const handleChangeTYpe = (value: FilterType) => {
        setType(value)
    }
    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => handleChangeTYpe(FilterType.ALL)}>Todos os Produtos
            </FilterItem>
            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => handleChangeTYpe(FilterType.SHIRT)}>Camisetas
            </FilterItem>
            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => handleChangeTYpe(FilterType.MUG)}>Canecas
            </FilterItem>
        </FilterList>
    )
}