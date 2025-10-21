import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import UniverseSection from "@/sections/UniverseSection";
import SpacePortfolio from "../components/Dummy";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <UniverseSection />
      {/* <SpacePortfolio /> */}
    </div>
  );
}
