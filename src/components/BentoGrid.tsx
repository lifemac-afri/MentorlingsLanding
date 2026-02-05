import { motion } from 'motion/react';
import { Brain, WifiOff, Target, TrendingUp, Sparkles, Users, Zap, Shield, Map, GraduationCap, Lightbulb, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const bentoItems = [
  {
    id: 1,
    type: 'logo',
    span: 'col-span-1 row-span-1',
    bg: 'bg-[#050083]',
    content: <img src="/adaptive-icon-black.png" alt="Logo" className="w-64 h-64 object-contain filter brightness-0 invert" />
  },
  {
    id: 2,
    type: 'app',
    title: 'The App',
    subtitle: 'Available on iOS & Android',
    span: 'col-span-2 row-span-1',
    bg: 'bg-white',
    image: '/focus3d.png'
  },
  {
    id: 3,
    type: 'person',
    title: 'AI Matches',
    span: 'col-span-1 row-span-2',
    bg: 'bg-[#E0DAFF]',
    image: '/mentor.jpg',
    floatingLabel: 'Verified'
  },
  {
    id: 4,
    type: 'stat',
    value: '3,000+',
    subtitle: 'Students Impacted',
    trend: '+12%',
    span: 'col-span-1 row-span-1',
    bg: 'bg-white'
  },
  {
    id: 5,
    type: 'network',
    title: 'Our Mentors',
    value: '150+',
    span: 'col-span-1 row-span-1',
    bg: 'bg-white',
    avatars: true
  },
  {
    id: 6,
    type: 'feature-tall',
    title: 'From PSP to Platform',
    subtitle: 'Scaling impact through intelligent automation',
    span: 'col-span-1 row-span-2',
    bg: 'bg-[#F0F2F5]',
    image: '/side3d.png'
  },
  {
    id: 7,
    type: 'roadmap',
    title: 'Visual Roadmaps',
    subtitle: 'Plan your path to SHS and beyond',
    span: 'col-span-2 row-span-1',
    bg: 'bg-[#050083]',
    dark: true,
    milestones: [
      { q: 'Q1', title: 'Pilot Phase', status: 'done', y: 80 },
      { q: 'Q2', title: 'Regional Expansion', status: 'current', y: 60 },
      { q: 'Q3', title: '3 Regions Scale', status: 'upcoming', y: 40 },
      { q: 'Q4', title: 'Global Readiness', status: 'upcoming', y: 20 }
    ]
  },
  {
    id: 8,
    type: 'stat-small',
    title: 'Vetted & Verified',
    value: '100%',
    subtitle: 'Secure Environment',
    span: 'col-span-1 row-span-1',
    bg: 'bg-white'
  }
];

export function BentoGrid() {
  return (
    <section className="py-16 px-6 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">The Metrics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Built for Scale
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[180px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`group ${item.span}`}
            >
              <div className={`relative h-full ${item.bg} rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 p-8 flex flex-col justify-between`}>
                
                {item.type === 'logo' && (
                  <div className="flex items-center justify-center h-full">
                    {item.content}
                  </div>
                )}

                {item.type === 'app' && (
                  <div className="flex h-full items-center">
                    <div className="flex-1 flex flex-col justify-between h-full py-2">
                       <div className="flex gap-3 mb-4">
                         <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                           <img src="/ml_blue.png" alt="ios" className="w-6 h-6 object-contain" />
                         </div>
                         <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                           <div className="flex gap-0.5">
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                           </div>
                         </div>
                       </div>
                       <div>
                         <div className="text-gray-900 font-bold text-2xl mb-1">{item.title}</div>
                         <div className="text-gray-500 text-sm font-medium">{item.subtitle}</div>
                       </div>
                    </div>
                    <div className="relative w-1/2 h-full">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="absolute top-1/2 -translate-y-1/2 -right-4 w-[90%] max-w-none object-contain drop-shadow-2xl translate-x-2 group-hover:translate-x-0 transition-transform duration-700" 
                      />
                    </div>
                  </div>
                )}

                {item.type === 'person' && (
                  <div className="absolute inset-0 p-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-lg border border-white/20">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-xs font-bold text-gray-900">{item.floatingLabel}</span>
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 right-6">
                      <h3 className="text-white font-bold text-xl drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                )}

                {item.type === 'stat' && (
                  <>
                    <div>
                      <div className="text-gray-500 text-sm font-medium mb-1 uppercase tracking-tight">New Impact</div>
                      <div className="text-5xl font-bold text-gray-900 mb-2">{item.value}</div>
                      <div className="text-green-500 text-sm font-bold">{item.trend}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{item.subtitle}</div>
                  </>
                )}

                {item.type === 'network' && (
                  <>
                    <div className="flex justify-between items-start">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.title}</div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Users className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
                      <div className="flex -space-x-2 mb-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" className="w-full h-full object-cover" />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">
                          +150
                        </div>
                      </div>
                      <div className="text-gray-500 text-[11px] font-medium leading-tight">{item.subtitle}</div>
                    </div>
                  </>
                )}

                {item.type === 'feature-tall' && (
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="relative z-10">
                      <h3 className="text-gray-900 font-bold text-xl leading-tight max-w-[120px]">{item.title}</h3>
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-500 text-xs hidden sm:block leading-relaxed">{item.subtitle}</p>
                    </div>
                    <div className="relative flex-1">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="absolute -bottom-2 -left-36 w-[150%] max-w-none h-auto max-h-[300px] object-contain drop-shadow-2xl translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-700 ease-out" 
                      />
                    </div>
                  </div>
                )}

                {item.type === 'roadmap' && (
                  <div className="flex flex-col h-full relative">
                    <div className="flex justify-between items-start mb-2 relative z-20">
                       <h3 className="text-white font-bold text-lg">{item.title}</h3>
                       <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
                         Roadmap 2026
                       </div>
                    </div>
                    
                    <div className="flex-1 relative mt-4">
                      {/* Subtle Grid Background */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                      />
                      
                      {/* SVG Graph Line */}
                      <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none">
                        <motion.path
                          d="M 0 120 C 50 120, 100 100, 150 80 S 300 40, 450 20"
                          fill="none"
                          stroke="rgba(255,255,255,0.15)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                          d="M 0 120 C 50 120, 100 100, 150 80 S 300 40, 450 20"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 0.4 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="opacity-40"
                        />
                      </svg>
                      
                      <div className="flex justify-between items-end h-full relative z-10 pb-4">
                        {item.milestones?.map((m: any, i: number) => (
                          <div key={i} className="flex flex-col items-center flex-1" style={{ transform: `translateY(${(m.y - 50) * 0.5}px)` }}>
                            {/* Floating Card */}
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`p-2 rounded-xl border ${m.status === 'done' ? 'bg-teal-400/20 border-teal-400/30' : m.status === 'current' ? 'bg-white shadow-2xl scale-110 z-20' : 'bg-white/5 border-white/10'} w-[85%] mb-4 transition-all duration-500`}
                            >
                               <div className={`text-[9px] font-bold uppercase mb-0.5 ${m.status === 'current' ? 'text-[#050083]' : 'text-white/60'}`}>{m.q}</div>
                               <div className={`text-[8px] font-bold leading-tight ${m.status === 'current' ? 'text-gray-900' : 'text-white/90'}`}>{m.title}</div>
                            </motion.div>

                            {/* Dot on line */}
                            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${m.status === 'done' ? 'bg-teal-400 border-teal-400 scale-75' : m.status === 'current' ? 'bg-white border-white shadow-[0_0_15px_rgba(255,255,255,1)] scale-125' : 'bg-white/20 border-white/10 scale-75'}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.type === 'stat-small' && (
                  <>
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-6 h-6 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin" />
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{item.title}</div>
                      <div className="text-4xl font-bold text-gray-900">{item.value}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">{item.subtitle}</div>
                  </>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
