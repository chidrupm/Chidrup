
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import GitHubSection from '@/components/GitHubSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MountainParallax from '@/components/MountainParallax';

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Chidrup M - Portfolio";
    
    // Scroll to top on load
    window.scrollTo(0, 0);
    
    // Optional: Handle scroll animations
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="relative">
      {/* Parallax Background */}
      <MountainParallax />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <GitHubSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
