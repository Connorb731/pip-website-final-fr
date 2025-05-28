import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import { LightningIcon } from './ui/lightning-icon';

const TestimonialsSection = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "Short Story Brewing",
      title: "Charleston, WV",
      quote: "I didn't think much of it at first, but I was blown away when I saw a guy buy a few extra drinks just because he was waiting for his phone to charge. These stations actually keep people hanging around longer than I expected!",
      rating: 5,
      photo: "/assets/short-story-logo.png"
    },
    {
      name: "Casey Horton",
      title: "Owner, The Tile Guy",
      quote: "Working with Connor and Seth has been an absolute pleasure. They're young, professional, motivated entrepreneurs who really know their stuff. They brought fresh ideas to the table and provided full service to get the advertising that best suited my contracting companies needs. What stood out most to me was how easy they were to work with —always responsive, open to feedback, and genuinely committed to helping my business grow. It's rare to find a company that combines talent, work ethic, and great energy like this. Highly recommend!",
      rating: 5,
      photo: "/assets/casey-horton.jpg"
    },
    {
      name: "Oliverio's On the Wharf",
      title: "Morgantown, WV",
      quote: "Connor and Seth have been incredible to work with. They brought in these charging stations for free, and we've already seen results. Customers are noticing our wine specials on the screen and actually ordering them — it's been a surprising boost without us having to spend a dime. They made the whole process easy and are clearly focused on helping businesses like ours grow. Super professional, easy to work with, and genuinely invested in making sure this works for everyone involved.",
      rating: 5,
      photo: "/assets/oliverios-logo.png"
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

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex mt-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="md:text-4xl font-bold text-gradient text-center mb-16 pt-[12px] pb-[12px] text-[44px] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <LightningIcon size={32} className="mr-3" />
          What Our Partners Say
          <LightningIcon size={32} className="ml-3" />
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition duration-300 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="h-full flex flex-col">
                <blockquote className="flex-grow">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-700 italic mb-6 text-sm leading-relaxed">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-2 border-primary mr-4 flex items-center justify-center ${testimonial.name === "Short Story Brewing" ? "bg-black" : "bg-white"} p-1`}>
                    <img 
                      src={testimonial.photo}
                      alt={`${testimonial.name} photo`} 
                      className={`${
                        testimonial.name === "Casey Horton" 
                          ? "object-cover scale-150" 
                          : testimonial.name === "Short Story Brewing"
                            ? "object-contain scale-125"
                            : "object-contain"
                      } max-w-full max-h-full`}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-primary">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;