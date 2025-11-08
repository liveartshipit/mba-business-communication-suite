import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoreLearningSection from './components/CoreLearningSection';
import ConceptBuildersSection from './components/ConceptBuildersSection';
import BusinessWritingSection from './components/BusinessWritingSection';
import PresentationSection from './components/PresentationSection';
import TeamCommunicationSection from './components/TeamCommunicationSection';
import AIToolsSection from './components/AIToolsSection';
import SoftSkillsSection from './components/SoftSkillsSection';
import SimulationsSection from './components/SimulationsSection';
import ReadingSection from './components/ReadingSection';
import LearningPathSection from './components/LearningPathSection';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <CoreLearningSection />
          <ConceptBuildersSection />
          <BusinessWritingSection />
          <PresentationSection />
          <TeamCommunicationSection />
          <AIToolsSection />
          <SoftSkillsSection />
          <SimulationsSection />
          <ReadingSection />
          <LearningPathSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
