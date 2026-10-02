import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, Filter, ChevronDown, MapPin, ExternalLink, MessageCircle, 
  ArrowUpRight, BookOpen, Clock, Building, GraduationCap, Banknote, HelpCircle,
  Phone, Mail
} from 'lucide-react';
import { countries } from '../data';
import { usePageEntrance, useScrollReveal } from '../motion';

// Curved Dividers
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

export default function Destinations() {
  const containerRef = useRef();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [formDestination, setFormDestination] = useState('');
  
  usePageEntrance(containerRef);
  useScrollReveal(containerRef);

  // Destination Data strictly matching user request
  const destinationDetails = [
    {
      id: 'south-korea',
      name: 'South Korea',
      region: 'Asia',
      image: '/images/south_korea.jpg',
      flag: '🇰🇷',
      positioning: 'Explore technology, business, design, language and degree-study pathways in a country known for advanced education and innovation.',
      planning: [
        'Degree study and non-degree language training have different visa categories',
        'The Korean Government Study in Korea portal identifies D-2 for degree study and D-4 for training routes',
        'Korean-language requirements depend on the course and institution',
        'Confirm admission letters, financial evidence, education records and embassy requirements before applying'
      ],
      studyAreas: ['Information technology', 'Engineering', 'Business', 'Design', 'Korean language and culture']
    },
    {
      id: 'united-kingdom',
      name: 'United Kingdom',
      region: 'Europe',
      image: '/images/united_kingdom.jpg',
      flag: '🇬🇧',
      positioning: 'Understand course selection, admission conditions, CAS requirements and Student visa preparation for study in the UK.',
      planning: [
        'Choose the institution and course before reviewing visa requirements',
        'A Student visa application requires a Confirmation of Acceptance for Studies from a licensed student sponsor',
        'Passport, CAS and financial evidence may be required depending on circumstances',
        'TB testing, ATAS or parental consent may apply in certain cases',
        'Check GOV.UK for current requirements, fees and processing guidance'
      ],
      studyAreas: ['Business and finance', 'Computing and data', 'Engineering', 'Health and social sciences', 'Arts and creative subjects']
    },
    {
      id: 'new-zealand',
      name: 'New Zealand',
      region: 'Oceania',
      image: '/images/new_zealand.jpg',
      flag: '🇳🇿',
      positioning: 'Plan full-time study with a clear understanding of your provider, offer of place, funding, insurance and visa responsibilities.',
      planning: [
        'The Fee Paying Student Visa requires an offer from an approved education provider',
        'Students must show tuition and living-cost funding or an accepted scholarship or sponsor',
        'Full medical and travel insurance may be required',
        'Immigration New Zealand advises applying early before planned travel',
        'Check current work conditions directly on the official visa page because conditions may vary'
      ],
      studyAreas: ['Information technology', 'Business', 'Health', 'Agriculture and environmental studies', 'Hospitality and tourism']
    },
    {
      id: 'europe',
      name: 'Europe',
      region: 'Europe',
      image: '/images/europe.jpg',
      flag: '🇪🇺',
      positioning: 'Explore a wide range of higher-education systems, languages, fees and student-life environments across Europe.',
      planning: [
        'Europe is a region, not one unified admissions or visa system',
        'Requirements vary by country, institution, course and nationality',
        'Research tuition, accommodation, insurance and residence-permit requirements separately',
        'Use official country portals and the European Commission’s Study in Europe resources',
        'Erasmus Mundus Joint Masters may offer competitive scholarships for eligible international students'
      ],
      studyAreas: ['Engineering and technology', 'Business and management', 'Renewable energy', 'Social sciences', 'Research and postgraduate studies']
    },
    {
      id: 'japan',
      name: 'Japan',
      region: 'Asia',
      image: '/images/japan.jpg',
      flag: '🇯🇵',
      positioning: 'Understand Japanese-language pathways, school-specific admission rules, entrance examinations and the full cost of study.',
      planning: [
        'Each institution sets its own admissions requirements',
        'Some universities require or consider the Examination for Japanese University Admission for International Students',
        'Japanese-taught courses may require Japanese-language evidence',
        'Fees can include admission, tuition, examination, materials and practical-training charges',
        'Confirm examination dates and required subjects well in advance'
      ],
      studyAreas: ['Engineering and robotics', 'Business', 'Information technology', 'Hospitality', 'Japanese language and culture']
    }
  ];

  // Filtering Logic
  const filteredDestinations = destinationDetails.filter(d => {
    if (search && !d.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (regionFilter && d.region !== regionFilter) return false;
    return true;
  });

  const clearFilters = () => {
    setSearch('');
    setRegionFilter('');
    setLevelFilter('');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white" ref={containerRef}>
      {/* SECTION 1: Premium destinations hero */}
      <section className="relative py-8 lg:py-10 bg-[#0b2f6b] text-white overflow-hidden pb-20">
        {/* Abstract World Map Graphic (SVG) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 200 C 250 150, 400 300, 600 250 S 800 150, 950 300" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
            <circle cx="150" cy="200" r="4" fill="white" />
            <circle cx="600" cy="250" r="4" fill="#e50924" />
            <circle cx="950" cy="300" r="4" fill="white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
          <div>
            <div className="text-xs font-semibold tracking-widest text-[#d1dced] uppercase mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Destinations</span>
            </div>
            
            <div className="inline-block bg-[#e50924]/20 border border-[#e50924]/50 text-[#ffced3] text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6">
              Explore your next academic direction
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4">
              Choose a destination that fits your future.
            </h1>
            
            <p className="text-[#becee3] text-base leading-relaxed mb-8 max-w-lg">
              Every destination has a different education system, application process, language expectation and cost structure. Explore the possibilities carefully before choosing your next step.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#enquiry" className="inline-flex items-center gap-2 bg-[#e50924] hover:bg-[#c7051e] !text-white px-6 py-3 font-semibold rounded-md transition-all text-sm">
                Book Destination Counselling <ArrowUpRight size={16} />
              </a>
              <a href="#compare" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 !text-white px-6 py-3 font-semibold rounded-md transition-all text-sm">
                Compare Your Options
              </a>
            </div>
          </div>
          
          <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/destinations_hero.jpg" alt="Global travel hub" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0b2f6b]/20 mix-blend-multiply"></div>
          </div>
        </div>
        <CurvedDividerBottom />
      </section>

      {/* SECTION 2: Destination discovery controls */}
      <section className="bg-[#f4f7fb] py-8 border-b border-gray-200 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
            
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search a destination..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <div className="relative">
                <select 
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-[#0b2f6b] cursor-pointer min-w-[140px]"
                >
                  <option value="">All Regions</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              
              <div className="relative hidden lg:block">
                <select 
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-[#0b2f6b] cursor-pointer min-w-[140px]"
                >
                  <option value="">Study Level</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="language">Language Training</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {(search || regionFilter || levelFilter) && (
                <button 
                  onClick={clearFilters}
                  className="px-4 py-3 text-sm text-[#e50924] font-semibold hover:bg-red-50 rounded-lg transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Featured destination cards */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto scroll-reveal">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0b2f6b]">Explore Destinations</h2>
          <p className="text-sm text-gray-500 mt-1">Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 && 's'}</p>
        </div>

        <div className="space-y-12">
          {filteredDestinations.map(dest => (
            <div key={dest.id} className="group flex flex-col lg:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 reveal-item">
              
              {/* Image Section */}
              <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#0b2f6b] shadow-sm flex items-center gap-1">
                  <MapPin size={12} className="text-[#e50924]" /> {dest.region}
                </div>
                <div className="absolute top-4 right-4 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  {dest.flag}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-3/5 p-6 lg:p-10 flex flex-col">
                <h3 className="text-3xl font-bold text-[#0b2f6b] mb-3">{dest.name}</h3>
                <p className="text-gray-600 text-sm md:text-base font-medium mb-6 leading-relaxed">
                  {dest.positioning}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-[#e50924] uppercase tracking-wider mb-3">Planning Information</h4>
                    <ul className="space-y-2">
                      {dest.planning.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#0b2f6b] mt-0.5 opacity-50">•</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#e50924] uppercase tracking-wider mb-3">Possible Study Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.studyAreas.map((area, idx) => (
                        <span key={idx} className="bg-[#f4f7fb] text-[#223c5f] text-xs px-3 py-1.5 rounded-md font-medium border border-gray-100">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-gray-100">
                  <Link to={`/destinations/${dest.id}`} className="inline-flex justify-center items-center gap-2 bg-[#e50924] hover:bg-[#c7051e] !text-white px-6 py-3 font-semibold rounded-md transition-all text-sm flex-1 md:flex-none">
                    Explore {dest.name}
                  </Link>
                  <a 
                    href="#enquiry" 
                    onClick={() => setFormDestination(dest.id)}
                    className="inline-flex justify-center items-center gap-2 bg-[#0b2f6b] hover:bg-[#07204b] !text-white px-6 py-3 font-semibold rounded-md transition-all text-sm flex-1 md:flex-none shadow-sm"
                  >
                    Ask about this destination
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Destination comparison area */}
      <section id="compare" className="py-8 lg:py-10 px-6 lg:px-12 bg-[#092650] text-white scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">Compare the questions that matter.</h2>
            <p className="text-[#aebed1] text-sm max-w-2xl mx-auto">
              A high-level view of what to consider. Always verify specific rules based on your unique profile.
            </p>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 border-b border-white/10 text-xs font-bold text-[#aebed1] uppercase tracking-wider w-1/4">Consideration</th>
                  <th className="p-4 border-b border-white/10 text-xs font-bold text-white uppercase tracking-wider">What to Research</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border-b border-white/5 font-medium text-white flex items-center gap-2"><BookOpen size={16} className="text-[#e50924]"/> Teaching language</td>
                  <td className="p-4 border-b border-white/5 text-[#d1dced]">Depends on the course and individual circumstances. Some countries require local language training.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border-b border-white/5 font-medium text-white flex items-center gap-2"><GraduationCap size={16} className="text-[#e50924]"/> Admission structure</td>
                  <td className="p-4 border-b border-white/5 text-[#d1dced]">Varies by institution. Confirm directly with the selected provider for entrance exams or portfolio needs.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border-b border-white/5 font-medium text-white flex items-center gap-2"><Building size={16} className="text-[#e50924]"/> Visa or residence planning</td>
                  <td className="p-4 border-b border-white/5 text-[#d1dced]">Check the current official rules on government embassy pages.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border-b border-white/5 font-medium text-white flex items-center gap-2"><Banknote size={16} className="text-[#e50924]"/> Tuition & Living cost</td>
                  <td className="p-4 border-b border-white/5 text-[#d1dced]">Costs vary widely. Use official calculators and verify funding evidence requirements.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e50924] hover:bg-[#c7051e] !text-white px-6 py-3 font-semibold rounded-md transition-all text-sm">
              Discuss your shortlist with ASTRA
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Country guide preview and student planning */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto scroll-reveal">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0b2f6b] mb-4 tracking-tight">Before choosing a country, ask better questions.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Academic fit', desc: 'Does the course match the student’s previous education, interests and long-term direction?', icon: <GraduationCap size={20} /> },
            { title: 'Entry requirements', desc: 'What academic, portfolio, language, test or work-experience requirements apply?', icon: <BookOpen size={20} /> },
            { title: 'Total budget', desc: 'What will tuition, accommodation, insurance, travel, testing, visa and daily living cost?', icon: <Banknote size={20} /> },
            { title: 'Language readiness', desc: 'Which language is used in the course and which test or qualification is accepted?', icon: <MessageCircle size={20} /> },
            { title: 'Application timing', desc: 'What are the intake dates, application deadlines, offer conditions and document timelines?', icon: <Clock size={20} /> },
            { title: 'Nepal requirements', desc: 'Does the student need an NOC, certified documents, translations or other Nepal-specific preparation?', icon: <MapPin size={20} /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#fafcfd] border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#eff4fb] text-[#0b2f6b] rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#0b2f6b] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-6 line-clamp-3">{item.desc}</p>
              <Link to="/contact" className="text-xs font-bold text-[#e50924] flex items-center gap-1 uppercase tracking-wider hover:text-[#c7051e]">
                Discuss this question <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      {/* SECTION 6: Official destination resources */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto scroll-reveal">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0b2f6b] mb-2">Check the original guidance before you apply.</h2>
          <p className="text-sm text-gray-500">
            Requirements, fees, deadlines and immigration rules can change. These summaries are for planning only. Always check the current official information before applying.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Student visa documents and CAS', org: 'GOV.UK', helps: 'Verify UK student visa requirements', link: 'https://www.gov.uk/student-visa' },
            { title: 'Fee Paying Student Visa', org: 'Immigration New Zealand', helps: 'Check NZ visa cost and conditions', link: 'https://www.immigration.govt.nz/' },
            { title: 'Student Visa and Stay Status', org: 'Study in Korea', helps: 'Understand Korean D-2/D-4 rules', link: 'https://www.studyinkorea.go.kr/' },
            { title: 'EJU and examinations', org: 'Study in Japan', helps: 'Find Japanese university entry exams', link: 'https://www.studyinjapan.go.jp/' },
            { title: 'Study in Europe', org: 'European Commission', helps: 'Explore EU higher education systems', link: 'https://education.ec.europa.eu/study-in-europe' },
            { title: 'Erasmus Mundus Joint Masters', org: 'European Commission', helps: 'View EU scholarship opportunities', link: 'https://erasmus-plus.ec.europa.eu/' },
            { title: 'NOC portal', org: 'Government of Nepal', helps: 'Apply for No Objection Certificate', link: 'https://noc.moest.gov.np/' }
          ].map((res, idx) => (
            <a key={idx} href={res.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col p-5 border border-gray-200 rounded-lg hover:border-[#0b2f6b] hover:bg-[#f4f7fb] transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#0b2f6b] text-sm">{res.title}</h4>
                <ExternalLink size={14} className="text-gray-400 group-hover:text-[#0b2f6b]" />
              </div>
              <div className="text-xs text-gray-500 mb-2">Authority: <span className="font-semibold text-gray-700">{res.org}</span></div>
              <p className="text-xs text-gray-600 mb-3">{res.helps}</p>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-auto">Last reviewed: Sept 2026</div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 7: Destination counselling CTA */}
      <section id="enquiry" className="relative py-8 lg:py-10 bg-[#f4f7fb] scroll-reveal">
        <CurvedDividerTop color="text-[#0b2f6b]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-20 pt-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b2f6b] mb-4 tracking-tight">Still deciding where to begin?</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Share your academic background, study interests, budget and preferred destinations. ASTRA can help you identify the questions to investigate next.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 lg:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm" placeholder="Your phone" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm" placeholder="Your email" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Education Level</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm text-gray-700">
                      <option value="">Select Level</option>
                      <option value="high-school">High School / +2</option>
                      <option value="bachelors">Bachelors Degree</option>
                      <option value="masters">Masters Degree</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Preferred Destination</label>
                    <select 
                      value={formDestination}
                      onChange={(e) => setFormDestination(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm text-gray-700"
                    >
                      <option value="">Select Destination</option>
                      <option value="south-korea">South Korea</option>
                      <option value="united-kingdom">United Kingdom</option>
                      <option value="new-zealand">New Zealand</option>
                      <option value="europe">Europe</option>
                      <option value="japan">Japan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Preferred Study Level</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm text-gray-700">
                      <option value="">Select Level</option>
                      <option value="undergrad">Undergraduate</option>
                      <option value="postgrad">Postgraduate</option>
                      <option value="language">Language Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Main Question</label>
                  <textarea rows="3" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm resize-none" placeholder="What would you like to discuss?"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-[#e50924] border-gray-300 rounded focus:ring-[#e50924]" />
                  <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                    I consent to ASTRA Global Education contacting me regarding my study abroad enquiry. I understand I am not required to provide sensitive documents (like passports or bank statements) at this stage.
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                  <button type="button" className="inline-flex items-center gap-2 bg-[#e50924] hover:bg-[#c7051e] !text-white px-8 py-3.5 font-semibold rounded-md transition-all text-sm">
                    Book a Counselling Session <ArrowUpRight size={16} />
                  </button>
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-medium text-gray-600">
                    <a href="tel:+9779768567647" className="flex items-center gap-1 hover:text-[#e50924]"><Phone size={14} /> +977 9768567647</a>
                    <a href="mailto:info@astraglobaleducationservices.com" className="flex items-center gap-1 hover:text-[#e50924]"><Mail size={14} /> Email Us</a>
                    <span className="flex items-center gap-1"><MapPin size={14} /> Bagbazar–28, Kathmandu</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
