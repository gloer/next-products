import "./Header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className="top-header">
            <nav>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
            </nav>
        </header>
    );
}