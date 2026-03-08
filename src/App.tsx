import { motion } from "motion/react";
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

const disciplines = [
  {
    id: "bjj",
    title: "GRAPPLING & BJJ",
    description: "Master the art of leverage and ground control with world-class instructors.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop",
    accent: "text-red-500"
  },
  {
    id: "mma",
    title: "MIXED MARTIAL ARTS",
    description: "The ultimate integration of striking, wrestling, and submission arts.",
    image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2000&auto=format&fit=crop",
    accent: "text-yellow-500"
  },
  {
    id: "striking",
    title: "BOXING & MUAY THAI",
    description: "Precision, power, and discipline. Elevate your striking game.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop",
    accent: "text-red-600"
  },
  {
    id: "bodybuilding",
    title: "STRENGTH & BUILD",
    description: "Elite equipment and programming to sculpt a high-performance physique.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
    accent: "text-zinc-400"
  }
];

const coaches = [
  { name: "Marcus Thorne", role: "Head MMA Coach", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=800&auto=format&fit=crop" },
  { name: "Elena Volkov", role: "BJJ Black Belt", img: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=800&auto=format&fit=crop" },
  { name: "David 'The Duke' Chen", role: "Striking Specialist", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          APEX
        </motion.div>
        
        <div className="hidden md:flex space-x-12 text-[11px] uppercase tracking-[0.2em] font-medium">
          {["Disciplines", "Coaches", "Schedule", "Membership"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-6 py-2 border border-white/30 rounded-full text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
        >
          Book Trial
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop" 
            alt="Gym Hero"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-semibold mb-6 block neon-text">
              Forged in Discipline
            </span>
            <h1 className="text-7xl md:text-[12vw] font-display font-black leading-[0.85] tracking-tighter mb-8 italic">
              UNLEASH <br />
              <span className="text-stroke">THE BEAST</span>
            </h1>
            <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-12">
              The premier destination for combat sports and high-performance training. 
              Where elite coaching meets relentless grit.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="group flex items-center gap-4 bg-red-600 px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all duration-300 neon-glow">
                START TRAINING <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all">
                VIEW SCHEDULE
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-white/50" />
        </div>
      </section>

      {/* About / Philosophy */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-light italic mb-8">
            More than just <br />
            <span className="font-bold not-italic">a workout.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            At APEX, we believe combat sports are the ultimate vehicle for self-discovery. 
            Our facility is designed to push you past your perceived limits, whether you're 
            stepping onto the mats for the first time or preparing for a title fight.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-display font-bold mb-1">15+</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500">Elite Coaches</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold mb-1">24/7</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500">Facility Access</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1599058917233-35836d3b5e32?q=80&w=1200&auto=format&fit=crop" 
            alt="Training"
            className="w-full h-full object-cover grayscale hover:scale-110 transition-transform duration-[2s]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Disciplines Grid */}
      <section id="disciplines" className="py-32 bg-zinc-950">
        <div className="px-6 max-w-7xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-semibold mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter italic">CHOOSE YOUR <br />WEAPON</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[600px] overflow-hidden border-r border-white/5 last:border-r-0"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className={`text-[10px] font-bold tracking-[0.3em] mb-4 block ${item.accent}`}>0{idx + 1}</span>
                <h3 className="text-3xl font-display font-bold mb-4 leading-tight">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold group-hover:text-red-500 transition-colors">
                  Explore <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-semibold mb-4 block">The Vanguard</span>
              <h2 className="text-5xl md:text-7xl font-display font-light italic">World Class <br /><span className="font-bold not-italic">Coaching</span></h2>
            </div>
            <p className="max-w-md text-zinc-500 text-sm leading-relaxed">
              Our instructors aren't just teachers; they are active competitors and veterans 
              of the world's most prestigious organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {coaches.map((coach, idx) => (
              <motion.div 
                key={coach.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={coach.img} alt={coach.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-display font-bold mb-1">{coach.name}</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">{coach.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="py-32 bg-red-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="text-[20vw] font-black tracking-tighter absolute -top-10 -left-10 select-none">RESILIENCE</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-16 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="text-8xl md:text-9xl font-display font-black mb-4">98%</div>
            <div className="text-xs uppercase tracking-[0.4em] font-bold">Success Rate</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="text-8xl md:text-9xl font-display font-black mb-4">12k</div>
            <div className="text-xs uppercase tracking-[0.4em] font-bold">Active Members</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <div className="text-8xl md:text-9xl font-display font-black mb-4">50+</div>
            <div className="text-xs uppercase tracking-[0.4em] font-bold">Pro Athletes</div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-9xl font-display font-black italic tracking-tighter mb-12">
            READY TO <br />
            <span className="text-stroke">EVOLVE?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            Join the elite. Your first session is on us. Experience the atmosphere 
            that breeds champions.
          </p>
          <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all transform hover:scale-105">
            BOOK YOUR FREE TRIAL
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-display font-bold mb-8">APEX.</div>
            <p className="text-zinc-500 max-w-xs mb-8">
              The gold standard in combat sports training and physical excellence.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Location</h5>
            <p className="text-zinc-500 text-sm">
              123 Warrior Way<br />
              Combat District<br />
              New York, NY 10001
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Contact</h5>
            <p className="text-zinc-500 text-sm">
              train@apexcombat.com<br />
              +1 (555) 000-1234
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-600">
          <p>© 2024 APEX COMBAT & FITNESS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
