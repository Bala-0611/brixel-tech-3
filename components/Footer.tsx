import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import { ArrowUp, Clock, Copy, Check, MessageSquare } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#internships', label: 'Internships' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Featured Creations' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '#services', label: 'Brixel Web Studio' },
  { href: '#services', label: 'Brixel Business Pack' },
  { href: '#services', label: 'Brixel Academy' },
  { href: '#services', label: 'Brixel Creative Studio' },
];

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setLocalTime(formatter.format(new Date()));
      } catch (err) {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('brixeltech@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020204] border-t border-white/5 pt-20 pb-12 overflow-hidden font-sans group/footer">
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4px_4px] opacity-20 pointer-events-none"></div>
      
      {/* Dynamic ambient hover light line on the top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent group-hover/footer:via-red-500/30 transition-all duration-1000"></div>

      {/* Dynamic light glows */}
      <div className="absolute bottom-[-10%] left-[5%] w-[350px] h-[350px] bg-red-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[3%] w-[350px] h-[350px] bg-blue-500/[0.005] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Grid: Symmetric 4-column master alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand Header & Tagline */}
          <div className="lg:pr-10 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 cursor-pointer w-fit" onClick={scrollToTop}>
                <div className="p-1 px-1.5 bg-white/[0.02] border border-white/5 rounded-lg group-hover/footer:border-red-500/20 transition-all duration-500">
                  <Logo />
                </div>
                <div>
                  <h1 className="text-lg font-black tracking-[0.12em] text-white">
                    BRIXEL <span className="text-red-500">TECH</span>
                  </h1>
                  <p className="text-[8px] font-mono tracking-widest text-white/40 uppercase mt-0.5">
                    Digital Legacy Architects
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-[13px] leading-relaxed max-w-sm mt-1">
                Engineering high-performance web applications, interactive visual brands, and industry-standard training channels with absolute technical alignment.
              </p>
            </div>

            {/* Simple, Elegant Socials Row */}
            <div className="flex flex-col gap-3">
              <span className="text-[9px] font-mono tracking-widest text-white/35 uppercase font-bold">Connect with us</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.instagram.com/brixeltech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="p-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 rounded-lg text-white/60 hover:text-white hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href="https://www.linkedin.com/in/brixel-tech-83855a387/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="p-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 rounded-lg text-white/60 hover:text-[#ef4444] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="lg:px-10 lg:border-l lg:border-white/5 flex flex-col gap-6">
            <h3 className="text-[10px] font-mono font-bold tracking-[0.18em] text-white/35 uppercase border-b border-white/[0.03] pb-2">
              Sitemap
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="group flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300 text-[13px] py-0.5"
                >
                  <span className="w-1 h-1 rounded-full bg-red-500 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Ecosystem Services */}
          <div className="lg:px-10 lg:border-l lg:border-white/5 flex flex-col gap-6">
            <h3 className="text-[10px] font-mono font-bold tracking-[0.18em] text-white/35 uppercase border-b border-white/[0.03] pb-2">
              What We Do
            </h3>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="group flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300 text-[13px] py-0.5"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Aligned Interactive Contact Channels */}
          <div className="lg:pl-10 lg:border-l lg:border-white/5 flex flex-col gap-6">
            <h3 className="text-[10px] font-mono font-bold tracking-[0.18em] text-white/35 uppercase border-b border-white/[0.03] pb-2">
              Core Desk
            </h3>
            <div className="flex flex-col gap-4">
              
              {/* Tap to copy email element */}
              <button 
                onClick={handleCopyEmail}
                className="group flex items-center justify-between w-full py-1 text-white/60 hover:text-white transition-colors duration-300 border-b border-white/[0.03] pb-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-red-500/5 group-hover:bg-red-500/10 border border-white/5 group-hover:border-red-500/20 flex items-center justify-center text-red-500 transition-all">
                    <MailIcon />
                  </div>
                  <div className="flex flex-col items-start text-left min-w-0">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 group-hover:text-red-500 transition-colors">Email Desk</span>
                    <span className="text-[13px] font-mono truncate mt-0.5">brixeltech@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-white/[0.02]/40 border border-white/5 py-1 px-2 rounded font-mono text-[9px] text-white/40 group-hover:text-white transition-all">
                  {copied ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                      <Check className="w-2.5 h-2.5" /> COPIED
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Copy className="w-2.5 h-2.5" /> COPY
                    </span>
                  )}
                </div>
              </button>

              {/* Secure WhatsApp Hotline */}
              <a 
                href="https://wa.me/918925669365" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full py-1 text-white/60 hover:text-white transition-colors duration-300 border-b border-white/[0.03] pb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/5 group-hover:bg-emerald-500/10 border border-white/5 group-hover:border-emerald-500/10 flex items-center justify-center text-emerald-400 transition-all">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 group-hover:text-emerald-400 transition-colors">WhatsApp Desk</span>
                    <span className="text-[13px] font-mono mt-0.5 font-medium">+91 8925669365</span>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </a>

              {/* Local Clock */}
              <div className="flex items-center gap-3 py-1 w-full">
                <div className="w-8 h-8 rounded-lg bg-blue-500/5 border border-white/5 flex items-center justify-center text-blue-400">
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">Studio Clock</span>
                  <span className="text-[13px] font-mono mt-0.5 text-white/80 font-medium tracking-wide">
                    {localTime || 'Loading...'} <span className="text-[9px] text-white/30 ml-1">IST</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Base */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-[13px] font-sans">
            &copy; 2025 Brixel Tech. All Rights Reserved.
          </span>
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group p-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-red-500/20 rounded-full text-white/40 hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
