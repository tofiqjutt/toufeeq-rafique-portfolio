import { statCards } from '../data/portfolioData';
import { 
  Briefcase, 
  Cpu, 
  Layers, 
  GitBranch, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
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
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '36px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '16px' }}>
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
            <div style={{
              background: 'rgba(6, 9, 17, 0.7)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              borderRadius: '12px',
              padding: '24px'
            }}>
              <h4 style={{ 
                fontSize: '0.95rem', 
                color: 'var(--accent-cyan)', 
                marginBottom: '16px', 
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Core Engineering Competencies
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>ASP.NET Core & C# Backend Services</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>REST & SOAP API Integrations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>Financial Middleware & JWT Security</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>SQL Server & Stored Procedures Tuning</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>Production Troubleshooting & IIS Deployments</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
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
