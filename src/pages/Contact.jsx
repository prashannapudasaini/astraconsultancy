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

  function enquiry(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Hello ASTRA,\n\nI would like to enquire about counselling.\n\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email') || 'Not provided'}\nPreferred destination: ${f.get('destination')}\nEducation level: ${f.get('education')}\nPreferred Service: ${f.get('service')}\n\nMain question/goals:\n${f.get('message') || ''}\n\nI agree to be contacted about this enquiry.`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Counselling enquiry — ASTRA')}&body=${encodeURIComponent(body)}`;
    setNotice('Your email app will open with a draft. Please send it to complete your enquiry. If it does not open, call +977 9768567647.');
  }

  return (
    <section className="contact-section" ref={containerRef}>
      <div className="wrap contact-grid">
        <div>
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
        </div>

        <form ref={formRef} onSubmit={enquiry} className="scroll-reveal">
          <h3>Enquire about counselling</h3>
          <p>Prepare an email to our team. Your email app opens so you can review and send it. Do not request or attach sensitive documents.</p>
          
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
                <option>Secondary / SEE</option>
                <option>Higher secondary / +2</option>
                <option>Bachelor’s</option>
                <option>Master’s</option>
                <option>Other</option>
              </select>
            </label>

            <label className="full">Main question or goals <small>(optional)</small>
              <textarea name="message" rows="3" placeholder="What would you like to discuss?" />
            </label>
          </div>
          
          <label className="consent">
            <input type="checkbox" required /> 
            <span>I agree to be contacted by ASTRA about this enquiry. <Link to="/privacy">Privacy notice</Link></span>
          </label>
          
          <button type="submit" className="button red" style={{width: '100%', justifyContent: 'space-between'}}>
            Prepare email enquiry <ArrowUpRight size={18} />
          </button>
          <p role="status" className="form-status">{notice}</p>
        </form>
      </div>
    </section>
  );
}
