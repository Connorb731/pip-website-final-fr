import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  // Value propositions for restaurants
  const valueProps = [
    {
      src: "/charging-station-oliverios.jpg",
      alt: "Plug-In Promotions charging stations at Oliverio's restaurant",
      caption: "Keep Customers Longer"
    },
    {
      src: "/images/promote-profitable-items.png",
      alt: "Plug-In Promotions charging station displaying a Watermelon Spritz promotion at a bar",
      caption: "Promote Profitable Items"
    },
    {
      src: "/charging-station-scorers.jpg",
      alt: "Charging stations enhancing customer experience",
      caption: "Enhance Customer Experience"
    }
  ];

  // Animation variants
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
    <section id="product-showcase" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="md:text-4xl font-bold text-gradient text-center mb-8 pt-[12px] pb-[12px] text-[44px]">Modern Charging Solutions for Every Bartop</h2>
        
        {/* Main Product Image */}
        <motion.div 
          className="mb-12 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="shadow-xl rounded-xl overflow-hidden border border-[hsl(var(--border))]">
            <img 
              src="/digital-charging-station.png" 
              alt="Plug-In Promotions Digital Charging Station Display" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        
        {/* Value Propositions Gallery */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div key={index} className="group" variants={itemVariants}>
              <div className="overflow-hidden rounded-xl shadow-lg transition duration-300 group-hover:shadow-2xl border border-[hsl(var(--border))]">
                <img 
                  src={prop.src}
                  alt={prop.alt} 
                  className="w-full h-auto transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 p-4 rounded-xl bg-[hsl(var(--section-light))]">
                <p className="text-center text-gray-800 font-bold text-xl">{prop.caption}</p>
                <p className="text-center text-gray-600 mt-1">
                  {index === 0 ? "Keep your customers comfortable and relaxed at your venue." : 
                  index === 1 ? "Display your high-margin items directly on our charging stations." : 
                  "Provide a service that customers will appreciate and remember."}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
