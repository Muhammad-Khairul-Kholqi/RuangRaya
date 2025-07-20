'use client'

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const reviews = [
    {
        name: "Sophia Bennett",
        title: "Chief Marketing Officer",
        review: "This service exceeded our expectations. The team was highly responsive and professional throughout the process.",
        bg: "/slidder/slidder1.jpg",
    },
    {
        name: "Liam Anderson",
        title: "Vice President of Operations",
        review: "Truly a game changer for our workflow. The implementation was smooth and results were immediate.",
        bg: "/slidder/slidder2.jpg",
    },
    {
        name: "Olivia Thompson",
        title: "Global Sales Director",
        review: "Their expertise helped us scale globally with minimal friction. Highly recommended!",
        bg: "/slidder/slidder3.jpg",
    },
    {
        name: "Ethan Martinez",
        title: "Chief Technology Officer",
        review: "Cutting-edge solutions and flawless execution. One of the best experiences we’ve had.",
        bg: "/slidder/slidder4.jpg",
    },
    {
        name: "Ava Robinson",
        title: "Head of Corporate Strategy",
        review: "Fantastic support, excellent design, and great communication. Will definitely partner again.",
        bg: "/slidder/slidder5.jpg",
    },
]

export default function ClientReviewSection() {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current
            const scrollAmount = 320
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="mt-10 w-full flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center">
                OUR CLIENT <span className="text-pink-300">REVIEWS</span>
            </h1>

            <div className="mt-5 w-full max-w-[1200px] relative">
                <div
                    ref={scrollRef}
                    className="flex justify-start overflow-x-auto gap-5 scroll-smooth"
                    style={{ scrollbarWidth: "none" }}
                >
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="min-w-[280px] max-w-[280px] bg-cover bg-center pt-30 pb-5 px-5 shrink-0"
                            style={{ backgroundImage: `url(${review.bg})` }}
                        >
                            <div className="flex flex-col space-y-2 justify-end h-full">
                                <div className="bg-white p-5 flex flex-col items-center shadow-md">
                                    <h1 className="text-center font-bold text-lg">{review.name}</h1>
                                    <h2 className="text-center text-gray-600 text-sm">{review.title}</h2>
                                    <p className="text-center w-full max-w-[240px] text-sm mt-1">{review.review}</p>
                                    <div className="flex items-center justify-center gap-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="text-[#FFA500] w-4 h-4" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 absolute right-5 mt-2">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-white p-2 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-100"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="bg-white p-2 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-100"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}
