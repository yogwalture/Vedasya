import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya S.',
    treatment: 'Acne Scar Revision',
    text: 'After struggling with acne scars for years, Dr. Manisha\'s MNRF treatment completely transformed my skin. The clinic is highly professional and the results are beyond my expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul M.',
    treatment: 'PRP Hair Treatment',
    text: 'I was skeptical about hair treatments, but the GFC therapy here actually works. I saw visible baby hair growth in just 3 months. Highly recommend Skin Vedasya Aesthetic Clinic.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali D.',
    treatment: 'Anti-Aging Fillers',
    text: 'Dr. Manisha has magic in her hands! The fillers look so natural. Nobody can tell I got work done, but everyone says I look refreshed and glowing. Thank you Skin Vedasya!',
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-charcoal-950 text-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]">Patient Stories</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Words of Trust</h3>
          <p className="text-pastel-50/70 text-lg font-light">
            Don't just take our word for it. Hear from our patients who have experienced the Skin Vedasya difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-white/10"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-500/20 group-hover:text-gold-500/40 transition-colors duration-300" />
              
              <div className="flex gap-1 text-gold-500 mb-6 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-pastel-50/90 mb-8 leading-relaxed font-light relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-6">
                <h4 className="font-serif font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gold-400 text-sm">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
