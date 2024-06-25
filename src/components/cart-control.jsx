import {styled} from "styled-components"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {CartIcon} from "./shooping-lcon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;
    /* left: 1263px;
    top: 43px; */

    background-color: var(--delete-color);
    color: #ffffff;
     margin-left: -10px;
`
const Conteiner = styled.div`
    position: relative;

`
export function CartControl(){
    const { value } = useLocalStorage('cart-itens', [1,2]); 

    return (
        <Conteiner>
            <CartIcon />
            {value.length > '' && <CartCount>{value.length}</CartCount>}
        </Conteiner>
    )
}