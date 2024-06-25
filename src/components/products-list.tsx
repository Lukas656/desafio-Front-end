"use client"
import { useProducts } from "@/hooks/useProtucts"
import { ProductCard } from "./products-cards";
import styled from "styled-components";

const ListConteiner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;

    margin-top: 32px;
`

export function ProductsList(){
    const {data} = useProducts();
    console.log(data)
    return(
        <ListConteiner>{data?.map(product => <ProductCard
            key={product.id}
            title= {product.name}
            price={product.price_in_cents}
            image={product.image_url}
        />)}</ListConteiner>
    )
}