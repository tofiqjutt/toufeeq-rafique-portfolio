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
  Terminal,
  Lock,
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  const [activeTab, setActiveTab] = useState<'topology' | 'telemetry'>('topology');
  const [simulatedPacketStep, setSimulatedPacketStep] = useState(1);
  const [activeNodeDetail, setActiveNodeDetail] = useState<string | null>(null);

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
              <span>Available for Senior Engineering Roles & Production Systems</span>
            </div>

            <h1 className="hero-title">
              <span className="accent-highlight">Senior .NET Developer</span> & Software Engineer
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

          {/* Right Column: Technical System Topology & Live Telemetry */}
          <div className="hero-visual-card">
            <div className="telemetry-header">
              <div className="telemetry-title">
                <Terminal size={16} />
                <span>SYSTEM_TOPOLOGY :: ENTERPRISE RUNTIME</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setActiveTab('topology')}
                  style={{
                    background: activeTab === 'topology' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeTab === 'topology' ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    color: activeTab === 'topology' ? '#ffffff' : 'var(--text-muted)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer'
                  }}
                >
                  Architecture
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  style={{
                    background: activeTab === 'telemetry' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeTab === 'telemetry' ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    color: activeTab === 'telemetry' ? '#ffffff' : 'var(--text-muted)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer'
                  }}
                >
                  Live Logs
                </button>
              </div>
            </div>

            {activeTab === 'topology' ? (
              <div className="system-topology">
                {/* Node 1: Client Layer */}
                <div 
                  className={`topology-node ${simulatedPacketStep === 1 ? 'active-pipeline' : ''}`}
                  onClick={() => setActiveNodeDetail('client')}
                  style={{ cursor: 'pointer' }}
                >
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
                <div 
                  className={`topology-node ${simulatedPacketStep === 2 ? 'active-pipeline' : ''}`}
                  onClick={() => setActiveNodeDetail('middleware')}
                  style={{ cursor: 'pointer' }}
                >
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
                <div 
                  className={`topology-node ${simulatedPacketStep === 3 ? 'active-pipeline' : ''}`}
                  onClick={() => setActiveNodeDetail('business')}
                  style={{ cursor: 'pointer' }}
                >
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
                <div 
                  className={`topology-node ${simulatedPacketStep === 4 ? 'active-pipeline' : ''}`}
                  onClick={() => setActiveNodeDetail('database')}
                  style={{ cursor: 'pointer' }}
                >
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

                {/* Interactive Node Explanation Detail Bar */}
                <div style={{
                  marginTop: '16px',
                  padding: '12px 14px',
                  background: 'rgba(6, 9, 17, 0.9)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Lock size={14} color="var(--accent-cyan)" />
                  <span>
                    <strong>{activeNodeDetail ? `${activeNodeDetail.toUpperCase()} NODE:` : 'Enterprise Design:'}</strong>{' '}
                    {activeNodeDetail === 'client' && 'Angular 12 Web & Mobile portal consuming secure endpoints.'}
                    {activeNodeDetail === 'middleware' && 'ASP.NET Core API Gateway, JWT verification, rate-limiting & logging.'}
                    {activeNodeDetail === 'business' && 'Domain rules, financial module calculations & integration adapters.'}
                    {activeNodeDetail === 'database' && 'SQL Server engine, stored procedures, indexing & scheduled jobs.'}
                    {!activeNodeDetail && 'Decoupled pipeline ensures zero vendor lock-in, isolated transaction scopes, and high reliability.'}
                  </span>
                </div>
              </div>
            ) : (
              /* Simulated Production Diagnostics Log */
              <div style={{
                background: 'var(--bg-code)',
                borderRadius: '10px',
                padding: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                lineHeight: '1.7',
                color: '#94a3b8',
                maxHeight: '340px',
                overflowY: 'auto',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <div style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                  $ tail -f /var/log/dotnet/production-telemetry.log
                </div>
                <div><span style={{ color: '#64748b' }}>16:29:41.102</span> <span style={{ color: '#38bdf8' }}>[INF]</span> Hosting environment: Production (IIS 10.0)</div>
                <div><span style={{ color: '#64748b' }}>16:29:41.105</span> <span style={{ color: '#10b981' }}>[AUTH]</span> JWT Token validated: Subject=AMC_USER_ID, Alg=RS256</div>
                <div><span style={{ color: '#64748b' }}>16:29:41.112</span> <span style={{ color: '#38bdf8' }}>[DISPATCH]</span> POST /api/v1/amc/transactions - Route matched</div>
                <div><span style={{ color: '#64748b' }}>16:29:41.118</span> <span style={{ color: '#818cf8' }}>[GATEWAY]</span> Handshake with RAAST Phase I Gateway: mTLS OK (24ms)</div>
                <div><span style={{ color: '#64748b' }}>16:29:41.124</span> <span style={{ color: '#38bdf8' }}>[SQL]</span> Executing sp_RecordFinancialTransaction in TransactionScope</div>
                <div><span style={{ color: '#64748b' }}>16:29:41.129</span> <span style={{ color: '#10b981' }}>[SQL]</span> Stored procedure executed successfully (5ms, 1 row affected)</div>
                <div><span style={{ color: '#64748b' }}>16:29:41.134</span> <span style={{ color: '#10b981' }}>[AUDIT]</span> Transaction logged with SHA-256 integrity hash</div>
                <div><span style={{ color: '#64748b' }}>16:29:41.140</span> <span style={{ color: '#38bdf8' }}>[HTTP]</span> Response 200 OK sent to Angular Mobile client in 38ms</div>
                <div style={{ color: '#10b981', marginTop: '6px' }}>● Status: Healthy | Latency: 38ms | Active Connections: Monitored</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
