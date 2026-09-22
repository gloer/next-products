import { Product } from "@/types/products";

type Props = {
    params: Promise<{ id: string }>
}

export default async function ProductPage({ params } : Props) {

    const { id } = await params;

    const response = 
        await fetch(`https://dummyjson.com/products/${id}`);

    const product: Product = await response.json();

    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </>
    );
}