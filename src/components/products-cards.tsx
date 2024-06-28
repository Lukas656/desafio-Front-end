import { formatPrice } from "@/utils/format-price";
import { useRouter } from "next/navigation";
import styled from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string
}

const Card = styled.div`
    width: 256px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    background: rgba(255,255,255,0.4) ;
    backdrop-filter: blur(10px);
    border-radius: 8px, 8px, 0px, 0px;

    img{
        width: 256px;
        height: 300px;
    }
    h3{
        font-size: 16px;
        font-weight: 300;
        line-height: 150%;
        text-align: left;
        color: var(--text-dark2);        
    }

    p{
        font-size: 14px;
        font-weight: 600;
        line-height: 150%;
        text-align: left;
        color: var(--price-dark);
    }

    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;
        
        > div{
            width: 228px;
            height: 1%;
            padding: 0px;
            top: 340px;
            left: 12px;
            background: var(--shapes);
            margin: 8px 0;
        }
    }
`

export function ProductCard(props: ProductCardProps) {
    const price = formatPrice(props.price);
    const router = useRouter()

    const handleNavegate = () => {
        router.push("/product?id=" + props.id)
    }
    return (
        <Card onClick={handleNavegate}>
            <img src={props.image} alt={props.title} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}