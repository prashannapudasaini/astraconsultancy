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
  const [notice, setNotice] = useState('');

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
  
  usePageEntrance(containerRef);
  useScrollReveal(containerRef);

  // Destination Data strictly matching user request
  const destinationDetails = [
    {
      id: 'united-kingdom',
      name: 'United Kingdom',
      region: 'Europe',
      image: '/images/united_kingdom.jpg',
      flag: '🇬🇧',
      positioning: 'Understand course selection, admission conditions, CAS requirements and Student visa preparation for study in the UK.',
      description: 'The United Kingdom is home to some of the world’s oldest and most prestigious universities. Known for its academic rigor and rich cultural heritage, studying in the UK provides an intensive, fast-paced educational experience. From historic campuses in England to vibrant student cities in Scotland, the UK offers unparalleled opportunities for networking and research, ensuring you graduate with a globally recognized degree.',
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
      description: 'New Zealand offers a progressive education system set against the backdrop of breathtaking natural landscapes. Renowned for its safe, welcoming communities, it is the perfect destination for students seeking an excellent work-life balance and high-quality education. The universities are heavily research-focused and provide strong post-study work rights, making it an ideal choice for long-term career growth.',
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
      description: 'Europe presents a diverse array of academic opportunities across multiple distinct cultures and educational systems. Many European nations offer tuition-free or highly subsidized education, even for international students, particularly in countries like Germany and Norway. With borderless travel across the Schengen Area, studying in Europe means access to a continent of innovation, history, and incredible cultural exchange.',
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
      description: 'Japan blends deep-rooted traditional culture with cutting-edge technological advancement. Japanese universities are at the forefront of robotics, engineering, and business, offering a highly disciplined and innovative academic environment. As the country opens its doors wider to international talent, there are growing opportunities for scholarships and seamless transitions into the dynamic Japanese workforce post-graduation.',
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
                className="w-full !pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm"
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

      {/* SECTION 2.5: Featured Destination - South Korea (Redesigned) */}
      {(!search || 'south korea'.includes(search.toLowerCase())) && (!regionFilter || regionFilter === 'Asia') && (
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#fafcfd] max-w-[1440px] mx-auto scroll-reveal">
          
          <div className="text-center mb-10">
             <div className="inline-block bg-blue-50 text-[#0b2f6b] font-bold text-xs px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest border border-blue-100 shadow-sm">Spotlight Destination</div>
             <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b2f6b] tracking-tight mb-4">Experience South Korea 🇰🇷</h2>
             <p className="text-gray-500 text-base max-w-2xl mx-auto">Where ancient traditions fuel futuristic innovations. Discover why ambitious students from Nepal are choosing Seoul over traditional Western destinations.</p>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border border-gray-200">
            {/* Full background image with deep gradient */}
            <div className="absolute inset-0">
              <img src="/images/south_korea.jpg" alt="South Korea" className="w-full h-full object-cover opacity-50 transition-transform duration-[3000ms] hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#081836] via-[#081836]/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#081836] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col xl:flex-row items-center p-6 sm:p-10 lg:p-16 gap-12">
              
              {/* Left text content */}
              <div className="w-full xl:w-[55%]">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-[#e50924] text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-lg shadow-red-500/30">Most Affordable</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider border border-white/20">High Visa Success</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider border border-white/20 hidden sm:inline-block">Part-Time Jobs</span>
                </div>
                
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Study in the World's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffced3] to-white">Tech Capital.</span>
                </h3>
                
                <p className="text-blue-100/90 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
                  Immerse yourself in a country that houses global titans like Samsung and Hyundai. Achieve a globally recognized degree at a fraction of the cost, while enjoying guaranteed legal part-time work rights.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/destinations/south-korea" className="bg-white hover:bg-gray-100 text-[#0b2f6b] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-xl hover:-translate-y-1 duration-300">
                    Explore South Korea <ArrowUpRight size={18} />
                  </Link>
                  <a href="#enquiry" onClick={() => setFormDestination('south-korea')} className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm transition-all border border-white/20 flex items-center gap-2 hover:-translate-y-1 duration-300">
                    <MapPin size={18}/> Check Eligibility
                  </a>
                </div>
              </div>

              {/* Right glass panel */}
              <div className="w-full xl:w-[45%]">
                <div className="bg-white/10 backdrop-blur-2xl rounded-[2rem] p-6 sm:p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden">
                  {/* Decorative glow */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#e50924] rounded-full blur-[80px] opacity-40 pointer-events-none"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
                  
                  <h4 className="text-xl font-bold text-white mb-6 relative z-10 border-b border-white/10 pb-4">Top Study Pathways</h4>
                  
                  <div className="space-y-4 relative z-10">
                    <div className="bg-black/30 hover:bg-black/50 transition-colors rounded-2xl p-5 border border-white/10 flex items-start gap-5 group">
                      <div className="bg-gradient-to-br from-[#e50924] to-red-700 p-3.5 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                        <GraduationCap size={24}/>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">D-2 Degree Visa</div>
                        <p className="text-blue-100/70 text-xs sm:text-sm mt-1.5 leading-relaxed">Direct entry into English-taught Bachelors, Masters, or PhD programs at top-ranked SKY universities.</p>
                      </div>
                    </div>

                    <div className="bg-black/30 hover:bg-black/50 transition-colors rounded-2xl p-5 border border-white/10 flex items-start gap-5 group">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3.5 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                        <BookOpen size={24}/>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">D-4 Language Visa</div>
                        <p className="text-blue-100/70 text-xs sm:text-sm mt-1.5 leading-relaxed">1-year intense Korean language immersion. Unlock up to 100% tuition waivers via the TOPIK exam.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Creative Interactive Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="sm:col-span-2 relative h-56 lg:h-72 rounded-[2rem] overflow-hidden group shadow-lg">
              <img src="/images/seoul_nightscape.jpg" alt="Seoul Nightscape" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081836] via-[#081836]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-[#ffced3] uppercase tracking-widest mb-1 block">Vibrant Lifestyle</span>
                <span className="text-white font-bold text-2xl">Seoul Nightscape</span>
              </div>
            </div>
            <div className="relative h-56 lg:h-72 rounded-[2rem] overflow-hidden group shadow-lg">
              <img src="/images/korean_university.jpg" alt="Korean University" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081836] via-[#081836]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-[#ffced3] uppercase tracking-widest mb-1 block">Academics</span>
                <span className="text-white font-bold text-xl">Top Universities</span>
              </div>
            </div>
            <div className="relative h-56 lg:h-72 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0b2f6b] to-[#06193b] flex flex-col justify-center p-8 border border-[#164580] shadow-lg group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:-translate-y-2 transition-transform duration-300 shadow-inner border border-white/5"><Clock size={28}/></div>
              <h4 className="text-white font-bold text-xl mb-1">Intakes</h4>
              <p className="text-blue-200 text-sm mb-5">Spring (March) <br/> Fall (September)</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#e50924] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-md">TOPIK</span>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded border border-white/20">IELTS</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: Featured destination cards */}
      <section className="py-8 lg:py-10 px-6 lg:px-12 bg-white max-w-7xl mx-auto scroll-reveal">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0b2f6b]">Explore More Destinations</h2>
          <p className="text-sm text-gray-500 mt-1">Showing {filteredDestinations.length} additional destination{filteredDestinations.length !== 1 && 's'}</p>
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
                <p className="text-gray-600 text-sm md:text-base font-medium mb-3 leading-relaxed">
                  {dest.positioning}
                </p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {dest.description}
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
              <form onSubmit={handleEnquiry} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name</label>
                    <input name="name" required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm" placeholder="Your phone" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
                  <input name="email" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm" placeholder="Your email" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Education Level</label>
                    <select name="education" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm text-gray-700">
                      <option value="">Select Level</option>
                      <option value="High School / +2">High School / +2</option>
                      <option value="Bachelors Degree">Bachelors Degree</option>
                      <option value="Masters Degree">Masters Degree</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Preferred Destination</label>
                    <select 
                      name="destination"
                      required
                      value={formDestination}
                      onChange={(e) => setFormDestination(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm text-gray-700"
                    >
                      <option value="">Select Destination</option>
                      <option value="South Korea">South Korea</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Europe">Europe</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Preferred Study Level</label>
                    <select name="studyLevel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm text-gray-700">
                      <option value="">Select Level</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Language Program">Language Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Main Question</label>
                  <textarea name="message" rows="3" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0b2f6b] focus:ring-1 focus:ring-[#0b2f6b] text-sm resize-none" placeholder="What would you like to discuss?"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 text-[#e50924] border-gray-300 rounded focus:ring-[#e50924]" />
                  <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                    I consent to ASTRA Global Education contacting me regarding my study abroad enquiry. I understand I am not required to provide sensitive documents (like passports or bank statements) at this stage.
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <button type="submit" className="inline-flex items-center gap-2 bg-[#e50924] hover:bg-[#c7051e] !text-white px-8 py-3.5 font-semibold rounded-md transition-all text-sm">
                      Book a Counselling Session <ArrowUpRight size={16} />
                    </button>
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-medium text-gray-600">
                      <a href="tel:+9779768567647" className="flex items-center gap-1 hover:text-[#e50924]"><Phone size={14} /> +977 9768567647</a>
                      <a href="mailto:info@astraglobaleducationservices.com" className="flex items-center gap-1 hover:text-[#e50924]"><Mail size={14} /> Email Us</a>
                      <span className="flex items-center gap-1"><MapPin size={14} /> Bagbazar–28, Kathmandu</span>
                    </div>
                  </div>
                  {notice && (
                    <div className={`text-xs p-3 rounded mt-2 w-full ${notice.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-blue-50 text-blue-800'}`}>
                      <p>{notice}</p>
                      {notice.includes('successfully') && (
                        <p className="mt-2 font-medium">
                          Ready for the next step? <Link to="/book-counselling" className="underline font-bold text-[#0b2f6b]">Please fill out our full Book Counselling form</Link>.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
