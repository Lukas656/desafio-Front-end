import { Product } from "./product"

export interface ProductsFeatchResponse{
    data:{
        allProducts: Product[]
    }
}