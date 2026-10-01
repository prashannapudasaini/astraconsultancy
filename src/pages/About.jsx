import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Ear, BookOpen, ShieldCheck, UserCheck, ArrowUpRight, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { countries } from '../data';
import { usePageEntrance, useScrollReveal } from '../motion';

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

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageEntrance(containerRef);
  useScrollReveal(containerRef);

  return (
    <main ref={containerRef}>
      {/* SECTION 1: About Hero */}
      <section className="relative py-8 lg:py-10 bg-[#0b2f6b] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold tracking-widest text-[#d1dced] uppercase mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About ASTRA</span>
            </div>
            
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[#dce9ff] text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6">
              A considered start to a global journey
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
              Guidance that helps you <em className="text-[#dce9ff]">move forward</em> with clarity.
            </h1>
            
            <p className="text-[#becee3] text-lg leading-relaxed mb-10 max-w-lg">
              ASTRA Global Education and Services helps students in Nepal explore international education opportunities with practical counselling, destination guidance, visa preparation and language-planning support.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-[#e50924] hover:bg-[#c7051e] text-white px-8 py-4 font-semibold rounded-md transition-all">
                Start a Conversation <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-semibold rounded-md transition-all">
                Explore Our Services
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/about_hero.jpg" alt="ASTRA Global Education bright modern study hall" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0b2f6b]/10 mix-blend-multiply"></div>
          </div>
        </div>
        <CurvedDividerBottom color="text-white" />
      </section>

      {/* SECTION 2: Who ASTRA is */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img src="/images/counselling.jpg" alt="ASTRA Counselling office environment" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b2f6b] mb-6 tracking-tight">Built around better decisions.</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg text-[#223c5f] font-medium">
                ASTRA is a Kathmandu-based education consultancy helping students understand their study-abroad options before they commit to a course, institution or destination.
              </p>
              <p>
                Every student begins with a different academic background, budget, ambition and set of questions. ASTRA's role is to make those questions easier to understand and help students identify the information they need to investigate next.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <p className="font-semibold text-[#0b2f6b] mb-4">ASTRA discussions may include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {['Academic background', 'Preferred subjects and careers', 'Destination interests', 'Language readiness', 'Financial planning', 'Application timing', 'Visa and Nepal-specific requirements'].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-[#e50924] mt-0.5">▪</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Our approach */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-[#f4f7fb] scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b2f6b] mb-6 tracking-tight">Clear information. Considered guidance.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-[#eff4fb] text-[#0b2f6b] group-hover:bg-[#0b2f6b] group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Ear size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b2f6b] mb-4">Listen first</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Begin with the student's goals, education history, interests and concerns.</p>
              <p className="text-sm font-medium text-[#223c5f]">We take the time to understand your unique starting point.</p>
            </div>
            
            <div className="bg-white p-10 rounded-none border-l-4 border-[#e50924] hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-[#eff4fb] text-[#0b2f6b] group-hover:bg-[#0b2f6b] group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b2f6b] mb-4">Explain clearly</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Use plain language to explain courses, destinations, documents, timelines and next questions.</p>
              <p className="text-sm font-medium text-[#223c5f]">No jargon, just straightforward guidance.</p>
            </div>
            
            <div className="bg-white p-10 rounded-none border-l-4 border-[#0b2f6b] hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-[#eff4fb] text-[#0b2f6b] group-hover:bg-[#0b2f6b] group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b2f6b] mb-4">Use reliable sources</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Direct students to institution and government guidance for current requirements, fees, deadlines and visa rules.</p>
              <p className="text-sm font-medium text-[#223c5f]">Building plans on verified information.</p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-[#eff4fb] text-[#0b2f6b] group-hover:bg-[#0b2f6b] group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <UserCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b2f6b] mb-4">Respect individual circumstances</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Recognise that eligibility, costs, admission and visa outcomes differ from one student to another.</p>
              <p className="text-sm font-medium text-[#223c5f]">Your journey is entirely your own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: What ASTRA helps students explore */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto scroll-reveal">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b2f6b] mb-6 tracking-tight">Support for the decisions that matter.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col p-8 border border-gray-100 rounded-xl hover:border-[#0b2f6b]/20 hover:shadow-lg transition-all bg-[#fafcfd]">
            <h3 className="text-2xl font-bold text-[#0b2f6b] mb-2">Study Abroad</h3>
            <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-gray-200">Help students explore:</p>
            <ul className="space-y-4 flex-1 mb-8">
              {['Course and subject direction', 'Undergraduate and postgraduate options', 'Institution research', 'Entry requirements', 'Application planning', 'Offer-condition review', 'Pre-departure questions'].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-[#e50924] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/services/study-abroad" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#eff4fb] text-[#0b2f6b] font-semibold rounded hover:bg-[#0b2f6b] hover:text-white transition-colors text-sm">
              Explore Study Abroad <ArrowUpRight size={16} />
            </Link>
          </div>
          
          {/* Service 2 */}
          <div className="flex flex-col p-8 border border-gray-100 rounded-xl hover:border-[#0b2f6b]/20 hover:shadow-lg transition-all bg-[#fafcfd]">
            <h3 className="text-2xl font-bold text-[#0b2f6b] mb-2">Visa Guidance</h3>
            <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-gray-200">Help students understand:</p>
            <ul className="space-y-4 flex-1 mb-8">
              {['The relevant visa route', 'Official evidence requirements', 'Financial-document preparation', 'Timeline planning', 'Interview preparation where relevant', "Nepal's NOC process where applicable"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-[#e50924] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/services/visa-guidance" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#eff4fb] text-[#0b2f6b] font-semibold rounded hover:bg-[#0b2f6b] hover:text-white transition-colors text-sm">
              Explore Visa Guidance <ArrowUpRight size={16} />
            </Link>
          </div>
          
          {/* Service 3 */}
          <div className="flex flex-col p-8 border border-gray-100 rounded-xl hover:border-[#0b2f6b]/20 hover:shadow-lg transition-all bg-[#fafcfd]">
            <h3 className="text-2xl font-bold text-[#0b2f6b] mb-2">Language Preparation</h3>
            <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-gray-200">Help students plan:</p>
            <ul className="space-y-4 flex-1 mb-8">
              {['IELTS Academic preparation', 'PTE Academic preparation', 'Korean-language preparation', 'Japanese-language preparation', 'Institution-specific language requirements', 'Test dates and application timing'].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-[#e50924] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/services/language-preparation" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#eff4fb] text-[#0b2f6b] font-semibold rounded hover:bg-[#0b2f6b] hover:text-white transition-colors text-sm">
              Explore Language Preparation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: ASTRA destination focus */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-[#092650] text-white relative scroll-reveal">
        <CurvedDividerTop color="text-white" />
        <div className="max-w-7xl mx-auto relative z-10 pt-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Global possibilities, carefully explored.</h2>
            <p className="text-[#aebed1] text-sm max-w-2xl mx-auto">
              Europe is a region rather than one single education or visa system. Students should confirm the individual country and institution before applying.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {countries.map(c => {
              const overviewDict = {
                'south-korea': 'Degree study and Korean-language training pathways',
                'united-kingdom': 'Course selection, CAS and Student visa preparation',
                'new-zealand': 'Approved providers, offer-of-place and funding preparation',
                'europe': 'Country-by-country research for admission, visas, insurance and costs',
                'japan': 'School requirements, Japanese-language pathways and EJU planning'
              };
              
              return (
                <div key={c.id} className="bg-white text-[#142a47] rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                  <div className="h-40 overflow-hidden relative">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur w-10 h-10 flex items-center justify-center rounded-full text-xl shadow">
                      {c.flag}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-2">{c.name}</h3>
                    <p className="text-sm text-gray-600 mb-6 flex-1">{overviewDict[c.id]}</p>
                    <Link to={`/destinations/${c.id}`} className="text-xs font-semibold text-[#e50924] hover:text-[#c7051e] flex items-center gap-1 uppercase tracking-wider">
                      Read destination guide <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: What students can expect */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-[#0b2f6b] text-white relative scroll-reveal">
        <CurvedDividerTop color="text-[#092650]" />
        <div className="max-w-7xl mx-auto relative z-10 pt-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">From your first question to your next step.</h2>
            <p className="text-[#aebed1] text-sm max-w-3xl mx-auto leading-relaxed p-4 bg-white/5 rounded-lg border border-white/10">
              ASTRA provides guidance and preparation support. Admission decisions are made by educational institutions, while visa and immigration decisions are made by the relevant authorities.
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              { title: 'Share your goals', student: 'Bring your academic goals and interests.', astra: 'We listen to your ambitions.', verify: 'Confirm suitable fields of study.' },
              { title: 'Review your academic background', student: 'Provide your past transcripts and scores.', astra: 'We review options based on eligibility.', verify: 'Check entry requirements for courses.' },
              { title: 'Explore destinations and courses', student: 'Consider location preferences and budget.', astra: 'We outline pros, cons, and costs.', verify: 'Identify target institutions and regions.' },
              { title: 'Understand requirements', student: 'Learn what is needed to apply.', astra: 'We explain documents and language tests.', verify: 'Confirm official guidelines.' },
              { title: 'Prepare applications and documents', student: 'Gather and submit application materials.', astra: 'We review files for completeness.', verify: 'Ensure submission deadlines are met.' },
              { title: 'Plan visa, NOC and departure requirements', student: 'Prepare financial and visa documentation.', astra: 'We guide you through the process steps.', verify: 'Check government embassy rules.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start relative">
                {idx !== 5 && <div className="absolute left-[23px] top-14 bottom-[-48px] w-0.5 bg-[#164580]"></div>}
                <div className="w-12 h-12 rounded-full bg-[#164580] text-white font-bold text-xl flex items-center justify-center shrink-0 border-4 border-[#0b2f6b] shadow-[0_0_0_2px_rgba(229,9,36,0.5)] text-[#e50924] bg-white">
                  {idx + 1}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="md:col-span-2 lg:col-span-1">
                    <h3 className="font-bold text-xl">{step.title}</h3>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#aebed1] mb-2 font-semibold">What the student brings</span>
                    <p className="text-sm text-[#d1dced]">{step.student}</p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#aebed1] mb-2 font-semibold">What ASTRA discusses</span>
                    <p className="text-sm text-[#d1dced]">{step.astra}</p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#e50924] mb-2 font-semibold">What should be verified next</span>
                    <p className="text-sm text-[#d1dced]">{step.verify}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Contact and responsible guidance */}
      <section className="relative py-8 lg:py-10 bg-[#f4f7fb] scroll-reveal">
        <CurvedDividerTop color="text-[#0b2f6b]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-20 pt-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0b2f6b] mb-6 tracking-tight">Have questions about your next step?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Visit ASTRA in Bagbazar, Kathmandu, call our team or send an enquiry to discuss your education plans.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-[#142a47] text-sm font-medium">
            <span className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100"><Phone size={16} className="text-[#e50924]" /> +977 9768567647</span>
            <span className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100"><MapPin size={16} className="text-[#e50924]" /> Bagbazar–28, Kathmandu, Nepal</span>
            <a href="mailto:info@astraglobaleducationservices.com" className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 hover:border-[#e50924] hover:text-[#e50924] transition-colors"><Mail size={16} className="text-[#e50924]" /> Email Us</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-[#e50924] hover:bg-[#c7051e] text-white px-8 py-4 font-semibold rounded-md transition-all">
              Book a Counselling Session <ArrowUpRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#0b2f6b] border border-gray-200 px-8 py-4 font-semibold rounded-md transition-all shadow-sm">
              Contact ASTRA
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-left">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Responsible Guidance:</strong> Requirements, fees, deadlines and visa rules may change. Students should verify current information through the relevant institution and official government source. ASTRA does not guarantee admission, scholarships, visa approval, employment or permanent residency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
