import React from 'react';
import { ExternalLink, Calendar, Code, Laptop } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface Project {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  duration: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    category: 'Business Website',
    title: 'Harshus Dental Clinic',
    description: 'A premium, ultra-responsive digital patient portal engineered with modern aesthetics, fast loading assets, and patient scheduling integrations.',
    imageUrl: '/images/DENTAL CLINIC.jpg',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    duration: '7 Days',
    liveUrl: 'https://harshusclinic.com',
  },
  {
    category: 'Business Website',
    title: 'Dr Divya Dental Care',
    description: 'An advanced dental service platform featuring polished visual treatments, direct-action contact pipelines, and an interactive care catalog.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Mobile First Design'],
    duration: '5 Days',
    liveUrl: 'https://drdivyadentalcare.in',
  },
  {
    category: 'Full Stack App',
    title: 'Authenticated PDF Generator',
    description: 'A high-security, authenticated pdf rendering engine utilizing isolated serverless execution environments and secure signature hashing protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    stack: ['Node.js', 'Express', 'Puppeteer', 'JWT Auth'],
    duration: '7 Days',
    liveUrl: 'https://authenticated-pdf-generator.onrender.com/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#ef4444] bg-[#ef4444]/10 px-3 py-1 rounded-full uppercase font-bold border border-[#ef4444]/20">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mt-4 tracking-tight">
            Featured Creations
          </h2>
          <p className="text-base md:text-lg text-white/50 mt-4 max-w-2xl mx-auto">
            A handpicked selection of production-grade digital assets and applications delivered with pixel-perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 100}>
              <div className="group relative bg-[#070709]/65 border border-white/5 hover:border-white/15 hover:bg-[#0c0c0e]/90 transition-all duration-300 rounded-2xl p-5 flex flex-col h-full overflow-hidden shadow-2xl">
                
                {/* Floating blur glow effect behind card */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-white/[0.01] group-hover:bg-white/[0.03] rounded-full blur-[40px] pointer-events-none transition-all duration-500"></div>
                
                {/* Image Banner */}
                <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5 border border-white/5">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge overlayed */}
                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-wider font-bold px-2.5 py-1 rounded-full border border-white/10">
                    <Laptop className="w-3 h-3 text-[#ef4444]" />
                    {project.category}
                  </span>
                </div>

                {/* Content details */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-[#ef4444] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-[13px] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Code className="w-3.5 h-3.5 text-white/40" />
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-white/40 font-bold">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="font-mono text-[10px] text-white/80 bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer details with link buttons */}
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center bg-transparent">
                  <div>
                    <div className="flex items-center gap-1 mb-0.5 text-white/40">
                      <Calendar className="w-3 h-3" />
                      <span className="text-[9px] font-mono tracking-widest uppercase font-bold">Duration</span>
                    </div>
                    <p className="font-semibold text-white text-sm">{project.duration}</p>
                  </div>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white text-black font-bold tracking-widest text-[10px] uppercase py-2.5 px-4 rounded-full shadow-lg hover:bg-neutral-200 hover:-translate-y-0.5 transition-all duration-300 font-sans"
                    >
                      View Live
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
