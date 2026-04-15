import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const text = `Hello Skin Vedasya Clinic, my name is ${name}. I am interested in ${service}. ${message ? `Additional notes: ${message}` : ''}`;
    const whatsappUrl = `https://wa.me/919881015889?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-500/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Book Your Consultation</h3>
          <p className="text-pastel-50/70 text-lg mb-10 font-light">
            Take the first step towards your aesthetic goals. Schedule a comprehensive consultation with Dr. Manisha today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-gold-400 border-white/20 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-white mb-1">Clinic Address</h4>
                  <p className="text-pastel-50/70 font-light">Sillod<br />Aurangabad, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-gold-400 border-white/20 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-white mb-1">Contact Numbers</h4>
                  <p className="text-pastel-50/70 font-light">+91 98810 15889</p>
                </div>
              </div>

              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-gold-400 border-white/20 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-white mb-1">Email Address</h4>
                  <p className="text-pastel-50/70 font-light">hello@skinvedasya.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-gold-400 border-white/20 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-white mb-1">Working Hours</h4>
                  <p className="text-pastel-50/70 font-light">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: By Appointment Only</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 md:p-10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10 border-white/10">
              <h4 className="font-serif text-2xl font-semibold text-white mb-6">Request an Appointment</h4>
              
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-xl text-center">
                  <h5 className="font-semibold text-lg mb-2">Request Sent Successfully!</h5>
                  <p className="text-sm">Our team will contact you shortly to confirm your appointment time.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-pastel-50">Full Name</label>
                      <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors bg-charcoal-950/50 text-white placeholder-white/30" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-pastel-50">Phone Number</label>
                      <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors bg-charcoal-950/50 text-white placeholder-white/30" placeholder="+91 98810 15889" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-pastel-50">Interested Service</label>
                    <select required id="service" className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors bg-charcoal-950/50 text-white appearance-none">
                      <option value="" className="bg-charcoal-900">Select a service</option>
                      <option value="skin" className="bg-charcoal-900">Skin Treatments (Acne, Glow, Pigmentation)</option>
                      <option value="hair" className="bg-charcoal-900">Hair Treatments (PRP, GFC, Hair Fall)</option>
                      <option value="anti-aging" className="bg-charcoal-900">Anti-Aging (Botox, Fillers, HIFU)</option>
                      <option value="laser" className="bg-charcoal-900">Laser Treatments (Hair Reduction, Scars)</option>
                      <option value="consultation" className="bg-charcoal-900">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-pastel-50">Additional Notes (Optional)</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors bg-charcoal-950/50 text-white placeholder-white/30 resize-none" placeholder="Tell us briefly about your concerns..."></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-xl h-14 text-base" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : (
                      <>Book Appointment <Send className="ml-2" size={18} /></>
                    )}
                  </Button>
                  <p className="text-xs text-center text-pastel-50/50 mt-4 font-light">
                    Your information is strictly confidential and will not be shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
