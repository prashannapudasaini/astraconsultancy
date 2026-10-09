import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  CheckCircle2,
  MapPin,
  GraduationCap,
  Award,
  Clock,
  Globe,
  Smartphone,
  ArrowRight,
  EyeOff
} from 'lucide-react';

const COUNTRIES = [
  { id: 'kr', name: 'South Korea / दक्षिण कोरिया 🇰🇷' },
  { id: 'uk', name: 'UK / बेलायत 🇬🇧' },
  { id: 'nz', name: 'New Zealand / न्युजिल्याण्ड 🇳🇿' },
  { id: 'jp', name: 'Japan / जापान 🇯🇵' },
  { id: 'eu', name: 'Europe / युरोप 🇪🇺' },
  { id: 'unsure', name: 'Not sure – Need guidance / निश्चित छैन' }
];

const REQUIREMENTS = [
  'Course & University Selection / Course तथा University छनोट',
  'Admission & Application / Admission तथा Application',
  'Scholarship Guidance / Scholarship सम्बन्धी जानकारी',
  'Visa Guidance / Visa सम्बन्धी परामर्श',
  'Language Preparation / Language Preparation',
  'Overall Study Abroad Counseling / समग्र विदेश अध्ययन परामर्श'
];

const TESTS = ['IELTS', 'PTE', 'TOEFL', 'TOPIK', 'JLPT', 'Other / अन्य', 'Not taken yet / अहिलेसम्म परीक्षा दिएको छैन'];

