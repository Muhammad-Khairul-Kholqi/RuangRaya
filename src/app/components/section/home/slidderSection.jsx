"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/slidder/slidder1.jpg",
  "/slidder/slidder2.jpg",
  "/slidder/slidder3.jpg",
  "/slidder/slidder4.jpg",
  "/slidder/slidder5.jpg",
];

const products = [{
    name: "Minimalist Kitchen Table",
    description: "Simple dining table placed in a clean modern kitchen space.",
    price: "$650",
  },
  {
    name: "Wooden Dining Table",
    description: "Elegant dining set featured in a cozy living room setting.",
    price: "$720",
  },
  {
    name: "Living Room Set",
    description: "Comfortable chairs and a wooden table in a modern living room.",
    price: "$540",
  },
  {
    name: "Luxury Bed Frame",
    description: "Spacious and stylish bed set in a cozy bedroom environment.",
    price: "$1,050",
  },
  {
    name: "Modern Bathtub",
    description: "Elegant white bathtub placed in a minimalist bathroom.",
    price: "$890",
  },
];

export default function SlidderSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => setActiveIndex(index);
    return (
        <div className="-mt-8 relative z-10">
            <div className="relative w-full lg:h-[500px] md:h-[400px] sm:h-[300px] h-[300px] overflow-hidden" >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Slider ${index + 1}`}
                            fill
                            className="object-cover object-bottom"
                        />

                        <div className="absolute bottom-8 right-6 bg-white/30 backdrop-blur-md text-black p-5 hidden sm:block">
                            <p className="text-xl font-semibold">{products[index].name}</p>
                            <p className="text-sm w-full max-w-[300px]">{products[index].description}</p>
                            <p className="text-lg font-medium">{products[index].price}</p>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === index ? "bg-white" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}