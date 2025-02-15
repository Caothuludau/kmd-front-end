"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";
import wines from "@/data/wines"; // Mock data

export default function WinePage() {
    const [category, setCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("name");

    const filteredWines = wines
        .filter((wine) => category === "All" || wine.category === category)
        .sort((a, b) => (sortOrder === "price" ? parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)) : a.title.localeCompare(b.title)));

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Wine Collection</h1>

            {/* Filters */}
            <div className="flex space-x-4 mb-6">
                <Button onClick={() => setCategory("All")}>All</Button>
                <Button onClick={() => setCategory("Rượu Trắng")}>Rượu Trắng</Button>
                <Button onClick={() => setCategory("Rượu đặc biệt")}>Rượu đặc biệt</Button>
                <Button onClick={() => setCategory("Rượu mơ")}>Rượu mơ</Button>
            </div>

            {/* Sorting */}
            <div className="mb-6">
                <label className="mr-2">Sort by:</label>
                <select
                    className="border rounded px-3 py-1"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
            </div>

            {/* Wine List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWines.map((wine) => (
                    <Card key={wine.id} title={wine.title} description={wine.category} image={wine.image} price={wine.price}>
                        <Link href={`/wine/${wine.id}`}>
                            <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">
                                View Details
                            </button>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );

    
}
