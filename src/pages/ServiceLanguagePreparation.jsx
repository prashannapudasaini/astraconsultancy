import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

const CurvedDividerBottom = () => (
  <svg className="absolute bottom-0 left-0 w-full overflow-hidden text-white" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: 'currentColor', height: '60px', zIndex: 10 }}>
    <path d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
);

export default function ServiceLanguagePreparation() {
  const containerRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  return (
    <main className="bg-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative py-8 lg:py-10 bg-[#0b2f6b] text-white overflow-hidden pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
          <div className="text-xs font-semibold tracking-widest text-[#d1dced] uppercase mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Language Preparation</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="inline-block px-3 py-1 bg-[#e50924] text-white text-xs font-bold rounded mb-4">ASTRA Service</div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">Language Preparation</h1>
              <p className="text-lg text-[#becee3] mb-8">
                Build readiness for the language demands of your course. Language preparation should begin with the course and institution’s accepted test, score and teaching language.
              </p>
              <Link to="/contact?service=language" className="inline-flex items-center gap-2 bg-white text-[#0b2f6b] hover:bg-gray-100 px-6 py-3 font-semibold rounded-md transition-all text-sm">
                Book a Counselling Session <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/language_prep.jpg" alt="Language Preparation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <CurvedDividerBottom />
      </section>

      <section className="py-8 lg:py-10 px-6 lg:px-12 max-w-7xl mx-auto scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Detailed Explanation */}
            <div>
              <h2 className="text-2xl font-bold text-[#0b2f6b] mb-4">Understanding Language Preparation</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Proficiency in the language of instruction is critical not just for university admission, but for your ability to thrive academically and socially in a new country. Depending on your destination and course, you may need to demonstrate English proficiency (via IELTS or PTE) or local language skills (such as Korean or Japanese).
              </p>
              <p className="text-gray-600 leading-relaxed">
                We guide you through understanding which tests are accepted by your target institutions, the scores required for direct entry versus pathway programs, and the structure of the tests themselves so you can plan your study time effectively.
              </p>
            </div>

            {/* Service Scope */}
            <div>
              <h2 className="text-2xl font-bold text-[#0b2f6b] mb-4">Scope of Guidance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'IELTS Academic overview', 'PTE Academic overview',
                  'Korean-language preparation considerations', 'Japanese-language preparation considerations',
                  'Test-format guidance', 'Skill-area planning',
                  'Test-date planning', 'Institution-specific score verification'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <CheckCircle2 size={16} className="text-[#0b2f6b] shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Questions */}
            <div>
              <h2 className="text-2xl font-bold text-[#0b2f6b] mb-4">Common Questions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-[#0b2f6b] mb-2">Do you guarantee a specific band score?</h4>
                  <p className="text-sm text-gray-600">No. Your final score depends entirely on your current proficiency, dedication to practice, and performance on test day. We provide guidance on test formats and study strategies to help you perform your best.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-[#0b2f6b] mb-2">Which test should I take, IELTS or PTE?</h4>
                  <p className="text-sm text-gray-600">This depends on your preferred learning style and what the specific institution accepts. Both are widely accepted in the UK, Australia, and New Zealand, but you should always verify with your intended university before booking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* What to prepare */}
            <div className="bg-[#f4f7fb] p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-[#0b2f6b] mb-4">What to prepare</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Any previous test scores</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Target intake date (to calculate test deadlines)</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Shortlisted universities or countries</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Current study schedule/availability</li>
              </ul>
            </div>

            {/* Official Resources */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#0b2f6b] mb-4">Official Resources</h3>
              <div className="space-y-4">
                {[
                  { name: 'IELTS official Academic test format', org: 'IELTS' },
                  { name: 'Pearson PTE Academic official info', org: 'Pearson' },
                  { name: 'Institution-specific language requirements', org: 'Various Universities' }
                ].map((res, i) => (
                  <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <span className="block text-[10px] text-gray-400 font-bold mb-1">{res.org}</span>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">{res.name}</h4>
                    <a href="#" className="text-xs text-[#e50924] hover:underline flex items-center gap-1">Read official guidance <ExternalLink size={10}/></a>
                  </div>
                ))}
                <div className="text-[10px] text-gray-400 mt-2">Last reviewed: Sept 2026</div>
              </div>
            </div>

            <div className="bg-[#fff1f2] border border-[#ffced3] rounded-lg p-4 flex items-start gap-3">
              <ShieldCheck size={20} className="text-[#e50924] shrink-0 mt-0.5" />
              <p className="text-xs text-[#a10e1f] leading-snug">
                <strong>Notice:</strong> We provide counselling and preparation guidance. ASTRA does not claim a specific class, teacher, batch, fee, score or guarantee unless explicitly confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
