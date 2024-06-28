import { InputHTMLAttributes } from "react";
import {styled} from "styled-components";
import { SearchIcon } from "../icons/search-lcon";

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    
    background: var(--bg-secondary);
    font-size: 12px;
    font-family: inherit;
    font-weight: 400;
    line-height: 20px;
    color: var(--text-dark);
    
    
    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }

`
const InputConteiner = styled.div`
    position: relative;
    width: 250px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        width: 352px;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string
    handleChange: (value: string) => void
}
export function  PrimaryInputWSearchIcon(props: InputProps){
    return(
        <InputConteiner>
        <PrimaryInput onChange={(e)=> props.handleChange(e.target.value)}{...props}/>
        <SearchIcon/>
        </InputConteiner>
    )
} 