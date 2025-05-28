import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';
import { Bolt } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleNavLinkClick = (id: string) => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
    scrollToElement(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-lg shadow-md z-50 transition-all duration-300 py-5 mt-[-9px] mb-[-9px] pt-[0px] pb-[0px] ml-[-4px] mr-[-4px] pl-[-1px] pr-[-1px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Plug-In Promotions Logo" 
              className="h-32 mr-3"
            />
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button 
                onClick={() => handleNavLinkClick('how-it-works')} 
                className="text-gray-600 hover:text-primary-dark font-medium transition-colors text-[22px]"
              >
                How It Works
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavLinkClick('benefits')} 
                className="text-gray-600 hover:text-primary-dark font-medium transition-colors text-[22px]"
              >
                Benefits
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavLinkClick('customers')} 
                className="text-gray-600 hover:text-primary-dark font-medium transition-colors text-[22px]"
              >
                Our Customers
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavLinkClick('contact')} 
                className="bg-primary hover:bg-[#0284c7] text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg text-[20px]"
              >
                Get Started
              </button>
            </li>
          </ul>
          
          {/* Mobile menu button */}
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu} 
            className="md:hidden text-gray-500 focus:outline-none"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden bg-white shadow-lg open">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-4 py-2">
              <li>
                <button 
                  onClick={() => handleNavLinkClick('how-it-works')} 
                  className="block w-full text-left py-2 text-gray-600 hover:text-primary-dark font-medium"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('benefits')} 
                  className="block w-full text-left py-2 text-gray-600 hover:text-primary-dark font-medium"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('customers')} 
                  className="block w-full text-left py-2 text-gray-600 hover:text-primary-dark font-medium"
                >
                  Our Customers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('contact')} 
                  className="block w-full py-2 bg-primary hover:bg-[#0284c7] text-white px-5 rounded-full font-medium transition-colors text-center shadow-md"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
