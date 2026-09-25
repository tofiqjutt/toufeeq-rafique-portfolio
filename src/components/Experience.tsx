import { experienceList } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  Building
} from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Evolution</span>
          </div>
          <h2 className="section-title">8+ Years Professional Experience</h2>
          <p className="section-subtitle">
            A consistent trajectory from foundational .NET engineering into complex APIs, financial platforms, high-stakes third-party integrations, and 24/7 production support.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experienceList.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content-card">
                <div className="timeline-card-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <Building size={16} color="var(--accent-cyan)" />
                      <h3 className="timeline-company">{exp.company}</h3>
                      {exp.isCurrent && (
                        <span style={{
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: '#34d399',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          border: '1px solid rgba(16, 185, 129, 0.3)'
                        }}>
                          Current
                        </span>
                      )}
                    </div>
                    <div className="timeline-role">{exp.role}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="timeline-duration-badge">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '5px' }} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    fontFamily: 'var(--font-mono)', 
                    color: 'var(--text-muted)', 
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Key Highlights & Responsibilities
                  </div>
                  <div className="responsibilities-grid">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="responsibility-item">
                        <CheckCircle size={15} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                    Core Technologies
                  </div>
                  <div className="tech-badges-wrap">
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
