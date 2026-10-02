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
      </section>
    </div>
  );
}
