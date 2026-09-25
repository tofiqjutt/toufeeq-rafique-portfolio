import { useState } from 'react';
import { currentRoleData } from '../data/portfolioData';
import { 
  Building2, 
  MapPin, 
  CheckCircle, 
  Layers, 
  Server, 
  Globe, 
  Database, 
  Cpu, 
  Workflow
} from 'lucide-react';

export const CurrentRole: React.FC = () => {
  const [selectedArchNode, setSelectedArchNode] = useState<number | null>(null);

  const nodeDetails = [
    {
      title: 'Angular Web & Mobile Interfaces',
      summary: 'Responsive client applications for financial investors and portfolio managers.',
      details: 'Built with Angular 12+ utilizing reactive forms, RxJS observables, secure token interceptors, and strict TypeScript types. Communicates via authenticated REST endpoints.'
    },
    {
      title: 'ASP.NET Core APIs & Middleware Pipeline',
      summary: 'High-throughput API gateway with JWT validation, CORS, and request sanitization.',
      details: 'Acts as the central gateway orchestrating inbound traffic. Manages bearer authentication tokens, claims verification, request logging, rate limiting, and SOAP/REST adapters.'
    },
    {
      title: 'Core Financial Business Modules',
      summary: 'Domain logic, transaction calculation engines, and third-party orchestration.',
      details: 'C# class libraries enforcing financial validation rules, transaction lifecycle states, external payment gateway coordination, and automated notifications.'
    },
    {
      title: 'SQL Server High-Concurrency Database',
      summary: 'Mission-critical relational storage, stored procedures, and audit journals.',
      details: 'Enterprise schema optimized for ACID transactions. Utilizes parameterized stored procedures, index optimization, scheduled SQL Jobs for end-of-day processing, and data consistency.'
    }
  ];

  return (
    <section id="current-role" className="current-role-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Building2 size={14} />
            <span>Active Enterprise Engagement</span>
          </div>
          <h2 className="section-title">Current Role — Financial Technology Engineering</h2>
          <p className="section-subtitle">
            Leading backend API development, middleware architecture, third-party integrations, and production support for asset management platforms.
          </p>
        </div>

        <div className="current-role-card">
          <div className="role-header">
            <div>
              <div className="role-company-badge">
                <span className="pulse-dot"></span>
                <span>Active Role • March 2023 – Present</span>
              </div>
              <h3 className="role-title">{currentRoleData.role}</h3>
              <div className="role-company">IDENFO Technologies</div>
            </div>

            <div className="role-meta">
              <div className="role-duration">{currentRoleData.duration}</div>
              <div className="role-location">
                <MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />
                {currentRoleData.location}
              </div>
            </div>
          </div>

          {/* Project Highlight: HBL Asset Management Platform */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ 
              fontSize: '1.25rem', 
              color: '#ffffff', 
              marginBottom: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px' 
            }}>
              <Workflow size={20} color="var(--accent-cyan)" />
              <span>{currentRoleData.hblAmcHighlight.title}</span>
            </h4>
            
            <div className="role-overview-quote">
              "{currentRoleData.hblAmcHighlight.quote}"
            </div>
          </div>

          {/* Architecture Visual Component */}
          <div className="architecture-container">
            <div className="architecture-title-bar">
              <h4>
                <Layers size={18} color="var(--accent-cyan)" />
                <span>AMC Financial Platform Architecture Flow</span>
              </h4>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem', 
                color: 'var(--accent-cyan)',
                background: 'rgba(56, 189, 248, 0.1)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                Interactive Topology
              </span>
            </div>

            {/* Architecture Steps (Angular -> .NET Core APIs -> Business Logic -> SQL Server) */}
            <div className="architecture-flow">
              {currentRoleData.hblAmcHighlight.architectureFlow.map((step, idx) => (
                <div 
                  key={idx} 
                  className="arch-step-card"
                  onClick={() => setSelectedArchNode(idx)}
                  style={{
                    cursor: 'pointer',
                    borderColor: selectedArchNode === idx ? 'var(--accent-cyan)' : undefined,
                    boxShadow: selectedArchNode === idx ? '0 0 15px rgba(56, 189, 248, 0.2)' : undefined
                  }}
                >
                  <span className="arch-step-number">Step 0{idx + 1}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    {idx === 0 && <Globe size={18} color="var(--accent-cyan)" />}
                    {idx === 1 && <Server size={18} color="var(--accent-cyan)" />}
                    {idx === 2 && <Cpu size={18} color="var(--accent-cyan)" />}
                    {idx === 3 && <Database size={18} color="var(--accent-cyan)" />}
                    <h5 className="arch-step-name">{step.name}</h5>
                  </div>
                  <p className="arch-step-role">{step.role}</p>
                  <span className="arch-step-tech">
                    {idx === 0 && 'Angular 12 / TypeScript'}
                    {idx === 1 && 'ASP.NET Core / JWT / REST & SOAP'}
                    {idx === 2 && 'C# Business Services / DI'}
                    {idx === 3 && 'SQL Server / Stored Procedures'}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Inspector for clicked node */}
            {selectedArchNode !== null && (
              <div style={{
                marginTop: '16px',
                padding: '14px 18px',
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid var(--accent-cyan)',
                borderRadius: '8px',
                animation: 'fadeIn 0.2s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
                    {nodeDetails[selectedArchNode].title}
                  </span>
                  <button 
                    onClick={() => setSelectedArchNode(null)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Close [x]
                  </button>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                  {nodeDetails[selectedArchNode].details}
                </p>
              </div>
            )}

            {/* External Integrations Connecting to Middleware */}
            <div className="arch-external-integrations">
              <span className="arch-external-label">External Integrations Connected to Middleware Layer:</span>
              {currentRoleData.hblAmcHighlight.externalIntegrations.map((ext, idx) => (
                <span key={idx} className="arch-integration-chip">
                  {ext}
                </span>
              ))}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ 
              fontSize: '1rem', 
              color: 'var(--text-primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '18px',
              fontFamily: 'var(--font-mono)'
            }}>
              Key Responsibilities & Deliverables
            </h4>

            <div className="responsibilities-grid">
              {currentRoleData.responsibilities.map((resp, idx) => (
                <div key={idx} className="responsibility-item">
                  <CheckCircle size={16} />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '12px',
              fontFamily: 'var(--font-mono)'
            }}>
              Ecosystem & Tooling
            </h4>
            <div className="tech-badges-wrap">
              {currentRoleData.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
