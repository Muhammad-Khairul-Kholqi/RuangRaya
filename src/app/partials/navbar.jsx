"use client";

import Link from "next/link";
import LinkLists from "@/app/components/molucules/linkLists";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-center p-5">
            <div className="w-full max-w-[1200px]">
                <div className="fixed top-0 left-1/2 -translate-x-1/2 z-40 w-full max-w-[1200px] p-5 bg-white">
                    <div className={`border border-gray-200 px-8 py-5 rounded-full flex items-center justify-between transition-all duration-300 ${isOpen ? "bg-white/80 backdrop-blur-sm" : "bg-white"
                        }`}>
                        <Link href="/" className={`${pacifico.className} text-xl text-[#212121]`}>
                            RuangRaya
                        </Link>

                        <div className="hidden md:flex">
                            <LinkLists />
                        </div>

                        <button
                            className="md:hidden text-[#212121]"
                            onClick={() => setIsOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <div className="p-6 flex flex-col gap-6">
                    <button
                        className="self-end text-[#212121]"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X size={24} />
                    </button>

                    <LinkLists direction="col" />
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-45 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}