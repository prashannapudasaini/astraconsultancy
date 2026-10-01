import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { usePageEntrance, useScrollReveal, useJourneyAnimation } from '../motion';

export default function Process() {
  const containerRef = useRef();
  usePageEntrance(containerRef);
  useScrollReveal(containerRef);
  useJourneyAnimation(containerRef);

  const steps = [
    {
      title: 'Initial counselling enquiry',
      description: 'You provide a brief overview of your background. We discuss how we can help and schedule a full counselling session.'
    },
    {
      title: 'Academic and goal discussion',
      description: 'You share your academic history, interests, and budget. We discuss which options are viable and identify any missing information.'
    },
    {
      title: 'Destination and course research',
      description: 'We guide you through comparing specific courses, teaching languages, and entry criteria. You decide on your preferred destination and institution.'
    },
    {
      title: 'Institution and entry-criteria review',
      description: 'We review your documents against the institution\'s requirements. You prepare necessary language test scores and academic transcripts.'
    },
    {
      title: 'Application preparation',
      description: 'You complete the application forms and provide truthful written statements. We guide you on document formats and submission deadlines.'
    },
    {
      title: 'Offer review',
      description: 'The institution makes a decision. We help you review the conditions of your offer, deposit requirements, and refund terms.'
    },
    {
      title: 'Visa and NOC planning',
      description: 'You gather financial and personal evidence based on official checklists. We provide guidance on consistency and timing. ASTRA cannot guarantee visa approval.'
    },
    {
      title: 'Pre-departure preparation',
      description: 'After visa approval, you arrange travel, accommodation, and insurance. We help ensure you have the right documents ready for arrival.'
    }
  ];

  return (
    <section className="journey scroll-reveal" style={{borderRadius: 0, minHeight: '80vh'}} ref={containerRef}>
      <div className="wrap">
        <div className="journey-intro">
          <div className="eyebrow light">A THOUGHTFUL PROCESS</div>
          <h2>Big plans begin<br />with small steps.</h2>
          <p>You don’t need every answer today.<br />Start with the questions that matter.</p>
          <Link to="/contact" className="button white">Start a conversation <ArrowUpRight size={18} /></Link>
        </div>
        
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={step.title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <p style={{fontSize: '12px', marginTop: '10px', color: '#8fa5c2'}}>
                  <em>Note: Final decisions remain the responsibility of the student, institution, or authority.</em>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
