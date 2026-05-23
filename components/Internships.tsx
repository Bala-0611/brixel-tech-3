import React, { useState } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  Check,
  Laptop,
  Database,
  Cpu,
  Cloud,
  Megaphone,
  Video
} from 'lucide-react';

interface InternshipRole {
  id: string;
  number: string;
  title: string;
  department: string;
  duration: string;
  type: string;
  stipend: string;
  shortDesc: string;
  description: string;
  syllabus: string[];
  techStack: string[];
  icon: any;
  color: string;
  image: string;
}

const INTERNSHIP_ROLES: InternshipRole[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Development',
    department: 'Web Engineering',
    duration: '1 Month',
    type: 'Self-Paced + Project Mentorship',
    stipend: 'Completion Certificate & Letter of Recommendation',
    shortDesc: 'Build premium, responsive user interfaces and modern web apps with pixel-perfect precision.',
    description: 'Master client-side engineering under senior developer supervision. You will translate designer layouts into active React/Tailwind web structures, learning state architecture, responsive scaling systems, and responsive layout performance.',
    syllabus: [
      'HTML5, CSS3 & Modern ES6+ JavaScript',
      'Responsive Layout Engineering (Tailwind CSS & Flexbox/Grid)',
      'Bootstrap & UI Layout Frameworks',
      'React Components & State Lifecycle',
      'Real-Time Project Builds & Optimization'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'JavaScript'],
    icon: Laptop,
    color: 'from-red-500/10 to-red-650/10 border-red-500/20 text-red-400',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Development',
    department: 'Systems Engineering',
    duration: '1 Month',
    type: 'Self-Paced + Live Code Audits',
    stipend: 'Completion Certificate & Letter of Recommendation',
    shortDesc: 'Develop robust, high-availability servers, secure routing models, and data storage pathways.',
    description: 'Dive deep into structural databases, application endpoints, and server systems. You will construct highly organized databases, configure RESTful path validations, handle authentication gateways, and orchestrate server deployments.',
    syllabus: [
      'Core Asynchronous Backend Concepts',
      'Node.js runtime & Express.js frameworks',
      'Relational Databases (MySQL) & Document States (MongoDB)',
      'Secure Restful API Development & Verification',
      'Server-side Security & Integration Testing'
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Postman', 'Git', 'Vercel'],
    icon: Database,
    color: 'from-teal-500/10 to-emerald-500/10 border-teal-500/20 text-teal-400',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fullstack',
    number: '03',
    title: 'Full Stack Development',
    department: 'Architectural Systems',
    duration: '1 Month',
    type: 'Self-Paced + Practical Deployment',
    stipend: 'Completion Certificate & Project Verification Badge',
    shortDesc: 'Drive cohesive client-to-server engines, managing the complete database, runtime, and interface lifecycle.',
    description: 'Learn to build complete, dual-sided digital solutions. You will combine beautiful modern frontend layouts with complex state management and robust Express servers, working with variables across the entire application stack.',
    syllabus: [
      'Combined Frontend UI and Backend Logic Architecture',
      'Secure User Authentication & Session Variables',
      'Integrative APIs, JSON Handlers & Route Customization',
      'Database Schema Modeling & Relational Links',
      'End-to-End Real-Time Projects & Deployment'
    ],
    techStack: ['Node.js', 'Express', 'React', 'MongoDB', 'Tailwind CSS', 'Git & GitHub', 'Heroku'],
    icon: Cpu,
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-400',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud Computing',
    department: 'Infrastructure & DevOps',
    duration: '1 Month',
    type: 'Self-Paced + Deployment Pipelines',
    stipend: 'Completion Certificate & DevOps Reference Letter',
    shortDesc: 'Architect highly scalable cloud environments, build secure containers, and manage deployment channels.',
    description: 'Understand cloud structures and container logic. You will setup cloud workflows, practice continuous deployment (CI/CD) paths, balance system hosting limits, and configure developer credentials safely.',
    syllabus: [
      'Cloud Architecture & Web Hosting Fundamentals',
      'Amazon Web Services (AWS) Storage & Compute Ecosystem',
      'Microsoft Azure & Google Cloud Architectures',
      'Docker Containerization & Local Environments',
      'CI/CD Workflows, GitHub Actions & Live Deployments'
    ],
    techStack: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Git & GitHub', 'CI/CD Pipelines'],
    icon: Cloud,
    color: 'from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-400',
    image: '/images/cloud computing.jpg'
  },
  {
    id: 'marketing',
    number: '05',
    title: 'Digital Marketing',
    department: 'Growth & Strategy',
    duration: '1 Month',
    type: 'Self-Paced + Real Work Study',
    stipend: 'Completion Certificate & Creative Portfolio Assessment',
    shortDesc: 'Formulate highly profitable search-engine strategies, run targeted social analytics, and scale visual campaigns.',
    description: 'Master high-conversion user Acquisition pathways, Search Engine Optimization (SEO), and programmatic metrics. You will learn to construct engaging ad cycles, analyze user behavior variables, and plan visual media plans.',
    syllabus: [
      'Search Engine Optimization (SEO) & Key Keyword Research',
      'Social Media Marketing & Brand Voice Architecture',
      'Conversion Rate Optimization (CRO) & Analytical Auditing',
      'Email Campaigns, Automation, & Pipeline Nurturing',
      'Live Advertising Auditations & ROI Computations'
    ],
    techStack: ['Google Ads', 'Google Analytics', 'SEO Tools', 'Facebook Manager', 'LinkedIn Ads', 'Figma'],
    icon: Megaphone,
    color: 'from-rose-500/10 to-pink-500/10 border-rose-500/20 text-rose-400',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'content',
    number: '06',
    title: 'Content Creation & Video Editing',
    department: 'Creative Studio',
    duration: '1 Month',
    type: 'Self-Paced + Visual Case Files',
    stipend: 'Completion Certificate & Portfolio Review Badge',
    shortDesc: 'Produce premium dynamic videos, craft modern motion graphics, and define video strategy maps.',
    description: 'Work with the tools that define user curiosity. Construct high-fidelity motion assets, organize timing grids, build professional color grading structures, and learn content planning architectures that engage digital platforms.',
    syllabus: [
      'Creative Content Strategy, Hook-Writing & Planning',
      'Adobe Premiere Pro Timeline Architecture & Editing Controls',
      'Adobe After Effects Kinetic Systems & Motion Graphics',
      'Photoshop Asset Designing & Visual Framing',
      'Social Video Optimization & Distribution Pipelines'
    ],
    techStack: ['Premiere Pro', 'After Effects', 'Photoshop', 'Canva', 'YouTube Studio', 'Figma'],
    icon: Video,
    color: 'from-red-500/10 to-rose-500/10 border-red-500/20 text-red-400',
    image: '/images/content.jpg'
  }
];

