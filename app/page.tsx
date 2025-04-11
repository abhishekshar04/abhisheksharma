import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import { SkillBadge } from "@/components/SkillBadges";

export default function Home() {
  return (
    <div className="w-full px-4 flex flex-col items-center justify-center mx-auto my-12">
      <div className="w-full flex flex-col gap-16 max-w-[600px]">
        <Navbar />
        <MainSection />
        <SkillBadge />
        <Footer />
      </div>
    </div>
  );
}
