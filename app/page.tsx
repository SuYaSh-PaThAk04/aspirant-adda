import { HeroSection } from "./components/organisms/HeroSection";
import { FeaturesSection } from "./components/organisms/FeaturesSection";
import { WhySection } from "./components/organisms/WhySection";
import { MasterclassesSection } from "./components/organisms/MasterclassesSection";
import { ExpertMasterclassesSection } from "./components/organisms/ExpertMasterclassesSection";
import { TestimonialsSection } from "./components/organisms/TestimonialsSection";
import { Footer } from "./components/organisms/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-black">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <WhySection />
        <MasterclassesSection />
        <ExpertMasterclassesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
