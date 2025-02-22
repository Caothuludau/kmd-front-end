// src/components/WineSelection.tsx
import Image from "next/image";

const wines = [
    { name: "Wine A", image: "https://product.hstatic.net/200000886699/product/9_b315cce61ed44cf6a0e1c1369aa01665_large.png" },
    { name: "Wine B", image: "https://product.hstatic.net/200000886699/product/5_b246916dae724816888ea9d2c028ea1b_large.png" },
    { name: "Wine C", image: "https://product.hstatic.net/200000886699/product/them_tieu_de_048c2837b2d04755b418a86fe1a5e552_large.png" },
    { name: "Wine D", image: "https://product.hstatic.net/200000886699/product/image__3__fcee421f65fe4c9ebdd794983824cec8_large.png" },
];

const WineSelection = () => {
    return (
        <div className="grid grid-cols-4 gap-4 p-6">
            {wines.map((wine, index) => (
                <div key={index} className="text-center">
                    <Image
                        src={wine.image}
                        alt={wine.name}
                        width={500}
                        height={288} 
                        className="rounded-lg w-full h-auto object-cover"
                    />
                    <h3 className="mt-2 text-lg font-semibold">{wine.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default WineSelection;
