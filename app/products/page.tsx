import { notFound } from "next/navigation";

type Product = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
}

type Products = Product[];

export default async function ProductsPage() {

    const response = await fetch("https://dummyjson.com/products");
    
    if(!response.ok) {
        notFound();
    }

    const data = await response.json();
    const products: Products = data.products;


    return (
        <>
            <h1>Products</h1>
            <section>
                {
                    products.map(product => (
                        <article key={product.id}>
                            <h1>{product.title}</h1>
                        </article>
                    ))
                }
            </section>
        </>
    );
}