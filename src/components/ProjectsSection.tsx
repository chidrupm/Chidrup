
import React from 'react';
import { GitBranch } from 'lucide-react';

interface Project {
  title: string;
  technologies: string;
  description: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Stuttering Dysfluency Assessment Using Deep Learning Techniques System",
      technologies: "TensorFlow, PyTorch, Visual Studio code",
      description: [
        "Developed a deep learning system for assessing speech dysfluency levels, deploying it via cloud services for scalability.",
        "Created actionable insights for speech therapy using advanced algorithms and data analysis, improving diagnostic accuracy.",
        "Focused on creating actionable insights for speech therapy, which required overcoming technical challenges and engaging with best practices in system development.",
        "Developed a comprehensive software solution that improved customer satisfaction by 25% by effectively communicating with customers throughout the planning and implementation phases, leading to a more tailored product."
      ]
    },
    {
      title: "Scalable E-commerce Platform On Azure",
      technologies: "React.js, PostgreSQL, Node.js, Azure cloud services",
      description: [
        "Developed a full-stack e-commerce platform with React, Node.js and Azure cloud services.",
        "Utilized Azure App services, AKS, Azure SQL, and Blob Storage for scalability and high availability.",
        "Implemented CI/CD pipelines using Azure DevOps and Git."
      ]
    },
    {
      title: "DevSecOps - Secrets Management on AKS",
      technologies: "Azure Kubernetes, Terraform, Python",
      description: [
        "Implemented Secrets Management on the Kubernetes Clusters setup on Azure Platform using Azure Kubernetes Service (AKS).",
        "Using this project I have secured the Sensitive Information by storing the information on the Azure Vault by integrating Azure vault with AKS using Managed Identities.",
        "Secured the StatefulSets by reading the sensitive information from Azure vault and mounting the secrets from vault.",
        "Learned how to set up Azure Kubernetes Service Using Terraform and also integrated the vault setup using Terraform.",
        "Alternative I have also used Python to implement the similar setup using Azure SDK."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 min-h-screen relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <GitBranch className="text-mountain-dusk mr-3" size={28} />
            <h2 className="section-title">Vista Points: Selected Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`mountain-card p-6 md:p-8 ${index === 0 ? 'md:col-span-2' : ''}`}>
                <h3 className="text-xl font-bold text-mountain-dusk mb-3">{project.title}</h3>
                <p className="text-sm font-medium text-mountain-sky mb-4">{project.technologies}</p>
                <ul className="list-disc list-inside space-y-2 text-mountain-stone">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
