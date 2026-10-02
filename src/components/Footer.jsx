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
