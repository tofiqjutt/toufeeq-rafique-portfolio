import { statCards } from '../data/portfolioData';
import { 
  Briefcase, 
  Cpu, 
  Layers, 
  GitBranch, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export const About = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      case 'Layers': return <Layers size={22} />;
      case 'GitBranch': return <GitBranch size={22} />;
      default: return <ShieldCheck size={22} />;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">Engineering Reliable Enterprise & Financial Platforms</h2>
          <p className="section-subtitle">
            8+ years architecting, building, integrating, and maintaining backend infrastructure and high-availability financial systems.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="about-stats-grid">
          {statCards.map((card, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-header">
                <div className="stat-icon">
                  {getIcon(card.icon)}
                </div>
                <div className="stat-value">{card.value}</div>
              </div>
              <h3 className="stat-label">{card.label}</h3>
              <p className="stat-desc">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Narrative & Engineering Pillars */}
        <div className="about-narrative-card">
          <div className="about-narrative-grid">
            <div className="about-narrative-text">
              <h3 className="about-headline">
                Senior Full Stack .NET Developer & Backend Engineer
              </h3>
              <p>
                I am an experienced .NET Developer and Software Engineer with 8+ years of experience in designing, developing, supporting, and maintaining scalable web applications, REST APIs, middleware services, and desktop applications within the .NET ecosystem.
              </p>
              <p>
                My core expertise includes ASP.NET Core, .NET Core, ASP.NET MVC, C#, Angular, SQL Server, Entity Framework, REST/SOAP APIs, JWT authentication, third-party integrations, XML/JSON processing, IIS deployments, production support, troubleshooting, performance optimization, and complete SDLC activities.
              </p>
              <p>
                I have worked extensively on enterprise and financial applications where reliability, security, integrations, data consistency, and production support are critical.
              </p>
            </div>

            {/* Core Capability Checklist Box */}
            <div className="about-competencies-box">
              <h4 className="about-competencies-title">
                Core Engineering Competencies
              </h4>
              <ul className="about-competencies-list">
                <li>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>ASP.NET Core & C# Backend Services</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>REST & SOAP API Integrations</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>Financial Middleware & JWT Security</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>SQL Server & Stored Procedures Tuning</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>Production Troubleshooting & IIS Deployments</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>End-to-End Enterprise SDLC Delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
