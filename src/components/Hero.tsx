import { useState, useEffect } from 'react';
import { personalInfo, heroData } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Server, 
  Globe, 
  Activity, 
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  const [simulatedPacketStep, setSimulatedPacketStep] = useState(1);

  // Animated packet traversal
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPacketStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Senior .Net Developer Roles</span>
            </div>

            <h1 className="hero-title">
              <span className="accent-highlight">Senior .NET</span> & Fullstack Developer
            </h1>

            <p className="hero-subtitle">
              {heroData.supportingHeadline}
            </p>

            <p className="hero-description">
              {heroData.shortIntroduction}
            </p>

            <div className="hero-actions">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => scrollTo('projects')}
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn btn-secondary btn-lg"
                onClick={onOpenResume}
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>

              <button 
                className="btn btn-outline btn-lg"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            <div className="hero-badges-row">
              <div className="hero-meta-badge">
                <MapPin size={15} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hero-meta-badge">
                <ShieldCheck size={15} />
                <span>8+ Years Experience</span>
              </div>
              <div className="hero-meta-badge">
                <Cpu size={15} />
                <span>ASP.NET Core / C# / SQL</span>
              </div>
              <div className="hero-meta-badge">
                <Activity size={15} />
                <span>Financial & Enterprise Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical System Topology */}
          <div className="hero-visual-card">
            <div className="system-topology">
              {/* Node 1: Client Layer */}
              <div className={`topology-node ${simulatedPacketStep === 1 ? 'active-pipeline' : ''}`}>
                <div className="node-left">
                  <div className="node-icon-box">
                    <Globe size={18} />
                  </div>
                  <div className="node-info">
                    <h4>Angular Web & Mobile Clients</h4>
                    <p>HTTP/2 • TLS 1.3 • Responsive Portal</p>
                  </div>
                </div>
                <span className="node-status-badge">
                  {simulatedPacketStep === 1 ? 'Dispatching' : 'Connected'}
                </span>
              </div>

              <div className="node-flow-connector">
                <div className="connector-line">
                  {simulatedPacketStep === 1 && <span className="connector-dot"></span>}
                </div>
              </div>

              {/* Node 2: Middleware & API Layer */}
              <div className={`topology-node ${simulatedPacketStep === 2 ? 'active-pipeline' : ''}`}>
                <div className="node-left">
                  <div className="node-icon-box emerald">
                    <Server size={18} />
                  </div>
                  <div className="node-info">
                    <h4>ASP.NET Core Middleware & APIs</h4>
                    <p>JWT Auth • Rate Limiting • Routing Pipeline</p>
                  </div>
                </div>
                <span className="node-status-badge" style={{ color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                  {simulatedPacketStep === 2 ? 'Processing' : 'Auth Active'}
                </span>
              </div>

              <div className="node-flow-connector">
                <div className="connector-line">
                  {simulatedPacketStep === 2 && <span className="connector-dot"></span>}
                </div>
              </div>

              {/* Node 3: Business Logic & Orchestration */}
              <div className={`topology-node ${simulatedPacketStep === 3 ? 'active-pipeline' : ''}`}>
                <div className="node-left">
                  <div className="node-icon-box indigo">
                    <Layers size={18} />
                  </div>
                  <div className="node-info">
                    <h4>Business Rules & Integration Adapters</h4>
                    <p>Financial Models • Third-Party Gateways • Services</p>
                  </div>
                </div>
                <span className="node-status-badge" style={{ color: 'var(--accent-indigo)', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                  {simulatedPacketStep === 3 ? 'Executing' : 'Services Ready'}
                </span>
              </div>

              <div className="node-flow-connector">
                <div className="connector-line">
                  {simulatedPacketStep === 3 && <span className="connector-dot"></span>}
                </div>
              </div>

              {/* Node 4: Database & Storage Engine */}
              <div className={`topology-node ${simulatedPacketStep === 4 ? 'active-pipeline' : ''}`}>
                <div className="node-left">
                  <div className="node-icon-box">
                    <Database size={18} />
                  </div>
                  <div className="node-info">
                    <h4>Microsoft SQL Server Engine</h4>
                    <p>ACID Transactions • Stored Procs • Query Optimization</p>
                  </div>
                </div>
                <span className="node-status-badge">
                  {simulatedPacketStep === 4 ? 'Committed' : 'Indexed'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
