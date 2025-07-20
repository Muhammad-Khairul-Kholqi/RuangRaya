import Link from "next/link"

export default function LinkItem({ href, label }) {
    return (
        <Link href={href} className="text-[#212121] hover:text-[#000000]">
            {label}     
        </Link>
    )
}
