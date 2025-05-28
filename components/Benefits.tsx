import { motion } from 'framer-motion';
import { LightningIcon } from './ui/lightning-icon';

const Benefits = () => {
  const benefits = [
    {
      title: "Zero Cost Installation",
      description: "We provide all equipment, installation, and maintenance completely free of charge. There's absolutely no investment required from you.",
      borderColor: "border-primary"
    },
    {
      title: "Increased Customer Dwell Time",
      description: "When customers charge their phones, they stay longer and spend more on food and drinks, directly increasing your revenue.",
      borderColor: "border-[#0284c7]"
    },
    {
      title: "Free Menu Promotion",
      description: "We streamline your in-house promotions by displaying your specials and events on our digital displays, saving you time and operational effort.",
      borderColor: "border-primary"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Providing charging stations shows you care about your customers' needs, improving satisfaction and encouraging return visits.",
      borderColor: "border-[#0284c7]"
    }
  ];

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
    <section id="benefits" className="py-20 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-16 flex items-center justify-center">
          <LightningIcon size={32} className="mr-3" />
          Benefits for Your Business
          <LightningIcon size={32} className="ml-3" />
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 ${benefit.borderColor}`}
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <LightningIcon size={18} className="mr-2 text-primary" />
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;
