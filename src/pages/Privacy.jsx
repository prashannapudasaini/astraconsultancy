import React from 'react';

export default function Privacy() {
  return (
    <section className="section wrap" style={{maxWidth: '800px', minHeight: '70vh'}}>
      <div className="eyebrow">LEGAL</div>
      <h1 style={{fontSize: '40px', margin: '20px 0 40px', letterSpacing: '-1px'}}>Privacy Notice</h1>
      
      <div style={{fontSize: '16px', color: '#334155', lineHeight: 1.8, display: 'grid', gap: '25px'}}>
        <p>
          This privacy notice explains how ASTRA Global Education and Services handles the information you provide through this website and during our counselling services.
        </p>

        <div>
          <h3 style={{fontSize: '20px', color: '#0f172a', marginBottom: '10px'}}>Website Enquiries</h3>
          <p>
            This website does not submit or store enquiry form entries on a server. Choosing "Prepare email enquiry" on the contact page passes the details you enter to your local email application. 
            You must review the draft before sending it to ASTRA.
          </p>
        </div>

        <div>
          <h3 style={{fontSize: '20px', color: '#0f172a', marginBottom: '10px'}}>Sensitive Documents</h3>
          <p>
            We strongly advise against sending sensitive documents (such as passports, financial records, or detailed academic transcripts) in an initial email enquiry. 
            Share sensitive documents only through a secure channel that you have verified with our team directly.
          </p>
        </div>

        <div>
          <h3 style={{fontSize: '20px', color: '#0f172a', marginBottom: '10px'}}>Use of Information</h3>
          <p>
            Information you send to us via email or provide in person is used solely to evaluate your study options, provide counselling, and assist with your application process. 
            We do not sell or share your personal information with third-party marketing companies. 
            Your information will only be shared with educational institutions or relevant authorities when necessary for your application, and only with your knowledge.
          </p>
        </div>

        <div>
          <h3 style={{fontSize: '20px', color: '#0f172a', marginBottom: '10px'}}>Contact Us</h3>
          <p>
            If you have questions about the handling of information you send, please contact us directly at our Bagbazar office, call us at +977 9768567647, or email info@astraglobaleducationservices.com.
          </p>
        </div>
      </div>
    </section>
  );
}
