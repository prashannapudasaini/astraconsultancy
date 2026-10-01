import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

const CurvedDividerBottom = () => (
  <svg className="absolute bottom-0 left-0 w-full overflow-hidden text-white" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: 'currentColor', height: '60px', zIndex: 10 }}>
    <path d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"></path>
  </svg>
);

export default function ServiceVisaGuidance() {
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
            <span className="text-white">Visa Guidance</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="inline-block px-3 py-1 bg-[#e50924] text-white text-xs font-bold rounded mb-4">ASTRA Service</div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">Visa Guidance</h1>
              <p className="text-lg text-[#becee3] mb-8">
                Prepare with a clearer understanding of requirements. Understand the visa route connected with your proposed study and identify official information relevant to you.
              </p>
              <Link to="/contact?service=visa" className="inline-flex items-center gap-2 bg-white text-[#0b2f6b] hover:bg-gray-100 px-6 py-3 font-semibold rounded-md transition-all text-sm">
                Book a Counselling Session <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/visa_guidance.jpg" alt="Visa Guidance" className="w-full h-full object-cover" />
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
              <h2 className="text-2xl font-bold text-[#0b2f6b] mb-4">Understanding Visa Guidance</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Applying for a student visa requires careful attention to detail and a thorough understanding of immigration policies. Our Visa Guidance service is designed to demystify this process. We help you identify the specific visa category applicable to your study plans—such as the UK Student visa, NZ Fee Paying Student Visa, or Korea's D-2/D-4 visas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We assist you in reviewing official checklists, ensuring your financial evidence meets the required standards, and preparing for any necessary interviews. Our goal is to help you present a clear, consistent, and well-documented application that aligns with the expectations of the relevant immigration authorities.
              </p>
            </div>

            {/* Service Scope */}
            <div>
              <h2 className="text-2xl font-bold text-[#0b2f6b] mb-4">Scope of Guidance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Visa-route identification', 'Official checklist review',
                  'Document consistency guidance', 'Financial-evidence preparation',
                  'Interview preparation where applicable', 'Application-timeline planning',
                  'Nepal NOC guidance where applicable', 'Official-source verification'
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
                  <h4 className="font-bold text-[#0b2f6b] mb-2">What financial documents do I need?</h4>
                  <p className="text-sm text-gray-600">Financial requirements vary by country and institution. Generally, you must prove you have sufficient funds to cover tuition fees and living costs. We guide you on the acceptable formats for bank statements, loan letters, and sponsorship documents based on official requirements.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-[#0b2f6b] mb-2">Do you process the visa for me?</h4>
                  <p className="text-sm text-gray-600">No. We provide guidance and review your documents against official checklists. The actual submission and processing are handled by the respective embassy, consulate, or visa application center.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* What to prepare */}
            <div className="bg-[#f4f7fb] p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-[#0b2f6b] mb-4">What to prepare</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Valid passport details</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Letter of acceptance (e.g., CAS, Offer of Place)</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Outline of available funding</li>
                <li className="flex gap-2"><span className="text-[#e50924]">•</span> Previous immigration history (if any)</li>
              </ul>
            </div>

            {/* Official Resources */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#0b2f6b] mb-4">Official Resources</h3>
              <div className="space-y-4">
                {[
                  { name: 'Student visa guidance', org: 'GOV.UK' },
                  { name: 'Fee Paying Student Visa', org: 'Immigration New Zealand' },
                  { name: 'Visa and stay information', org: 'Study in Korea' },
                  { name: 'NOC portal', org: 'Government of Nepal' }
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
                <strong>Notice:</strong> Visa approval is decided by the relevant immigration authority. ASTRA cannot guarantee an outcome.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
