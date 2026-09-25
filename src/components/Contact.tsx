import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message content is required.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    // Prepare mailto link as reliable fallback for immediate transmission
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // In production we provide immediate feedback and open mail client option
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
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

        <div className="contact-grid">
          {/* Left: Contact Channels */}
          <div className="contact-info-card">
            <h3>Direct Contact Channels</h3>
            <p>
              Available for senior full-stack and backend software engineering positions, enterprise consulting, and mission-critical system integrations.
            </p>

            <div className="contact-channels-list">
              {/* Email */}
              <div className="contact-channel-item">
                <div className="channel-left">
                  <div className="channel-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="channel-label">Email Address</div>
                    <a href={`mailto:${personalInfo.email}`} className="channel-value">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-channel-item">
                <div className="channel-left">
                  <div className="channel-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="channel-label">Phone & WhatsApp</div>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="contact-channel-item">
                <div className="channel-left">
                  <div className="channel-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="channel-label">Professional Profile</div>
                    <a 
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="channel-value"
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="contact-channel-item">
                <div className="channel-left">
                  <div className="channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="channel-label">Location</div>
                    <div className="channel-value">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-banner">
                <Check size={20} />
                <div>
                  <strong>Inquiry Prepared:</strong> Opening your default mail client with message pre-filled. You can also reach me directly at <strong>{personalInfo.email}</strong>.
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Tariq Mehmood"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject *</label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Senior .NET Developer Role / Enterprise Integration Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Describe your project, team requirements, or enterprise development needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
