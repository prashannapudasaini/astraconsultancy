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
              <img src="/logo_darkmode.png" alt="ASTRA Global Education and Services" />
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
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/></svg>
              </a>
              <a href="https://wa.me/9779768567647" target="_blank" rel="noopener noreferrer" className="hover:text-[#e50924] transition-colors text-[#c3d0e2]" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
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
