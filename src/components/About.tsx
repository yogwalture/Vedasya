import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Award, HeartPulse, Shield, Users, Star, Clock } from 'lucide-react';

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = prefix + Math.floor(v).toLocaleString('en-US') + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* 3D Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gold-500/10 blur-[120px] mix-blend-screen"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold-600/5 blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            className="relative perspective-1000"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] max-w-md mx-auto shadow-[0_30px_60px_rgba(0,0,0,0.7)] glass-panel border border-white/10 flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="https://www.instagram.com/p/DTFmnMZkqEu/media/?size=l" 
                alt="Dr. Manisha Wankhede Patil" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white pointer-events-none">
                <h3 className="text-3xl font-serif font-bold mb-1 drop-shadow-lg">Dr. Manisha Wankhede Patil</h3>
                <p className="text-gold-400 font-medium tracking-wide">Clinical Cosmetologist (FMAC) | MBA</p>
              </div>
            </div>
            
            {/* Floating 3D Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 -right-6 md:-right-12 glass-panel p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-center max-w-[160px] border-white/20 backdrop-blur-xl"
            >
              <span className="block text-4xl font-serif font-bold text-gold-400 mb-1 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">10+</span>
              <span className="text-sm font-medium text-pastel-50 leading-tight block">Years of Clinical Excellence</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]">About Skin Vedasya</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Elevating Beauty Through <span className="italic text-gold-400">Medical Science</span>
            </h3>
            
            <p className="text-lg text-pastel-50/80 mb-6 leading-relaxed font-light">
              At Skin Vedasya Aesthetic Clinic, we believe that true beauty stems from healthy skin and hair. Founded by Dr. Manisha Wankhede Patil (MBA, FMAC), our clinic bridges the gap between aesthetic desires and medical safety.
            </p>
            
            <p className="text-lg text-pastel-50/80 mb-10 leading-relaxed font-light">
              Specializing in Advanced PRP therapies and Personalized Skin Protocols, we don't just treat symptoms; we address the root causes to deliver sustainable, natural-looking transformations.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center shrink-0 text-gold-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                  <Award size={26} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-white mb-2">Expert Care</h4>
                  <p className="text-pastel-50/60 text-sm">Treatments administered by certified medical professionals.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center shrink-0 text-gold-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                  <Shield size={26} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-white mb-2">Ethical Practice</h4>
                  <p className="text-pastel-50/60 text-sm">Transparent consultations with no unnecessary procedures.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center shrink-0 text-gold-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                  <HeartPulse size={26} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-white mb-2">Advanced Tech</h4>
                  <p className="text-pastel-50/60 text-sm">FDA-approved equipment for maximum safety and efficacy.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { label: 'Years of Experience', value: 10, suffix: '+', icon: <Clock className="w-8 h-8 text-gold-400 mb-4" /> },
            { label: 'Satisfied Patients', value: 5000, suffix: '+', icon: <Users className="w-8 h-8 text-gold-400 mb-4" /> },
            { label: 'Advanced Treatments', value: 25, suffix: '+', icon: <Star className="w-8 h-8 text-gold-400 mb-4" /> },
            { label: 'Safety Record', value: 100, suffix: '%', icon: <Shield className="w-8 h-8 text-gold-400 mb-4" /> },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl text-center border-white/10 hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-pastel-50/70 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
