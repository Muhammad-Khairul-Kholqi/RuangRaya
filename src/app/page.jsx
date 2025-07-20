import MainSection from "@/app/components/section/home/mainSection";
import SearchSection from "@/app/components/section/home/searchSection";
import SlidderSection from "@/app/components/section/home/slidderSection";

export default function Home() {
  return (
    <div className="flex justify-center p-5">
      <div className="w-full max-w-[1200px] mt-14">
        <MainSection />
        <SearchSection />
        <SlidderSection />
      </div>
    </div>
  );
}
