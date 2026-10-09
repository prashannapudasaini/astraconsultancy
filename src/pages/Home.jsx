import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail, GraduationCap, FileCheck, BookOpen, ExternalLink, Globe2, ShieldCheck, MessageCircle, Clock } from 'lucide-react';
import { countries } from '../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageEntrance, useHeroAnimation, useHomeAnimations, useJourneyAnimation } from '../motion';
import GlobeComponent from '../components/GlobeComponent';

gsap.registerPlugin(ScrollTrigger);

const email = 'info@astraglobaleducationservices.com';

const CurvedDividerBottom = () => (
  <svg className="absolute bottom-0 left-0 w-full overflow-hidden text-white" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: 'currentColor', height: '80px', zIndex: 10 }}>
    <path d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
);

const CurvedDividerTop = ({ color = "text-white" }) => (
  <svg className={`absolute top-0 left-0 w-full overflow-hidden ${color}`} viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: 'currentColor', height: '80px', zIndex: 10 }}>
    <path d="M0,60 C480,120 960,0 1440,60 L1440,0 L0,0 Z"></path>
  </svg>
);

const KoreaShowcase = () => {
  const container = useRef();
  const img1 = useRef();
  const img2 = useRef();
  
  useGSAP(() => {
    // Scroll reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.k-elem', { 
      y: 30, 
      opacity: 0, 
      duration: 0.6, 
      stagger: 0.1,
      ease: 'power2.out'
    });
      
    // Continuous float
    gsap.to('.k-float', {
      y: -10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // Mouse movement interactivity (Parallax)
    const handleMouseMove = (e) => {
      if (!container.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(img1.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out'
      });
      
      gsap.to(img2.current, {
        x: -xPos * 1.5,
        y: -yPos * 1.5,
        duration: 1.5,
        ease: 'power2.out'
      });
    };

    const section = container.current;
    section.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, { scope: container });

  const handleCardHover = (e, isEnter) => {
    gsap.to(e.currentTarget, {
      y: isEnter ? -5 : 0,
      scale: isEnter ? 1.02 : 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <section ref={container} className="py-10 lg:py-16 !bg-white dark:!bg-[#050b14] relative overflow-hidden transition-colors duration-500 border-y !border-gray-100 dark:!border-white/5">
      {/* Decorative Gradients (Subtle) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] !bg-red-100 dark:!bg-[#e50924] rounded-full blur-[100px] !opacity-30 dark:!opacity-10 pointer-events-none transition-colors duration-500"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Content Area (Left Side) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
           <div className="k-elem inline-flex items-center gap-2 !bg-gray-50 dark:!bg-white/5 border !border-gray-200 dark:!border-white/10 px-4 py-2 rounded-full mb-6 shadow-sm transition-colors duration-500">
             <span className="w-2 h-2 !bg-[#e50924] rounded-full animate-pulse"></span>
             <span className="text-xs font-bold tracking-widest uppercase !text-[#0b2f6b] dark:!text-gray-300 transition-colors duration-500">Trend Alert</span>
           </div>
           
           <h2 className="k-elem text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5 !text-[#0b2f6b] dark:!text-white transition-colors duration-500">
             South Korea.<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e50924] to-red-500 dark:to-red-400 font-black">Reimagined.</span>
           </h2>
           
           <p className="k-elem !text-gray-600 dark:!text-gray-400 text-base lg:text-lg leading-relaxed mb-8 transition-colors duration-500">
             Step away from traditional study destinations. South Korea offers Nepalese students a hyper-modern education, unmatched affordability, and thriving post-study career opportunities in the world's fastest-evolving tech hub.
           </p>
           
           <div className="k-elem flex flex-col sm:flex-row gap-4 mb-8 w-full">
             <div 
                className="flex-1 !bg-white dark:!bg-white/5 border !border-gray-200 dark:!border-white/10 rounded-2xl p-4 shadow-sm hover:!bg-gray-50 dark:hover:!bg-white/10 hover:shadow-md transition-all duration-500 cursor-pointer"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
             >
               <div className="flex items-center gap-3 mb-2">
                 <div className="!bg-red-50 dark:!bg-[#e50924]/20 p-2 rounded-lg !text-[#e50924]"><GraduationCap size={18}/></div>
                 <div className="!text-[#0b2f6b] dark:!text-white font-black text-lg transition-colors duration-500">D-2 Visa</div>
               </div>
               <div className="text-xs font-bold !text-gray-800 dark:!text-gray-200 mb-1 transition-colors duration-500">Degree Program</div>
               <div className="!text-gray-500 dark:!text-gray-400 text-[10px] leading-relaxed transition-colors duration-500">Direct entry into English-taught Bachelors, Masters, or PhD.</div>
             </div>

             <div 
                className="flex-1 !bg-white dark:!bg-white/5 border !border-gray-200 dark:!border-white/10 rounded-2xl p-4 shadow-sm hover:!bg-gray-50 dark:hover:!bg-white/10 hover:shadow-md transition-all duration-500 cursor-pointer"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
             >
               <div className="flex items-center gap-3 mb-2">
                 <div className="!bg-blue-50 dark:!bg-blue-500/20 p-2 rounded-lg !text-blue-600 dark:!text-blue-400"><BookOpen size={18}/></div>
                 <div className="!text-[#0b2f6b] dark:!text-white font-black text-lg transition-colors duration-500">D-4 Visa</div>
               </div>
               <div className="text-xs font-bold !text-gray-800 dark:!text-gray-200 mb-1 transition-colors duration-500">Language Training</div>
               <div className="!text-gray-500 dark:!text-gray-400 text-[10px] leading-relaxed transition-colors duration-500">1-year intense Korean immersion. Unlock TOPIK waivers.</div>
             </div>
           </div>
           
           <div className="k-elem">
             <Link to="/destinations/south-korea" className="group inline-flex items-center gap-3 !bg-[#0b2f6b] dark:!bg-[#e50924] hover:!bg-[#07204b] dark:hover:!bg-[#c7051e] !text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
               <span className="!text-white">Explore Pathways</span>
               <div className="!bg-white/20 p-1.5 rounded-full !text-white transition-colors"><ArrowRight size={16}/></div>
             </Link>
           </div>
        </div>

        {/* Images Area (Interactive Parallax - Right Side) */}
        <div className="lg:col-span-7 relative h-[400px] sm:h-[550px] lg:h-[600px] w-full order-1 lg:order-2">
           <div ref={img1} className="k-elem absolute top-0 right-0 w-[85%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl !bg-gray-100 dark:!bg-black transition-colors duration-500 z-10 !border-none dark:border dark:!border-white/5">
             <img src="/images/seoul_nightscape.jpg" className="w-full h-full object-cover" alt="Seoul Nightscape" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
             <div className="absolute bottom-6 right-6 font-bold tracking-widest uppercase !text-white/90 text-xs flex items-center gap-2"><MapPin size={14}/> Seoul, KR</div>
           </div>
           
           <div ref={img2} className="k-elem absolute bottom-0 left-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden border-4 !border-white dark:!border-[#050b14] shadow-xl z-20 !bg-gray-100 dark:!bg-black transition-colors duration-500">
             <img src="/images/korean_university.jpg" className="w-full h-full object-cover" alt="Korean University" />
             <div className="absolute bottom-4 left-4 !bg-white/90 dark:!bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold !text-[#0b2f6b] dark:!text-white border !border-gray-100 dark:!border-white/10 transition-colors duration-500 flex items-center gap-1.5">SKY Universities</div>
           </div>
           
           <div className="k-float absolute top-[15%] left-[0%] z-30 !bg-white/95 dark:!bg-white/10 backdrop-blur-xl border !border-gray-100 dark:!border-white/10 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 transition-colors duration-500">
             <div className="w-10 h-10 sm:w-12 sm:h-12 !bg-[#e50924] rounded-full flex items-center justify-center !text-white shadow-md"><Globe2 size={20}/></div>
             <div>
               <div className="text-[9px] sm:text-[10px] !text-gray-500 dark:!text-gray-400 font-bold uppercase tracking-widest transition-colors duration-500">Intake</div>
               <div className="!text-[#0b2f6b] dark:!text-white font-bold text-xs sm:text-sm transition-colors duration-500">Spring & Fall</div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [notice, setNotice] = useState('');
  const containerRef = useRef();

  const heroSlides = [
    {
      src: '/images/koreahero.png',
      alt: 'Study in South Korea - Traditional architecture and modern Seoul skyline',
      eyebrow: 'YOUR FUTURE IN SOUTH KOREA',
      title: 'From dream<br />to <span class="text-[#e50924] italic font-serif">South Korea.</span>',
      desc: 'Explore cutting-edge degree programmes and comprehensive Korean-language pathways. Immerse yourself in a dynamic culture while advancing your global education.'
    },
    {
      src: '/images/ukhero.png',
      alt: 'Study in the United Kingdom - Historic university campus in Oxford',
      eyebrow: 'YOUR FUTURE IN THE UK',
      title: 'From dream<br />to <span class="text-[#e50924] italic font-serif">the UK.</span>',
      desc: 'Experience world-class education with historic prestige. We provide complete guidance on course suitability, CAS requirements, and the Student visa route.'
    },
    {
      src: '/images/newzeahero.png',
      alt: 'Study in New Zealand - Majestic mountains and crystal clear lakes',
      eyebrow: 'YOUR FUTURE IN NEW ZEALAND',
      title: 'From dream<br />to <span class="text-[#e50924] italic font-serif">New Zealand.</span>',
      desc: 'Discover a world-class education surrounded by breathtaking nature. Get expert support for approved providers, tuition, and student visa preparation.'
    },
    {
      src: '/images/hero_eu.jpg',
      alt: 'Study in Europe - Classic European architecture in a bustling city square',
      eyebrow: 'YOUR FUTURE IN EUROPE',
      title: 'From dream<br />to <span class="text-[#e50924] italic font-serif">Europe.</span>',
      desc: 'Access diverse cultures and top-tier universities across the continent. We help you navigate admission, tuition, and residence rules across European countries.'
    },
    {
      src: '/images/japanhero.png',
      alt: 'Study in Japan - Mount Fuji with beautiful pink cherry blossoms',
      eyebrow: 'YOUR FUTURE IN JAPAN',
      title: 'From dream<br />to <span class="text-[#e50924] italic font-serif">Japan.</span>',
      desc: 'Blend high-tech innovation with rich traditions. Understand school-specific admissions, Japanese-language expectations, and EJU requirements with our experts.'
    }
  ];
  const [heroIndex, setHeroIndex] = useState(0);

  const nextSlide = () => setHeroIndex(prev => (prev + 1) % heroSlides.length);
  const prevSlide = () => setHeroIndex(prev => (prev - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [heroIndex]);

  usePageEntrance(containerRef);
  useHeroAnimation(containerRef);
  useHomeAnimations(containerRef);
  useJourneyAnimation(containerRef);

  const destinationCopy = {
    'south-korea': 'Explore degree programmes and Korean-language pathways. Understand the difference between D-2 degree study and D-4 training routes.',
    'united-kingdom': 'Review course suitability, admission conditions, CAS requirements and the documentation connected with the Student visa route.',
    'new-zealand': 'Explore approved providers, offers of place, tuition and living-cost evidence, insurance and student visa preparation.',
    'europe': 'Compare countries individually because admission, tuition, residence and insurance rules vary across Europe.',
    'japan': 'Understand school-specific admissions, Japanese-language expectations, EJU requirements and total study costs.'
  };

  const handleEnquiry = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const data = Object.fromEntries(f.entries());
    
    setNotice('Sending your enquiry...');
    
    try {
      const response = await fetch('/backend/process_form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      if (result.status === 'success') {
        setNotice('Thank you! Your enquiry has been sent successfully. We will get back to you soon.');
        form.reset();
      } else {
        setNotice('Something went wrong. Please try calling us at +977 9768567647.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setNotice('Could not send form. Please call us at +977 9768567647.');
    }
  };

  return (
    <div ref={containerRef}>
      {/* SECTION 1: Cinematic Slider Hero */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Images & Text Content Layered for Smooth Crossfading */}
        {heroSlides.map((slide, idx) => {
          const isActive = idx === heroIndex;
          return (
            <div 
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            >
              {/* Background */}
              <div className="absolute inset-0">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover transform scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2f6b]/90 via-[#0b2f6b]/50 to-transparent"></div>
              </div>

              {/* Slide Content */}
              <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-2xl mt-16 lg:mt-0">
                  <div className="eyebrow w-fit !inline-flex items-center px-4 py-1.5 !bg-white/10 backdrop-blur-md border border-white/20 !text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] before:!hidden">
                     {slide.eyebrow}
                  </div>
                  <h1 
                    className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <p className="text-xl text-blue-50/90 leading-relaxed mb-10 max-w-xl font-light">
                    {slide.desc}
                  </p>
                  
                  <div className="flex gap-4 flex-wrap mb-12">
                    <Link to="/contact" className="button red inline-flex items-center gap-4 !rounded-full !py-2 !pl-6 !pr-2 group">
                      <span className="font-bold text-sm tracking-wider uppercase">Book a counselling conversation</span>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                        <ArrowUpRight size={18} />
                      </div>
                    </Link>
                    <a href="https://wa.me/9779768567647" target="_blank" rel="noopener noreferrer" className="button inline-flex items-center gap-4 !rounded-full !py-2 !pl-6 !pr-2 shadow-lg shadow-[#128c7e]/30 group !bg-[#128c7e] hover:!bg-[#075e54] !text-white border-none transition-colors">
                      <span className="font-bold text-sm tracking-wider uppercase">Chat on WhatsApp</span>
                      <div className="w-10 h-10 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <MessageCircle size={18} />
                      </div>
                    </a>
                  </div>
                  
                  <div className="hero-meta flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm text-blue-100/70 border-t border-white/20 pt-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#e50924]" />
                      <span className="font-medium tracking-wide">Bagbazar, Kathmandu, Nepal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe2 size={16} className="text-[#e50924]" />
                      <span className="font-medium tracking-wide">Guidance for your global education</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Next / Prev Controls */}
        <div className="absolute bottom-12 right-6 lg:right-12 z-40 flex gap-4">
           <button onClick={prevSlide} aria-label="Previous Slide" className="!w-12 !h-12 !min-w-[48px] !min-h-[48px] !rounded-full !border !border-white/30 !p-0 !bg-white/10 !flex !items-center !justify-center !text-white hover:!bg-white hover:!text-[#0b2f6b] transition-colors backdrop-blur-md cursor-pointer group shadow-lg">
             <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={20} />
           </button>
           <button onClick={nextSlide} aria-label="Next Slide" className="!w-12 !h-12 !min-w-[48px] !min-h-[48px] !rounded-full !border !border-white/30 !p-0 !bg-white/10 !flex !items-center !justify-center !text-white hover:!bg-white hover:!text-[#0b2f6b] transition-colors backdrop-blur-md cursor-pointer group shadow-lg">
             <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
           </button>
        </div>

        {/* Decorative Wave */}
        <svg className="absolute bottom-0 left-0 w-full z-20 text-white pointer-events-none" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
           <path d="M0 64V40C360 80 850 -35 1440 22V64Z" fill="currentColor" />
        </svg>
      </section>

      <div className="destination-strip">
        <div className="wrap">
          <span>EXPLORE YOUR POSSIBILITIES</span>
          <div>
            {countries.map(c => <Link key={c.code} to={`/destinations/${c.id}`} onClick={() => window.scrollTo(0, 0)}>{c.name}</Link>)}
          </div>
        </div>
      </div>

      {/* SECTION 2: ASTRA Introduction & Trust */}
      {/* SECTION 2: ASTRA Introduction & Trust */}
      <section id="home-intro" className="py-10 lg:py-16 px-6 lg:px-12 max-w-[1440px] mx-auto scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Images & Visuals) */}
          <div className="lg:col-span-6 relative pb-20 pr-10 lg:pr-20">
             {/* Decorative light pink shape */}
             <div className="absolute -left-10 top-10 w-64 h-64 bg-[#ffe1e4] rounded-full blur-3xl opacity-60 -z-10"></div>
             
             {/* Background Map Watermark */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c3/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain opacity-[0.03] pointer-events-none -z-10 mix-blend-multiply"></div>

             {/* Image 1 (Top Left / Behind) */}
             <div className="w-3/4 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img src="/images/services_hero.jpg" alt="Student Counselling" className="w-full h-full object-cover" />
                {/* Dot pattern overlay */}
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-[radial-gradient(circle,_#ffffff_2.5px,_transparent_2.5px)] bg-[size:12px_12px] opacity-80"></div>
             </div>

             {/* Image 2 (Bottom Right / Front) */}
             <div className="absolute -bottom-10 -right-0 lg:right-10 w-2/3 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[10px] border-white z-10 bg-gray-100">
                <img src="/campus.jpg" alt="Campus and Global Education" className="w-full h-full object-cover" />
             </div>
             
             {/* Airplane Silhouette Icon (Bottom Left) */}
             <div className="absolute bottom-0 -left-6 z-20 w-32 h-32 text-gray-300 rotate-12 opacity-60">
                 <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
             </div>
             
             {/* Passports/Tickets Icon (Top Right) */}
             <div className="absolute top-10 -right-2 lg:right-4 z-20 rotate-12 bg-white rounded-2xl shadow-xl p-4 flex gap-2 transform -translate-y-1/2">
                 <div className="w-12 h-16 bg-[#0b2f6b] rounded-lg border-2 border-white shadow-md flex items-center justify-center transform -rotate-12">
                     <Globe2 className="w-6 h-6 text-white opacity-50" />
                 </div>
                 <div className="w-12 h-16 bg-[#e50924] rounded-lg border-2 border-white shadow-md flex items-center justify-center transform rotate-6 -ml-4">
                     <Globe2 className="w-6 h-6 text-white opacity-50" />
                 </div>
             </div>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-6 lg:pl-10 relative z-10 mt-10 lg:mt-0">
             
             {/* Pill Label */}
             <div className="inline-block px-5 py-2 bg-[#eff4fb] text-[#0b2f6b] rounded-full text-sm font-bold tracking-wide mb-6">
                About Our Consultancy
             </div>
             
             {/* Heading */}
             <h2 className="text-4xl lg:text-[44px] font-extrabold text-[#0b2f6b] leading-[1.1] uppercase tracking-tight mb-8">
                YOUR AMBITION DESERVES A <span className="text-[#e50924]">CONSIDERED PLAN</span>
             </h2>
             
             {/* Vertical Line Paragraph */}
             <div className="border-l-2 border-gray-300 pl-6 mb-8">
                <p className="text-gray-500 text-lg leading-relaxed">
                   ASTRA helps you ask the right questions before choosing a course, institution or destination. We explain the process clearly and guide you towards the official information.
                </p>
             </div>
             
             <hr className="border-gray-200 mb-8" />
             
             {/* Mini Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#eff4fb] flex items-center justify-center text-[#0b2f6b] shrink-0 mt-1">
                      <Globe2 size={18} />
                   </div>
                   <div>
                      <h4 className="font-bold text-[#0b2f6b] text-lg mb-1">Clear Direction<span className="text-[#e50924]">-</span></h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Helping you find the right course fit and university.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#eff4fb] flex items-center justify-center text-[#0b2f6b] shrink-0 mt-1">
                      <FileCheck size={18} />
                   </div>
                   <div>
                      <h4 className="font-bold text-[#0b2f6b] text-lg mb-1">Document Guidance<span className="text-[#e50924]">-</span></h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Accurate preparation according to official rules.</p>
                   </div>
                </div>
             </div>
             
             {/* Bullet Points */}
             <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3 text-gray-600">
                   <div className="text-[#0b2f6b] font-black tracking-tighter text-lg leading-none">»</div>
                   <span className="text-sm font-medium">Based in Bagbazar, Kathmandu</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                   <div className="text-[#0b2f6b] font-black tracking-tighter text-lg leading-none">»</div>
                   <span className="text-sm font-medium">Assessing academic background and subject interests</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                   <div className="text-[#0b2f6b] font-black tracking-tighter text-lg leading-none">»</div>
                   <span className="text-sm font-medium">Language readiness and budget planning</span>
                </div>
             </div>
             
             {/* Red Dot Divider */}
             <div className="relative border-b border-gray-200 mb-10 w-[95%]">
                <span className="absolute -right-2 -top-2 w-4 h-4 bg-[#e50924] rounded-full shadow-[0_0_0_5px_rgba(229,9,36,0.15)]"></span>
             </div>
             
             {/* Pill Button */}
             <Link to="/contact" className="inline-flex items-center gap-4 border border-gray-200 rounded-full pl-6 pr-2 py-2 hover:border-[#0b2f6b] transition-colors group">
                <span className="font-bold text-[#0b2f6b] text-sm tracking-wider">GET STARTED</span>
                <div className="w-10 h-10 bg-[#e50924] rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                   <ArrowRight size={18} />
                </div>
             </Link>
          </div>

        </div>
      </section>

      {/* SECTION 2.5: Spotlight Destination - South Korea (GSAP Interactive Variant) */}
      <KoreaShowcase />

      {/* SECTION 3: Study Destinations Interactive Globe */}
      <section id="home-destinations" className="py-10 lg:py-16 px-6 lg:px-12 bg-[#0b2f6b] relative overflow-hidden scroll-reveal">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#e50924]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#e50924]"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#d1dced] uppercase">WHERE WILL YOUR AMBITION TAKE YOU?</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                Different destinations.<br />One exciting future.
              </h2>
            </div>
            <div className="group inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold backdrop-blur-md cursor-default">
              Interact with the Map
            </div>
          </div>

          {/* Globe Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
            
            {/* Left Column: Location Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 destination-list relative z-20 pointer-events-auto">
               {countries.map(c => (
                  <div key={c.id} 
                       id={`dest-card-${c.id}`}
                       onClick={() => setSelectedDestination(selectedDestination === c.id ? '' : c.id)}
                       className={`group p-5 md:p-6 rounded-2xl border transition-all flex flex-col gap-4 cursor-pointer backdrop-blur-sm ${selectedDestination === c.id ? 'bg-white/10 border-white/30 shadow-lg scale-[1.02]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
                     <div className="flex items-center justify-between">
                        <div>
                           <h3 className={`text-xl md:text-2xl font-bold transition-colors ${selectedDestination === c.id ? 'text-[#ff4d4d]' : 'text-white group-hover:text-[#ff4d4d]'}`}>{c.name}</h3>
                           <p className="text-sm text-blue-200/70 mt-1 line-clamp-1">{destinationCopy[c.id]}</p>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedDestination === c.id ? 'bg-[#e50924]' : 'bg-white/10 group-hover:bg-[#e50924]'}`}>
                           <ArrowRight size={18} className={`text-white transition-transform ${selectedDestination === c.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                        </div>
                     </div>
                     
                     {/* Expanded Details */}
                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${selectedDestination === c.id ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <Link to={`/destinations/${c.id}`} onClick={(e) => { e.stopPropagation(); window.scrollTo(0, 0); }} className="inline-flex items-center justify-center gap-3 bg-[#e50924] text-white px-6 py-3 rounded-xl font-bold w-full hover:bg-[#c7051e] transition-colors shadow-md">
                           Explore Requirements <ArrowRight size={16} />
                        </Link>
                     </div>
                  </div>
               ))}
               <div className="mt-4 inline-block px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center">
                  <p className="text-xs text-white/60">
                    Europe is a region with different national systems. Confirm the individual country before applying.
                  </p>
               </div>
            </div>

            {/* Right Column: 3D Interactive Globe */}
            <div className="lg:col-span-7 relative h-[500px] md:h-[700px] flex items-center justify-center globe-container z-10 pointer-events-auto">
               <GlobeComponent 
                  selectedDestination={selectedDestination} 
                  onSelectDestination={setSelectedDestination} 
               />
               <div className="absolute bottom-4 text-center text-white/40 text-[10px] tracking-widest font-bold uppercase animate-pulse pointer-events-none">
                  Drag & Zoom to explore
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Services Overview */}
      <section id="home-services" className="py-8 lg:py-10 px-6 lg:px-12 max-w-7xl mx-auto scroll-reveal relative z-10">
        {/* Subtle Watermark Map */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c3/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain opacity-[0.03] pointer-events-none -z-10 mix-blend-multiply"></div>
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#e50924]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#526982] uppercase">OUR EXPERTISE</span>
            <span className="w-8 h-0.5 bg-[#e50924]"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#0b2f6b] tracking-tight">
            Guidance for every important decision.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Study Abroad */}
          <div className="bg-white border border-gray-200 rounded-xl p-10 hover:border-[#0b2f6b]/30 transition-colors flex flex-col">
            <div className="w-16 h-16 bg-[#eff4fb] rounded-xl flex items-center justify-center text-[#0b2f6b] mb-8">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#0b2f6b] mb-6">Study Abroad</h3>
            <ul className="space-y-4 mb-10 flex-1">
              {['Academic profile discussion', 'Course and subject exploration', 'Destination comparison', 'Institution research', 'Entry-criteria review', 'Application planning', 'Offer-condition discussion', 'Pre-departure preparation'].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-[#e50924] mt-0.5">▪</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/services/study-abroad" className="inline-flex items-center gap-2 font-semibold text-[#0b2f6b] hover:text-[#e50924]">
              Explore Study Abroad <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Visa Guidance */}
          <div className="bg-white border border-gray-200 rounded-xl p-10 hover:border-[#0b2f6b]/30 transition-colors flex flex-col">
            <div className="w-16 h-16 bg-[#eff4fb] rounded-xl flex items-center justify-center text-[#0b2f6b] mb-8">
              <FileCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#0b2f6b] mb-6">Visa Guidance</h3>
            <ul className="space-y-4 mb-10 flex-1">
              {['Identifying the relevant visa route', 'Reviewing official document requirements', 'Financial-evidence preparation guidance', 'Application timeline planning', 'Interview preparation where applicable', 'Nepal-specific NOC guidance', 'Checking official immigration sources'].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-[#e50924] mt-0.5">▪</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/services/visa-guidance" className="inline-flex items-center gap-2 font-semibold text-[#0b2f6b] hover:text-[#e50924]">
              Explore Visa Guidance <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Language Preparation */}
          <div className="bg-white border border-gray-200 rounded-xl p-10 hover:border-[#0b2f6b]/30 transition-colors flex flex-col">
            <div className="w-16 h-16 bg-[#eff4fb] rounded-xl flex items-center justify-center text-[#0b2f6b] mb-8">
              <BookOpen size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#0b2f6b] mb-6">Language Preparation</h3>
            <ul className="space-y-4 mb-10 flex-1">
              {['IELTS Academic overview', 'PTE Academic overview', 'Korean-language preparation', 'Japanese-language preparation', 'Test-format guidance', 'Planning test dates around applications', 'Confirming accepted tests and scores with institutions'].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-[#e50924] mt-0.5">▪</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/services/language-preparation" className="inline-flex items-center gap-2 font-semibold text-[#0b2f6b] hover:text-[#e50924]">
              Explore Language Prep <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Student Journey & Process */}
      <section id="home-process" className="relative py-10 bg-[#0b2f6b] text-white scroll-reveal">
        <CurvedDividerTop color="text-white" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 mt-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-[#e50924]"></span>
              <span className="text-[11px] font-bold tracking-widest text-[#d1dced] uppercase">PROCESS PREVIEW</span>
              <span className="w-8 h-0.5 bg-[#e50924]"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Your journey, explained clearly.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { title: 'Start with counselling', desc: 'You provide a brief overview of your background. We discuss how we can help and schedule a session.' },
              { title: 'Review your academic profile', desc: 'You share your history and goals. We discuss viable options and identify any missing information.' },
              { title: 'Explore courses and destinations', desc: 'We compare courses and entry criteria. You decide on your preferred destination and institution.' },
              { title: 'Check institution requirements', desc: 'We review documents against rules. You prepare necessary language scores and transcripts.' },
              { title: 'Prepare applications and documents', desc: 'You complete forms truthfully. We guide you on document formats and submission deadlines.' },
              { title: 'Plan visa, NOC and departure requirements', desc: 'You gather evidence. We provide guidance on consistency. You arrange travel and insurance.' }
            ].map((step, i) => (
              <div key={i} className="relative pl-16 step">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-[#e50924] flex items-center justify-center font-bold text-[#e50924] bg-[#0b2f6b]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-[#a4bce1] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/process" className="inline-flex items-center gap-3 bg-[#e50924] hover:bg-[#c7051e] text-white px-8 py-4 font-semibold rounded-md transition-all mb-10">
              See the complete application process <ArrowUpRight size={18} />
            </Link>
            
            <p className="text-xs text-[#708db8] max-w-3xl mx-auto border-t border-white/10 pt-8">
              Admission decisions are made by institutions. Visa and immigration decisions are made by the relevant authorities. Requirements and outcomes depend on individual circumstances.
            </p>
          </div>
        </div>
        <CurvedDividerBottom />
      </section>

      {/* SECTION 6: Useful Resources */}
      <section id="home-resources" className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto scroll-reveal">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#e50924]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#526982] uppercase">OFFICIAL SOURCES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#0b2f6b] tracking-tight mb-4">
            Information for better decisions.
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg">
            Rules, fees, deadlines and eligibility requirements can change. Always confirm current information through the linked official source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'NEPAL', title: 'Nepal Government NOC portal', desc: 'Check current instructions and document requirements for the No Objection Certificate.', link: 'https://noc.moest.gov.np/' },
            { label: 'UK', title: 'GOV.UK Student visa and CAS guidance', desc: 'Official requirements for course acceptance and UK visa applications.', link: 'https://www.gov.uk/student-visa' },
            { label: 'NEW ZEALAND', title: 'Immigration NZ Fee Paying Student Visa', desc: 'Rules for full-time study on an approved course in New Zealand.', link: 'https://www.immigration.govt.nz/visas/fee-paying-student-visa/' },
            { label: 'SOUTH KOREA', title: 'Study in Korea visa and stay info', desc: 'Official portal for D-2 and D-4 visa categories and required documents.', link: 'https://www.studyinkorea.go.kr/en/plan/visaAndStay.do' },
            { label: 'JAPAN', title: 'Study in Japan EJU information', desc: 'Official examination guidelines for Japanese university admissions.', link: 'https://www.studyinjapan.go.jp/en/planning/examination/' },
            { label: 'EUROPE', title: 'European Commission Study in Europe', desc: 'Planning resources for studying across different European countries.', link: 'https://education.ec.europa.eu/study-in-europe/planning-your-studies' },
            { label: 'LANGUAGE', title: 'IELTS official test format', desc: 'Understand the Academic test structure for listening, reading, writing, and speaking.', link: 'https://ielts.org/take-a-test/test-types/ielts-academic-test' },
            { label: 'LANGUAGE', title: 'Pearson PTE Academic information', desc: 'Computer-based academic English test format and preparation details.', link: 'https://www.pearsonpte.com/pte-academic' },
            { label: 'FUNDING', title: 'Erasmus Mundus scholarship info', desc: 'Check eligibility and coverage for Joint Masters programs in Europe.', link: 'https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters' }
          ].map((res, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow bg-gray-50/50 flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-[#e50924] mb-4 block">{res.label}</span>
              <h3 className="text-lg font-bold text-[#0b2f6b] mb-3">{res.title}</h3>
              <p className="text-sm text-gray-600 mb-8 flex-1">{res.desc}</p>
              <a href={res.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b2f6b] hover:text-[#e50924]">
                Read official guidance <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: Animated Global Network Services */}
      <section id="home-network" className="relative py-12 bg-[#0b2f6b] overflow-hidden scroll-reveal">
         <style>{`
            @keyframes orbit-spin { 
               from { transform: rotate(0deg); } 
               to { transform: rotate(360deg); } 
            }
            @keyframes orbit-counter-spin { 
               from { transform: rotate(360deg); } 
               to { transform: rotate(0deg); } 
            }
            .animate-orbit { animation: orbit-spin linear infinite; }
            .animate-counter-orbit { animation: orbit-counter-spin linear infinite; }
         `}</style>

         {/* Dark overlay for depth */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#041a42_150%)]"></div>
         
         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
               
               {/* Left Content */}
               <div className="lg:col-span-6 lg:pr-10">
                  <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/20">
                     Global Reach
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 uppercase tracking-tight">
                     VISA & STUDY SERVICES <br/>TO YOUR DREAM DESTINATION
                  </h2>
                  <p className="text-blue-100/80 text-lg mb-10 leading-relaxed max-w-xl">
                     We provide end-to-end guidance for students who wish to study abroad. Our expert consultants ensure a smooth transition from application to visa approval.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-white/10 pt-8">
                     {[
                        'Study Abroad Counselling',
                        'Visa Guidance & Support',
                        'Language Test Preparation',
                        'University & Course Selection',
                        'Application & Document Review',
                        'Pre-Departure Briefings'
                     ].map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                           <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#0b2f6b] group-hover:bg-[#e50924] group-hover:text-white transition-colors">
                              <ArrowUpRight size={14} />
                           </div>
                           <span className="text-white font-semibold text-sm group-hover:text-blue-200 transition-colors">{service}</span>
                        </div>
                     ))}
                  </div>
                  
                  <Link to="/contact" className="inline-flex items-center gap-4 border border-white/20 rounded-full pl-6 pr-2 py-2 hover:border-white transition-colors group">
                     <span className="font-bold text-white text-sm tracking-wider">GET STARTED</span>
                     <div className="w-10 h-10 bg-[#e50924] rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform shadow-lg shadow-red-500/20">
                        <ArrowRight size={18} />
                     </div>
                  </Link>
               </div>

               {/* Right Orbit Animations */}
               <div className="lg:col-span-6 relative flex justify-center items-center h-[500px]">
                  <div className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]">
                     
                     {/* Center Pill */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full z-10 whitespace-nowrap backdrop-blur-sm">
                        <span className="text-white font-medium text-[10px] sm:text-xs tracking-wide">ASTRA Network</span>
                     </div>

                     {/* Outer Ring */}
                     <div className="absolute inset-0 rounded-full border border-white/20">
                        <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '40s' }}>
                           {/* UK */}
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden animate-counter-orbit shadow-2xl bg-white" style={{ animationDuration: '40s' }}>
                              <img src="https://flagcdn.com/w320/gb.png" className="w-full h-full object-cover" alt="UK" />
                           </div>
                           {/* NZ */}
                           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden animate-counter-orbit shadow-2xl bg-white" style={{ animationDuration: '40s' }}>
                              <img src="https://flagcdn.com/w320/nz.png" className="w-full h-full object-cover" alt="New Zealand" />
                           </div>
                           {/* Japan */}
                           <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden animate-counter-orbit shadow-2xl bg-white" style={{ animationDuration: '40s' }}>
                              <img src="https://flagcdn.com/w320/jp.png" className="w-full h-full object-cover" alt="Japan" />
                           </div>
                           {/* Germany */}
                           <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden animate-counter-orbit shadow-2xl bg-white" style={{ animationDuration: '40s' }}>
                              <img src="https://flagcdn.com/w320/de.png" className="w-full h-full object-cover" alt="Germany" />
                           </div>
                        </div>
                     </div>

                     {/* Inner Ring */}
                     <div className="absolute inset-20 sm:inset-28 rounded-full border border-white/20">
                        <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                           {/* US (Large) */}
                           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden animate-counter-orbit shadow-2xl bg-white" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                              <img src="https://flagcdn.com/w320/us.png" className="w-full h-full object-cover" alt="USA" />
                           </div>
                           {/* South Korea */}
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden animate-counter-orbit shadow-2xl bg-white" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                              <img src="https://flagcdn.com/w320/kr.png" className="w-full h-full object-cover" alt="South Korea" />
                           </div>
                           {/* Europe (EU Flag) */}
                           <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden animate-counter-orbit shadow-xl bg-[#03399e]" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                              <img src="https://flagcdn.com/w320/eu.png" className="w-full h-full object-cover p-2" alt="Europe" />
                           </div>
                           {/* Canada */}
                           <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden animate-counter-orbit shadow-2xl bg-white" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                              <img src="https://flagcdn.com/w320/ca.png" className="w-full h-full object-cover" alt="Canada" />
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* SECTION 8: Premium Contact CTA & Enquiry */}
      <section id="home-contact" className="relative py-10 bg-[#f4f7fb] scroll-reveal">
        <CurvedDividerTop color="text-[#f4f7fb]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 lg:pr-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-0.5 bg-[#e50924]"></span>
                <span className="text-[11px] font-bold tracking-widest text-[#526982] uppercase">GET IN TOUCH</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#0b2f6b] tracking-tight mb-8">
                Your next chapter starts with a conversation.
              </h2>
              <p className="text-xl text-[#64748b] leading-relaxed mb-12">
                Tell us your education level, preferred destination and main question. ASTRA will help you understand the next information to explore.
              </p>
              
              <div className="flex flex-col gap-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0b2f6b] shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold tracking-wider text-gray-500 mb-1">CALL US</span>
                      <a href="tel:+9779768567647" className="text-[#0b2f6b] font-semibold text-lg">+977 9768567647</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0b2f6b] shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold tracking-wider text-gray-500 mb-1">EMAIL US</span>
                      <a href={`mailto:${email}`} className="text-[#0b2f6b] font-semibold">{email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0b2f6b] shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold tracking-wider text-gray-500 mb-1">VISIT OUR OFFICE</span>
                      <span className="text-[#0b2f6b] font-semibold">Bagbazar–28, Kathmandu, Nepal</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-[250px] shadow-sm border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5516089334057!2d85.3164838!3d27.7052169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193b9348ef31%3A0x9d7fb8b16ebaea8c!2sAstra%20global%20education%20and%20services!5e0!3m2!1sen!2snp!4v1714578193859!5m2!1sen!2snp" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ASTRA Office Location"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 lg:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
              <h3 className="text-xl lg:text-2xl font-bold text-[#0b2f6b] mb-2">Book a Session</h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the form below to book a session. Do not request or attach sensitive documents like passports.
              </p>

              <form onSubmit={handleEnquiry} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Full name <span className="text-[#e50924]">*</span></label>
                    <input required name="name" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none" placeholder="Your full name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Phone <span className="text-[#e50924]">*</span></label>
                    <input required name="phone" type="tel" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none" placeholder="Contact number" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Email address <span className="text-gray-400 font-normal">(optional)</span></label>
                  <input name="email" type="email" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none" placeholder="you@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Destination <span className="text-[#e50924]">*</span></label>
                    <select name="destination" required value={selectedDestination} onChange={e => setSelectedDestination(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none bg-white">
                      <option value="" disabled>Select destination</option>
                      {countries.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
                      <option value="Still exploring">Still exploring</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Service <span className="text-[#e50924]">*</span></label>
                    <select name="service" required defaultValue="" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none bg-white">
                      <option value="" disabled>Select service</option>
                      <option value="Study Abroad">Study Abroad</option>
                      <option value="Visa Guidance">Visa Guidance</option>
                      <option value="Language Prep">Language Prep</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Education level <span className="text-[#e50924]">*</span></label>
                  <select name="education" required defaultValue="" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none bg-white">
                    <option value="" disabled>Select level</option>
                    <option>Secondary / SEE</option>
                    <option>Higher secondary / +2</option>
                    <option>Bachelor’s</option>
                    <option>Master’s</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Main question <span className="text-gray-400 font-normal">(optional)</span></label>
                  <textarea name="message" rows="2" className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none resize-y" placeholder="What would you like to discuss?" />
                </div>

                <div className="flex items-start gap-3 py-1">
                  <input type="checkbox" required className="mt-1 w-3.5 h-3.5 text-[#0b2f6b] rounded" />
                  <span className="text-[11px] text-gray-600 leading-relaxed">
                    I agree to be contacted by ASTRA. <Link to="/privacy" className="underline hover:text-[#0b2f6b]">Privacy notice</Link>
                  </span>
                </div>

                <button type="submit" className="w-full flex items-center justify-between bg-[#e50924] hover:bg-[#c7051e] text-white px-5 py-3 font-semibold rounded-md transition-all text-sm mt-2">
                  Book a Session <ArrowUpRight size={16} />
                </button>
                
                {notice && (
                  <div className={`text-xs p-3 rounded mt-3 ${notice.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-blue-50 text-blue-800'}`}>
                    <p>{notice}</p>
                    {notice.includes('successfully') && (
                      <p className="mt-2 font-medium">
                        Ready for the next step? <Link to="/book-counselling" className="underline font-bold text-[#0b2f6b]">Please fill out our full Book Counselling form</Link>.
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
