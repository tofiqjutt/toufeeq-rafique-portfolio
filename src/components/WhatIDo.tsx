import { servicesData } from '../data/portfolioData';
import { 
  Briefcase, 
  Server, 
  GitPullRequest, 
  Activity, 
  Database, 
  ShieldCheck, 
  Cloud, 
  Layers 
} from 'lucide-react';

export const WhatIDo = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server size={24} />;
      case 'GitPullRequest': return <GitPullRequest size={24} />;
      case 'Activity': return <Activity size={24} />;
      case 'Database': return <Database size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Cloud': return <Cloud size={24} />;
      case 'Layers': return <Layers size={24} />;
      default: return <Server size={24} />;
    }
  };

  return (
    <section id="what-i-do" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Enterprise software engineering spanning the complete lifecycle: from system architecture and API integrations to database tuning and live production triage.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">
                {getServiceIcon(service.icon)}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
