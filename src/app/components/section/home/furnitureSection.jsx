"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const furnitureItems = [
    {
        name: "Elegant Grey Sofa",
        price: 199.99,
        category: "Sofas",
        image:
            "https://img.freepik.com/premium-photo/living-room-interior-wall-have-sofa-decoration_41470-3543.jpg",
    },
    {
        name: "Modern Green Sofa",
        price: 249.49,
        category: "Sofas",
        image:
            "https://img.freepik.com/premium-photo/modern-living-room-interior-with-sofa-green-plants-lamp-table-white-wall-background_41470-820.jpg",
    },
    {
        name: "Oakwood Coffee Table",
        price: 129.0,
        category: "Tables",
        image:
            "https://img.freepik.com/free-photo/view-modern-entryway-with-interior-designed-furniture_23-2150790920.jpg?t=st=1753019546~exp=1753023146~hmac=ec48f7a1f4b3d807ebb60000f0699fbecbadad31f6f9e3a064ae87cf2cedbb38&w=1380",
    },
    {
        name: "Classic Wing Chair",
        price: 159.75,
        category: "Chairs",
        image:
            "https://img.freepik.com/free-photo/comfy-wing-chair-carpenter-s-workshop_181624-25989.jpg",
    },
    {
        name: "Cozy Brown Sofa",
        price: 210.25,
        category: "Sofas",
        image:
            "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg",
    },
    {
        name: "Round Dining Table",
        price: 319.99,
        category: "Tables",
        image:
            "https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439826.jpg",
    },
    {
        name: "Green Velvet Chair",
        price: 189.0,
        category: "Chairs",
        image:
            "https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178354.jpg",
    },
    {
        name: "Glass Side Table",
        price: 99.5,
        category: "Tables",
        image:
            "https://img.freepik.com/premium-photo/black-table-with-plant-it-pot-green-plant-it_249848-6222.jpg",
    },
];

const categories = ["All", "Chairs", "Tables", "Sofas"];

export default function FurnitureSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? furnitureItems
            : furnitureItems.filter(
                (item) => item.category === selectedCategory
            );

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-semibold text-center">
                MOST <span className="text-pink-300">ORDERED</span> FURNITURE
            </h1>

            <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
                {categories.map((category) => (
                    <div
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 border rounded-md text-center cursor-pointer ${selectedCategory === category
                                ? "bg-gray-100 border-gray-300"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                    >
                        <span>{category}</span>
                    </div>
                ))}
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredItems.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover"
                        />
                        <h1 className="text-center text-lg font-semibold mt-3">
                            {item.name}
                        </h1>
                        <div className="flex items-center justify-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="text-[#FFA500] w-4 h-4" fill="orange" />
                            ))}
                        </div>
                        <h2 className="text-center text-xl font-semibold mt-2">
                            ${item.price.toFixed(2)}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
