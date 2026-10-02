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
    // Hero Entrance Animation
    gsap.from(".hero-badge", { y: -20, opacity: 0, duration: 0.8, ease: "back.out(1.5)" });
    gsap.from(".hero-title .line", { 
      y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out", delay: 0.2 
    });
    gsap.from(".hero-desc", { y: 20, opacity: 0, duration: 1, ease: "power3.out", delay: 0.6 });
    gsap.from(".hero-btn", { scale: 0.9, opacity: 0, duration: 0.8, ease: "back.out(1.5)", delay: 0.8 });

    // Sticky Stacking Cards Animation
    const cards = gsap.utils.toArray('.stacked-card');
    
    cards.forEach((card, i) => {
      // Entrance for each card
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        }
      });

      // The scale-down effect as the next card covers it
      if (i < cards.length - 1) {
        const nextCard = cards[i + 1];
        const cardInner = card.querySelector('.card-inner');
        
        // Dynamic top offset calculation based on index
        const topOffset = 100 + (i + 1) * 20;

        gsap.to(cardInner, {
          scale: 0.92,
          opacity: 0.4,
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: `top ${topOffset + 100}px`, // Start scaling when next card is approaching
            end: `top ${topOffset}px`,         // Finish scaling when next card docks
            scrub: true,
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#040d1a] min-h-screen text-white overflow-hidden font-sans selection:bg-[#e50924] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CgkJPHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+CgkJPHBhdGggZD0iTTAuNSAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] z-0"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#0b2f6b] rounded-full blur-[150px] opacity-40 animate-pulse mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#e50924] rounded-full blur-[150px] opacity-20 mix-blend-screen pointer-events-none" style={{ animation: "pulse 8s infinite alternate" }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#e50924] animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-[#e50924] absolute"></span>
            A Thoughtful Process
          </div>
          
          <h1 className="hero-title text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter leading-[1.05] mb-8">
            <div className="line overflow-hidden"><span className="block">Big plans begin</span></div>
            <div className="line overflow-hidden">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffb3b3] to-[#e50924]">
                with small steps.
              </span>
            </div>
          </h1>
          
          <p className="hero-desc text-lg md:text-2xl text-blue-100/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            You don't need every answer today. Start with the questions that matter. We provide structured guidance at every stage of your journey.
          </p>
          
          <div className="hero-btn">
            <Link to="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#040d1a] px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Start a conversation 
              <ArrowUpRight size={22} className="group-hover:rotate-45 group-hover:text-[#e50924] transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- STICKY STACKING CARDS SECTION --- */}
      <section className="relative px-4 sm:px-6 pb-[20vh] z-20">
        <div className="max-w-4xl mx-auto cards-container relative">
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            // Calculate a top offset so they stack slightly below each other like a deck of cards
            const stickyTop = 100 + (i * 20); 

            return (
              <div 
                key={step.title}
                className="stacked-card sticky w-full mb-[15vh] lg:mb-[30vh]"
                style={{ top: `${stickyTop}px`, zIndex: i }}
              >
                {/* The card inner wrapper is what we scale down when the next card covers it */}
                <div className="card-inner w-full bg-white text-[#040d1a] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/50 flex flex-col md:flex-row gap-8 md:gap-16 items-start relative overflow-hidden origin-top transform-gpu">
                  
                  {/* Watermark Number */}
                  <div className="absolute -top-10 -right-10 text-[250px] font-black text-gray-100 leading-none select-none pointer-events-none -z-0">
                    {i + 1}
                  </div>

                  {/* Icon & Number Column */}
                  <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-6 shrink-0 w-full md:w-auto">
                    <div className="w-20 h-20 md:w-32 md:h-32 rounded-3xl bg-[#f4f7fb] flex items-center justify-center shadow-inner relative group">
                       <div className="absolute inset-0 bg-[#e50924] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                       <Icon size={48} className="text-[#0b2f6b] group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10 stroke-1" />
                    </div>
                    <div className="md:mt-4 text-left">
                       <p className="text-sm font-bold tracking-widest text-[#e50924] uppercase mb-1">Step 0{i+1}</p>
                       <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="relative z-10 flex-1 pt-2 md:pt-4">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b2f6b] mb-6 tracking-tight leading-[1.1]">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            );
          })}

        </div>

        {/* Disclaimer Note */}
        <div className="max-w-4xl mx-auto mt-[10vh]">
           <div className="flex items-start gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
             <CheckCircle2 className="text-[#e50924] shrink-0 mt-1" size={24} />
             <p className="text-blue-100/60 leading-relaxed font-light">
               <strong className="text-white font-semibold">Note:</strong> Final decisions remain the responsibility of the student, institution, or authority. ASTRA provides guidance to ensure your applications are as strong and accurate as possible.
             </p>
           </div>
        </div>

      </section>
    </div>
  );
}
