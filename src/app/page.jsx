import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import dynamic from "next/dynamic";

const UniverseSection = dynamic(() => import("@/sections/UniverseSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});
const ContactSection = dynamic(() => import("../sections/ContactSection"), {
  loading: () => <div className="min-h-[50vh] bg-black" />,
});

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
