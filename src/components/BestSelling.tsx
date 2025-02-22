// src/components/BestSelling.tsx
import Image from "next/image";

const BestSelling = () => {
    return (
        <div className="flex items-center justify-between px-12 py-8">
            <Image
                src="https://product.hstatic.net/200000886699/product/3_e272cebfe0f144ce9c8a0abee687f569_large.png"
                width={500}
                height={288} 
                alt="Best-Selling Wine"
                className="w-1/2 rounded-lg"
            />
            <div className="w-1/2 px-8">
                <h2 className="text-3xl font-bold">Our Best-Selling Wine</h2>
                <p className="mt-4 text-lg">
                    Experience the richness and elegance of Khu Mo’s best-selling wine.
                    Handcrafted with perfection from the finest vineyards.
                </p>
            </div>
        </div>
    );
};

export default BestSelling;
