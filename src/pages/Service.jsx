import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, GraduationCap, FileCheck, BookOpen, Check } from 'lucide-react';

export default function Service() {
  const { id } = useParams();

  const serviceData = {
    'study-abroad': {
      title: 'Study Abroad',
      Icon: GraduationCap,
      intro: 'A considered approach to finding the right course and destination for your academic background and career goals.',
      sections: [
        { title: 'Profile discussion', content: 'We start by reviewing your academic history, strengths, and long-term objectives.' },
        { title: 'Course and destination exploration', content: 'Comparing different countries and specific programs to find the best fit for your interests and budget.' },
        { title: 'Institution research', content: 'Reviewing official university pages, rankings, faculty, and campus facilities.' },
        { title: 'Entry-criteria review', content: 'Ensuring you meet the academic and language requirements before applying.' },
        { title: 'Application planning', content: 'Structuring your timeline to meet deadlines for intakes and scholarships.' },
        { title: 'Document preparation guidance', content: 'Advising on how to prepare transcripts, statements of purpose, and reference letters.' },
        { title: 'Offer-condition review', content: 'Helping you understand the conditions of your offer letter, including deposits and deadlines.' },
        { title: 'Pre-departure planning', content: 'Preparing you for the cultural and academic transition to a new country.' }
      ],
      disclaimer: 'The final admission decision belongs to the institution.'
    },
    'visa-guidance': {
      title: 'Visa Guidance',
      Icon: FileCheck,
      intro: 'Navigate the complexities of student visa applications with accurate, up-to-date information.',
      sections: [
        { title: 'Visa-route identification', content: 'Determining the exact visa category required for your chosen course and destination.' },
        { title: 'Official checklist review', content: 'Going through the immigration authority’s official document requirements.' },
        { title: 'Document consistency review', content: 'Ensuring your application forms and supporting documents are accurate and consistent.' },
        { title: 'Financial-evidence preparation guidance', content: 'Understanding how to demonstrate your funding according to the specific rules of the destination country.' },
        { title: 'Interview preparation', content: 'Where applicable, guiding you on what to expect during a credibility or visa interview.' },
        { title: 'Application-timeline planning', content: 'Planning when to apply to ensure you receive your visa before your course starts.' },
        { title: 'Nepal-specific NOC reminder', content: 'Guidance on when and how to apply for the No Objection Certificate from the Government of Nepal.' }
      ],
      disclaimer: 'ASTRA cannot guarantee visa approval. Decisions are made entirely by the relevant immigration authorities.'
    },
    'language-preparation': {
      title: 'Language Preparation',
      Icon: BookOpen,
      intro: 'Prepare for the language requirements of your chosen institution with targeted support.',
      sections: [
        { title: 'IELTS Academic overview', content: 'Understanding the format of the IELTS test, which assesses listening, reading, writing, and speaking for academic environments.' },
        { title: 'PTE Academic overview', content: 'Familiarization with the computer-based PTE Academic test and its integrated scoring system.' },
        { title: 'Korean-language preparation', content: 'Considerations for students aiming to study in South Korea, including TOPIK requirements and D-4 visa preparation.' },
        { title: 'Japanese-language preparation', content: 'Considerations for Japan, including JLPT levels and preparation for language school admissions.' },
        { title: 'Test-format explanations', content: 'Breaking down how each test is structured and scored.' },
        { title: 'Practice and preparation guidance', content: 'Strategies for improving your language skills and test-taking techniques.' }
      ],
      disclaimer: 'Remember to confirm the accepted test and required score directly with your chosen institution. Contact ASTRA to confirm current class availability and fees.'
    }
  };

  const service = serviceData[id];

  if (!service) {
    return <Navigate to="/services" />;
  }

  const { Icon } = service;

  return (
    <section className="section wrap">
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <div style={{marginBottom: '20px', fontSize: '14px'}}>
          <Link to="/" style={{color: '#64748b'}}>Home</Link> <span style={{color: '#cbd5e1', margin: '0 8px'}}>/</span>
          <Link to="/services" style={{color: '#64748b'}}>Services</Link> <span style={{color: '#cbd5e1', margin: '0 8px'}}>/</span>
          <span style={{color: '#0f172a', fontWeight: 500}}>{service.title}</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px'}}>
          <div style={{background: '#eff4fb', color: '#0b2f6b', padding: '20px', borderRadius: '8px'}}>
            <Icon size={40} />
          </div>
          <h1 style={{fontSize: '40px', margin: 0, letterSpacing: '-1px'}}>{service.title}</h1>
        </div>
        
        <p className="lead" style={{fontSize: '20px', color: '#17375e', marginBottom: '50px', lineHeight: 1.6}}>
          {service.intro}
        </p>

        <div style={{display: 'grid', gap: '30px', marginBottom: '50px'}}>
          {service.sections.map((sec, i) => (
            <div key={i} style={{background: '#f8fafc', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #0b2f6b'}}>
              <h3 style={{fontSize: '18px', marginBottom: '10px'}}>{sec.title}</h3>
              <p style={{color: '#475569', margin: 0}}>{sec.content}</p>
            </div>
          ))}
        </div>

        <div style={{background: '#fef2f2', border: '1px solid #fee2e2', padding: '20px', borderRadius: '8px', marginBottom: '40px'}}>
          <p style={{margin: 0, color: '#991b1b', fontSize: '14px', fontWeight: 500}}>
            <strong>Important note:</strong> {service.disclaimer}
          </p>
        </div>

        <Link to={`/contact?service=${id}`} className="button red">
          Enquire about {service.title} <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
