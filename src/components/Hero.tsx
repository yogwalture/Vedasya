import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-charcoal-950">
      {/* 3D Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-gold-400 text-sm font-medium mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <ShieldCheck size={16} />
            <span>Acne • Pigmentation • PRP • Laser</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-white drop-shadow-2xl">
            Advanced Clinical Cosmetology for <span className="text-gold-500 italic">Visible Transformation</span>
          </h1>
          
          <p className="text-lg text-pastel-50/80 mb-10 max-w-lg leading-relaxed font-light">
            Experience the perfect blend of medical expertise and aesthetic artistry. Safe, results-driven treatments tailored for your unique skin and hair needs.
          </p>
          
          <div className="flex flex-wrap items-center gap-5">
            <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]" asChild>
              <a href="https://wa.me/919881015889?text=Hello%20Skin%20Vedasya%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer">
                Book Consultation <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 glass-panel hover:bg-white/10 border-white/10 text-white" asChild>
              <a href="#services">Explore Treatments</a>
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/face${i}/100/100`} 
                  alt="Patient" 
                  className="w-14 h-14 rounded-full border-2 border-charcoal-950 object-cover shadow-lg"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-500 mb-1 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-pastel-50/90">Trusted by 5,000+ patients</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.4, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="relative hidden md:block perspective-1000"
        >
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_30px_60px_rgba(0,0,0,0.8)] glass-panel flex items-center justify-center border-white/10 transform hover:rotate-y-[-5deg] hover:rotate-x-[5deg] transition-transform duration-700">
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" 
              alt="Clinical Cosmetology Treatment" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating 3D Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30, z: -50 }}
            animate={{ opacity: 1, y: 0, z: 50 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            className="absolute -bottom-8 -left-8 glass-panel p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-4 border-white/20"
          >
            <div className="w-14 h-14 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 shadow-[inset_0_0_15px_rgba(212,175,55,0.3)]">
              <ShieldCheck size={28} />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide">FDA Approved</p>
              <p className="text-sm text-gold-400/80">Advanced Technology</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
