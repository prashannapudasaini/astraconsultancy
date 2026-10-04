import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { countries } from '../data';
import { SourceLinks, destinationInfo, reviewed } from '../content';

export default function Destination() {
  const containerRef = useRef();
  const { id } = useParams();
  const country = countries.find(c => c.id === id);

  if (!country) {
    return <Navigate to="/destinations" />;
  }  const legacyInfo = destinationInfo[country.code];

  return (
    <div ref={containerRef}>
      <section className="hero" style={{minHeight: '50vh', gridTemplateColumns: '1fr', paddingBottom: 0}}>
        <div className="hero-visual" style={{minHeight: '40vh', borderBottomLeftRadius: '0'}}>
          <img src={country.image} alt={`Study in ${country.name}`} />
          <div className="image-shade" />
          <div className="wrap" style={{position: 'absolute', top: '30px', left: 0, right: 0, zIndex: 10}}>
            <div style={{fontSize: '14px', color: 'rgba(255,255,255,0.8)'}}>
              <Link to="/" style={{color: 'rgba(255,255,255,0.8)'}}>Home</Link> <span style={{margin: '0 8px'}}>/</span>
              <Link to="/destinations" style={{color: 'rgba(255,255,255,0.8)'}}>Destinations</Link> <span style={{margin: '0 8px'}}>/</span>
              <span style={{color: 'white', fontWeight: 500}}>{country.name}</span>
            </div>
          </div>
          <div className="image-label" style={{bottom: '40px', left: '40px'}}>
            <span style={{color: 'white', display: 'flex', alignItems: 'center', gap: '15px'}}>
              <span style={{fontSize: '40px'}}>{country.flag}</span>
              EXPLORE YOUR NEXT CHAPTER
            </span>
            <h2 style={{color: 'white'}}>Study in {country.name}</h2>
          </div>
        </div>
      </section>

      <section className="section wrap scroll-reveal" style={{paddingTop: '60px'}}>
        {country.id === 'south-korea' ? (
          /* =========================================
             SOUTH KOREA SPECIFIC HIGH-IMPACT LAYOUT
             ========================================= */
          <div className="flex flex-col gap-12 relative w-full">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-[#0b2f6b] mb-6">Your Future in South Korea: A Comprehensive Guide</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                South Korea stands at the intersection of ancient cultural heritage and unparalleled technological advancement. With the government’s ambitious "Study in Korea 300K Project," the nation is heavily investing in internationalizing its higher education system, aiming to host 300,000 international students by 2027. This has rapidly made South Korea a premier global destination for ambitious students seeking world-class academics, vibrant city life, and dynamic career opportunities in one of Asia's largest economies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Whether you are aiming to master the language in a rigorous immersion program or jumping directly into an English-taught degree at a top-tier university, understanding the pathways is critical. ASTRA provides comprehensive guidance to help you navigate both the Korean Language Training (D-4) routes and direct Degree Program (D-2) admissions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                  <img src="/images/seoul_nightscape.jpg" alt="Seoul Nightscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#0b2f6b] text-white">
                    <h4 className="font-bold">Dynamic City Life</h4>
                    <p className="text-xs text-blue-200">Experience the 24/7 innovation of Seoul.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                  <img src="/images/korean_university.jpg" alt="Korean University Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#e50924] text-white">
                    <h4 className="font-bold">World-Class Campuses</h4>
                    <p className="text-xs text-red-100">Study in state-of-the-art facilities.</p>
                  </div>
                </div>
              </div>

              {/* Horizontal Widgets Grid to replace the empty sidebar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Box 1: Quick Facts */}
                <div className="bg-[#f4f7fb] p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-blue-200 pb-2">Quick Facts</h3>
                  <ul className="space-y-3 text-sm text-gray-700 flex-1">
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Capital:</span> Seoul</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Currency:</span> KRW (₩)</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Primary Intakes:</span> March & Sept</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Avg. Tuition:</span> $4k - $8k/yr</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Work Rights:</span> Up to 30 hrs/wk</li>
                  </ul>
                </div>

                {/* Box 2: Prestigious Institutions */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-gray-100 pb-2">Prestigious Institutions</h3>
                  <ul className="space-y-2 text-sm text-gray-700 flex-1">
                    <li><span className="font-bold text-[#e50924]">S</span>eoul National University</li>
                    <li><span className="font-bold text-[#e50924]">K</span>orea University</li>
                    <li><span className="font-bold text-[#e50924]">Y</span>onsei University</li>
                    <li className="pt-2 border-t border-gray-50 mt-2">KAIST & POSTECH (Tech)</li>
                    <li>Sungkyunkwan Univ. (SKKU)</li>
                  </ul>
                </div>

                {/* Box 3: Most Searched Keywords */}
                <div className="bg-[#fff1f2] p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-red-200 pb-2">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2 flex-1 items-start content-start">
                    {['GKS Scholarship', 'TOPIK Level 3', 'D-2 Visa', 'Part-time jobs', 'SKY Universities', 'D-4 Program', 'Goshiwon Cost', 'Study in English'].map((keyword, i) => (
                      <span key={i} className="bg-white text-[#17375e] text-xs font-semibold px-2 py-1 rounded-md border border-red-100 shadow-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">The Korean Education System</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The South Korean academic year operates on a two-semester system. The primary academic year begins in the <strong>Spring (March)</strong>, with a secondary intake in the <strong>Fall (September)</strong>. Applications typically close 4-5 months before the start date, requiring meticulous advance planning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The country is home to a mix of National Universities (which are highly prestigious and generally more affordable) and Private Universities. The most famous tier of institutions is known by the acronym "SKY" (Seoul National University, Korea University, and Yonsei University), though dozens of other institutions across Seoul and regional hubs like Busan and Daejeon offer exceptional education, particularly in engineering, robotics, business, and media.
              </p>

              <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Deep Dive: Visa Pathways</h3>
              
              <div className="space-y-8 mb-12">
                {/* D-4 Visa Section */}
                <div className="bg-[#fff1f2] rounded-2xl p-8 border border-red-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#e50924] text-white font-black text-4xl px-4 py-2 rounded-bl-2xl opacity-10">D-4</div>
                  <h4 className="text-2xl font-bold text-[#0b2f6b] mb-2">D-4 Visa: General Trainee (Korean Language)</h4>
                  <p className="text-[#e50924] font-bold text-sm mb-4 uppercase tracking-wider">The Gateway to Fluency</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The D-4-1 visa is specifically designed for international students enrolling in a Korean Language Training Center (KLTC) affiliated with a university. This is the most common starting point for students who do not yet possess the TOPIK (Test of Proficiency in Korean) level required for degree study.
                  </p>
                  
                  <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm border-b border-red-200 pb-1">Program Structure</h5>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Language programs are rigorous and immersive. They operate on a 10-week term basis (4 terms per year: Spring, Summer, Fall, Winter). Students attend class for 4 hours a day, 5 days a week (200 hours per term). Advancing one TOPIK level generally requires successfully completing one 10-week term. To reach the TOPIK Level 3 requirement for most undergraduate degrees starting from absolute beginner, expect to study for at least 6 to 9 months.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Key Requirements</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li>Standard Application Form & Passport.</li>
                        <li>High School Diploma or higher (Apostilled or Consular Verified).</li>
                        <li>Financial proof: Typically a bank balance showing approx. $10,000 USD, maintained for at least 6 months.</li>
                        <li>Sponsor documents (if parents are funding the study, including birth certificates to prove relation).</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Work Rights & Restrictions</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>Strict 6-Month Rule:</strong> D-4 visa holders are absolutely forbidden from working during their first 6 months in Korea.</li>
                        <li>After 6 months, students can apply for a part-time work permit (usually max 20 hours/week on weekdays, unlimited on weekends) subject to maintaining a 90%+ attendance rate.</li>
                        <li>Once accepted into a degree program, the D-4 visa can be converted directly into a D-2 visa without leaving Korea.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* D-2 Visa Section */}
                <div className="bg-[#f4f7fb] rounded-2xl p-8 border border-blue-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#0b2f6b] text-white font-black text-4xl px-4 py-2 rounded-bl-2xl opacity-10">D-2</div>
                  <h4 className="text-2xl font-bold text-[#0b2f6b] mb-2">D-2 Visa: Degree Program Study</h4>
                  <p className="text-[#e50924] font-bold text-sm mb-4 uppercase tracking-wider">The Academic Journey</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The D-2 visa is the official student visa for enrolling in a full-time degree program. It is further categorized into sub-visas based on the level of study: D-2-1 (Associate Degree), D-2-2 (Bachelor's), D-2-3 (Master's), and D-2-4 (Doctoral).
                  </p>

                  <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm border-b border-blue-200 pb-1">Language Tracks</h5>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Korean universities offer two main tracks: Korean-taught programs and English-taught programs. Korean-taught programs require a minimum of TOPIK Level 3 for entry, though Level 4 is often necessary to graduate. English-taught programs require an IELTS score (typically 5.5 to 6.5) or equivalent. Note that even in English-taught programs, acquiring basic Korean is essential for daily survival and future job hunting in Korea.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Key Requirements</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>Certificate of Admission (COA):</strong> Issued by the university after accepting your application and receiving your tuition deposit.</li>
                        <li>Financial proof: Often approx. $20,000 USD (equivalent) in a frozen or standard bank account, depending on the university's accreditation tier.</li>
                        <li>Language proficiency certificates (TOPIK, IELTS, TOEFL) depending on the track.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Work Rights (TOPIK Linked)</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li>D-2 holders can apply for part-time work immediately (no 6-month wait).</li>
                        <li><strong>The TOPIK Factor:</strong> Immigration links working hours to your Korean ability. Students with TOPIK Level 4+ may be allowed to work up to 25-30 hours per week, while those with lower proficiency might be restricted to 10 hours per week.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Living Costs & Accommodation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    South Korea offers high-quality infrastructure at surprisingly affordable rates compared to Western study destinations, though Seoul is significantly more expensive than regional cities.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li><strong>University Dormitories:</strong> Highly recommended for your first year. They are safe, convenient, and affordable (approx. $300 - $500 per month).</li>
                    <li><strong>Goshiwon / Goshitel:</strong> Ultra-compact, single rooms favored by students on a budget. Very cheap (approx. $250 - $400/month), require zero deposit, often including free rice/kimchi.</li>
                    <li><strong>One-Room (Studio):</strong> Off-campus studios offer independence but require a significant deposit ('Jeonse' or 'Wolse'), often $5,000-$10,000 USD upfront.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Post-Study Career Opportunities</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    South Korea is actively seeking to retain foreign talent. The transition from student to professional is highly structured:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li><strong>D-10 Job Seeker Visa:</strong> Allows you to stay in Korea for up to 6 months (renewable up to 2 years) to hunt for full-time employment after graduation.</li>
                    <li><strong>E-7 Professional Visa:</strong> Sponsored by your employer once you secure a professional job related to your major.</li>
                    <li><strong>F-2 Resident Visa:</strong> Graduates get bonus points under this point-based residency system, accelerating the path to long-term residency.</li>
                  </ul>
                </div>
              </div>

              {/* End of article Counselling CTA block */}
              <div className="bg-[#0b2f6b] p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e50924] rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="relative z-10 w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to start your Korean journey?</h3>
                  <ul className="mb-0 pl-5 list-disc text-blue-100 space-y-2">
                    <li>Confirm if you need the D-4 Language Training or direct D-2 entry.</li>
                    <li>Get clarity on the $10,000 / $20,000 financial proof requirements.</li>
                    <li>Don't miss the strict Spring (March) and Fall (September) deadlines.</li>
                  </ul>
                </div>
                <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
                  <Link to={`/contact?destination=${country.id}`} className="bg-[#e50924] hover:bg-white hover:text-[#e50924] text-white flex items-center justify-center gap-2 font-bold rounded-xl p-4 transition-all shadow-lg text-lg text-center w-full">
                    <span>Book Counselling</span> <ArrowUpRight size={20} />
                  </Link>
                  <div className="text-center">
                    <SourceLinks ids={legacyInfo?.ids || []} dated />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : country.id === 'united-kingdom' ? (
          /* =========================================
             UNITED KINGDOM SPECIFIC HIGH-IMPACT LAYOUT
             ========================================= */
          <div className="flex flex-col gap-12 relative w-full">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-[#0b2f6b] mb-6">Study in the United Kingdom: An Extensive Guide to Academic Excellence</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The United Kingdom is universally recognized as a powerhouse of higher education, home to some of the world's most ancient, prestigious, and highest-ranking universities. For centuries, the UK has been the destination of choice for global leaders, Nobel laureates, and innovative thinkers. Whether you are aiming to study at a historic institution in England, a vibrant modern campus in Scotland, or specialized research centers in Wales and Northern Ireland, studying in the UK guarantees a globally respected qualification. A UK degree is not just an academic achievement; it is a passport to global career opportunities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                The UK higher education system is uniquely intensive and fast-paced. Unlike many other countries, you can often complete a Bachelor's degree in just three years and a Master's degree in a single year, saving both time and tuition fees. This guide provides a comprehensive breakdown of everything you need to know about studying in the UK, from choosing the right course and understanding the UK university admissions process, to navigating the Student Visa UK requirements and estimating the cost of living for international students.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                  <img src="/images/uk_city_1791093146123.jpg" alt="London City Life" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#0b2f6b] text-white">
                    <h4 className="font-bold">Vibrant UK Cities</h4>
                    <p className="text-xs text-blue-200">Experience a blend of historic architecture and modern culture.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                  <img src="/images/uk_campus_1791093133646.jpg" alt="Historic UK University Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#e50924] text-white">
                    <h4 className="font-bold">Historic Campuses</h4>
                    <p className="text-xs text-red-100">Study in halls where history was written.</p>
                  </div>
                </div>
              </div>

              {/* Horizontal Widgets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Box 1: Quick Facts */}
                <div className="bg-[#f4f7fb] p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-blue-200 pb-2">Quick Facts</h3>
                  <ul className="space-y-3 text-sm text-gray-700 flex-1">
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Capital:</span> London</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Currency:</span> GBP (£)</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Primary Intakes:</span> Sept & Jan</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Avg. Tuition:</span> £12k - £30k/yr</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Work Rights:</span> Up to 20 hrs/wk</li>
                  </ul>
                </div>

                {/* Box 2: Prestigious Institutions */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-gray-100 pb-2">Top Institutions</h3>
                  <ul className="space-y-2 text-sm text-gray-700 flex-1">
                    <li><span className="font-bold text-[#e50924]">R</span>ussell Group Universities</li>
                    <li>University of Oxford</li>
                    <li>University of Cambridge</li>
                    <li>Imperial College London</li>
                    <li>UCL (University College London)</li>
                  </ul>
                </div>

                {/* Box 3: Most Searched Keywords */}
                <div className="bg-[#fff1f2] p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-red-200 pb-2">Top SEO Searches</h3>
                  <div className="flex flex-wrap gap-2 flex-1 items-start content-start">
                    {['Study in UK', 'UK Universities', 'Student Visa UK', 'Scholarships in UK', 'Cost of living in UK', 'Post-study work visa UK', 'Best courses in UK', 'Study abroad UK'].map((keyword, i) => (
                      <span key={i} className="bg-white text-[#17375e] text-xs font-semibold px-2 py-1 rounded-md border border-red-100 shadow-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">The UK Higher Education System & Best Courses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The UK academic calendar traditionally starts in <strong>September or October</strong>, which is the main intake for almost all university courses. There is also a secondary, smaller intake in <strong>January or February</strong>, primarily for postgraduate courses or specific foundational degrees. To secure your place, you must apply well in advance, often through UCAS (Universities and Colleges Admissions Service) for undergraduate degrees, or directly to the universities for postgraduate studies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Among the <strong>best courses in the UK</strong> are Business and Management, Engineering, Computer Science, Law, Medicine, and the Creative Arts. British institutions emphasize independent study, critical thinking, and research-led teaching. The prestigious Russell Group, comprising 24 leading research universities, represents the pinnacle of UK academic excellence, though many modern universities offer incredible industry connections, practical training, and high employability rates.
              </p>

              <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Deep Dive: Student Visa UK (Tier 4) & Admissions</h3>
              
              <div className="space-y-8 mb-12">
                <div className="bg-[#fff1f2] rounded-2xl p-8 border border-red-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#e50924] text-white font-black text-4xl px-4 py-2 rounded-bl-2xl opacity-10">CAS</div>
                  <h4 className="text-2xl font-bold text-[#0b2f6b] mb-2">The UK Student Visa Process</h4>
                  <p className="text-[#e50924] font-bold text-sm mb-4 uppercase tracking-wider">Securing your place in the UK</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    To <strong>study in the UK</strong>, international students require a Student Visa (formerly the Tier 4 General Student Visa). The most critical component of your visa application is the Confirmation of Acceptance for Studies (CAS). This is an electronic document issued by your chosen university once you have met all conditions of your offer (including language requirements like IELTS) and paid your tuition fee deposit.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Key Requirements</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>CAS Letter:</strong> Issued by a licensed student sponsor.</li>
                        <li><strong>Proof of Funds:</strong> You must prove you have enough money to pay for your first year of tuition fees, plus living costs (approx. £1,334/month for London, £1,023/month outside London for up to 9 months).</li>
                        <li><strong>English Proficiency:</strong> Usually demonstrated through an IELTS for UKVI or PTE Academic UKVI test.</li>
                        <li><strong>ATAS Certificate & TB Test:</strong> Required for specific technical subjects and students from certain countries, including Nepal.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Work Rights & Restrictions</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>During Term Time:</strong> International students enrolled in degree-level programs can typically work up to 20 hours per week.</li>
                        <li><strong>During Vacations:</strong> You can work full-time during official university holidays.</li>
                        <li>Work rights offer a great way to gain local experience and help manage the <strong>cost of living in the UK for international students</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Cost of Living & Scholarships in UK</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The <strong>cost of living in the UK for international students</strong> varies greatly depending on the location. London and the South East of England are significantly more expensive than cities in the North of England, Scotland, Wales, or Northern Ireland.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li><strong>Accommodation:</strong> University halls of residence range from £400 to £800+ per month. Private renting can cost similar amounts but may require setting up utility bills separately.</li>
                    <li><strong>Daily Expenses:</strong> Budget for groceries, transport, study materials, and socializing. Student discounts (like the TOTUM card) help stretch your budget.</li>
                    <li><strong>Scholarships in UK:</strong> Numerous funding opportunities exist, such as the Chevening Scholarships, Commonwealth Scholarships, and university-specific merit awards which can range from £1,000 discounts to fully-funded tuition.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Post-Study Work Visa UK (Graduate Route)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    One of the most attractive aspects of a UK education is the Graduate Route visa, commonly known as the <strong>Post-study work visa UK</strong>. This incredible opportunity allows you to launch your global career directly after graduation.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li><strong>Duration:</strong> International students successfully completing an undergraduate or master’s degree can stay and work, or look for work, in the UK for <strong>two years</strong>. PhD graduates can stay for <strong>three years</strong>.</li>
                    <li><strong>Flexibility:</strong> The Graduate Route is unsponsored, meaning you do not need a job offer to apply, and you can work in almost any role or skill level.</li>
                    <li><strong>Pathway to Settlement:</strong> While the Graduate Route doesn't directly lead to settlement, it provides the time to secure a skilled job, after which you can transition to a Skilled Worker Visa, which does count towards permanent residency.</li>
                  </ul>
                </div>
              </div>

              {/* End of article Counselling CTA block */}
              <div className="bg-[#0b2f6b] p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e50924] rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="relative z-10 w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to embark on your UK study adventure?</h3>
                  <ul className="mb-0 pl-5 list-disc text-blue-100 space-y-2">
                    <li>Get clarity on university selection and UCAS applications.</li>
                    <li>Understand the exact financial proof required for your Student Visa.</li>
                    <li>Explore scholarship opportunities to maximize your budget.</li>
                  </ul>
                </div>
                <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
                  <Link to={`/contact?destination=${country.id}`} className="bg-[#e50924] hover:bg-white hover:text-[#e50924] text-white flex items-center justify-center gap-2 font-bold rounded-xl p-4 transition-all shadow-lg text-lg text-center w-full">
                    <span>Book UK Counselling</span> <ArrowUpRight size={20} />
                  </Link>
                  <div className="text-center">
                    <SourceLinks ids={['cas', 'uk']} dated />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : country.id === 'new-zealand' ? (
          /* =========================================
             NEW ZEALAND SPECIFIC HIGH-IMPACT LAYOUT
             ========================================= */
          <div className="flex flex-col gap-12 relative w-full">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-[#0b2f6b] mb-6">Study in New Zealand: A Gateway to Innovation and Nature</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you choose to <strong>study in New Zealand</strong>, you are opting for an educational experience that seamlessly blends world-class academics with breathtaking natural landscapes and an unbeatable quality of life. Renowned for its safe, welcoming communities, and progressive society, New Zealand has rapidly emerged as a top-tier destination for international students. The New Zealand education system is heavily research-focused and highly practical, ensuring that graduates are well-equipped with the critical thinking skills demanded by the modern global workforce.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                All <strong>New Zealand universities</strong> are ranked in the top 3% globally, guaranteeing a high standard of education regardless of which institution you choose. From vibrant urban hubs like Auckland and Wellington to the stunning alpine environments of the South Island, studying here offers a perfect work-life balance. Furthermore, the country provides incredibly strong post-study work rights and clear pathways to <strong>PR in New Zealand</strong> for skilled graduates, making it the ultimate destination for long-term career growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                  <img src="/images/nz_city_1791093194604.jpg" alt="Auckland City Skyline" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#0b2f6b] text-white">
                    <h4 className="font-bold">Vibrant Urban Hubs</h4>
                    <p className="text-xs text-blue-200">Study in safe, diverse, and fast-growing cities.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                  <img src="/images/nz_campus_1791093181231.jpg" alt="Scenic New Zealand Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#e50924] text-white">
                    <h4 className="font-bold">Breathtaking Campuses</h4>
                    <p className="text-xs text-red-100">Experience an unmatched connection with nature.</p>
                  </div>
                </div>
              </div>

              {/* Horizontal Widgets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Box 1: Quick Facts */}
                <div className="bg-[#f4f7fb] p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-blue-200 pb-2">Quick Facts</h3>
                  <ul className="space-y-3 text-sm text-gray-700 flex-1">
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Capital:</span> Wellington</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Currency:</span> NZD ($)</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Primary Intakes:</span> Feb & July</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Avg. Tuition:</span> $25k - $40k/yr</li>
                    <li className="flex justify-between items-center"><span className="font-semibold text-[#0b2f6b]">Work Rights:</span> Up to 20 hrs/wk</li>
                  </ul>
                </div>

                {/* Box 2: Prestigious Institutions */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-gray-100 pb-2">Top Universities</h3>
                  <ul className="space-y-2 text-sm text-gray-700 flex-1">
                    <li><span className="font-bold text-[#e50924]">U</span>niversity of Auckland</li>
                    <li>University of Otago</li>
                    <li>Victoria University of Wellington</li>
                    <li>University of Canterbury</li>
                    <li>Massey University</li>
                  </ul>
                </div>

                {/* Box 3: Most Searched Keywords */}
                <div className="bg-[#fff1f2] p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#0b2f6b] mb-4 border-b border-red-200 pb-2">Top SEO Searches</h3>
                  <div className="flex flex-wrap gap-2 flex-1 items-start content-start">
                    {['Study in New Zealand', 'New Zealand Universities', 'Student Visa New Zealand', 'Scholarships in New Zealand', 'Cost of living in NZ', 'Post-study work visa NZ', 'PR in New Zealand', 'Best courses in New Zealand'].map((keyword, i) => (
                      <span key={i} className="bg-white text-[#17375e] text-xs font-semibold px-2 py-1 rounded-md border border-red-100 shadow-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Education System & Best Courses in New Zealand</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The academic year in New Zealand is aligned with the Southern Hemisphere calendar, typically starting in <strong>February/March</strong> (Semester 1) and continuing with a second intake in <strong>July</strong> (Semester 2). The system is robust, monitored by the New Zealand Qualifications Authority (NZQA), ensuring that your degree meets the highest international standards. The pedagogical approach focuses on problem-solving, collaboration, and applied learning, rather than just rote memorization.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The <strong>best courses in New Zealand</strong> include Information Technology, Agriculture, Environmental Science, Engineering, Business, and Hospitality and Tourism. Universities emphasize deep integration with industry, and you will often find that your coursework involves solving real-world problems for local businesses. Additionally, the Institutes of Technology and Polytechnics (ITPs) offer highly practical, vocational training that is well-aligned with the country's skill shortage lists.
              </p>

              <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Deep Dive: Student Visa New Zealand</h3>
              
              <div className="space-y-8 mb-12">
                <div className="bg-[#fff1f2] rounded-2xl p-8 border border-red-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#e50924] text-white font-black text-4xl px-4 py-2 rounded-bl-2xl opacity-10">VISA</div>
                  <h4 className="text-2xl font-bold text-[#0b2f6b] mb-2">The Fee Paying Student Visa</h4>
                  <p className="text-[#e50924] font-bold text-sm mb-4 uppercase tracking-wider">Your pathway to study</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    To <strong>study abroad New Zealand</strong>, you will need to apply for the Fee Paying Student Visa. Immigration New Zealand (INZ) has a streamlined online application process, but it requires meticulous documentation. You must first secure an unconditional Offer of Place from an approved education provider before applying for your visa.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Key Requirements</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>Offer of Place:</strong> Confirmation of acceptance into a program.</li>
                        <li><strong>Proof of Funds:</strong> You must demonstrate you have at least NZD $20,000 per year of study to cover living expenses, plus the return airfare or funds to purchase one.</li>
                        <li><strong>Medical & Police Certificates:</strong> Depending on how long you intend to stay, you may need a chest x-ray and police clearance.</li>
                        <li><strong>Insurance:</strong> Full medical and travel insurance is mandatory for international students.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0b2f6b] mb-2 text-sm">Work Rights & Restrictions</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li>Most international students can work up to 20 hours a week during the academic year.</li>
                        <li>Full-time work is permitted during scheduled summer holidays.</li>
                        <li>Masters by Research and PhD students have unlimited work rights.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Cost of Living & Scholarships in New Zealand</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Understanding the <strong>cost of living in NZ for international students</strong> is crucial. While cities like Auckland and Wellington have higher living costs, regional areas offer a more affordable lifestyle.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li><strong>Accommodation:</strong> Options include Halls of Residence (great for first-years, approx. NZD $350-$500/week usually including food), Homestays, and shared flats (NZD $150-$250/week plus bills).</li>
                    <li><strong>Everyday Costs:</strong> Factoring in groceries, transport, and utilities, most students need about NZD $1,600 to $2,000 per month.</li>
                    <li><strong>Scholarships in New Zealand:</strong> Look out for the New Zealand Excellence Awards (NZEA), Manaaki New Zealand Scholarships, and generous university-specific bursaries to support your studies.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0b2f6b] mb-6 border-b border-gray-200 pb-4">Post-Study Work Visa NZ & PR Pathways</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    New Zealand offers excellent career prospects for graduates. The <strong>post-study work visa NZ</strong> allows you to gain invaluable international work experience after you finish your studies.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li><strong>Duration:</strong> Graduates of a Bachelor's, Master's, or PhD degree are typically eligible for a 3-year open post-study work visa.</li>
                    <li><strong>Flexibility:</strong> This visa is open, meaning you can work for almost any employer in any job, giving you time to find a role related to your studies.</li>
                    <li><strong>PR in New Zealand:</strong> The country operates a points-based immigration system. Earning a degree in New Zealand and gaining local skilled work experience significantly boosts your points, creating a strong pathway to Permanent Residency (PR).</li>
                  </ul>
                </div>
              </div>

              {/* End of article Counselling CTA block */}
              <div className="bg-[#0b2f6b] p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e50924] rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="relative z-10 w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to embrace the New Zealand lifestyle?</h3>
                  <ul className="mb-0 pl-5 list-disc text-blue-100 space-y-2">
                    <li>Determine which university and course aligns with your career goals.</li>
                    <li>Understand the NZD $20,000 proof of funds requirement.</li>
                    <li>Map out your potential pathway from study to Post-Study Work Visa.</li>
                  </ul>
                </div>
                <div className="relative z-10 w-full md:w-1/3 flex flex-col gap-4">
                  <Link to={`/contact?destination=${country.id}`} className="bg-[#e50924] hover:bg-white hover:text-[#e50924] text-white flex items-center justify-center gap-2 font-bold rounded-xl p-4 transition-all shadow-lg text-lg text-center w-full">
                    <span>Book NZ Counselling</span> <ArrowUpRight size={20} />
                  </Link>
                  <div className="text-center">
                    <SourceLinks ids={['nz']} dated />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* =========================================
             GENERIC LAYOUT FOR OTHER COUNTRIES
             ========================================= */
          <div style={{display: 'grid', gridTemplateColumns: '1fr 350px', gap: '60px'}} className="about-grid">
            <div>
              <p className="lead text-[22px] text-[#17375e] mb-[30px]">{country.overview}</p>
              
              <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Why consider {country.name}?</h3>
              <p style={{marginBottom: '30px'}}>{country.whyConsider}</p>

              <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Study Levels</h3>
              <ul style={{marginBottom: '30px', paddingLeft: '20px', listStyle: 'disc'}}>
                {country.studyLevels.map((level, i) => (
                  <li key={i} style={{marginBottom: '8px'}}>{level}</li>
                ))}
              </ul>

              <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Popular Subject Areas</h3>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px'}}>
                {country.popularStudyAreas.map((area, i) => (
                  <span key={i} className="bg-[#f0f4f9] px-3 py-1.5 rounded text-[13px] font-medium text-[#17375e]">
                    {area}
                  </span>
                ))}
              </div>

              <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Entry & Language Requirements</h3>
              <p style={{marginBottom: '10px'}}><strong>Academic:</strong> {country.generalEntryRequirements}</p>
              <p style={{marginBottom: '30px'}}><strong>Language:</strong> {country.languageConsiderations}</p>

              <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Application Steps</h3>
              <ul style={{marginBottom: '30px', paddingLeft: '20px', listStyle: 'decimal'}}>
                {country.applicationSteps.map((step, i) => (
                  <li key={i} style={{marginBottom: '8px'}}>{step}</li>
                ))}
              </ul>

              <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Visa & Documents</h3>
              <p style={{marginBottom: '10px'}}>{country.visaOverview}</p>
              <p style={{marginBottom: '30px'}}>Common documents include: {country.commonDocuments.join(', ')}.</p>

              <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Funding & Accommodation</h3>
              <p style={{marginBottom: '10px'}}><strong>Scholarships:</strong> {country.scholarshipInfo}</p>
              <p style={{marginBottom: '30px'}}><strong>Accommodation:</strong> {country.accommodationPlanning}</p>
            </div>

            <div>
              <div className="bg-[#f2f6fb] p-[30px] rounded-lg sticky top-[120px]">
                <h3 style={{fontSize: '18px', marginBottom: '15px'}}>Questions to bring to counselling</h3>
                <ul className="mb-[25px] pl-[20px] list-disc text-[14px] text-[#5b718c]">
                  {country.questionsToAsk.map((q, i) => (
                    <li key={i} style={{marginBottom: '10px'}}>{q}</li>
                  ))}
                </ul>

                <Link to={`/contact?destination=${country.id}`} className="button red" style={{width: '100%', justifyContent: 'space-between'}}>
                  Book counselling for {country.name} <ArrowUpRight size={18} />
                </Link>
                
                <div style={{marginTop: '30px'}}>
                  <SourceLinks ids={legacyInfo?.ids || []} dated />
                  <p className="text-[12px] text-[#67778a] mt-[15px] leading-[1.6]">
                    General planning information. Requirements can change and depend on your circumstances. Check the linked official guidance before applying; ASTRA does not make admission or visa decisions. Last reviewed: {reviewed}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
