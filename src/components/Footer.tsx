import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Lock } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <img src="/toufeeq.png" alt="Muhammad Toufeeq Rafique" className="footer-avatar-img" />
              <strong style={{ color: '#ffffff', fontSize: '1rem' }}>{personalInfo.name}</strong>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Senior .NET Developer & Software Engineer • Karachi, Pakistan
            </div>
          </div>

          {/* Security & Confidentiality disclaimer */}
          <div className="footer-security-note">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
              <Lock size={13} />
              <strong style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Security & Data Integrity Notice
              </strong>
            </div>
            <span>
              All system topologies, API flows, and project case studies are presented using generalized and sanitized architectural patterns. No confidential customer records, folio numbers, credentials, internal production URLs, or proprietary source code are displayed.
            </span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              title="Return to top of page"
            >
              <ArrowUp size={15} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div style={{ 
          marginTop: '28px', 
          paddingTop: '20px', 
          borderTop: '1px solid rgba(148, 163, 184, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Muhammad Toufeeq Rafique. Built with React & TypeScript.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            Production Grade • Zero Fabricated Metrics • Factual Engineering Record
          </div>
        </div>
      </div>
    </footer>
  );
};
