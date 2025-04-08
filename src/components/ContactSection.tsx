
import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 min-h-screen relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Mail className="text-mountain-dusk mr-3" size={28} />
            <h2 className="section-title">Summit Lodge: Let's Connect</h2>
          </div>
          
          <div className="mountain-card p-8">
            <p className="text-lg text-mountain-stone mb-8 text-center">
              Whether you're looking for a cloud infrastructure expert, a passionate developer, or simply want to 
              share stories about the latest powder day on the slopes, I'd love to connect. Reach out to collaborate 
              on your next technical expedition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-mountain-dusk mr-4" size={24} />
                  <a 
                    href="mailto:chidrupmadhu7@gmail.com" 
                    className="text-mountain-stone hover:text-mountain-dusk transition-colors"
                  >
                    chidrupmadhu7@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-mountain-dusk mr-4" size={24} />
                  <a 
                    href="tel:+91 8431362731" 
                    className="text-mountain-stone hover:text-mountain-dusk transition-colors"
                  >
                    +91 8431362731
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="text-mountain-dusk mr-4" size={24} />
                  <a 
                    href="https://linkedin.com/in/M-Chidrup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mountain-stone hover:text-mountain-dusk transition-colors"
                  >
                    linkedin.com/in/M-Chidrup
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Github className="text-mountain-dusk mr-4" size={24} />
                  <a 
                    href="https://github.com/chidrupa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mountain-stone hover:text-mountain-dusk transition-colors"
                  >
                    github.com/chidrupa
                  </a>
                </div>
              </div>
              
              <div className="mountain-card bg-mountain-snow p-6">
                <h3 className="text-xl font-semibold text-mountain-dusk mb-4">My Certifications</h3>
                <ul className="space-y-3 text-mountain-stone">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-mountain-dusk rounded-full mt-2 mr-2"></div>
                    <span>Azure Fundamentals AZ-900 | Microsoft</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-mountain-dusk rounded-full mt-2 mr-2"></div>
                    <span>The Complete 2024 Web Development Bootcamp | Udemy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-mountain-dusk rounded-full mt-2 mr-2"></div>
                    <span>Business Intelligence Using Power BI | Skill Nation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-mountain-dusk rounded-full mt-2 mr-2"></div>
                    <span>Azure Administrator Associate (AZ-104) | Microsoft In Progress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
