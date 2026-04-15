import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* 3D Glow */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gold-500/5 blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-charcoal-950 font-serif font-bold text-2xl shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] transition-shadow">
                S
              </div>
              <span className="font-serif font-semibold text-2xl tracking-tight">
                Skin Vedasya
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
              Advanced clinical cosmetology center dedicated to enhancing your natural beauty through safe, medical-grade treatments.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/skinvedasya_aesthetic_clinic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-950 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all text-white/70 border-white/20">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/manisha.wankhedepatil/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-950 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all text-white/70 border-white/20">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold-400">Quick Links</h4>
            <ul className="space-y-3 text-white/70 text-sm font-light">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Clinic</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Treatments</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Before & After</a></li>
              <li><a href="#testimonials" className="hover:text-gold-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold-400">Treatments</h4>
            <ul className="space-y-3 text-white/70 text-sm font-light">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Acne & Scar Revision</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">PRP Hair Restoration</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Botox & Fillers</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Laser Hair Reduction</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Pigmentation Control</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold-400">Contact Us</h4>
            <ul className="space-y-4 text-white/70 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                <span>Sillod, Aurangabad, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <span>+91 98810 15889</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <span>hello@skinvedasya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>&copy; {new Date().getFullYear()} Skin Vedasya Aesthetic Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
