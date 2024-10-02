// Correct the import paths
import ContactSection from '@/components/LandingPage/ContactSection';
import FeaturesSection from '@/components/LandingPage/FeaturesSection';
import FooterSection from '@/components/LandingPage/Footer';
import HeaderSection from '@/components/LandingPage/Header';
import HeroSection from '@/components/LandingPage/HeroSection';
import SignUpCallToActionSection from '@/components/LandingPage/SignUpCallToAction';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSection />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeaturesSection />
        <SignUpCallToActionSection />
        <ContactSection/>
      </main>
      <FooterSection />
    </div>
  );
}
