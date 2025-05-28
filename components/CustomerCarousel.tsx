import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import logos 
import millerLiteLogo from '../assets/logos/miller-lite.png';
import oliveriosLogo from '../assets/logos/Oliverios Logo.png';
import scorersLogo from '../assets/logos/Scorers Logo.jpg';
import sergiosLogo from '../assets/logos/Sergios Logo.jpg';
import mountainMamasLogo from '../assets/logos/Mountain Mamas Logo.png';
import shortStoryLogo from '../assets/logos/Short Story Logo (1).png';
import rooftopBarLogo from '../assets/logos/Rooftop Bar Logo.png';
import tropicsLogo from '../assets/logos/Tropics Logo 2.png';
import happyThursdayLogo from '../assets/logos/Happy-Thursday-logo_0.png';
import genesBeerLogo from '../assets/logos/Gene\'s beer logo (1).jpg';
import smokinJsLogo from '../assets/logos/Smokin Js White logo.png';
import northCentralLogo from '../assets/logos/North Central Automotive Logo Final.jpg';

interface Customer {
  name: string;
  logo: string;
  background?: string;
}

const CustomerCarousel = () => {
  const customers: Customer[] = [
    { name: 'Miller Lite', logo: millerLiteLogo },
    { name: 'Oliverios', logo: oliveriosLogo },
    { name: 'Scorers', logo: scorersLogo },
    { name: 'Sergios', logo: sergiosLogo },
    { name: 'Mountain Mamas', logo: mountainMamasLogo },
    { name: 'Short Story', logo: shortStoryLogo },
    { name: 'Rooftop Bar', logo: rooftopBarLogo },
    { name: 'Tropics', logo: tropicsLogo },
    { name: 'Happy Thursday', logo: happyThursdayLogo },
    { name: 'Genes Beer', logo: genesBeerLogo },
    { name: 'Smokin Js', logo: smokinJsLogo, background: 'bg-gray-800' },
    { name: 'North Central Automotive', logo: northCentralLogo }
  ];

  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cloneItems = () => {
      if (primaryRef.current && secondaryRef.current) {
        // Clone the items to make the animation seamless
        secondaryRef.current.innerHTML = primaryRef.current.innerHTML;
      }
    };

    cloneItems();
  }, []);

  return (
    <section id="customers" className="py-14 bg-[hsl(var(--section-light))]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="md:text-4xl font-bold text-gradient text-center mb-12 pt-[7px] pb-[7px] text-[43px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >Trusted by Local Businesses</motion.h2>
        
        <div className="relative bg-[hsl(var(--section-medium))] py-8 rounded-xl shadow-inner overflow-hidden">
          <div className="logo-slider">
            <div className="logo-slide-track">
              <div className="logo-slide" ref={primaryRef}>
                {customers.map((customer, index) => (
                  <div 
                    key={`logo-primary-${index}`}
                    className={`logo-slide-item flex-shrink-0 inline-flex items-center justify-center ${customer.background || 'bg-white'} p-4 rounded-xl shadow-md h-28 hover:shadow-lg hover:border-primary hover:border transition-all duration-300`}
                  >
                    <img 
                      src={customer.logo} 
                      alt={`${customer.name} logo`} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                ))}
              </div>
              <div className="logo-slide" ref={secondaryRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCarousel;
