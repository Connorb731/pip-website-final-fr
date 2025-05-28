import { motion } from 'framer-motion';

const TeamSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="md:text-4xl font-bold text-gradient text-center mb-12 pt-[12px] pb-[12px] text-[44px]">
          Our Story
        </h2>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col">
              {/* Image at the top */}
              <div className="w-full flex justify-center bg-[hsl(var(--section-light))] py-8">
                <img 
                  src="/assets/team-handshake.jpg" 
                  alt="Plug-In Promotions Team Handshake" 
                  className="h-auto object-contain mx-auto rounded-xl shadow-lg"
                  style={{ maxHeight: "450px" }}
                />
              </div>
              
              {/* Text below */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gradient mb-6">How It All Started</h3>
                <div className="prose text-gray-600 mx-auto max-w-3xl">
                  <p className="mb-4">
                    At Plug-In Promotions, we saw a unique opportunity to solve two problems at once: helping bar and restaurant patrons keep their phones charged while providing venues with a powerful way to promote their most profitable items.
                  </p>
                  <p className="mb-4">
                    Our journey began when we noticed how often people were asking bartenders to charge their phones behind the bar. We realized that free charging stations could not only enhance the customer experience but also serve as a valuable marketing channel.
                  </p>
                  <p>
                    Today, our small but dedicated team works closely with both venues and local advertisers to create a win-win scenario that benefits everyone involved - including the customers who get to enjoy free phone charging while discovering great local promotions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;