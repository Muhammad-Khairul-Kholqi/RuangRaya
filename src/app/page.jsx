import MainSection from "@/app/components/section/home/mainSection";
import SearchSection from "@/app/components/section/home/searchSection";
import SlidderSection from "@/app/components/section/home/slidderSection";
import ExcessSection from "@/app/components/section/home/excessSection";
import PopulerSection from "@/app/components/section/home/populerSection";
import FurnitureSection from "@/app/components/section/home/furnitureSection";
import ClientReviewSection from "@/app/components/section/home/clientReviewSection";

export default function Home() {
  return (
    <div className="flex justify-center p-5">
      <div className="w-full max-w-[1200px]">
        <MainSection />
        <SearchSection />
        <SlidderSection />
        {/* <ExcessSection /> */}
        {/* <PopulerSection /> */}
        <FurnitureSection />
        <ClientReviewSection />
      </div>
    </div>
  );
}
