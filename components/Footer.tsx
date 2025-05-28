import { scrollToElement } from '@/lib/utils';

const Footer = () => {
  const handleLinkClick = (id: string) => {
    scrollToElement(id);
  };
  
  return (
    <footer className="bg-slate-700 text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Plug-In Promotions</h2>
            </div>
            <p className="text-slate-300 text-sm max-w-xs text-center md:text-left">
              Creating exceptional customer experiences with phone charging solutions for bars, restaurants and venues.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-semibold mb-4 text-white text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <button 
                  onClick={() => handleLinkClick('how-it-works')} 
                  className="text-slate-300 hover:text-white transition text-sm"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('benefits')} 
                  className="text-slate-300 hover:text-white transition text-sm"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('customers')} 
                  className="text-slate-300 hover:text-white transition text-sm"
                >
                  Our Customers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="text-slate-300 hover:text-white transition text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-semibold mb-4 text-white text-center md:text-left">Our Networks</h3>
            <div className="flex space-x-4 mb-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/pluginpromotions" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/pluginpromotions" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/plug-in-promotions" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            
            <div className="mt-4 text-center md:text-left">
              <p className="text-slate-300 text-sm">
                <i className="fas fa-phone mr-2"></i> <a href="tel:3049640762" className="hover:text-white transition">(304) 964-0762</a>
              </p>
              <p className="text-slate-300 text-sm">
                <i className="fas fa-envelope mr-2"></i> <a href="mailto:info@pluginpromotions.com" className="hover:text-white transition">info@pluginpromotions.com</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-slate-600 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Plug-In Promotions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
