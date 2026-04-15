import { motion } from 'motion/react';

const instagramPosts = [
  { id: "DXEJadajaPk", alt: "Skin Treatment Result" },
  { id: "DWD3Gv3DSAI", alt: "Cosmetology Procedure" },
  { id: "DRcdpdqCK-g", alt: "Clinic Update" },
  { id: "DPlyU5miH-H", alt: "Patient Testimonial" },
  { id: "DO7x-H7Df43", alt: "Advanced Treatment" },
  { id: "DOl11GLjaCR", alt: "Aesthetic Care" }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/5 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]">Real Results & Updates</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Instagram</h3>
          <p className="text-pastel-50/70 text-lg font-light">
            Follow our journey and witness the transformative power of our clinical treatments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl md:rounded-3xl overflow-hidden aspect-square relative group cursor-pointer"
            >
              <img 
                src={`https://www.instagram.com/p/${post.id}/media/?size=l`} 
                alt={post.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a 
                  href={`https://www.instagram.com/p/${post.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-charcoal-950 transition-colors"
                >
                  View Post
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/manisha_889/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gold-500 text-charcoal-950 font-medium hover:bg-gold-400 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
          >
            Follow @manisha_889
          </a>
        </div>
      </div>
    </section>
  );
}
