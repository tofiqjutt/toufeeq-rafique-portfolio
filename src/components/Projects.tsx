import { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { 
  FolderGit2, 
  CheckCircle, 
  Workflow
} from 'lucide-react';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Financial Tech', 'Payment Gateway', 'Telecom & LBS', 'Identity Verification'];

  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">Enterprise Systems & API Implementations</h2>
          <p className="section-subtitle">
            Documented engineering case studies spanning asset management middleware, national payment gateways, telecom location services, and biometric verification.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'linear-gradient(135deg, #0ea5e9, #0284c7)' : 'rgba(15, 23, 42, 0.8)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                borderRadius: '9999px',
                padding: '8px 18px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="case-studies-grid">
          {filteredStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-header">
                <div>
                  <span className="case-category-tag">{study.category}</span>
                  <h3 className="case-title">{study.title}</h3>
                  <div className="case-subtitle">{study.subtitle}</div>
                </div>

                <div className="case-organization-badge">
                  {study.organization}
                </div>
              </div>

              <p className="case-description">{study.description}</p>

              {/* Dedicated Architecture Flow Visualization */}
              <div className="project-architecture-box">
                <div className="arch-header-row">
                  <span>
                    <Workflow size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    System Architecture & Data Flow
                  </span>
                  <span style={{ color: 'var(--accent-cyan)' }}>
                    {study.id === 'raast-payments' && 'Secure mTLS & Signed Payload'}
                    {study.id === 'zong-lbs-cbs' && 'Dual REST / SOAP Pipeline'}
                    {study.id === 'pensioner-verification' && 'Biometric SOAP Schema Engine'}
                    {study.id === 'hbl-amc' && 'Enterprise Layered Pipeline'}
                  </span>
                </div>

                {/* Horizontal Step Cards */}
                <div className="arch-grid-horizontal">
                  {study.architectureFlow.steps.map((st, sIdx) => (
                    <div key={sIdx} className="arch-step-small">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ 
                          fontSize: '0.7rem', 
                          fontFamily: 'var(--font-mono)', 
                          color: 'var(--accent-cyan)' 
                        }}>
                          0{st.step}
                        </span>
                        {st.tech && (
                          <span style={{ 
                            fontSize: '0.68rem', 
                            fontFamily: 'var(--font-mono)', 
                            color: '#94a3b8' 
                          }}>
                            {st.tech}
                          </span>
                        )}
                      </div>
                      <h5>{st.name}</h5>
                      <p>{st.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Special Dual Flow Diagram for ZONG LBS & CBS */}
                {study.id === 'zong-lbs-cbs' && (
                  <div style={{ 
                    marginTop: '16px', 
                    paddingTop: '14px', 
                    borderTop: '1px dashed rgba(148, 163, 184, 0.15)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '14px'
                  }}>
                    <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '10px 14px', borderRadius: '6px', fontSize: '0.8rem' }}>
                      <strong style={{ color: 'var(--accent-cyan)' }}>Flow A (Location Tracking):</strong>
                      <div style={{ color: '#cbd5e1', marginTop: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                        ZONG LBS REST API → .NET Application / REST APIs → Tracking & Business Logic → SQL Server
                      </div>
                    </div>
                    <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '10px 14px', borderRadius: '6px', fontSize: '0.8rem' }}>
                      <strong style={{ color: 'var(--accent-emerald)' }}>Flow B (Field Force SMS):</strong>
                      <div style={{ color: '#cbd5e1', marginTop: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                        CBS SOAP API → .NET Integration Layer → SMS / Communication Services
                      </div>
                    </div>
                  </div>
                )}

                {/* Special Flow Diagram for Pensioner's Verification */}
                {study.id === 'pensioner-verification' && (
                  <div style={{ 
                    marginTop: '14px', 
                    paddingTop: '12px', 
                    borderTop: '1px dashed rgba(148, 163, 184, 0.15)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: '#94a3b8'
                  }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Verification Protocol: </span>
                    Pensioner → Verification Application → .NET Core → NADRA SOAP API → Verification Response
                  </div>
                )}
              </div>

              {/* Responsibilities */}
              <div style={{ marginBottom: '24px' }}>
                <div className="case-responsibilities-title">Engineering Responsibilities & Contributions</div>
                <div className="responsibilities-grid">
                  {study.responsibilities.map((r, rIdx) => (
                    <div key={rIdx} className="responsibility-item">
                      <CheckCircle size={15} />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                  Technologies & Frameworks
                </div>
                <div className="tech-badges-wrap">
                  {study.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
