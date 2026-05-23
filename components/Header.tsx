import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import HamburgerIcon from './icons/HamburgerIcon';
import CloseIcon from './icons/CloseIcon';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#internships', label: 'Internships' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
  { href: '#footer', label: 'Footer' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`w-full sticky top-0 z-50 px-8 md:px-16 flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-4' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}>
        <a href="#" className="flex items-center gap-1 md:gap-2 group">
          <Logo />
          <h1 className={`text-xl md:text-2xl font-black tracking-[0.15em] text-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 invisible md:opacity-100 md:visible' : 'opacity-100 visible'}`}>
            BRIXEL <span className="text-red-500">TECH</span>
          </h1>
        </a>
        <nav className="flex items-center gap-4 md:gap-6">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] text-white/70 hover:text-white transition-all duration-200 hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <button className="p-2 md:hidden text-white/80 hover:text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] bg-opacity-98 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {navLinks.map((link) => (
             <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="w-full max-w-xs text-center px-6 py-3.5 rounded-full text-sm font-semibold tracking-[0.18em] text-white/80 hover:text-white transition-all duration-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 shadow-sm"
            >
               {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;