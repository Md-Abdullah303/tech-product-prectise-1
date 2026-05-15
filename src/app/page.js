import Banner from "@/components/homapage/Bannar";
import SpinCard from "@/components/homapage/SpinCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-[90%] md:container mx-auto">
      <Banner />
      <SpinCard />
    </div>
  );
}
