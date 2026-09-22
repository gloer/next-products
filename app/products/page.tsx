import "./products-page.css";
import { type Products } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
            <section className="products">
                {
                    products.map(product => (
                        <article key={product.id}>
                            <Image 
                                alt="" 
                                width={300}
                                height={300}
                                src={product.thumbnail}
                            />
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <Link href={`/products/${product.id}`}>Buy {product.title}</Link>
                        </article>
                    ))
                }
            </section>
        </>
    );
}