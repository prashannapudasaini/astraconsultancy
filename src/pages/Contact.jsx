import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { countries } from '../data';
import { usePageEntrance, useScrollReveal } from '../motion';

const email = 'info@astraglobaleducationservices.com';

export default function Contact() {
  const containerRef = useRef();
  const formRef = useRef();
  const location = useLocation();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [notice, setNotice] = useState('');

  usePageEntrance(containerRef);
  useScrollReveal(containerRef);

  useGSAP(() => {
    if (!formRef.current) return;
    const inputs = formRef.current.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, { 
          scale: 1.01, 
          boxShadow: '0 0 0 2px rgba(229,9,36,0.2)', 
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input, { 
          scale: 1, 
          boxShadow: 'none', 
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
    });
  }, { scope: formRef });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const destParam = params.get('destination');
    const serviceParam = params.get('service');
    
    if (destParam) {
      const country = countries.find(c => c.id === destParam);
      if (country) setSelectedDestination(country.name);
    }
    
    if (serviceParam) {
      if (serviceParam === 'study-abroad') setSelectedService('Study Abroad');
      else if (serviceParam === 'visa-guidance') setSelectedService('Visa Guidance');
      else if (serviceParam === 'language-preparation') setSelectedService('Language Preparation');
    }
  }, [location]);

  async function enquiry(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const data = Object.fromEntries(f.entries());
    
    setNotice('Sending your enquiry...');
    
    try {
      // NOTE: In production, change this URL to the actual absolute path (e.g. 'https://yourdomain.com/backend/process_form.php')
      // If hosting both in same place, '/backend/process_form.php' usually works.
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
  }

  return (
    <section className="contact-section" ref={containerRef}>
      <div className="wrap contact-grid">
        <div className="flex flex-col h-full">
          <div className="eyebrow">LET’S BEGIN WITH A CONVERSATION</div>
          <h2>Your next chapter<br />starts <em>here.</em></h2>
          <p>Tell us what you’re working towards.<br />Let’s explore the possibilities together.</p>
          
          <div className="contact-expect">
            <h3>For a useful first conversation</h3>
            <p>Include your highest qualification, preferred course or destination, and your main question. Call ahead to arrange a visit to the Bagbazar office.</p>
            <p>Ask the team to confirm current services, charges and the next steps relevant to you.</p>
          </div>
          
          <div className="contact-details">
            <a href="tel:+9779768567647">
              <Phone />
              <span><small>CALL US</small>+977 9768567647</span>
            </a>
            <a href={`mailto:${email}`}>
              <Mail />
              <span><small>EMAIL US</small>{email}</span>
            </a>
            <div>
              <MapPin />
              <span><small>VISIT OUR OFFICE</small>Bagbazar–28, Kathmandu, Nepal</span>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden flex-1 min-h-[250px] shadow-sm border border-gray-200 mt-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5516089334057!2d85.3164838!3d27.7052169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193b9348ef31%3A0x9d7fb8b16ebaea8c!2sAstra%20global%20education%20and%20services!5e0!3m2!1sen!2snp!4v1714578193859!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ASTRA Office Location"
            ></iframe>
          </div>
        </div>

        <form ref={formRef} onSubmit={enquiry} className="scroll-reveal flex flex-col h-full">
          <h3>Enquire about counselling</h3>
          <p>Fill out the form below to book a session. Do not request or attach sensitive documents.</p>
          
          <div className="form-grid">
            <label>Full name <span>*</span>
              <input required name="name" autoComplete="name" placeholder="Your full name" />
            </label>
            <label>Phone number <span>*</span>
              <input required name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" minLength="7" maxLength="20" />
            </label>
            <label className="full">Email address <small>(optional)</small>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            
            <label>Preferred destination <span>*</span>
              <select name="destination" required value={selectedDestination} onChange={e => setSelectedDestination(e.target.value)}>
                <option value="" disabled>Select destination</option>
                {countries.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
                <option value="Still exploring">Still exploring</option>
              </select>
            </label>
            
            <label>Preferred service <span>*</span>
              <select name="service" required value={selectedService} onChange={e => setSelectedService(e.target.value)}>
                <option value="" disabled>Select service</option>
                <option value="Study Abroad">Study Abroad</option>
                <option value="Visa Guidance">Visa Guidance</option>
                <option value="Language Preparation">Language Preparation</option>
                <option value="General Counselling">General Counselling</option>
              </select>
            </label>

            <label className="full">Education level <span>*</span>
              <select name="education" required defaultValue="">
                <option value="" disabled>Select level</option>
                <option>Higher secondary / +2</option>
                <option>Bachelor’s</option>
                <option>Master’s</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col flex-1 mt-5 text-[12px] font-medium gap-2">
            <span>Main question or goals <small className="font-normal text-[#778598]">(optional)</small></span>
            <textarea name="message" className="flex-1 min-h-[120px]" placeholder="What would you like to discuss?" style={{ width: '100%', minWidth: 0, border: '1px solid #dce3ec', borderRadius: '3px', padding: '12px', color: '#243c5b', background: '#fff', fontSize: '14px', outline: 'none' }} />
          </label>
          
          <label className="consent">
            <input type="checkbox" required /> 
            <span>I agree to be contacted by ASTRA about this enquiry. <Link to="/privacy">Privacy notice</Link></span>
          </label>
          
          
          <div>
            <button type="submit" className="button red" style={{width: '100%', justifyContent: 'space-between'}}>
              Submit Enquiry <ArrowUpRight size={18} />
            </button>
            {notice && (
              <div role="status" className="form-status" style={{ color: notice.includes('successfully') ? 'green' : 'inherit', marginTop: '10px' }}>
                <p>{notice}</p>
                {notice.includes('successfully') && (
                  <p style={{ marginTop: '8px', color: '#333' }}>
                    Ready for the next step? <Link to="/book-counselling" style={{textDecoration: 'underline', fontWeight: 'bold', color: '#0b2f6b'}}>Please fill out our full Book Counselling form</Link>.
                  </p>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
