import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileText, 
  Send, 
  ExternalLink 
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'current-role', 'projects', 'experience', 'skills', 'what-i-do', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="nav-brand" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
            <img src="/toufeeq.png" alt="Muhammad Toufeeq Rafique" className="brand-avatar-img" />
            <div className="brand-info">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-role">Senior .NET / Full Stack Developer</span>
            </div>
          </div>

          <ul className="nav-links">
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#current-role"
                className={`nav-link ${activeSection === 'current-role' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('current-role'); }}
              >
                Current Role
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#what-i-do"
                className={`nav-link ${activeSection === 'what-i-do' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('what-i-do'); }}
              >
                What I Do
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className="btn btn-outline btn-sm btn-download"
              onClick={onOpenResume}
              title="View and download formal resume"
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => scrollToSection('contact')}
            >
              <Send size={15} />
              <span>Contact</span>
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#current-role"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('current-role'); }}
            >
              Current Role (IDENFO)
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Case Studies & Architectures
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            >
              Career Timeline
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Technical Skills
            </a>
          </li>
          <li>
            <a
              href="#what-i-do"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('what-i-do'); }}
            >
              What I Do
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
          <button
            className="btn btn-outline"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
          >
            <FileText size={18} />
            <span>Download / View Resume</span>
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <ExternalLink size={18} />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </>
  );
};
