import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, ChevronDown, FileText, Globe2, GraduationCap, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);
  const journeySectionRef = useRef(null);
  const journeyScrollRef = useRef(null);
  
  const [activeDoc, setActiveDoc] = useState('academic');
  const [openFaq, setOpenFaq] = useState(0);

  const journeyStages = [
    {
      title: "Counseling",
      desc: "Begin your journey with an open conversation about your goals. We discuss your interests, preferred locations, budget, and language readiness. This clear foundation helps us understand your unique academic circumstances.",
      prep: "Compile your academic history, personal interests, and important initial questions.",
      support: "We provide an initial discussion to clarify your priorities effectively.",
      cta: null
    },
    {
      title: "Profile Assessment",
      desc: "Bring your past transcripts and test scores for expert review. We evaluate your academic background against international university entry requirements. This rigorous assessment helps identify realistic opportunities for your future.",
      prep: "Provide your past academic transcripts, identification documents, and test scores.",
      support: "We evaluate your eligibility against specific international university admission guidelines.",
      cta: null
    },
    {
      title: "Country/Course Selection",
      desc: "Compare the best courses, premier institutions, and top global destinations. We outline the specific pros, cons, and costs for each. This targeted research ensures you choose the perfect academic fit.",
      prep: "Consider your location preferences, subject interests, and overall financial budget.",
      support: "We provide objective comparisons and verify all official institutional information.",
      cta: "Explore Destinations",
      ctaLink: "/destinations"
    },
    {
      title: "Application/Visa",
      desc: "Gather your essential documents and submit your official university applications. We review all your paperwork to ensure absolute technical accuracy. Once admitted, we guide you through complex visa preparation processes.",
      prep: "Gather required documentation and submit your applications before strict deadlines.",
      support: "We carefully review all application files and visa preparation documentation.",
      note: "Admission and visa decisions are made by the relevant institutions and authorities.",
      cta: null
    },
    {
      title: "Pre-Departure",
      desc: "Your incredible journey continues long after you receive your visa. We help you organise practical arrangements like travel and accommodation. This thorough preparation ensures a smooth transition to campus life.",
      prep: "Confirm all travel arrangements and keep important personal documents accessible.",
      support: "We provide comprehensive guidance on preparation questions and official sources.",
      cta: "Discuss Your Next Steps",
      ctaLink: "/contact"
    }
  ];

  const docCategories = [
    { id: 'academic', label: 'Academic records', desc: 'Transcripts, degree certificates, grading scales, and evidence of previous study.', details: 'Your complete academic history is strictly required by all major institutions. Ensure all submitted transcripts are officially translated, stamped, and verified for authenticity.', icon: GraduationCap },
    { id: 'id', label: 'Identification', desc: 'Valid passport copies, national ID, and any relevant previous visas or travel history.', details: 'A valid national passport and detailed travel history form the foundation of your application. Ensure that identification documents remain valid throughout your studies.', icon: User },
    { id: 'language', label: 'Language evidence', desc: 'Official IELTS, PTE, or other accepted language test score reports.', details: 'Official test scores must meet the specific minimum threshold of your chosen program. Test reports must be recent, valid, and directly verifiable online.', icon: Globe2 },
    { id: 'supporting', label: 'Supporting documents', desc: 'Statements of purpose, CVs, and academic references depending on the chosen program.', details: 'Strong references and a clear statement of purpose outline your true academic potential. These documents provide essential context to your overall application profile.', icon: FileText }
  ];

  const faqs = [
    { q: "Where should I begin?", a: "Start with a conversation about your education, interests and preferred destination. You do not need to have everything figured out before reaching out to us." },
    { q: "What should I bring to my first consultation?", a: "Bring your academic history (transcripts if available), an idea of your budget, and any English language test scores you might already have." },
    { q: "Do requirements differ between destinations?", a: "Yes, significantly. Education systems, visa rules, financial evidence requirements, and timelines vary by country and institution. We help you navigate these specific differences." },
    { q: "What if I am still preparing my language skills?", a: "That is perfectly fine. We can discuss your study options based on your target scores and help you plan your timeline around your language preparation." },
    { q: "How long can the application process take?", a: "Timelines vary depending on the country, institution, and time of year. It can take anywhere from a few weeks to several months. We recommend starting the process well in advance of your intended intake." },
    { q: "Can admission or a visa be guaranteed?", a: "No. Admission and visa decisions are made exclusively by the relevant institutions and government immigration authorities. We provide guidance to ensure your application is accurate and meets published requirements, but we cannot guarantee outcomes." }
  ];

  useGSAP(() => {
    // 1. Hero Animations
    const heroTl = gsap.timeline();
    heroTl.from(".hero-title-line span", {
      yPercent: 120,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out"
    })
    .from(".hero-content", {
      autoAlpha: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(".hero-image-wrap", {
      autoAlpha: 0,
      x: 50,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .from(".hero-paper-panel", {
      autoAlpha: 0,
      y: 20,
      rotation: -5,
      duration: 0.8,
      ease: "back.out(1.5)"
    }, "-=1.5");

    // 2. Horizontal Journey Animation
    if (journeyScrollRef.current && journeySectionRef.current) {
      gsap.to(journeyScrollRef.current, {
        x: () => -(journeyScrollRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: journeySectionRef.current,
          start: "center center",
          end: () => `+=${journeyScrollRef.current.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }

    // 3. Guidance Columns Animation
    gsap.from(".guidance-col", {
      scrollTrigger: {
        trigger: ".guidance-section",
        start: "top 70%"
      },
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
    
    gsap.fromTo(".guidance-connector", 
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".guidance-section",
          start: "top 60%"
        }
      }
    );

    // 4. Closing Line Animation
    gsap.fromTo(".closing-route-line", 
      { strokeDasharray: 500, strokeDashoffset: 500 },
      { 
        strokeDashoffset: 0, 
        duration: 1.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".closing-section",
          start: "top 70%"
        }
      }
    );

    setTimeout(() => ScrollTrigger.refresh(), 500);

  }, { scope: containerRef });

  useEffect(() => {
    gsap.fromTo(".doc-visual-layer", 
      { y: 20, opacity: 0, rotation: 3, scale: 0.98 },
      { y: 0, opacity: 1, rotation: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)", overwrite: "auto" }
    );
  }, [activeDoc]);

  const scrollToJourney = (e) => {
    e.preventDefault();
    if (journeySectionRef.current) {
      window.scrollTo({ top: journeySectionRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="bg-white text-[#142a47] min-h-screen overflow-x-hidden process-page">
      
      {/* 1. OPENING SCENE (Clean 2-Column Layout) */}
      <section className="relative w-full min-h-[85svh] lg:h-[95svh] flex flex-col lg:flex-row bg-[#f4f7fb] process-hero-bg overflow-hidden pt-24 lg:pt-0">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 lg:px-16 xl:px-24 z-20">
          <div className="w-full max-w-2xl pt-10 pb-16 lg:py-32">
            <div className="hero-content">
              <span className="inline-block text-xs font-bold tracking-widest text-[#e50924] uppercase mb-6 bg-white/80 process-hero-tag backdrop-blur px-5 py-2.5 rounded-full border border-gray-200">
                Application Process
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-[76px] font-extrabold text-[#0b2f6b] leading-[1.05] tracking-tight mb-8">
              <div className="overflow-hidden hero-title-line pb-2"><span className="inline-block">Your next chapter,</span></div>
              <div className="overflow-hidden hero-title-line pb-2"><span className="inline-block text-[#e50924]">step by step.</span></div>
            </h1>
            
            <p className="hero-content text-xl lg:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed process-hero-desc">
              Understand the stages of planning your studies abroad—from discussing your goals to preparing for your next steps.
            </p>
            
            <div className="hero-content flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-[#e50924] hover:bg-[#c7051e] text-white px-8 py-4 font-semibold rounded-md transition-all">
                Book a Consultation <ArrowUpRight size={18} />
              </Link>
              <button onClick={scrollToJourney} className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#0b2f6b] border border-gray-200 px-8 py-4 font-semibold rounded-md transition-all process-btn-secondary">
                Explore the Process
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative z-10 hero-image-wrap">
           <div className="absolute inset-0 bg-[#0b2f6b]/20 z-10 mix-blend-multiply"></div>
           <img src="/images/process_hero_bg.jpg" alt="Campus and students" className="w-full h-full object-cover" />
           
           <div className="hero-paper-panel absolute bottom-12 left-12 xl:bottom-24 xl:left-24 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-30 transform -rotate-3 max-w-[220px] hidden md:block process-floating-card">
              <div className="w-10 h-10 bg-[#eef4fc] rounded-full flex items-center justify-center text-[#e50924] mb-4 process-floating-icon-bg"><MapPin size={18} /></div>
              <p className="text-base font-bold text-[#0b2f6b] leading-tight process-floating-text">Your study plan starts here</p>
           </div>
        </div>
      </section>

      {/* 2. THE SIX-STAGE JOURNEY */}
      <section ref={journeySectionRef} id="journey" className="bg-white process-journey-section py-6 lg:py-8 flex items-center overflow-hidden">
        <div className="w-full">
          <div ref={journeyScrollRef} className="flex px-6 md:px-12 lg:px-16 items-center gap-6 md:gap-16 w-max">
            
            <div className="min-w-[80vw] md:min-w-[40vw] flex-shrink-0">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#0b2f6b] leading-tight process-journey-title">
                Your <br/> Journey
              </h2>
              <p className="text-xl font-light text-gray-600 max-w-lg leading-relaxed process-journey-desc">
                From your first consultation to preparing for your next chapter. Explore the milestones of your application process.
              </p>
            </div>
            
            {journeyStages.map((stage, idx) => (
              <div key={idx} className="min-w-[85vw] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[400px] flex-shrink-0 relative group pr-8">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#0b2f6b]/20 mb-8 process-timeline-line" />
                <div className="w-4 h-4 rounded-full bg-[#e50924] absolute -top-[7.5px] left-0 group-hover:scale-150 transition-transform duration-300" />
                <div className="pt-12">
                  <span className="font-mono text-[#e50924] text-xl mb-4 block tracking-widest font-semibold uppercase">Stage 0{idx + 1}</span>
                  <h3 className="text-3xl font-bold mb-4 text-[#0b2f6b] leading-tight process-stage-title pr-4">{stage.title}</h3>
                  <p className="font-light text-gray-600 leading-relaxed text-lg mb-8 process-stage-desc max-w-[340px]">{stage.desc}</p>
                  
                  <div className="space-y-4 max-w-[320px]">
                    <div>
                      <span className="font-bold text-sm text-[#0b2f6b] block mb-1 uppercase tracking-wider process-stage-subtitle">Your Preparation</span>
                      <p className="font-light text-gray-600 text-sm leading-relaxed process-stage-subdesc">{stage.prep}</p>
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[#0b2f6b] block mb-1 uppercase tracking-wider process-stage-subtitle">ASTRA's Support</span>
                      <p className="font-light text-gray-600 text-sm leading-relaxed process-stage-subdesc">{stage.support}</p>
                    </div>
                  </div>

                  {stage.note && (
                    <div className="mt-6 flex items-start gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-100 text-yellow-800 text-xs font-medium process-note-box max-w-[320px]">
                       <span className="shrink-0 mt-0.5">ℹ️</span> {stage.note}
                    </div>
                  )}

                  {stage.cta && (
                    <Link to={stage.ctaLink} className="mt-8 font-bold text-[#e50924] hover:text-[#c7051e] flex items-center gap-2 uppercase tracking-wider text-sm w-fit transition-all hover:gap-3">
                      {stage.cta} <ArrowUpRight size={16}/>
                    </Link>
                  )}
                </div>
              </div>
            ))}
            
            <div className="min-w-[5vw] flex-shrink-0"></div>
          </div>
        </div>
      </section>

      {/* 3. PREPARATION DESK */}
      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 bg-[#f9fafb] border-y border-gray-100 scroll-reveal process-desk-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0b2f6b] mb-6 tracking-tight process-desk-title">A clearer checklist. A more organised start.</h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed process-desk-desc">
              Requirements vary by institution, programme, destination, and applicant. Review these common examples to help organise your documentation early.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
            <div className="w-full lg:w-[50%] relative flex items-center justify-center bg-white rounded-[40px] shadow-sm border border-gray-200 p-8 lg:p-12 process-visual-container">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 rounded-[40px]"></div>
              
              <div className="relative w-full max-w-[340px] aspect-[3/4] bg-gray-50 rounded-2xl shadow-2xl border border-gray-200 p-6 flex flex-col doc-visual-layer process-document">
                 <div className="w-full h-8 border-b border-gray-200 mb-6 flex items-center justify-between process-doc-header">
                    <div className="w-1/3 h-2 bg-gray-300 rounded process-skeleton-solid"></div>
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 process-doc-icon">
                      {docCategories.find(d => d.id === activeDoc)?.icon && React.createElement(docCategories.find(d => d.id === activeDoc).icon, { size: 16, className: "text-[#0b2f6b] process-icon-color" })}
                    </div>
                 </div>
                 <div className="flex-1 mt-2">
                   <h4 className="text-lg font-bold text-[#0b2f6b] mb-3 process-doc-title">Document Details</h4>
                   <p className="text-gray-600 text-sm leading-relaxed process-doc-desc">
                     {docCategories.find(c => c.id === activeDoc)?.details}
                   </p>
                   
                   <div className="mt-8 pt-6 border-t border-gray-200 process-doc-header">
                     <div className="w-full p-4 bg-white rounded-lg border border-[#e50924]/20 flex flex-col justify-center shadow-sm process-req-box">
                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1 process-req-label">Required Component</span>
                        <span className="text-sm font-bold text-[#e50924]">{docCategories.find(c => c.id === activeDoc)?.label}</span>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            <div className="w-full lg:w-[50%] flex flex-col justify-center gap-2">
              {docCategories.map(cat => {
                const isActive = activeDoc === cat.id;
                const Icon = cat.icon;
                return (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveDoc(cat.id)}
                    className={`w-full text-left p-5 rounded-[20px] transition-all duration-300 border ${isActive ? 'bg-white border-[#0b2f6b] shadow-lg scale-[1.01] process-tab-active' : 'bg-transparent border-transparent hover:bg-white/50 process-tab-inactive'}`}
                  >
                    <div className="flex items-center gap-4 mb-1">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${isActive ? 'bg-[#0b2f6b] text-white process-tab-icon-active' : 'bg-white shadow-sm border border-gray-100 text-gray-500 process-tab-icon-inactive'}`}>
                         <Icon size={18} />
                       </div>
                       <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-[#0b2f6b] process-tab-text-active' : 'text-gray-600 process-tab-text-inactive'}`}>{cat.label}</h3>
                    </div>
                    {isActive && (
                      <p className="text-gray-600 text-sm lg:text-base ml-14 mt-2 animate-in fade-in slide-in-from-top-1 duration-300 process-tab-desc-active">
                        {cat.desc}
                      </p>
                    )}
                  </button>
                )
              })}
              
              <div className="pt-6 ml-4 lg:ml-14">
                <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-[#e50924] hover:bg-[#c7051e] text-white px-8 py-4 font-semibold rounded-md transition-all w-fit shadow-md hover:shadow-lg">
                  Ask About Your Checklist <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUIDANCE AND RESPONSIBILITIES */}
      <section className="py-12 lg:py-16 bg-[#0b2f6b] text-white px-6 lg:px-12 guidance-section relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMax slice">
          <path d="M0 1000 Q 500 0 1000 1000" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">You make the decisions. We help you understand the steps.</h2>
            <div className="w-full h-[1px] bg-white/20 mt-10 relative guidance-connector">
               <div className="absolute top-1/2 left-0 w-3 h-3 bg-[#e50924] rounded-full -translate-y-1/2 -ml-1"></div>
               <div className="absolute top-1/2 right-0 w-3 h-3 bg-[#e50924] rounded-full -translate-y-1/2 -mr-1"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 px-8">
            <div className="guidance-col flex flex-col">
              <span className="text-[#93c5fd] font-bold tracking-widest text-sm mb-4 uppercase">Role 01</span>
              <h3 className="text-3xl font-bold mb-6">You</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Provide accurate information, review your choices carefully, and meet relevant requirements. Your commitment drives the process forward.
              </p>
            </div>
            <div className="guidance-col flex flex-col relative">
              <div className="hidden md:block absolute -left-12 lg:-left-16 top-0 bottom-0 w-[1px] bg-white/10"></div>
              <span className="text-[#93c5fd] font-bold tracking-widest text-sm mb-4 uppercase">Role 02</span>
              <h3 className="text-3xl font-bold mb-6">ASTRA</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Help explain the process, organise preparation, and identify next steps within our services. We provide structural support to your decisions.
              </p>
            </div>
            <div className="guidance-col flex flex-col relative">
              <div className="hidden md:block absolute -left-12 lg:-left-16 top-0 bottom-0 w-[1px] bg-white/10"></div>
              <span className="text-[#93c5fd] font-bold tracking-widest text-sm mb-4 uppercase">Role 03</span>
              <h3 className="text-3xl font-bold mb-6">Institutions & Authorities</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Set exact requirements, review applications independently, and make final admission or visa decisions based on their policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUESTIONS BEFORE YOU BEGIN */}
      <section className="py-12 lg:py-16 px-6 lg:px-12 bg-white max-w-[1400px] mx-auto scroll-reveal process-faq-section">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-32 flex flex-col gap-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b2f6b] tracking-tight leading-[1.1] process-faq-title">
                Questions before you begin.
              </h2>
              <div className="w-full max-w-[420px] aspect-square rounded-[32px] overflow-hidden shadow-2xl group border border-gray-100 hidden md:block process-faq-img-container">
                <img src="/images/faq_question.jpg" alt="FAQ Question Mark Graphic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[60%] space-y-2 mt-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-gray-200 overflow-hidden bg-transparent process-faq-item">
                  <button 
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[#0b2f6b] text-lg lg:text-xl pr-8 group-hover:text-[#e50924] transition-colors process-faq-q">{faq.q}</span>
                    <div className={`shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#e50924] border-[#e50924] rotate-180' : 'bg-transparent group-hover:border-[#e50924]'} process-faq-icon-box`}>
                      <ChevronDown className={`transition-colors ${isOpen ? 'text-white' : 'text-[#e50924]'}`} size={20} />
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="text-gray-600 text-base leading-relaxed pr-12 process-faq-a">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CLOSING SCENE */}
      <section className="relative py-16 lg:py-20 bg-[#051324] overflow-hidden closing-section">
        <div className="absolute inset-0 z-0">
          <img src="/images/process_hero_bg.jpg" alt="Campus environment" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[#0b2f6b]/80 mix-blend-multiply"></div>
        </div>

        {/* Pushed SVG to far right so it doesn't cross the text */}
        <svg className="absolute top-0 right-0 lg:right-[-5%] xl:right-0 w-[15%] h-[100%] z-10 pointer-events-none hidden md:block" viewBox="0 0 200 500" preserveAspectRatio="none">
           <path className="closing-route-line" d="M150 0 C 200 200, 100 300, 150 500" fill="none" stroke="#e50924" strokeWidth="3" strokeDasharray="500" strokeDashoffset="500" />
           <circle cx="150" cy="500" r="10" fill="#e50924" />
        </svg>

        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            You don’t need every answer to take the first step.
          </h2>
          <p className="text-2xl text-[#93c5fd] mb-16 max-w-3xl mx-auto font-light">
            Start with a conversation about your goals and the questions that matter to you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-[#e50924] hover:bg-[#c7051e] text-white px-8 py-4 font-semibold rounded-md transition-all w-full sm:w-auto">
              Book a Consultation <ArrowUpRight size={18} />
            </Link>
            <a href="tel:+9779768567647" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 font-semibold rounded-md transition-all backdrop-blur-md w-full sm:w-auto">
              Call ASTRA
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-base font-medium text-gray-300 bg-black/20 w-fit mx-auto px-8 py-4 rounded-full backdrop-blur-md">
            <span className="flex items-center gap-2"><Phone size={18} className="text-[#e50924]" /> +977 9768567647</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-2"><Mail size={18} className="text-[#e50924]" /> info@astraglobaleducationservices.com</span>
          </div>
        </div>
      </section>

    </div>
  );
}
