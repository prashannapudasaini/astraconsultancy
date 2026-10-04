import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, GraduationCap, MapPin, Globe, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenu(false);
    setServicesOpen(false);
    setIsVisible(true);
  }, [location]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
        setServicesOpen(false); // Close menus so they don't remain visible
        setMenu(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape') setServicesOpen(false);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setHeaderHeight(entries[0].contentRect.height);
      }
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Placeholder to prevent layout jump */}
      <div style={{ height: `${headerHeight}px` }} />
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ease-in-out bg-white ${isScrolled ? 'shadow-md border-b border-[#e5eaf1]' : 'border-b border-transparent'
          } ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="wrap nav">
          <Link to="/" aria-label="ASTRA home" className="brand" onClick={() => window.scrollTo(0, 0)}>
            <img src="/astra-logo.png" alt="ASTRA Global Education and Services" />
            <span style={{ fontSize: '13px', fontWeight: '700' }}>GLOBAL EDUCATION<br /> & SERVICES</span>
          </Link>
          <nav aria-label="Main navigation" className={menu ? 'links mobile-open' : 'links'}>
            <NavLink to="/" className={({ isActive }) => (isActive && location.pathname === '/' ? 'active-link' : '')} onClick={() => { window.scrollTo(0, 0); setMenu(false); }}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={() => { window.scrollTo(0, 0); setMenu(false); }}>About</NavLink>
            <NavLink to="/destinations" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={() => { window.scrollTo(0, 0); setMenu(false); }}>Destinations</NavLink>

            {/* Services Dropdown */}
            <div
              className="relative flex items-center"
              ref={dropdownRef}
              onMouseEnter={() => { if (window.innerWidth >= 760) setServicesOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth >= 760) setServicesOpen(false); }}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => `font-medium ${isActive || isServicesActive ? 'active-link text-[#e50924]' : ''}`}
                onClick={() => { if (window.innerWidth < 760) setMenu(false); }}
              >
                Services
              </NavLink>
              <button
                className={`bg-transparent border-0 p-1 flex items-center justify-center cursor-pointer lg:pointer-events-none ${isServicesActive ? 'text-[#e50924]' : 'text-[#142a47] hover:text-[#e50924]'}`}
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }}
                aria-expanded={servicesOpen}
                aria-label="Toggle services menu"
              >
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`
                lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:w-[650px] lg:bg-white lg:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] lg:border lg:border-gray-100 lg:rounded-2xl lg:mt-6 lg:p-6 lg:z-50
                lg:before:content-[''] lg:before:absolute lg:before:-top-8 lg:before:left-0 lg:before:w-full lg:before:h-8 lg:before:bg-transparent
                ${servicesOpen ? 'block' : 'hidden'}
                block lg:block lg:transition-all lg:duration-200 
                ${!servicesOpen && 'lg:opacity-0 lg:invisible lg:translate-y-2'}
                ${servicesOpen && 'lg:opacity-100 lg:visible lg:translate-y-0'}
                mt-4 lg:!mt-6 ml-4 lg:ml-0 flex flex-col gap-1
              `}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col gap-1">
                  <div className="lg:col-span-2 mb-2 hidden lg:block">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2 border-b border-gray-100 pb-2">ASTRA Services</h3>
                  </div>

                  <Link to="/services" className="block px-4 py-4 hover:bg-[#f4f7fb] rounded-xl transition-colors group">
                    <div className="font-semibold text-[#0b2f6b] group-hover:text-[#e50924] flex items-center gap-3 mb-1">
                      <div className="bg-[#eff4fb] p-2 rounded-lg text-[#0b2f6b] group-hover:bg-[#ffced3] group-hover:text-[#e50924] transition-colors"><Globe size={18} /></div>
                      All Services
                    </div>
                    <div className="text-xs text-gray-500 pl-[42px]">Overview of our counselling support</div>
                  </Link>

                  <Link to="/services/study-abroad" className="block px-4 py-4 hover:bg-[#f4f7fb] rounded-xl transition-colors group">
                    <div className="font-semibold text-[#0b2f6b] group-hover:text-[#e50924] flex items-center gap-3 mb-1">
                      <div className="bg-[#eff4fb] p-2 rounded-lg text-[#0b2f6b] group-hover:bg-[#ffced3] group-hover:text-[#e50924] transition-colors"><GraduationCap size={18} /></div>
                      Study Abroad
                    </div>
                    <div className="text-xs text-gray-500 pl-[42px]">Explore the right academic direction</div>
                  </Link>

                  <Link to="/services/visa-guidance" className="block px-4 py-4 hover:bg-[#f4f7fb] rounded-xl transition-colors group">
                    <div className="font-semibold text-[#0b2f6b] group-hover:text-[#e50924] flex items-center gap-3 mb-1">
                      <div className="bg-[#eff4fb] p-2 rounded-lg text-[#0b2f6b] group-hover:bg-[#ffced3] group-hover:text-[#e50924] transition-colors"><MapPin size={18} /></div>
                      Visa Guidance
                    </div>
                    <div className="text-xs text-gray-500 pl-[42px]">Prepare requirements carefully</div>
                  </Link>

                  <Link to="/services/language-preparation" className="block px-4 py-4 hover:bg-[#f4f7fb] rounded-xl transition-colors group">
                    <div className="font-semibold text-[#0b2f6b] group-hover:text-[#e50924] flex items-center gap-3 mb-1">
                      <div className="bg-[#eff4fb] p-2 rounded-lg text-[#0b2f6b] group-hover:bg-[#ffced3] group-hover:text-[#e50924] transition-colors"><Globe size={18} /></div>
                      Language Preparation
                    </div>
                    <div className="text-xs text-gray-500 pl-[42px]">Build readiness for your course</div>
                  </Link>
                </div>

                <div className="p-4 mt-4 lg:mt-6 border-t border-gray-100 bg-[#f8fafc] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0b2f6b]">Ready to begin?</h4>
                    <p className="text-xs text-gray-500 mt-1">Speak with our expert counsellors about your goals.</p>
                  </div>
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-[#e50924] hover:bg-[#c7051e] text-white px-5 py-2.5 rounded-md font-semibold text-xs transition-colors shrink-0 w-full sm:w-auto">
                    Book Session <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/process" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={() => { window.scrollTo(0, 0); setMenu(false); }}>Application Process</NavLink>
            <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={() => { window.scrollTo(0, 0); setMenu(false); }}>Resources</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={() => { window.scrollTo(0, 0); setMenu(false); }}>Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2 lg:gap-4 ml-auto lg:ml-0">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center text-[#142a47] theme-toggle-btn"
              aria-label="Toggle dark mode"
              style={{ width: '40px', height: '40px', background: 'transparent' }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="button nav-cta" style={{ margin: 0 }}>
              Book counselling <ArrowUpRight size={16} />
            </Link>
          </div>
          <button
            className="menu-btn"
            aria-label={menu ? 'Close menu' : 'Open menu'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
