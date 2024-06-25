"use client"
import { useProducts } from "@/hooks/useProtucts"

interface ProductsProps{

}

export function ProductsList(props: ProductsProps){
    const {data} = useProducts();
    console.log(data)
    return(
        <></>
    )
}