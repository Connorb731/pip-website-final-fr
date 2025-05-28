import { scrollToElement } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LightningIcon } from './ui/lightning-icon';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "You Get Free Charging Stations",
      description: "We provide beautiful tabletop charging stations for your venue at zero cost. No upfront fees, no monthly charges, no risk."
    },
    {
      number: 2,
      title: "Display Your Promotions",
      description: "Show your daily specials, events, and menu items on the digital displays. We handle all the updates for you."
    },
    {
      number: 3,
      title: "We Handle the Advertising",
      description: "Local businesses pay us to advertise on your stations. You get the benefits while we manage everything else."
    }
  ];

  const handleGetStartedClick = () => {
    scrollToElement('contact');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-[hsl(var(--section-medium))]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-16">
          How It Works
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.number}
              className={`relative bg-white rounded-2xl shadow-lg p-8 transition duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 ${
                step.number === 1 ? 'border-primary' : 
                step.number === 2 ? 'border-[#0284c7]' : 'border-[#0369a1]'
              }`}
              variants={itemVariants}
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full border-[#0369a1] text-white flex items-center justify-center shadow-lg bg-[#149fe5]">
                <LightningIcon color="#ffffff" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            onClick={handleGetStartedClick}
            className="inline-flex items-center justify-center bg-primary hover:bg-[#0284c7] text-white font-semibold px-8 py-4 rounded-full transition transform hover:-translate-y-1 hover:shadow-xl text-lg mx-auto"
          >
            <span>Get Started Today</span>
            <LightningIcon color="#ffffff" size={20} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
