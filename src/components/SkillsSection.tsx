
import React from 'react';
import { Code, Database, Settings } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: ["JavaScript(ES6)", "TypeScript", "React.js", "Node.js", "Express.js", "Spring Boot"]
    },
    {
      icon: Settings,
      title: "DevOps and Cloud Platforms",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Azure Cloud"]
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    }
  ];

  const softSkills = [
    "Code Reviews", "Problem-solving", "Cross-team collaboration", "Real-world problem diagnosis",
    "Objective", "Project Support", "Responsibility", "Technical Issue Resolution", "SaaS", "Teamwork", "Version Control"
  ];

  return (
    <section id="skills" className="py-20 min-h-screen relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Settings className="text-mountain-dusk mr-3" size={28} />
            <h2 className="section-title">Elevation Markers: Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="mountain-card p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="text-mountain-dusk mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-mountain-dusk">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-mountain-stone flex items-center">
                      <div className="w-2 h-2 bg-mountain-sky rounded-full mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mountain-card p-6">
            <h3 className="text-xl font-semibold text-mountain-dusk mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-mountain-snow text-mountain-dusk rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
