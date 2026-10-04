import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Destination from './pages/Destination';
import Services from './pages/Services';
import ServiceStudyAbroad from './pages/ServiceStudyAbroad';
import ServiceVisaGuidance from './pages/ServiceVisaGuidance';
import ServiceLanguagePreparation from './pages/ServiceLanguagePreparation';
import Process from './pages/Process';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import BookCounselling from './pages/BookCounselling';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:id" element={<Destination />} />
        <Route path="services" element={<Services />} />
        <Route path="services/study-abroad" element={<ServiceStudyAbroad />} />
        <Route path="services/visa-guidance" element={<ServiceVisaGuidance />} />
        <Route path="services/language-preparation" element={<ServiceLanguagePreparation />} />
        <Route path="process" element={<Process />} />
        <Route path="resources" element={<Resources />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-counselling" element={<BookCounselling />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
