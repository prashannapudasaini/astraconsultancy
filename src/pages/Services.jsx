import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, BookOpen, MapPin, Phone, Mail, FileText, CheckCircle2,
  MessageCircle, ExternalLink, ShieldCheck, GraduationCap, Clock, Banknote
} from 'lucide-react';

const CurvedDividerBottom = () => (
  <svg className="absolute bottom-0 left-0 w-full overflow-hidden text-[#f4f7fb]" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: 'currentColor', height: '60px', zIndex: 10 }}>
    <path d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
);

const CurvedDividerTop = ({ color = "text-[#f4f7fb]" }) => (
  <svg className={`absolute top-0 left-0 w-full overflow-hidden ${color}`} viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: 'currentColor', height: '60px', zIndex: 10 }}>
    <path d="M0,60 C480,120 960,0 1440,60 L1440,0 L0,0 Z"></path>
  </svg>
);

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      {/* SECTION 1: Services hero */}
      <section className="relative py-8 lg:py-10 bg-[#0b2f6b] text-white overflow-hidden pb-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#103a83] transform origin-bottom-left skew-x-[-20deg] z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
          <div>
            <div className="text-xs font-semibold tracking-widest text-[#d1dced] uppercase mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Services</span>
            </div>

            <div className="inline-block bg-[#e50924] text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6">
              Support for your next academic decision
            </div>

            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4">
              Guidance that makes the process clearer.
            </h1>

            <p className="text-[#becee3] text-base leading-relaxed mb-8 max-w-lg">
              From choosing a study direction to understanding documentation and language preparation, ASTRA helps students explore the next step with practical, responsible guidance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e50924] hover:bg-[#c7051e] !text-white px-6 py-3 font-semibold rounded-md transition-all text-sm shadow-sm border-none">
                Book a Counselling Session <ArrowUpRight size={16} />
              </Link>
              <a href="tel:+9779768567647" className="inline-flex items-center gap-2 bg-[#0b2f6b] hover:bg-[#07204b] !text-white px-6 py-3 font-semibold rounded-md transition-all text-sm border-none shadow-sm">
                <Phone size={16} /> Call +977 9768567647
              </a>
            </div>
          </div>

          <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img src="/images/services_hero.jpg" alt="Professional student counselling and planning" className="w-full h-full object-cover" />
          </div>
        </div>
        <CurvedDividerBottom />
      </section>

      {/* SECTION 2: Services overview */}
      <section className="py-8 lg:py-10 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0b2f6b] mb-4">Support built around your questions.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              ASTRA begins by understanding where you are now and what you are trying to achieve. We help you organise the questions, documents and decisions that shape a study-abroad plan.
            </p>
            <p className="text-xs text-gray-500">
              Every student has different academic qualifications, interests, financial circumstances, destination preferences and language needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: <MessageCircle size={18} />, text: 'Clear explanations' },
              { icon: <MapPin size={18} />, text: 'Destination-aware planning' },
              { icon: <ShieldCheck size={18} />, text: 'Responsible document guidance' }
            ].map((val, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-[#0b2f6b] border border-[#d1dced] shadow-sm">
                <span className="text-[#e50924]">{val.icon}</span>
                {val.text}
              </div>
            ))}
          </div>

          {/* Visual Process Line */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
              {['Understand', 'Compare', 'Prepare', 'Verify'].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center bg-[#f4f7fb] md:bg-transparent py-2 md:py-0 mb-4 md:mb-0 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0b2f6b] flex items-center justify-center text-[#e50924] font-bold shadow-md mb-2">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0b2f6b] bg-[#f4f7fb] px-2">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Main service cards */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto">
        <div className="space-y-12">

          {/* Service 1: Study Abroad */}
          <div className="flex flex-col lg:flex-row bg-[#fafcfd] border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full lg:w-2/5 h-64 lg:h-auto">
              <img src="/images/study_abroad.jpg" alt="Study Abroad" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col">
              <div className="inline-block px-3 py-1 bg-[#eff4fb] text-[#0b2f6b] text-xs font-bold rounded mb-4 self-start">Study Abroad</div>
              <h3 className="text-2xl font-bold text-[#0b2f6b] mb-2">Explore the right academic direction.</h3>
              <p className="text-gray-600 text-sm mb-6">
                Discuss your subject interests, education history, preferred study level and destination goals before selecting a course or institution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-8 flex-1">
                {[
                  'Academic profile discussion', 'Course and subject exploration',
                  'Destination comparison', 'Institution research',
                  'Entry-requirement review', 'Application timeline planning',
                  'Offer-condition discussion', 'Pre-departure questions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#e50924] shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/services/study-abroad" className="inline-flex items-center gap-2 text-[#e50924] font-bold hover:text-[#c7051e] self-start uppercase tracking-wider text-sm">
                Explore Study Abroad <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Service 2: Visa Guidance */}
          <div className="flex flex-col lg:flex-row-reverse bg-[#fafcfd] border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full lg:w-2/5 h-64 lg:h-auto">
              <img src="/images/visa_guidance.jpg" alt="Visa Guidance" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col">
              <div className="inline-block px-3 py-1 bg-[#eff4fb] text-[#0b2f6b] text-xs font-bold rounded mb-4 self-start">Visa Guidance</div>
              <h3 className="text-2xl font-bold text-[#0b2f6b] mb-2">Prepare with a clearer understanding of requirements.</h3>
              <p className="text-gray-600 text-sm mb-6">
                Understand the visa route connected with your proposed study and identify the official information and evidence relevant to your circumstances.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-6 flex-1">
                {[
                  'Visa-route identification', 'Official checklist review',
                  'Document consistency guidance', 'Financial-evidence preparation',
                  'Interview preparation where applicable', 'Application-timeline planning',
                  'Nepal NOC guidance where applicable', 'Official-source verification'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#0b2f6b] shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-100 rounded-md p-3 mb-6">
                <p className="text-xs text-yellow-800 font-medium">
                  <strong>Notice:</strong> Visa approval is decided by the relevant immigration authority. ASTRA cannot guarantee an outcome.
                </p>
              </div>

              <Link to="/services/visa-guidance" className="inline-flex items-center gap-2 text-[#0b2f6b] font-bold hover:text-[#07204b] self-start uppercase tracking-wider text-sm">
                Explore Visa Guidance <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Service 3: Language Preparation */}
          <div className="flex flex-col lg:flex-row bg-[#fafcfd] border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full lg:w-2/5 h-64 lg:h-auto">
              <img src="/images/language_prep.jpg" alt="Language Preparation" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col">
              <div className="inline-block px-3 py-1 bg-[#eff4fb] text-[#0b2f6b] text-xs font-bold rounded mb-4 self-start">Language Preparation</div>
              <h3 className="text-2xl font-bold text-[#0b2f6b] mb-2">Build readiness for the language demands of your course.</h3>
              <p className="text-gray-600 text-sm mb-6">
                Language preparation should begin with the course and institution’s accepted test, score and teaching language.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-8 flex-1">
                {[
                  'IELTS Academic overview', 'PTE Academic overview',
                  'Korean-language preparation considerations', 'Japanese-language preparation considerations',
                  'Test-format guidance', 'Skill-area planning',
                  'Test-date planning', 'Institution-specific score verification'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#e50924] shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/services/language-preparation" className="inline-flex items-center gap-2 text-[#e50924] font-bold hover:text-[#c7051e] self-start uppercase tracking-wider text-sm">
                Explore Language Preparation <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Detailed service process */}
      <section className="relative py-8 lg:py-10 px-6 lg:px-12 bg-[#0b2f6b] text-white">
        <CurvedDividerTop color="text-white" />
        <div className="max-w-7xl mx-auto pt-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">How our guidance fits together.</h2>
            <div className="inline-block bg-white/10 text-xs text-white/80 px-4 py-2 rounded-lg border border-white/10">
              ASTRA provides counselling and preparation guidance. Institutions decide admission and authorities decide visa and immigration outcomes.
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto pb-4">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-[#164580] hidden md:block"></div>

            <div className="space-y-8">
              {[
                { title: 'Initial enquiry', student: 'Provide basic background and interest.', astra: 'Explain the available services.', verify: 'Confirm if ASTRA can support your goal.' },
                { title: 'Academic and goal discussion', student: 'Share transcripts and career objectives.', astra: 'Identify suitable pathways.', verify: 'Check broad entry requirements.' },
                { title: 'Destination and service selection', student: 'Confirm preferred location and plan.', astra: 'Detail the next steps and timelines.', verify: 'Official regional requirements.' },
                { title: 'Requirement and document review', student: 'Gather documents and evidence.', astra: 'Review for completeness and format.', verify: 'Ensure documents meet official checklists.' },
                { title: 'Application or preparation planning', student: 'Complete application forms or test prep.', astra: 'Guide the submission process.', verify: 'Submission deadlines and fees.' },
                { title: 'Next-step confirmation', student: 'Wait for outcome or take test.', astra: 'Advise on offer conditions or next steps.', verify: 'Final enrolment or visa timeline.' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-start gap-4 md:gap-6 relative">
                  <div className="w-12 h-12 rounded-full bg-white text-[#e50924] border-4 border-[#0b2f6b] flex items-center justify-center font-bold shadow-md z-10 shrink-0">
                    {idx + 1}
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex-1 w-full">
                    <h4 className="font-bold text-lg mb-3">{step.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div><span className="block text-[10px] text-white/50 uppercase tracking-widest mb-1">Student provides</span><p className="text-xs text-white/90">{step.student}</p></div>
                      <div><span className="block text-[10px] text-white/50 uppercase tracking-widest mb-1">ASTRA discusses</span><p className="text-xs text-white/90">{step.astra}</p></div>
                      <div><span className="block text-[10px] text-[#e50924] uppercase tracking-widest mb-1">Verify Next</span><p className="text-xs text-white/90">{step.verify}</p></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: What each student can prepare */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0b2f6b] mb-2">Bring the information that makes counselling useful.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[
            { icon: <GraduationCap size={20} />, title: 'Academic background', desc: 'Highest qualification, subjects, grades, education gaps and previous study.' },
            { icon: <BookOpen size={20} />, title: 'Study direction', desc: 'Preferred courses, subjects, career interests and intended study level.' },
            { icon: <MapPin size={20} />, title: 'Destination preference', desc: 'Countries or regions being considered and the reasons behind them.' },
            { icon: <MessageCircle size={20} />, title: 'Language readiness', desc: 'Existing test scores, planned test dates and the language used in the intended course.' },
            { icon: <Banknote size={20} />, title: 'Funding outline', desc: 'Approximate budget, tuition expectations, living costs and funding questions.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 border border-gray-100 rounded-xl bg-gray-50 flex items-start gap-4">
              <div className="text-[#0b2f6b] bg-white p-2 rounded-lg shadow-sm shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-bold text-sm text-[#0b2f6b] mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#fff1f2] border border-[#ffced3] rounded-lg p-4 flex items-start gap-3 max-w-4xl mx-auto">
          <ShieldCheck size={20} className="text-[#e50924] shrink-0 mt-0.5" />
          <p className="text-xs text-[#a10e1f] font-medium leading-snug">
            <strong>Security Notice:</strong> Do not send passports, bank statements, citizenship documents or other sensitive files through the initial enquiry form. Confirm a secure document-sharing process with ASTRA first.
          </p>
        </div>
      </section>

      {/* SECTION 6: Service-specific official resources */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0b2f6b] mb-2">Use the official source for the final answer.</h2>
            <p className="text-sm text-gray-600 mb-2 max-w-2xl">
              Fees, deadlines, requirements and immigration policies may change. Always verify current information through the linked official source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Study Abroad */}
            <div>
              <h3 className="text-sm font-bold text-[#e50924] uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Study Abroad</h3>
              <div className="space-y-3">
                {[
                  { name: 'Institution course and entry pages', org: 'Various Universities' },
                  { name: 'Study in Europe resources', org: 'European Commission' },
                  { name: 'Study in Japan official planning pages', org: 'Study in Japan' },
                  { name: 'Study in Korea official planning pages', org: 'Study in Korea' }
                ].map((res, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0b2f6b]/30 transition-colors">
                    <span className="block text-[10px] text-gray-400 font-bold mb-1">{res.org}</span>
                    <h4 className="text-sm font-semibold text-[#0b2f6b] mb-2 leading-tight">{res.name}</h4>
                    <div className="flex justify-between items-center text-xs mt-3">
                      <span className="text-gray-400">Sept 2026</span>
                      <a href="#" className="flex items-center gap-1 text-[#e50924] hover:underline font-medium">Read official guidance <ExternalLink size={12} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Guidance */}
            <div>
              <h3 className="text-sm font-bold text-[#e50924] uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Visa Guidance</h3>
              <div className="space-y-3">
                {[
                  { name: 'Student visa and CAS guidance', org: 'GOV.UK' },
                  { name: 'Fee Paying Student Visa', org: 'Immigration New Zealand' },
                  { name: 'Visa and stay information', org: 'Study in Korea' },
                  { name: 'NOC portal', org: 'Government of Nepal' }
                ].map((res, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0b2f6b]/30 transition-colors">
                    <span className="block text-[10px] text-gray-400 font-bold mb-1">{res.org}</span>
                    <h4 className="text-sm font-semibold text-[#0b2f6b] mb-2 leading-tight">{res.name}</h4>
                    <div className="flex justify-between items-center text-xs mt-3">
                      <span className="text-gray-400">Sept 2026</span>
                      <a href="#" className="flex items-center gap-1 text-[#e50924] hover:underline font-medium">Read official guidance <ExternalLink size={12} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Preparation */}
            <div>
              <h3 className="text-sm font-bold text-[#e50924] uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Language Prep</h3>
              <div className="space-y-3">
                {[
                  { name: 'IELTS official Academic test format', org: 'IELTS' },
                  { name: 'Pearson PTE Academic official info', org: 'Pearson' },
                  { name: 'Institution-specific language requirements', org: 'Various Universities' }
                ].map((res, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0b2f6b]/30 transition-colors">
                    <span className="block text-[10px] text-gray-400 font-bold mb-1">{res.org}</span>
                    <h4 className="text-sm font-semibold text-[#0b2f6b] mb-2 leading-tight">{res.name}</h4>
                    <div className="flex justify-between items-center text-xs mt-3">
                      <span className="text-gray-400">Sept 2026</span>
                      <a href="#" className="flex items-center gap-1 text-[#e50924] hover:underline font-medium">Read official guidance <ExternalLink size={12} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Final counselling CTA */}
      <section className="relative py-8 lg:py-10 bg-[#092650] text-white">
        <CurvedDividerTop color="text-[#f4f7fb]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-20 pt-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">Not sure which service to begin with?</h2>
            <p className="text-sm text-[#aebed1] max-w-2xl mx-auto mb-6">
              Tell us your education level, destination interest and main question. ASTRA will help you identify the most useful next conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#e50924] hover:bg-[#c7051e] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors">
                Book a Counselling Session
              </button>
              <a href="tel:+9779768567647" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-md font-semibold text-sm transition-colors">
                Call +977 9768567647
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden p-6 lg:p-8">
            <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-lg border border-blue-100 mb-6 flex items-start gap-2">
              <Mail size={16} className="shrink-0 mt-0.5" />
              <p>Since we do not currently have a backend system, submitting this form will prepare an email draft for you to send manually. <strong>Please send the email manually to info@astraglobaleducationservices.com</strong></p>
            </div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="Your phone" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Preferred Service</label>
                  <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                    <option value="">Not Sure</option>
                    <option value="study">Study Abroad</option>
                    <option value="visa">Visa Guidance</option>
                    <option value="language">Language Prep</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Preferred Destination</label>
                  <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                    <option value="">Select Destination</option>
                    <option value="korea">South Korea</option>
                    <option value="uk">United Kingdom</option>
                    <option value="nz">New Zealand</option>
                    <option value="europe">Europe</option>
                    <option value="japan">Japan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Study Level</label>
                  <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                    <option value="">Select Level</option>
                    <option value="undergrad">Undergraduate</option>
                    <option value="postgrad">Postgraduate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Main Question</label>
                <textarea rows="2" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm resize-none" placeholder="What would you like to discuss?"></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-[#e50924] rounded border-gray-300" />
                <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                  I consent to ASTRA contacting me. I will not send passports or sensitive documents in this initial form.
                </label>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full bg-[#0b2f6b] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#07204b] transition-colors">
                  Prepare Email Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
