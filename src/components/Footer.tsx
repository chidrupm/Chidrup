
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-mountain-night text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Chidrup M</h3>
          <p className="mb-6">Azure Cloud Professional • Full Stack Developer • Outdoor Enthusiast</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:chidrupmadhu7@gmail.com" 
              className="hover:text-mountain-snow transition-colors"
              aria-label="Email"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/M-Chidrup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-mountain-snow transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/chidrupa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-mountain-snow transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
          <p className="text-sm text-mountain-stone">
            &copy; {currentYear} Chidrup M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
