import Link from "next/link";
import {
    Home,
    Briefcase,
    Layers,
    Archive,
    Sofa,
    Utensils,
    Refrigerator,
} from "lucide-react";

const categories = [
    { label: "Home", icon: Home },
    { label: "Office", icon: Briefcase },
    { label: "Wardrobe", icon: Layers },
    { label: "Storage", icon: Archive },
    { label: "Living Room", icon: Sofa },
    { label: "Dining", icon: Utensils },
    { label: "Kitchen", icon: Refrigerator },
];

export default function PopulerSection() {
    return (
        <div className="mt-10">
            <div className="flex items-center gap-5 justify-between mb-6">
                <h1 className="text-3xl font-semibold text-start">
                    <span className="text-pink-300">POPULAR </span>
                    FURNITURE BY CHOICE
                </h1>
                <Link
                    href=""
                    className="px-5 py-3 border border-gray-200 text-center hover:bg-gray-50"
                >
                    More Furniture
                </Link>
            </div>

            <div className="mt-5 flex items-start gap-5">
                <div className="w-full max-w-[30%] bg-[#F6F6F6] p-5">
                    <div className="flex flex-col items-start space-y-3">
                        {categories.map(({ label, icon: Icon }, index) => (
                            <Link
                                href=""
                                key={index}
                                className="flex items-center gap-3 w-full hover:bg-gray-50 p-3"
                            >
                                <Icon className="w-5 h-5" />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
