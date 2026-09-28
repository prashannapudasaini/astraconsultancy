import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail, GraduationCap, FileCheck, BookOpen, ExternalLink, Globe2 } from 'lucide-react';
import { countries } from '../data';

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

export default function Home() {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [notice, setNotice] = useState('');

  const destinationCopy = {
    'south-korea': 'Explore degree programmes and Korean-language pathways. Understand the difference between D-2 degree study and D-4 training routes.',
    'united-kingdom': 'Review course suitability, admission conditions, CAS requirements and the documentation connected with the Student visa route.',
    'new-zealand': 'Explore approved providers, offers of place, tuition and living-cost evidence, insurance and student visa preparation.',
    'europe': 'Compare countries individually because admission, tuition, residence and insurance rules vary across Europe.',
    'japan': 'Understand school-specific admissions, Japanese-language expectations, EJU requirements and total study costs.'
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Hello ASTRA,\n\nI would like to enquire about counselling.\n\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email') || 'Not provided'}\nPreferred destination: ${f.get('destination')}\nEducation level: ${f.get('education')}\nPreferred service: ${f.get('service')}\n\nMain question/goals:\n${f.get('message') || ''}\n\nI agree to be contacted about this enquiry.`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Counselling enquiry — ASTRA')}&body=${encodeURIComponent(body)}`;
    setNotice('Your email app will open with a draft. Please send it to complete your enquiry. If it does not open, call +977 9768567647.');
  };

  return (
    <>
      {/* SECTION 1: Original Hero */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow light"><span /> YOUR FUTURE, BEYOND BORDERS</div>
          <h1>From dream<br />to <em>destination.</em></h1>
          <p>Study abroad, visa guidance and language preparation from Bagbazar, Kathmandu. Explore South Korea, the UK, New Zealand, Europe and Japan with a clearer understanding of your next step.</p>
          <div className="flex gap-3 flex-wrap">
            <Link className="button red" to="/contact">Book a counselling conversation <ArrowUpRight size={18} /></Link>
            <Link className="hero-link" to="/destinations">Explore destinations <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-support">Start with your academic background, study interests and budget. We'll help you identify the questions to explore.</div>
          <div className="hero-meta">
            <span><MapPin size={16} /> Kathmandu, Nepal</span>
            <span>Guidance for your global education</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/campus.jpg" alt="Radcliffe Camera and university buildings in Oxford, United Kingdom" />
          <div className="image-shade" />
          <div className="image-label">
            <span>YOUR NEXT CHAPTER</span>
            <h2>A new place.<br />A bigger perspective.</h2>
          </div>
          <div className="hero-seal">
            <Globe2 size={29} />
            <span>GLOBAL POSSIBILITIES<br /><b>Personal guidance.</b></span>
          </div>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true"><path d="M0 64V40C360 80 850 -35 1440 22V64Z" fill="white" /></svg>
      </section>

      <div className="destination-strip">
        <div className="wrap">
          <span>EXPLORE YOUR POSSIBILITIES</span>
          <div>
            {countries.map(c => <Link key={c.code} to={`/destinations/${c.id}`}>{c.name}</Link>)}
          </div>
        </div>
      </div>

      {/* SECTION 2: ASTRA Introduction & Trust */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-[#e50924]"></span>
              <span className="text-[11px] font-bold tracking-widest text-[#526982] uppercase">ASTRA INTRODUCTION</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#0b2f6b] tracking-tight">
              Your ambition deserves a considered plan.
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-[#334155] leading-relaxed">
              ASTRA helps you ask the right questions before choosing a course, institution or destination. We explain the process clearly and guide you towards the official information that applies to your circumstances.
            </p>
            <p className="text-[#64748b] leading-relaxed">
              Based in Bagbazar, Kathmandu, our counselling begins with your academic background, subject interests, language readiness, destination preferences and budget. The process is designed for students and families who want understandable, responsible guidance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-100">
              <div>
                <strong className="block text-[#0b2f6b] text-sm mb-2">Clear academic direction</strong>
                <span className="text-sm text-gray-500">Helping you find the right course fit.</span>
              </div>
              <div>
                <strong className="block text-[#0b2f6b] text-sm mb-2">Responsible document guidance</strong>
                <span className="text-sm text-gray-500">Accurate preparation according to rules.</span>
              </div>
              <div>
                <strong className="block text-[#0b2f6b] text-sm mb-2">Practical destination planning</strong>
                <span className="text-sm text-gray-500">Understanding costs and environments.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Study Destinations */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-[#f4f7fb] relative overflow-hidden rounded-tr-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-0.5 bg-[#e50924]"></span>
                <span className="text-[11px] font-bold tracking-widest text-[#526982] uppercase">WHERE WILL YOUR AMBITION TAKE YOU?</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#0b2f6b] tracking-tight">
                Different destinations.<br />One exciting future.
              </h2>
            </div>
            <p className="text-gray-500 max-w-md">
              Explore the places on your shortlist. Find a direction that fits your goals and circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg border border-white/20">
                    {c.flag}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-[#0b2f6b] mb-3">{c.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                    {destinationCopy[c.id] || c.text}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full font-medium">
                      {c.popularStudyAreas[0]}
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full font-medium">
                      {c.studyLevels[0]}
                    </span>
                  </div>
                  <Link to={`/destinations/${c.id}`} className="inline-flex items-center justify-between w-full pt-6 border-t border-gray-100 text-[#0b2f6b] font-semibold group-hover:text-[#e50924] transition-colors">
                    Read full guide <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-5 bg-blue-50/50 rounded-lg border border-blue-100/50">
            <p className="text-sm text-slate-500 text-center">
              Europe is a region with different national systems. Confirm the individual country and institution before applying.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Services Overview */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 max-w-7xl mx-auto">
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
      <section className="relative py-10 bg-[#0b2f6b] text-white">
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
              <div key={i} className="relative pl-16">
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
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto">
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

      {/* SECTION 7: Premium Contact CTA & Enquiry */}
      <section className="relative py-10 bg-[#f4f7fb]">
        <CurvedDividerTop color="text-[#f4f7fb]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
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
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0b2f6b] mb-2">Book a Counselling Session</h3>
              <p className="text-sm text-gray-500 mb-8">
                Prepare an email to our team. Do not request or attach sensitive documents like passports or bank statements.
              </p>

              <form onSubmit={handleEnquiry} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700">Full name <span className="text-[#e50924]">*</span></label>
                    <input required name="name" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700">Phone number <span className="text-[#e50924]">*</span></label>
                    <input required name="phone" type="tel" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none" placeholder="Your contact number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-700">Email address <span className="text-gray-400 font-normal">(optional)</span></label>
                  <input name="email" type="email" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none" placeholder="you@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700">Preferred destination <span className="text-[#e50924]">*</span></label>
                    <select name="destination" required value={selectedDestination} onChange={e => setSelectedDestination(e.target.value)} className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none bg-white">
                      <option value="" disabled>Select destination</option>
                      {countries.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
                      <option value="Still exploring">Still exploring</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700">Preferred service <span className="text-[#e50924]">*</span></label>
                    <select name="service" required defaultValue="" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none bg-white">
                      <option value="" disabled>Select service</option>
                      <option value="Study Abroad">Study Abroad</option>
                      <option value="Visa Guidance">Visa Guidance</option>
                      <option value="Language Preparation">Language Preparation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-700">Education level <span className="text-[#e50924]">*</span></label>
                  <select name="education" required defaultValue="" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none bg-white">
                    <option value="" disabled>Select level</option>
                    <option>Secondary / SEE</option>
                    <option>Higher secondary / +2</option>
                    <option>Bachelor’s</option>
                    <option>Master’s</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-700">Main question <span className="text-gray-400 font-normal">(optional)</span></label>
                  <textarea name="message" rows="3" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] outline-none resize-y" placeholder="What would you like to discuss?" />
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-[#0b2f6b] rounded" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I agree to be contacted by ASTRA about this enquiry. <Link to="/privacy" className="underline hover:text-[#0b2f6b]">Privacy notice</Link>
                  </span>
                </div>

                <button type="submit" className="w-full flex items-center justify-between bg-[#e50924] hover:bg-[#c7051e] text-white px-6 py-4 font-semibold rounded-md transition-all">
                  Book a Counselling Session <ArrowUpRight size={18} />
                </button>
                
                {notice && (
                  <p className="text-xs bg-blue-50 text-blue-800 p-3 rounded mt-4">
                    {notice}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
