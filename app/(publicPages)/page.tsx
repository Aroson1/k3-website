import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import CTASection from '@/sections/CTASection';
import FeaturesSection from '@/sections/FeaturesSection';
import HeroSection from '@/sections/HeroSection';
import HostInstituteSection from '@/sections/HostInstituteSection';

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="dark-concrete-bg overflow-x-hidden">
        <AboutSection />
        <HostInstituteSection />
        <FeaturesSection />
        <Pricing />
        <ContactSection />
        <FAQ />
      </div>
      {/* <CTASection /> */}
    </>
  );
}
