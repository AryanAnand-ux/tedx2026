import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThemeSection from "@/components/ThemeSection";
import AboutSection from "@/components/AboutSection";
import ReasonsToAttend from "@/components/ReasonsToAttend";
import EventCTA from "@/components/EventCTA";
import PartnersPreview from "@/components/PartnersPreview";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <ThemeSection />
        <AboutSection />
        <ReasonsToAttend />
        <EventCTA />
        <PartnersPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
