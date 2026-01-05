import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowWeWork } from './components/HowWeWork';
import { Industries } from './components/Industries';
import { Sovereignty } from './components/Sovereignty';
import { Engagements } from './components/Engagements';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LogisticsPage } from './components/LogisticsPage';
import { HealthcareRCMPage } from './components/HealthcareRCMPage';
import { PricingEngagementPage } from './components/PricingEngagementPage';
import { CaseStudiesIndex } from './components/CaseStudiesIndex';
import { CaseStudyPage } from './components/CaseStudyPage';

const HomePage = () => (
  <>
    <Hero />
    <Problem />
    <Solution />
    <HowWeWork />
    <Industries />
    <Sovereignty />
    <Engagements />
    <FinalCTA />
  </>
);

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCalEmbed } from './hooks/useCalEmbed';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  useCalEmbed();

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-background text-primary selection:bg-stone-200 selection:text-stone-900 flex flex-col">
        <Navbar />

        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/healthcare" element={<HealthcareRCMPage />} />
            <Route path="/case-studies" element={<CaseStudiesIndex />} />
            <Route path="/case-studies/:id" element={<CaseStudyPage />} />
            <Route path="/rcm-pricing-structure" element={<PricingEngagementPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;