export default function BookCounselling() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    highestQualification: '',
    course: '',
    gpa: '',
    yearOfCompletion: '',
    destinations: [],
    studyLevel: '',
    preferredCourse: '',
    plannedIntake: '',
    languageTestStatus: [],
    testScore: '',
    counselingRequirements: [],
    howDidYouHear: '',
    additionalInfo: ''
  });

  const [formProgress, setFormProgress] = useState(0);

  // GSAP Animations
  useGSAP(() => {
    window.scrollTo(0, 0); // Scroll to top behavior

    gsap.fromTo('.hero-anim',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );

    gsap.fromTo('.card-anim',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.2, stagger: 0.1, ease: 'power2.out' }
    );

    gsap.fromTo('.trust-anim',
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.4, stagger: 0.05, ease: 'back.out(1.5)' }
    );
  }, { scope: containerRef });

  useEffect(() => {
    // Calculate simple progress
    const requiredFields = ['fullName', 'mobile', 'age', 'highestQualification', 'course', 'gpa', 'yearOfCompletion', 'studyLevel', 'plannedIntake', 'howDidYouHear'];
    let filled = 0;
    requiredFields.forEach(field => {
      if (formData[field]) filled++;
    });
    if (formData.destinations.length > 0) filled++;
    if (formData.counselingRequirements.length > 0) filled++;

    setFormProgress(Math.round((filled / (requiredFields.length + 2)) * 100));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name, value) => {
    setFormData(prev => {
      const currentList = prev[name];
      if (currentList.includes(value)) {
        return { ...prev, [name]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [name]: [...currentList, value] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/backend/process_form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Could not submit form: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please try again or contact us directly.');
    }
  };

  return (
    <div className="bg-[#f4f7fb] min-h-screen pb-16 overflow-hidden" ref={containerRef}>

      {/* Hero Section */}
      <section className="relative w-full bg-[#f4f7fb] process-hero-bg pt-16 lg:pt-24 pb-8 lg:pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="hero-anim">
            <span className="inline-block text-xs font-bold tracking-widest text-[#e50924] uppercase mb-4 bg-white/80 process-hero-tag px-4 py-2 rounded-full border border-gray-200">
              ASTRA – From Dream to Destination
            </span>
          </div>
          <h1 className="hero-anim text-4xl lg:text-5xl font-extrabold text-[#0b2f6b] leading-tight tracking-tight mb-4">
            Book Your Free Study Abroad <span className="text-[#e50924]">Counselling</span>
          </h1>
          <p className="hero-anim text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed process-hero-desc">
            Get personalized guidance for university selection, admissions, scholarships, language preparation, and visa processing.
          </p>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">

        {/* Success Message */}
        {isSubmitted && (
          <div className="bg-white rounded-3xl p-10 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-gray-100 card-anim mb-12">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold text-[#0b2f6b] mb-3">Thank You!</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Your counseling request has been received successfully. Our ASTRA counselor will contact you shortly to confirm your session.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-100 max-w-md mx-auto">
              <p className="font-medium text-gray-700 italic">"ASTRA – From Dream to Destination"</p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setIsFormOpen(true);
                setFormData({
                  fullName: '', mobile: '', email: '', age: '', highestQualification: '', course: '', gpa: '', yearOfCompletion: '',
                  destinations: [], studyLevel: '', preferredCourse: '', plannedIntake: '', languageTestStatus: [], testScore: '',
                  counselingRequirements: [], howDidYouHear: '', additionalInfo: ''
                });
              }}
              className="bg-[#0b2f6b] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#1a4a98] transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        )}

        {/* QR Code and Actions Section (Visible when form is hidden) */}
        {!isFormOpen && !isSubmitted && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 text-center card-anim mb-12 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#eff4fb] rounded-2xl flex items-center justify-center text-[#0b2f6b] mb-6">
              <Smartphone size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#0b2f6b] mb-3">Quick Registration via QR</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Scan the QR code to open our Student Counseling & Profile Form directly on your mobile device.
            </p>

            <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 mb-8 inline-block">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}&color=0b2f6b`}
                alt="QR Code for Form"
                className="w-48 h-48 object-contain rounded-xl"
              />
            </div>

            <div className="w-full h-px bg-gray-100 my-8"></div>

            <p className="text-gray-600 mb-4">Prefer to fill it out here?</p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#e50924] hover:bg-[#c7051e] text-white font-bold py-3.5 px-8 rounded-xl shadow-md flex items-center gap-3 transition-colors text-base"
            >
              Open Counseling Form <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Full Form */}
        {isFormOpen && !isSubmitted && (
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden card-anim mb-12 relative">

            {/* Header with Progress */}
            <div className="bg-white border-b border-gray-100 p-6 md:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#0b2f6b]">Student Counseling & Profile Form</h3>
                <p className="text-xs text-gray-500 mt-1">विद्यार्थी परामर्श तथा प्रोफाइल फारम</p>
              </div>

              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6">
                {/* Hide Form Button */}
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#0b2f6b] transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-200"
                >
                  <EyeOff size={16} /> Hide Form
                </button>

                <div className="flex flex-col items-end w-full sm:w-auto">
                  <span className="text-xs font-semibold text-gray-500 mb-2">{formProgress}% Completed</span>
                  <div className="w-full sm:w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#e50924] transition-all duration-300 rounded-full"
                      style={{ width: `${formProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">

              {/* Section 1: Personal Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-6">
                  <div className="w-7 h-7 rounded-md bg-[#eff4fb] text-[#0b2f6b] flex items-center justify-center font-bold text-sm">1</div>
                  <h4 className="text-lg font-bold text-gray-800">Personal Information</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">1. Full Name / पूरा नाम *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">2. Mobile / WhatsApp Number *</label>
                    <input type="tel" name="mobile" required value={formData.mobile} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="Enter mobile number" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">3. Email Address / इमेल ठेगाना</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="Enter email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">4. Age / उमेर *</label>
                    <input type="number" name="age" required value={formData.age} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="Enter your age" />
                  </div>
                </div>
              </div>

              {/* Section 2: Academic Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-6">
                  <div className="w-7 h-7 rounded-md bg-[#eff4fb] text-[#0b2f6b] flex items-center justify-center font-bold text-sm">2</div>
                  <h4 className="text-lg font-bold text-gray-800">Academic Background</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">5. Highest Qualification / उच्चतम शैक्षिक योग्यता *</label>
                    <div className="flex flex-wrap gap-3">
                      {['+2 / High School / कक्षा १२', 'Bachelor’s / स्नातक', 'Master’s / स्नातकोत्तर', 'Other / अन्य'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                          <input type="radio" name="highestQualification" required value={opt} checked={formData.highestQualification === opt} onChange={handleInputChange} className="w-4 h-4 text-[#0b2f6b]" />
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">6. Course / Faculty / Major *</label>
                    <input type="text" name="course" required value={formData.course} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="e.g. Science, Management" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">7. GPA / Percentage *</label>
                    <input type="text" name="gpa" required value={formData.gpa} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="e.g. 3.5 or 80%" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">8. Year of Completion *</label>
                    <input type="text" name="yearOfCompletion" required value={formData.yearOfCompletion} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="e.g. 2023" />
                  </div>
                </div>
              </div>

              {/* Section 3: Study Abroad Plans */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-6">
                  <div className="w-7 h-7 rounded-md bg-[#eff4fb] text-[#0b2f6b] flex items-center justify-center font-bold text-sm">3</div>
                  <h4 className="text-lg font-bold text-gray-800">Study Abroad Plans</h4>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">9. Which destination are you interested in? *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {COUNTRIES.map(c => (
                        <label key={c.id} className={`flex items-center gap-3 px-4 py-2.5 border rounded-lg cursor-pointer transition-all ${formData.destinations.includes(c.name) ? 'border-[#0b2f6b] bg-blue-50/50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
                          <input type="checkbox" onChange={() => handleCheckboxChange('destinations', c.name)} checked={formData.destinations.includes(c.name)} className="w-4 h-4 rounded text-[#0b2f6b] focus:ring-[#0b2f6b]" />
                          <span className="text-sm">{c.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">10. What level do you want to study? *</label>
                    <div className="flex flex-wrap gap-3">
                      {['Bachelor’s / स्नातक', 'Master’s / स्नातकोत्तर', 'Diploma / डिप्लोमा', 'Language / भाषा अध्ययन', 'Other / अन्य', 'Not sure / निश्चित छैन'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                          <input type="radio" name="studyLevel" required value={opt} checked={formData.studyLevel === opt} onChange={handleInputChange} className="w-4 h-4 text-[#0b2f6b]" />
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">11. Preferred Course / Subject</label>
                      <input type="text" name="preferredCourse" value={formData.preferredCourse} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="Course you want to study" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">12. Planning to go abroad? *</label>
                      <select name="plannedIntake" required value={formData.plannedIntake} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none appearance-none">
                        <option value="">Select Timeline</option>
                        <option value="ASAP">As soon as possible / सकेसम्म छिटो</option>
                        <option value="3-6m">Within 3–6 months / ३–६ महिनाभित्र</option>
                        <option value="6-12m">Within 6–12 months / ६–१२ महिनाभित्र</option>
                        <option value=">1y">More than 1 year / १ वर्षभन्दा पछि</option>
                        <option value="Undecided">Not decided / निर्णय भएको छैन</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Language & Requirements */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-6">
                  <div className="w-7 h-7 rounded-md bg-[#eff4fb] text-[#0b2f6b] flex items-center justify-center font-bold text-sm">4</div>
                  <h4 className="text-lg font-bold text-gray-800">Language & Counseling Needs</h4>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">13. Language Test Status</label>
                      <div className="grid grid-cols-2 gap-3">
                        {TESTS.map(t => (
                          <label key={t} className="flex items-center gap-2">
                            <input type="checkbox" onChange={() => handleCheckboxChange('languageTestStatus', t)} checked={formData.languageTestStatus.includes(t)} className="w-4 h-4 rounded text-[#0b2f6b]" />
                            <span className="text-sm text-gray-700">{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">14. Test Score (if any)</label>
                      <input type="text" name="testScore" value={formData.testScore} onChange={handleInputChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none" placeholder="Your score" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">15. What do you need help with? *</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {REQUIREMENTS.map(r => (
                        <label key={r} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${formData.counselingRequirements.includes(r) ? 'border-[#e50924] bg-red-50/30' : 'border-gray-200 bg-gray-50'}`}>
                          <input type="checkbox" onChange={() => handleCheckboxChange('counselingRequirements', r)} checked={formData.counselingRequirements.includes(r)} className="mt-0.5 w-4 h-4 rounded text-[#e50924] focus:ring-[#e50924]" />
                          <span className="text-sm text-gray-700">{r}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">16. How did you hear about ASTRA? *</label>
                    <div className="flex flex-wrap gap-3">
                      {['TikTok', 'Facebook', 'Instagram', 'Google', 'Friend / Family / साथी वा परिवार', 'Walk-in / कार्यालयमा आएर', 'Other / अन्य'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 bg-gray-50 px-4 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100">
                          <input type="radio" name="howDidYouHear" required value={opt} checked={formData.howDidYouHear === opt} onChange={handleInputChange} className="w-4 h-4 text-[#0b2f6b]" />
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">17. Anything else you would like our counselor to know? (Optional)</label>
                    <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} rows={3} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2f6b] focus:border-transparent transition-all outline-none resize-none" placeholder="Any specific requirements or questions..."></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Area */}
              <div className="bg-gray-50 border-t border-gray-100 p-6 -mx-6 -mb-6 md:-mx-10 md:-mb-10 rounded-b-2xl flex flex-col items-center">
                <button type="submit" className="w-full sm:w-auto min-w-[240px] bg-[#0b2f6b] hover:bg-[#1a4a98] text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-colors text-base flex items-center justify-center">
                  Submit Form
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>

            </form>
          </div>
        )}

        {/* Trust Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: Award, title: "Free Counseling" },
            { icon: GraduationCap, title: "Experienced Counselors" },
            { icon: MapPin, title: "Visa Guidance" },
            { icon: Globe, title: "Scholarship Support" },
            { icon: Clock, title: "Fast Response Time" },
          ].map((item, idx) => (
            <div key={idx} className="trust-anim bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 text-[#0b2f6b] rounded-full flex items-center justify-center mx-auto mb-2">
                <item.icon size={20} />
              </div>
              <h4 className="text-xs font-bold text-gray-800 leading-tight">{item.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
