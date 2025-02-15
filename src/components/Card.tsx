import React from "react";

interface CardProps {
    title: string;
    description: string;
    image: string;
    price: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, price }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-bold mt-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="flex justify-between items-center mt-3">
                <span className="text-red-600 font-semibold">{price}</span>
                <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Card;
