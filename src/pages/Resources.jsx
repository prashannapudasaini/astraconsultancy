import React, { useRef } from 'react';
import { ArrowUpRight, FileCheck } from 'lucide-react';
import { SourceLinks, reviewed } from '../content';

export default function Resources() {
  const containerRef = useRef();
  const resources = [
    { category: 'NEPAL · NOC', title: 'Nepal NOC guidance', desc: 'Nepal\'s official NOC portal is the starting point for the government\'s certificate for Nepali students studying abroad. Review the instructions for your course and circumstances.', ids: ['noc'] },
    { category: 'TEST FORMAT', title: 'IELTS official format', desc: 'Assesses listening, reading, writing and speaking. Academic and General Training share listening and speaking formats; reading and writing differ.', ids: ['ielts'] },
    { category: 'TEST FORMAT', title: 'PTE Academic official format', desc: 'A computer-based academic English test covering speaking, writing, reading and listening. Check the accepted version and score with your institution.', ids: ['pte'] },
    { category: 'VISA · UK', title: 'UK Student visa and CAS', desc: 'The UK Student visa requires sponsorship by a licensed education provider. Understand the CAS requirements and the documents needed.', ids: ['cas', 'uk'] },
    { category: 'VISA · NZ', title: 'New Zealand Fee Paying Student Visa', desc: 'The Fee Paying Student Visa supports full-time study on an approved course. Prepare your offer of place and evidence of tuition funding.', ids: ['nz'] },
    { category: 'VISA · KOREA', title: 'Korean D-2 and D-4 categories', desc: 'D-2 covers degree programmes; D-4 covers non-degree training, including Korean language training. Identify the correct route.', ids: ['kr'] },
    { category: 'EXAMS · JAPAN', title: 'Japan EJU information', desc: 'Some universities use the Examination for Japanese University Admission for International Students (EJU). Required subjects are set by the institution.', ids: ['jp'] },
    { category: 'STUDY · EUROPE', title: 'European study and visa planning', desc: 'Compare the country, institution, qualification and teaching language. There is no single admission process for all of Europe.', ids: ['eu'] },
    { category: 'FUNDING', title: 'Erasmus Mundus scholarship information', desc: 'Some programmes offer competitive full scholarships; students apply to the institution running the programme. Check eligibility and coverage.', ids: ['erasmus'] },
    { category: 'PLANNING', title: 'Student document preparation checklist', desc: 'General guidance: maintain valid passports, clear academic transcripts, official language score reports, and verifiable financial records.', ids: [] },
    { category: 'PLANNING', title: 'Questions to ask before choosing a consultancy', desc: 'Ask about service scope, clear fees, experience with your destination, and whether they expect you to provide sensitive documents immediately (they shouldn\'t).', ids: [] }
  ];

  return (
    <section className="section resource-section scroll-reveal" style={{minHeight: '80vh', borderRadius: 0}} ref={containerRef}>
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">INFORMATION YOU CAN CHECK</div>
            <h2>Before you apply.<br />Before you commit.</h2>
          </div>
          <p>Practical preparation for students in Nepal,<br />with links to the original official guidance.</p>
        </div>
        
        <div className="resource-grid">
          {resources.map((r, i) => (
            <article className="resource-card" key={i}>
              <span className="resource-category">{r.category}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              {r.ids && r.ids.length > 0 && <SourceLinks ids={r.ids} dated />}
            </article>
          ))}
        </div>
        
        <div className="evidence-note">
          <FileCheck size={21} />
          <p><strong>Read the source. Check the date.</strong> These are planning summaries, not an eligibility decision. Fees, rules and deadlines can change. Official links are provided for verification and do not imply endorsement or partnership with ASTRA. Last reviewed: {reviewed}</p>
        </div>
      </div>
    </section>
  );
}
