export default function SearchSection() {
    return (
        <div className="flex justify-center mt-10 relative z-20 px-5">
            <div className="w-full max-w-[600px] p-2 bg-white border border-gray-200 flex items-center gap-3">
                <input
                    type="search"
                    placeholder="Search for furniture"
                    className="w-full sm:w-[70%] p-3 outline-none"
                />
                <button className="w-full h-full sm:w-[30%] px-5 py-2 text-center bg-[#212121] hover:bg-black cursor-pointer text-white">
                    Search
                </button>
            </div>
        </div>
    )
}