
import React from 'react';
import { Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  location: string;
  period?: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "RiverTon Trust Financial and Services",
      role: "Cloud Engineer",
      location: "India",
      description: [
        "Worked on Azure-based cloud solutions, including VM provisioning, container orchestration using Kubernetes, and CI/CD pipeline automation.",
        "Innovation tech entrepreneur with expertise in Azure Cloud, AI integration and financial solutions. Designed and developed the company website using Azure Cloud."
      ]
    },
    {
      company: "Let's Pro",
      role: "Software Engineer",
      location: "India",
      description: [
        "Assist a team of 5 engineers to enhance product UI, increasing user engagement by 30% and implementing Agile frameworks to drive continuous integration practices.",
        "Developed and documented a comprehensive Software Development Process that improved the efficiency of relational databases by 30%, utilizing clear written guidelines that enhanced team collaboration and reinforced verbal communication during project meetings.",
        "Collaborated closely with cross-functional teams, driving code reviews and best practices to reduce deployment cycles by 40%."
      ]
    },
    {
      company: "Mantra Surf Club",
      role: "Business Executive",
      location: "India",
      description: [
        "Focus on identifying growth opportunities, building partnerships, and enhancing the club's presence in the market.",
        "My role involves strategizing and implementing initiatives that drive revenue and promote the club's unique offerings."
      ]
    },
    {
      company: "Wearyourego [Freelance]",
      role: "Web Developer",
      location: "India",
      description: [
        "Designed and developed scalable web applications using React.js and Node.js, ensuring cross-browser compatibility and secure payment integrations.",
        "Facilitated workshops aimed at fostering a professional culture of open-mind teamwork among developers and project managers, which provided valuable insights through researching user feedback; this initiative contributed to a 25% improvement in customer satisfaction scores over six months.",
        "Implemented new protocols for managing the Web Infrastructure that encouraged input from Designers, which improved our project turnaround time by 25%, reinforcing a Dedicated team Culture within a Collaborative Environment."
      ]
    },
    {
      company: "Hewlett Packard Enterprise",
      role: "Software Engineer",
      location: "Remote",
      description: [
        "Developed a RESTful web service using Java Spring Boot, implementing business rules to properly capture data, adhering to cloud best practices for system scalability.",
        "Worked on unit tests and collaborated with engineers to improve application architecture and delivery, ensuring smooth deployment across Windows and Linux platforms.",
        "Participated in end-to-end system design, taking full ownership from development to production."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 min-h-screen relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Briefcase className="text-mountain-dusk mr-3" size={28} />
            <h2 className="section-title">The Ascent: Professional Experience</h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-mountain-stone/30 transform md:translate-x-[-0.5px]"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-12 md:ml-[50%]'
              }`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-0 w-4 h-4 rounded-full bg-mountain-dusk transform translate-y-1.5 
                  md:left-[calc(-0.5rem-1px)] md:right-auto"></div>
                
                <div className="mountain-card p-6 md:ml-0">
                  <div className="flex flex-col mb-3">
                    <h3 className="text-xl font-bold text-mountain-dusk">{exp.company}</h3>
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-mountain-stone">{exp.role}</h4>
                      <span className="text-sm text-mountain-stone">{exp.location}</span>
                    </div>
                    {exp.period && <span className="text-sm text-mountain-stone">{exp.period}</span>}
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-mountain-stone">
                    {exp.description.map((item, i) => (
                      <li key={i} className={index % 2 === 0 ? 'md:text-right md:list-none' : ''}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
