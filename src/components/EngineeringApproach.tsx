import { engineeringPrinciples } from '../data/portfolioData';
import { 
  FileCode, 
  Lock, 
  Workflow, 
  CheckCircle2, 
  Search, 
  Zap, 
  Database, 
  Terminal, 
  Server, 
  Users, 
  TrendingUp, 
  Settings 
} from 'lucide-react';

export const EngineeringApproach = () => {
  const getPrincipleIcon = (name: string) => {
    switch (name) {
      case 'FileCode': return <FileCode size={20} />;
      case 'Lock': return <Lock size={20} />;
      case 'Workflow': return <Workflow size={20} />;
      case 'CheckCircle2': return <CheckCircle2 size={20} />;
      case 'Search': return <Search size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Users': return <Users size={20} />;
      case 'TrendingUp': return <TrendingUp size={20} />;
      default: return <Settings size={20} />;
    }
  };

  return (
    <section id="approach" className="approach-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Settings size={14} />
            <span>Core Philosophy</span>
          </div>
          <h2 className="section-title">Engineering Approach</h2>
          <p className="section-subtitle">
            Grounded in production reality, enterprise constraints, defensiveness in API communication, and long-term system maintainability.
          </p>
        </div>

        <div className="principles-grid">
          {engineeringPrinciples.map((item) => (
            <div key={item.id} className="principle-card">
              <div className="principle-icon">
                {getPrincipleIcon(item.icon)}
              </div>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
