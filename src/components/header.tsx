"use client"
import {styled} from "styled-components"
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import {CartControl} from "./cart-control";

const SairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ["latin"] });

interface HeaderProps{

}

const TagHader = styled.header`
    display: flex;
    aling-itens: center;
    justify-content: space-between;
    padding: 20px 160px;

    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weigth: 400;
    font-size: 40px;
    line-height: 150%;
` 

export function Header(props  : HeaderProps){
    return(
        <TagHader>
            <Logo className={SairaStencil.className}>Capputeeno</Logo>
           <div>
            <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?"></PrimaryInputWSearchIcon>
            <CartControl/>
           </div>
        </TagHader>
    )
}