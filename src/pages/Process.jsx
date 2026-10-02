import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, UserCircle, GraduationCap, Globe2, BookOpen, FileSearch, Building2, FileCheck, Plane } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef();
  
  const steps = [
    {
      title: 'Initial counselling enquiry',
      description: 'You provide a brief overview of your background. We discuss how we can help and schedule a full counselling session.',
      icon: UserCircle
    },
    {
      title: 'Academic and goal discussion',
      description: 'You share your academic history, interests, and budget. We discuss which options are viable and identify any missing information.',
      icon: GraduationCap
    },
    {
      title: 'Destination and course research',
      description: 'We guide you through comparing specific courses, teaching languages, and entry criteria. You decide on your preferred destination and institution.',
      icon: Globe2
    },
    {
      title: 'Institution and entry-criteria review',
      description: 'We review your documents against the institution\'s requirements. You prepare necessary language test scores and academic transcripts.',
      icon: BookOpen
    },
    {
      title: 'Application preparation',
      description: 'You complete the application forms and provide truthful written statements. We guide you on document formats and submission deadlines.',
      icon: FileSearch
    },
    {
      title: 'Offer review',
      description: 'The institution makes a decision. We help you review the conditions of your offer, deposit requirements, and refund terms.',
      icon: Building2
    },
    {
      title: 'Visa and NOC planning',
      description: 'You gather financial and personal evidence based on official checklists. We provide guidance on consistency and timing. ASTRA cannot guarantee visa approval.',
      icon: FileCheck
    },
    {
      title: 'Pre-departure preparation',
      description: 'After visa approval, you arrange travel, accommodation, and insurance. We help ensure you have the right documents ready for arrival.',
      icon: Plane
    }
  ];

  useGSAP(() => {
    // Hero Animation
    gsap.from(".hero-elem", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all"
    });

    // Timeline line animation
    gsap.fromTo(".timeline-line", 
      { height: 0 },
      { 
        height: "100%", 
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      }
    );

    // Cards animation
    gsap.utils.toArray('.process-card').forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          once: true
        },
        clearProps: "all"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#f4f7fb] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 bg-[#0b2f6b] overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
           <img src="/images/process_hero_bg.jpg" alt="Application Process" className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 bg-[#0b2f6b]/70 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-[#0b2f6b]/90 via-[#0b2f6b]/50 to-[#0b2f6b]/90"></div>
        </div>

        {/* Decorative Glowing Orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#e50924] rounded-full blur-[120px] opacity-30 mix-blend-screen"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#4375b8] rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="hero-elem inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#e50924]"></span>
            A THOUGHTFUL PROCESS
          </div>
          <h1 className="hero-elem text-4xl lg:text-6xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Big plans begin with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#e50924]">small steps.</span>
          </h1>
          <p className="hero-elem text-lg lg:text-xl text-[#becee3] mb-8 max-w-2xl mx-auto leading-relaxed">
            You don't need every answer today. Start with the questions that matter. We provide structured guidance at every stage of your journey.
          </p>
          <div className="hero-elem flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#e50924] hover:bg-[#c7051e] text-white px-8 py-4 font-bold rounded-xl transition-all shadow-[0_10px_30px_-10px_rgba(229,9,36,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(229,9,36,0.6)] hover:-translate-y-1">
              Start a conversation <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
        
        {/* Custom SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f4f7fb"></path>
          </svg>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="timeline-container relative">
            {/* The central line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full hidden md:block">
               {/* Animated fill line */}
               <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-[#e50924] to-[#0b2f6b] rounded-full"></div>
            </div>
            {/* Mobile line */}
            <div className="absolute left-[30px] top-0 bottom-0 w-1 bg-gray-200 rounded-full md:hidden">
               <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-[#e50924] to-[#0b2f6b] rounded-full"></div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isEven = i % 2 === 0;
                
                return (
                  <div key={step.title} className={`process-card relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Number Bubble */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-[#f4f7fb] shadow-[0_5px_15px_-5px_rgba(0,0,0,0.15)] flex items-center justify-center text-xl font-extrabold text-[#0b2f6b] z-20 overflow-hidden group hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2f6b] to-[#14438f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">{i + 1}</span>
                    </div>

                    {/* Empty space for alternating layout on desktop */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-[70px] md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 relative group overflow-hidden">
                        
                        {/* Decorative subtle background icon */}
                        <div className={`absolute text-gray-50 opacity-50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none ${isEven ? 'md:left-4 md:-bottom-4 -bottom-4 -right-4' : '-bottom-4 -right-4'}`}>
                          <Icon size={140} strokeWidth={1} />
                        </div>

                        <div className={`flex items-center gap-4 mb-5 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className="w-12 h-12 rounded-xl bg-[#eff4fb] text-[#e50924] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#e50924] group-hover:text-white transition-colors duration-300">
                            <Icon size={24} />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-[#0b2f6b] relative z-10 tracking-tight leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed relative z-10">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                );
              })}
            </div>
            
          </div>
          
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-start gap-3 p-6 bg-white shadow-sm border border-gray-200 rounded-xl">
              <div className="text-[#e50924] mt-1 shrink-0"><CheckCircle2 size={20} /></div>
              <p className="text-sm text-gray-500 font-medium text-left leading-relaxed">
                Note: Final decisions remain the responsibility of the student, institution, or authority. ASTRA provides guidance to ensure your applications are as strong and accurate as possible.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
