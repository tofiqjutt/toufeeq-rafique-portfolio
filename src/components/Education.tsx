import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Foundation</h2>
          <p className="section-subtitle">
            Formal training in software engineering fundamentals, systems architecture, and computer science.
          </p>
        </div>

        <div className="education-container">
          <div className="education-card">
            <div className="edu-icon-badge">
              <GraduationCap size={32} />
            </div>

            <div>
              <h3 className="edu-degree">{educationData.degree}</h3>
              <div className="edu-institution">{educationData.institution}</div>
              
              <div className="edu-meta">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginRight: '16px' }}>
                  <Calendar size={13} />
                  <span>Graduated {educationData.year}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={13} />
                  <span>{educationData.location}</span>
                </span>
              </div>

              <p className="edu-desc">
                {educationData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
