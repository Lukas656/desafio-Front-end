import styled from "styled-components"
import { ArrowIcon } from "../icons/arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"

const FilterConteiner = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg{
        margin-left: 16px;
    }


`
const PriorityFilter = styled.ul`
    position: absolute;
    z-index: 999;
    width: 200px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0,0,0.1);
    padding: 12px 16px;
    list-style: none;

    top: 100%;

    li{
        color: var(--text-dark);
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }

    li + li{
        margin-top: 4px;
    }
    
`
export function FilterByPriority() {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter()
    
    const handleOpen = () => setIsOpen(prev => !prev)

    const handelUpdatePriority = (value: PriorityTypes)=>{
        setPriority(value);
        setIsOpen(false)
    }

    return (
        <FilterConteiner>
            <button onClick={handleOpen}>
                organizar por
                <ArrowIcon />
            </button>
            {isOpen &&
                <PriorityFilter>
                    <li onClick={()=> handelUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={()=> handelUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={()=> handelUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={()=> handelUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>}
        </FilterConteiner>
    )
}