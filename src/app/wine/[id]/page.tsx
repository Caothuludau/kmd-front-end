import { notFound } from "next/navigation";
import wines from "@/data/wines"; // Mock data
import Button from "@/components/Button";

interface WineDetailProps {
    params: { id: string };
}

export default function WineDetail({ params }: WineDetailProps) {
    const wine = wines.find((w) => w.id.toString() === params.id);

    if (!wine) return notFound();

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <img src={wine.image} alt={wine.title} className="w-full h-72 object-cover rounded-md" />
                <h1 className="text-3xl font-bold mt-4">{wine.title}</h1>
                <p className="text-gray-600 mt-2">{wine.description}</p>
                <p className="text-red-600 font-semibold text-xl mt-3">{wine.price}</p>
                <Button variant="primary" className="mt-4">Add to Cart</Button>
            </div>
        </div>
    );
}
