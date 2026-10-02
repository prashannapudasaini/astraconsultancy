import React from 'react';
import { Link } from 'react-router-dom';

const email = 'info@astraglobaleducationservices.com';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/astra-logo.png" alt="ASTRA Global Education and Services" />
            </div>
            <p>From Dream to Destination</p>
            <p className="footer-small">
              Study Abroad · Visa Guidance<br />
              Language Preparation
            </p>
          </div>
          <div>
            <h3>Explore ASTRA</h3>
            <Link to="/about">About us</Link>
            <Link to="/destinations">Study destinations</Link>
            <Link to="/services">Our services</Link>
            <Link to="/process">Application process</Link>
            <Link to="/resources">Official resources</Link>
            <Link to="/faq">Common questions</Link>
          </div>
          <div>
            <h3>Start your journey</h3>
            <Link to="/contact">Counselling enquiry</Link>
            <a href="tel:+9779768567647">+977 9768567647</a>
            <a className="email-link" href={`mailto:${email}`}>{email}</a>
            <p>Bagbazar–28, Kathmandu, Nepal</p>

            <h3 style={{ marginTop: '25px', marginBottom: '15px' }}>Connect with us</h3>
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
              <a href="https://www.facebook.com/share/1av33SBdaE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#e50924] transition-colors text-[#c3d0e2]" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/astra_globaleducation?stkn=ajJ2YjJicHptYmVi&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#e50924] transition-colors text-[#c3d0e2]" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@astra.global.educ?_r=1&_t=ZS-9ADh0whQOV5" target="_blank" rel="noopener noreferrer" className="hover:text-[#e50924] transition-colors text-[#c3d0e2]" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3 3v5a8 8 0 1 1-8-8z"/></svg>
              </a>
              <a href="https://wa.me/9779768567647" target="_blank" rel="noopener noreferrer" className="hover:text-[#e50924] transition-colors text-[#c3d0e2]" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="disclaimer">
          Admission, scholarship and visa decisions are made by the relevant institutions and authorities. Requirements and outcomes depend on individual circumstances.
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} ASTRA Global Education and Services</span>
          <span className="text-[#96aac6] text-left lg:text-center">
            Designed and Developed by <a href="https://motionage.com" target="_blank" rel="noopener noreferrer" className="text-[#c3d0e2] hover:text-[#e50924] transition-colors" style={{ textDecoration: 'none' }}>MotionAge</a>
          </span>
          <div style={{display: 'flex', gap: '20px'}}>
            <Link to="/privacy">Privacy Notice</Link>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
