import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import UniverseSection from "@/sections/UniverseSection";
import ContactSection from "../sections/ContactSection";
import SpacePortfolio from "../components/Dummy";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <UniverseSection />
      <ContactSection />
      {/* <SpacePortfolio /> */}
    </div>
  );
}
