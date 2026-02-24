import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import CTASection from "@/sections/CTASection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import HostInstituteSection from "@/sections/HostInstituteSection";
import PricingSection from "@/sections/PricingSection";

export default function Page() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <HostInstituteSection />
            <FeaturesSection />
            <PricingSection />
            <ContactSection />
            <CTASection />
        </>
    );
}