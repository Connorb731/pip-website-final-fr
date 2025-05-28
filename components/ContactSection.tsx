import { motion } from 'framer-motion';
import CalendlyButton from '@/components/ui/calendly-button';
import ContactForm from '@/components/ui/contact-form';
import { LightningIcon } from './ui/lightning-icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
              <LightningIcon color="#ffffff" size={32} className="mr-3" />
              Get In Touch
              <LightningIcon color="#ffffff" size={32} className="ml-3" />
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Whether you're a venue owner looking for free charging stations or an advertiser interested in our platform, we're here to help.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* For Venues */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <LightningIcon color="#0ea5e9" size={18} className="mr-2" />
                Get Your Free Charging Stations
              </h3>
              <p className="text-gray-600 mb-6">Get free charging stations for your bar or restaurant. Enhance customer experience and boost revenue with no cost or investment.</p>
              
              <CalendlyButton 
                eventType="venue" 
                label="Schedule Free Setup Call"
              />
            </div>
            
            {/* For Advertisers */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <LightningIcon color="#0ea5e9" size={18} className="mr-2" />
                Advertise With Us
              </h3>
              <p className="text-gray-600 mb-6">Reach customers when they're most engaged. Our 15-minute marketing consultation will show you how to target your ideal customers at local venues.</p>
              
              <CalendlyButton 
                eventType="advertiser" 
                label="Schedule Free Consultation"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
