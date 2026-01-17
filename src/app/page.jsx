import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import UniverseSection from "@/sections/UniverseSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <UniverseSection />
      <ContactSection />
    </div>
  );
}
