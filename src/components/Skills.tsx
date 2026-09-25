import { skillGroups } from '../data/portfolioData';
import { 
  Cpu, 
  Code, 
  Server, 
  Layout, 
  Monitor, 
  Database, 
  Network, 
  Wrench
} from 'lucide-react';

export const Skills = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Monitor': return <Monitor size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Network': return <Network size={20} />;
      case 'Wrench': return <Wrench size={20} />;
      default: return <Cpu size={20} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Verified Technical Stack</h2>
          <p className="section-subtitle">
            Curated across 8+ years of production experience in enterprise software, backend services, relational databases, and third-party integrations.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  {getCategoryIcon(group.icon)}
                </div>
                <h3 className="skill-cat-title">{group.category}</h3>
              </div>

              <div className="skill-pills-list">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div style={{
          marginTop: '36px',
          textAlign: 'center',
          fontSize: '0.82rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)'
        }}>
          All technologies listed reflect actual professional usage in enterprise production environments. No artificial percentage bars or fabricated metrics.
        </div>
      </div>
    </section>
  );
};
