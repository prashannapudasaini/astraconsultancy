import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

const CurvedDividerBottom = () => (
  <svg className="absolute bottom-0 left-0 w-full overflow-hidden text-white" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: 'currentColor', height: '60px', zIndex: 10 }}>
    <path d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
);

export default function ServiceStudyAbroad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-8 lg:py-10 bg-[#0b2f6b] text-white overflow-hidden pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
          <div className="text-xs font-semibold tracking-widest text-[#d1dced] uppercase mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Study Abroad</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="inline-block px-3 py-1 bg-[#e50924] text-white text-xs font-bold rounded mb-4">ASTRA Service</div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">Study Abroad</h1>
              <p className="text-lg text-[#becee3] mb-8">
                Explore the right academic direction. Discuss your subject interests, education history, preferred study level and destination goals before selecting a course or institution.
              </p>
              <Link to="/contact?service=study" className="inline-flex items-center gap-2 bg-white text-[#0b2f6b] hover:bg-gray-100 px-6 py-3 font-semibold rounded-md transition-all text-sm">
                Book a Counselling Session <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/study_abroad.jpg" alt="Study Abroad" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <CurvedDividerBottom />
      </section>

      <section className="py-8 lg:py-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Detailed Explanation */}
            <div>
              <h2 className="text-2xl font-bold text-[#0b2f6b] mb-4">Understanding Study Abroad</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Choosing to study abroad is a significant academic and financial decision. ASTRA helps you navigate the complex landscape of international education. We don't just match you with a university; we help you understand how different education systems work, what entry requirements look like, and how your current academic background aligns with your future goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach is entirely student-focused. We begin by reviewing your transcripts and listening to your career objectives. From there, we explore potential courses, compare destinations, and map out a clear, realistic timeline for your application.
              </p>
            </div>

            {/* Service Scope */}
            <div>
              <h2 className="text-2xl font-bold text-[#0b2f6b] mb-4">Scope of Guidance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Academic profile discussion', 'Course and subject exploration',
                  'Destination comparison', 'Institution research',
                  'Entry-requirement review', 'Application timeline planning',
                  'Offer-condition discussion', 'Pre-departure questions'
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
                  <h4 className="font-bold text-[#0b2f6b] mb-2">How early should I start planning?</h4>
                  <p className="text-sm text-gray-600">Ideally, 9 to 12 months before your intended intake. This allows time for language preparation, academic documentation, and meeting specific admission deadlines.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-[#0b2f6b] mb-2">Can you guarantee admission or a scholarship?</h4>
                  <p className="text-sm text-gray-600">No. Admission and scholarships are strictly decided by the institution based on your academic merit and their specific criteria. We provide guidance to ensure your application is as strong and accurate as possible.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* What to prepare */}
            <div className="bg-[#f4f7fb] p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-[#0b2f6b] mb-4">What to prepare</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Academic transcripts</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Details of any education gaps</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Existing language test scores</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Preferred subjects/career goals</li>
              </ul>
            </div>

            {/* Official Resources */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#0b2f6b] mb-4">Official Resources</h3>
              <div className="space-y-4">
                {[
                  { name: 'Study in Europe', org: 'European Commission' },
                  { name: 'Study in Japan', org: 'Study in Japan' },
                  { name: 'Study in Korea', org: 'Study in Korea' }
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
                <strong>Notice:</strong> Institutions decide admission. Authorities decide visas. ASTRA provides preparation guidance only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
