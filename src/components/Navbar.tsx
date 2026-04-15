import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent',
        isScrolled ? 'bg-charcoal-950/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-white/10 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50 group">
          <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-charcoal-950 font-serif font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] transition-shadow duration-300">
            S
          </div>
          <span className="font-serif font-semibold text-xl tracking-tight text-white">
            Skin Vedasya
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-pastel-50/80 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            <a href="https://www.instagram.com/manisha_889/" target="_blank" rel="noopener noreferrer" className="text-pastel-50/80 hover:text-gold-400 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/manisha.wankhedepatil/" target="_blank" rel="noopener noreferrer" className="text-pastel-50/80 hover:text-gold-400 transition-colors">
              <Facebook size={18} />
            </a>
            <Button asChild className="rounded-full ml-2">
              <a href="https://wa.me/919881015889?text=Hello%20Skin%20Vedasya%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer">Book Consultation</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            'fixed inset-0 bg-charcoal-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <ul className="flex flex-col items-center gap-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-serif text-2xl text-white hover:text-gold-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 mt-6">
            <a href="https://www.instagram.com/manisha_889/" target="_blank" rel="noopener noreferrer" className="text-pastel-50/80 hover:text-gold-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/manisha.wankhedepatil/" target="_blank" rel="noopener noreferrer" className="text-pastel-50/80 hover:text-gold-400 transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          <Button asChild className="mt-8 rounded-full" size="lg">
            <a href="https://wa.me/919881015889?text=Hello%20Skin%20Vedasya%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Book Consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
