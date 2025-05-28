import { scrollToElement } from '@/lib/utils';
import { LightningIcon } from './ui/lightning-icon';

const HeroSection = () => {
  const handleLearnMoreClick = () => {
    scrollToElement('how-it-works');
  };
  
  const handleGetStartedClick = () => {
    scrollToElement('contact');
  };

  return (
    <section className="bg-gradient pt-32 pb-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Lightning background pattern - falling animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] animate-fall" style={{animationDuration: '15s', animationDelay: '0s'}}>
          <LightningIcon color="#ffffff" size={60} />
        </div>
        <div className="absolute top-0 right-[25%] animate-fall" style={{animationDuration: '18s', animationDelay: '2s'}}>
          <LightningIcon color="#ffffff" size={80} />
        </div>
        <div className="absolute top-0 left-[35%] animate-fall" style={{animationDuration: '12s', animationDelay: '4s'}}>
          <LightningIcon color="#ffffff" size={50} />
        </div>
        <div className="absolute top-0 right-[15%] animate-fall" style={{animationDuration: '20s', animationDelay: '6s'}}>
          <LightningIcon color="#ffffff" size={70} />
        </div>
        <div className="absolute top-0 left-[60%] animate-fall" style={{animationDuration: '16s', animationDelay: '8s'}}>
          <LightningIcon color="#ffffff" size={90} />
        </div>
        <div className="absolute top-0 right-[40%] animate-fall" style={{animationDuration: '14s', animationDelay: '1s'}}>
          <LightningIcon color="#ffffff" size={65} />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">Free Charging Stations for Your Bar or Restaurant</h1>
          <p className="text-xl md:text-2xl mb-10 animate-fade-in opacity-90 max-w-2xl mx-auto">Boost customer satisfaction and increase sales with tabletop charging stations. No cost, no risk, all upside.</p>
          
          <div className="flex justify-center animate-fade-in">
            <button 
              onClick={handleGetStartedClick}
              className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-full transition transform hover:-translate-y-1 hover:shadow-xl text-lg flex items-center"
            >
              <span>Let's Do It!</span>
              <LightningIcon color="#0ea5e9" size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
