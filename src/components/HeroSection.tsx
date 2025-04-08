
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-mountain-night mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Welcome to My Digital Summit
          </h1>
          <p className="text-xl md:text-2xl text-mountain-stone mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Azure Cloud Professional • Full Stack Developer • Outdoor Enthusiast
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <a 
              href="#about" 
              className="mountain-button"
            >
              Start Climbing
            </a>
            <a 
              href="/lovable-uploads/806ee44b-0dcf-4ca2-8c35-3ee529c8a022.png" 
              download="Chidrup_M_Resume.png"
              className="px-6 py-3 border-2 border-mountain-dusk text-mountain-dusk rounded-md hover:bg-mountain-dusk hover:text-white transition-all duration-300 font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-mountain-dusk animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
