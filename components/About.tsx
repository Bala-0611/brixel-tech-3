import React from 'react';
import { Sparkles, Palette, Award } from 'lucide-react';
import Counter from './Counter';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background ambient light effects */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-red-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Text Content & Stats */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
              We Are The Architects of Tomorrow's Web
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed font-sans">
              At Brixel Tech, we don't just build websites; we build dynamic digital legacy architectures. We're a premium, hyper-focused team of designers, engineers, and strategists passionate about pushing the exact coordinates of web design.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-[#0c0c0e]/60 border border-white/5 hover:border-white/10 rounded-2xl p-5 hover:bg-white/[0.02] transition-all duration-300 shadow-lg">
                <Counter end={50} suffix="+" />
                <p className="text-[11px] font-mono text-white/50 tracking-widest uppercase mt-2">Projects Launched</p>
              </div>
              <div className="bg-[#0c0c0e]/60 border border-white/5 hover:border-white/10 rounded-2xl p-5 hover:bg-white/[0.02] transition-all duration-300 shadow-lg">
                <Counter end={1} />
                <p className="text-[11px] font-mono text-white/50 tracking-widest uppercase mt-2">Year Innovating</p>
              </div>
              <div className="bg-[#0c0c0e]/60 border border-white/5 hover:border-white/10 rounded-2xl p-5 hover:bg-white/[0.02] transition-all duration-300 shadow-lg">
                <Counter end={100} suffix="%" />
                <p className="text-[11px] font-mono text-white/50 tracking-widest uppercase mt-2">Partner Success</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
              
              {/* Card 1: Innovation */}
              <div className="group relative bg-[#070709]/80 p-6 md:p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:bg-gradient-to-br hover:from-blue-500/[0.02] hover:to-transparent transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 group-hover:scale-105 transition-all duration-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Innovation at Core</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      We leverage the latest technologies, state containers, and frontend ecosystems to craft high-performance products built for scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Design */}
              <div className="group relative bg-[#070709]/80 p-6 md:p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-500/[0.02] hover:to-transparent transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400 group-hover:scale-105 transition-all duration-300">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Design-Driven</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Precision interactive elements are engineered using flawless structural layouts, intuitive UI flows, and absolute user-centric focus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: MSME Registration */}
              <div className="group relative bg-[#070709]/80 p-6 md:p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 hover:bg-gradient-to-br hover:from-red-500/[0.02] hover:to-transparent transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400 group-hover:scale-105 transition-all duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Government Registered</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Brixel Tech is registered under the Ministry of MSME, Govt of India. All internship milestones, codes, and certificates conform with regulatory frameworks.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
