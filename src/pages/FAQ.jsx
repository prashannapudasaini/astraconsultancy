import React, { useState, useRef } from 'react';
import { Phone, Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const containerRef = useRef();
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    ['How do I begin my study abroad journey?', 'Start with a conversation about your education, interests and preferred destination. Call ASTRA or prepare an email enquiry using the form below. Our office is in Bagbazar–28, Kathmandu.'],
    ['What should I prepare for counselling?', 'Have an overview of your academic qualifications, preferred course or subject, destination interests and budget ready. The team can explain which documents are relevant to your individual plans. Do not send passports or financial records in an initial email enquiry.'],
    ['Which language preparation courses are available?', 'ASTRA provides language preparation. Contact the team to confirm the languages, tests, class schedules and fees currently offered for your intended study destination.'],
    ['Are admission, scholarships or visas guaranteed?', 'No. Admission and scholarship decisions are made by institutions or award providers, and visa decisions are made by the relevant authorities. Eligibility and outcomes depend on your individual circumstances.'],
    ['How much does counselling or application support cost?', 'Contact ASTRA for current service availability and fees. Ask for a clear explanation of the scope, charges and applicable terms before proceeding.'],
    ['What is Nepal’s NOC?', 'A No Objection Certificate is issued by the Government of Nepal for Nepali students studying abroad. Use the official NOC portal linked in our resources section to check current instructions and the document requirements for your circumstances.'],
    ['Is an offer letter the same as a UK CAS?', 'No. The UK Student visa process uses a Confirmation of Acceptance for Studies (CAS) reference issued by a licensed student sponsor. GOV.UK explains the course and CAS requirements in the United Kingdom study guide above.'],
    ['Can I use one checklist for every European country?', 'No. Europe is a region with different national systems. Check the selected country’s official visa or residence guidance and the institution’s admissions requirements. Our Europe guide links to the European Commission’s planning resources.'],
    ['How do I check a scholarship opportunity?', 'Read the provider’s eligibility, award coverage, selection process and current deadline. Erasmus Mundus is one official example linked in our resources. A scholarship listing is not a promise of funding or an ASTRA partnership.']
  ];

  return (
    <section className="section wrap faq-grid scroll-reveal" style={{minHeight: '70vh'}} ref={containerRef}>
      <div>
        <div className="eyebrow">A LITTLE MORE CLARITY</div>
        <h2>Good questions.<br />Honest answers.</h2>
        <p>Have something else in mind?<br />We’re a phone call away.</p>
        <a href="tel:+9779768567647" className="text-link"><Phone size={18} /> +977 9768567647</a>
      </div>
      <div>
        {faqs.map(([q, a], i) => (
          <div className="faq" key={q}>
            <button aria-expanded={openFaq === i} aria-controls={'faq-' + i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <span>{q}</span>
              {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div id={'faq-' + i} hidden={openFaq !== i}>
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