// Configure your Google Form link here
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd9fh7DMqTOBKN_2EkhJJWwTlaTmaG28_IlzhAyhUph4pvpHQ/viewform";

export const Internships: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('frontend');
  
  const selectedRole = INTERNSHIP_ROLES.find(r => r.id === selectedRoleId) || INTERNSHIP_ROLES[0];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRoleId(roleId);
  };

  return (
    <section id="internships" className="py-24 relative overflow-hidden bg-black/40 border-t border-white/5 scroll-mt-20">
      {/* Background radial highlights */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-red-500/[0.015] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-red-500/[0.015] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-xs text-white/80 tracking-[0.2em] uppercase mb-4 font-sans">
            <GraduationCap className="w-4 h-4 text-white" />
            Empowering Careers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3 tracking-tight">
            Brixel Academy
          </h2>
          <h3 className="text-sm md:text-md font-bold tracking-[0.2em] text-[#ef4444] uppercase mb-4">
            6 Powerful Internships
          </h3>
          <p className="text-[14px] text-white/70 leading-relaxed max-w-2xl mx-auto font-sans">
            Practical learning with real-world impact. Gain verified credentials, master hands-on production technologies, and configure stable portfolio values in a structured single-screen container.
          </p>
        </div>

        {/* INTERACTIVE WIDGET - 6 Powerhouse Internships list & dynamic active screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Selector Grid (6 Column buttons) - Left */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {INTERNSHIP_ROLES.map((role) => {
              const IconComp = role.icon;
              const isActive = selectedRoleId === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border relative overflow-hidden group ${
                    isActive 
                      ? 'bg-gradient-to-r ' + role.color.split(' ')[0] + ' ' + role.color.split(' ')[1] + ' border-white/20 shadow-xl scale-[1.01]' 
                      : 'bg-[#0d0d0d]/40 border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 ${isActive ? 'text-white border-white/25 scale-105' : 'text-white/40'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono tracking-widest text-white/40 mb-0.5">
                          TRACK {role.number}
                        </span>
                        <span className="text-[10px] font-bold text-white/50 tracking-wide uppercase">
                          {role.duration}
                        </span>
                      </div>
                      <h4 className="text-[16px] font-bold text-white leading-tight truncate group-hover:text-white/90">
                        {role.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Target View Panel - Right */}
          <div className="lg:col-span-7 bg-[#0a0a0c]/90 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-col h-full justify-between">
              
              {/* Profile Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black bg-white/5 border border-white/15 px-3 py-1.5 rounded-lg font-mono text-white/80">
                      TRACK {selectedRole.number}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold text-white/40 tracking-[0.25em] uppercase block">
                        {selectedRole.department}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-white">
                        {selectedRole.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white/80 font-mono">
                    {selectedRole.type}
                  </span>
                </div>

                {/* Track Feature Image Banner */}
                <div className="mb-6 rounded-xl overflow-hidden border border-white/5 h-60 md:h-64 relative group shadow-inner">
                  <img 
                    src={selectedRole.image} 
                    alt={selectedRole.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-transparent to-[#0a0a0c]/20"></div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-[9px] font-mono tracking-widest text-red-400 uppercase font-bold">Practical Sandbox Environment Live</span>
                  </div>
                </div>

                {/* Grid checklist highlights and tools */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Master syllabus check */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-white/35 tracking-[0.25em] mb-3">
                      PRACTICAL CURRICULUM
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedRole.syllabus.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-white/75">
                          <Check className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills/Technologies List */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-white/35 tracking-[0.25em] mb-3">
                      TOOLS & STACK HANDLED
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRole.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-white/[0.03] text-white/80 border border-white/10 text-[11px] px-2.5 py-1 rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                      <h5 className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">
                        Exit Credentials
                      </h5>
                      <p className="text-[11px] text-white/70 leading-normal">
                        {selectedRole.stipend}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions/Contact Navigation */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/50 tracking-wide font-sans">
                  Certificate of completion provided at end of term.
                </span>
                <a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-xs font-black tracking-widest shadow-lg hover:bg-neutral-200 transition-all font-sans"
                >
                  Apply & Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Internships;
