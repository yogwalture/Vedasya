import { motion } from 'motion/react';
import { Sparkles, Droplets, Activity, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    id: 'skin',
    title: 'Skin Treatments',
    icon: <Sparkles className="w-8 h-8 text-gold-400" />,
    shortDesc: 'Advanced clinical solutions for acne, deep pigmentation, and glass-skin glow.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=800&auto=format&fit=crop',
    details: {
      description: 'At Skinvedasya Aesthetic Clinic, we utilize state-of-the-art dermatological protocols to address complex skin concerns. From advanced chemical peels and Q-Switched Nd:YAG lasers for stubborn pigmentation to MNRF (Micro-Needling Radio Frequency) for acne scar revision, our treatments are tailored to your unique skin biology.',
      benefits: ['Clears active acne & reduces deep scars', 'Fades melasma and hyperpigmentation', 'Medical-grade Hydrafacial & Glutathione glow', 'Stimulates deep collagen remodeling'],
      procedure: 'Following a comprehensive digital skin analysis by Dr. Manisha, we design a multi-modality approach combining medical-grade peels, mesotherapy, and advanced laser systems.',
      results: 'Visible improvement after 1-2 sessions. Optimal results typically achieved in 4-6 sessions with long-lasting clarity.',
    }
  },
  {
    id: 'hair',
    title: 'Hair Treatments',
    icon: <Droplets className="w-8 h-8 text-gold-400" />,
    shortDesc: 'Cutting-edge GFC and PRP therapies for hair fall control and regrowth.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    details: {
      description: 'Combat hair thinning and alopecia with our scientifically proven hair restoration protocols. We specialize in advanced GFC (Growth Factor Concentrate) and high-density PRP therapies, delivering concentrated growth factors directly to the hair roots to stimulate dormant follicles.',
      benefits: ['Halts hair fall and strengthens roots', 'Advanced GFC & high-yield PRP technology', 'Increases hair density and thickness', 'Improves overall scalp health and microcirculation'],
      procedure: 'A minimally invasive, virtually painless procedure using your body\'s own enriched growth factors, injected precisely into the scalp using micro-needling or targeted injections.',
      results: 'Reduction in hair fall within 3-4 weeks. New hair growth and increased density visible after 3-4 months.',
    }
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging',
    icon: <Activity className="w-8 h-8 text-gold-400" />,
    shortDesc: 'Premium Botox, dermal fillers, and Profhilo for a naturally youthful lift.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop',
    details: {
      description: 'Turn back the clock with our FDA-approved, premium anti-aging injectables and devices. Dr. Manisha specializes in the "liquid facelift" approach using Botox, hyaluronic acid dermal fillers, and skin boosters like Profhilo to restore volume and smooth wrinkles while preserving your natural expressions.',
      benefits: ['Smooths dynamic wrinkles and fine lines', 'Restores lost facial volume and contours', 'Profhilo bio-remodeling for deep hydration', 'Non-surgical skin tightening (HIFU/RF)'],
      procedure: 'Quick, precision-based injectables administered exclusively by Dr. Manisha, ensuring maximum safety, minimal downtime, and perfectly balanced facial aesthetics.',
      results: 'Immediate volume restoration with fillers. Botox results peak in 14 days. Collagen stimulation continues for months.',
    }
  },
  {
    id: 'laser',
    title: 'Laser Treatments',
    icon: <Zap className="w-8 h-8 text-gold-400" />,
    shortDesc: 'Painless Diode laser hair reduction and Fractional CO2 scar revision.',
    image: 'https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?q=80&w=800&auto=format&fit=crop',
    details: {
      description: 'Experience the gold standard in aesthetic laser technology. Skinvedasya is equipped with advanced Triple Wavelength Diode Lasers for painless, permanent hair reduction, and Fractional CO2 lasers for intensive acne scar and stretch mark revision.',
      benefits: ['Painless, permanent hair reduction', 'Safe and effective for all Indian skin types', 'Fractional CO2 for deep scar resurfacing', 'No-downtime Pico laser for tattoo & pigment removal'],
      procedure: 'Using advanced cooling technology, our laser systems selectively target hair follicles or scar tissue with pinpoint accuracy, ensuring maximum efficacy without damaging surrounding healthy skin.',
      results: 'Progressive results with each session. Typically requires 6-8 sessions for optimal hair reduction.',
    }
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Signature Treatments</h3>
          <p className="text-pastel-50/70 text-lg font-light">
            Comprehensive aesthetic solutions tailored to your unique needs, utilizing the latest medical technology for optimal results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Dialog key={service.id}>
              <DialogTrigger asChild>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group glass-panel rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 cursor-pointer border-white/10"
                >
                  <div className="h-48 overflow-hidden relative bg-charcoal-900 flex items-center justify-center border-b border-white/10">
                    <img src={service.image} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-4 glass-panel w-14 h-14 rounded-2xl flex items-center justify-center -mt-14 relative z-10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-white/20">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-serif font-semibold text-white mb-3">{service.title}</h4>
                    <p className="text-pastel-50/70 mb-6 line-clamp-2 font-light">{service.shortDesc}</p>
                    
                    <div className="flex items-center text-gold-400 font-medium text-sm group-hover:text-gold-300 transition-colors">
                      Learn more <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl mb-2">{service.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {service.details.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h5 className="font-serif text-xl font-semibold mb-3 text-white">Key Benefits</h5>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.details.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-pastel-50/80 font-light">
                          <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glass-panel p-5 rounded-2xl border-white/10">
                    <h5 className="font-serif text-xl font-semibold mb-2 text-white">The Procedure</h5>
                    <p className="text-pastel-50/80 font-light leading-relaxed">{service.details.procedure}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-serif text-xl font-semibold mb-2 text-white">Expected Results</h5>
                    <p className="text-pastel-50/80 font-light leading-relaxed">{service.details.results}</p>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full sm:w-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]" size="lg" asChild>
                      <a href={`https://wa.me/919881015889?text=Hello%20Skin%20Vedasya%20Clinic,%20I%20am%20interested%20in%20the%20${service.title}%20treatment.`} target="_blank" rel="noopener noreferrer">Book this Treatment</a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
