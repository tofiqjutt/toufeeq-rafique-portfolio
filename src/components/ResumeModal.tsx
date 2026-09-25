import { useState } from 'react';
import { personalInfo, experienceList, skillGroups, educationData } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `
================================================================================
MUHAMMAD TOUFEEQ RAFIQUE
Senior .NET Developer / Software Engineer
Karachi, Pakistan | Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin}
================================================================================

PROFESSIONAL SUMMARY:
Experienced .NET Developer and Software Engineer with 8+ years of experience in designing,
developing, supporting, and maintaining scalable web applications, REST APIs, middleware
services, and desktop applications within the .NET ecosystem. Core expertise includes
ASP.NET Core, .NET Core, ASP.NET MVC, C#, Angular, SQL Server, Entity Framework,
REST/SOAP APIs, JWT authentication, third-party integrations, XML/JSON processing,
IIS deployments, production support, troubleshooting, performance optimization, and
complete SDLC activities. Extensively worked on enterprise and financial platforms
where reliability, security, data consistency, and production support are critical.

TECHNICAL SKILLS:
- Languages: C#, SQL, JavaScript, TypeScript
- Backend: .NET 8, .NET Core 3.1+, ASP.NET Core MVC, ASP.NET MVC 5, Web API, Entity Framework Core, Entity Framework 6, ADO.NET
- Frontend: Angular 12+, HTML5, CSS3, JavaScript, TypeScript, jQuery, Razor Pages, AJAX
- Desktop: WinForms, Windows Services
- Databases: Microsoft SQL Server, MySQL, SQLite
- APIs & Integrations: REST APIs, SOAP APIs, Third-party API integration, XML, JSON, JWT, Certificate-based security
- Tools: Visual Studio, VS Code, GitHub, Postman, SOAP UI, SQL Server Management Studio, IIS

PROFESSIONAL EXPERIENCE:

1. IDENFO — Full Stack Developer (.NET) / Software Engineer
   March 2023 – Present | Karachi, Pakistan
   - Works on AMC-based financial web and mobile platforms, including backend services, APIs, middleware, integrations, production support, databases, deployments, and troubleshooting.
   - Design, develop, and maintain REST/SOAP APIs and middleware services using ASP.NET Core and C#.
   - Provide production support and technical maintenance for AMC-based financial web and mobile platforms.
   - Work extensively with .NET Core, Angular 12, Windows Services, and SQL Server.
   - Implement and maintain authentication and authorization mechanisms including JWT.
   - Integrate third-party APIs and external systems.
   - Work extensively with SQL Server including complex queries, stored procedures, functions, SQL Jobs, and performance optimization.
   - Manage application deployments and hosting through IIS.
   - Troubleshoot production issues and configuration problems.
   - Collaborate with cross-functional teams on requirements, development, testing, deployment, and post-production support.
   - Work with XML-based integrations, data transformation, and external API communication.
   - Maintain source control and collaboration workflows using GitHub.
   - Continuously enhance existing enterprise applications and services.

2. PLATINUM PHARMACEUTICALS — .NET Developer / Software Engineer
   November 2021 – February 2023 | Karachi, Pakistan
   - Integrated ZONG LBS REST APIs and CBS SOAP APIs.
   - Developed location-based services and tracking systems.
   - Developed and maintained web portals.
   - Built Windows Services.
   - Developed REST APIs and desktop applications.
   - Migrated legacy ASP.NET WebForms applications to ASP.NET MVC.
   - Worked with SQL Server, stored procedures, query optimization, and scheduled jobs.
   - Handled production support and application deployment.
   - Worked throughout the SDLC.

3. BMSAS TECHNOLOGIES — .NET Developer (Hybrid)
   January 2018 – October 2021 | Karachi, Pakistan
   - ASP.NET MVC 5, Entity Framework 6, C#, SQL Server, WinForms.
   - Database design, stored procedures, functions, CRUD modules, reporting.
   - Role-based access, API consumption, third-party integrations, debugging.
   - Performance optimization, application deployment, production support, SDLC.

PROJECT CASE STUDIES:
- AMC Web Portal & Mobile Application Middleware (IDENFO / Asset Management Company)
- RAAST Phase I Implementation (State Bank of Pakistan Instant Payment Gateway Integration & Testing)
- ZONG LBS & CBS Integration (Platinum Pharmaceuticals)
- Pensioner's Verification System - PVS (BMSAS Technologies / NADRA SOAP APIs)

EDUCATION:
BS in Software Engineering
University of Karachi — Graduated 2018
`.trim();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatePlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadText = () => {
    const text = generatePlainTextResume();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muhammad_Toufeeq_Rafique_Senior_NET_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>
            <FileText size={20} color="var(--accent-cyan)" />
            <span>Official Curriculum Vitae — Muhammad Toufeeq Rafique</span>
          </h3>

          <div className="modal-actions">
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={handlePrint}
              title="Print or save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button 
              className="btn btn-secondary btn-sm" 
              onClick={handleDownloadText}
              title="Download text file"
            >
              <Download size={15} />
              <span>Download .TXT</span>
            </button>

            <button 
              className="btn btn-secondary btn-sm" 
              onClick={handleCopyText}
              title="Copy plain text"
            >
              {copied ? <Check size={15} color="var(--accent-emerald)" /> : <Copy size={15} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '6px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          {/* Header block */}
          <div className="resume-header-block">
            <h2 className="resume-candidate-name">{personalInfo.name}</h2>
            <div className="resume-titles">
              Senior .NET Developer • Software Engineer • Senior Full Stack .NET Developer
            </div>
            <div className="resume-contact-inline">
              <span><MapPin size={13} style={{ display: 'inline', marginRight: '3px' }} /> {personalInfo.location}</span>
              <span><Mail size={13} style={{ display: 'inline', marginRight: '3px' }} /> {personalInfo.email}</span>
              <span><Phone size={13} style={{ display: 'inline', marginRight: '3px' }} /> {personalInfo.phone}</span>
              <span><ExternalLink size={13} style={{ display: 'inline', marginRight: '3px' }} /> LinkedIn Profile</span>
            </div>
          </div>

          {/* Summary */}
          <h4>Professional Profile</h4>
          <p style={{ lineHeight: '1.7', marginBottom: '16px' }}>
            Experienced .NET Developer and Software Engineer with 8+ years of experience in designing, developing, supporting, and maintaining scalable web applications, REST APIs, middleware services, and desktop applications within the .NET ecosystem. Core expertise includes ASP.NET Core, .NET Core, ASP.NET MVC, C#, Angular, SQL Server, Entity Framework, REST/SOAP APIs, JWT authentication, third-party integrations, XML/JSON processing, IIS deployments, production support, troubleshooting, performance optimization, and complete SDLC activities. Extensively worked on enterprise and financial applications where reliability, security, data consistency, and production support are critical.
          </p>

          {/* Technical Skills */}
          <h4>Technical Skills</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px', fontSize: '0.9rem' }}>
            {skillGroups.map((group, idx) => (
              <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '10px 14px', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>{group.category}: </strong>
                <span>{group.skills.join(', ')}</span>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <h4>Professional Experience</h4>
          {experienceList.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>
                  {exp.role} — <span style={{ color: 'var(--accent-cyan)' }}>{exp.company}</span>
                </strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {exp.duration}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '8px', color: '#cbd5e1' }}>
                {exp.description}
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} style={{ marginBottom: '4px' }}>{h}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education */}
          <h4>Education</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <strong style={{ fontSize: '1rem', color: '#ffffff' }}>{educationData.degree}</strong>
              <div style={{ color: 'var(--accent-cyan)' }}>{educationData.institution}</div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Graduated {educationData.year} | {educationData.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
