
import React from 'react';
import { User, Waves, Mountain, Football, BookOpen, Clipboard } from 'lucide-react';

const AboutSection: React.FC = () => {
  const activities = [
    { icon: Waves, name: 'Surfing', description: 'Catching waves as an avid surfer' },
    { icon: Mountain, name: 'Skiing', description: 'Carving down slopes on ski adventures' },
    { icon: Football, name: 'Football', description: 'Competing on the football field' },
    { icon: BookOpen, name: 'Reading', description: 'Expanding horizons through reading' },
    { icon: Clipboard, name: 'Farming', description: 'Connecting with the earth through farming' }
  ];

  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <User className="text-mountain-dusk mr-3" size={28} />
            <h2 className="section-title">Base Camp: About Me</h2>
          </div>
          
          <div className="mountain-card p-6 md:p-8 mb-12">
            <p className="text-lg text-mountain-stone mb-6">
              As a certified Azure professional with a passion for cloud infrastructure and automation, I navigate 
              the technical landscape with the same enthusiasm as I ride ocean waves and carve down mountain slopes. 
              My journey combines technical expertise with a love for the outdoors, creating a unique perspective 
              that enhances my approach to software engineering and cloud solutions.
            </p>
            
            <h3 className="section-subtitle">Education</h3>
            <div className="space-y-4 mb-8">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h4 className="font-semibold text-mountain-dusk">JSS Science and Technology University</h4>
                  <p className="text-mountain-stone">Bachelor of Engineering | Computer Science and Engineering</p>
                </div>
                <p className="text-mountain-stone">Mysuru, India | Aug 2021 - Oct 2024</p>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h4 className="font-semibold text-mountain-dusk">JSS Science and Technology University</h4>
                  <p className="text-mountain-stone">Diploma | Computer Science and Engineering</p>
                </div>
                <p className="text-mountain-stone">Mysuru, India | Aug 2018 - Aug 2021</p>
              </div>
            </div>
          </div>
          
          <h3 className="section-subtitle">Beyond the Code</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="mountain-card p-6 flex items-start space-x-4">
                <activity.icon className="text-mountain-dusk shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-mountain-dusk mb-2">{activity.name}</h4>
                  <p className="text-mountain-stone">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
