import {
    Trophy,
    ShieldCheck,
    Truck,
    Headphones,
} from "lucide-react";

const items = [
    {
        icon: Trophy,
        title: "Best Quality",
        description: "Premium material.",
    },
    {
        icon: ShieldCheck,
        title: "Warranty Protection",
        description: "Safe, covered purchases.",
    },
    {
        icon: Truck,
        title: "Free Shipping",
        description: "Fast & free delivery.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Always ready to help.",
    },
];

export default function ExcessSection() {
    return (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6">
            {items.map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="flex items-center gap-3">
                    <Icon className="text-[#212121] w-8 h-8 shrink-0" />
                    <div>
                        <h3 className="text-[#212121] text-lg font-semibold">
                            {title}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
