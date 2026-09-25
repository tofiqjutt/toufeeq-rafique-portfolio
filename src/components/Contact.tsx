import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">Let's Build Something Reliable</h2>
          <p className="section-subtitle">
            Whether you're looking for an experienced .NET engineer, need help with enterprise application development, API integrations, production support, or backend systems, feel free to get in touch.
          </p>
        </div>

        {/* Centered Direct Contact Hub */}
        <div className="contact-hub-container">
          <div className="contact-cards-grid">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="channel-icon">
                  <Mail size={20} />
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="contact-card-content">
                <div className="channel-label">Email Address</div>
                <a href={`mailto:${personalInfo.email}`} className="channel-value email-link">
                  {personalInfo.email}
                </a>
                <p className="contact-card-note">Primary channel for technical inquiries & proposals</p>
              </div>

              <div className="contact-card-action">
                <a href={`mailto:${personalInfo.email}`} className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                  <span>Send Direct Email</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="channel-icon">
                  <Phone size={20} />
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="contact-card-content">
                <div className="channel-label">Phone & WhatsApp</div>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-value">
                  {personalInfo.phone}
                </a>
                <p className="contact-card-note">Available for calls and WhatsApp messages</p>
              </div>

              <div className="contact-card-action">
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                  <span>Call / WhatsApp</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                  </svg>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-copy-btn"
                  title="Open LinkedIn in new tab"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="contact-card-content">
                <div className="channel-label">LinkedIn Profile</div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                >
                  Muhammad Toufeeq Rafique
                </a>
                <p className="contact-card-note">Connect for professional background & network</p>
              </div>

              <div className="contact-card-action">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>View LinkedIn Profile</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="channel-icon">
                  <MapPin size={20} />
                </div>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  color: 'var(--accent-emerald)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: '1px solid rgba(16, 185, 129, 0.25)'
                }}>
                  PKT (UTC+5)
                </span>
              </div>

              <div className="contact-card-content">
                <div className="channel-label">Base Location</div>
                <div className="channel-value">{personalInfo.location}</div>
                <p className="contact-card-note">Available for onsite Karachi & global remote roles</p>
              </div>

              <div className="contact-card-action">
                <div 
                  className="btn btn-secondary btn-sm" 
                  style={{ width: '100%', cursor: 'default', opacity: 0.9 }}
                >
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
