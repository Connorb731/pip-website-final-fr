import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import CustomerCarousel from '@/components/CustomerCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection';

const Home = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Plug-In Promotions | Free Charging Stations for Bars & Restaurants';
  }, []);

  return (
    <>
      <HeroSection />
      <CustomerCarousel />
      <ProductShowcase />
      <HowItWorks />
      <Benefits />
      <TestimonialsSection />
      <ContactSection />
      <TeamSection />
    </>
  );
};

export default Home;
