import { InputHTMLAttributes } from "react";
import {styled} from "styled-components";
import { SearchIcon } from "./search-lcon";

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    
    background: var(--bg-secundary);
    
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

`
const InputConteiner = styled.div`
    position: relative;
    width: 352px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
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