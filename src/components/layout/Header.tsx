
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: 'Home', path: '/', section: '#hero' },
    { name: 'Features', path: '/', section: '#features' },
    { name: 'How It Works', path: '/', section: '#how-it-works' },
    { name: 'Pricing', path: '/', section: '#pricing' },
    { name: 'About', path: '/', section: '#about' },
    { name: 'Contact', path: '/', section: '#contact' },
    { name: 'FAQ', path: '/', section: '#faq' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation to sections
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    
    // Check if we're on the home page
    if (location.pathname === '/') {
      const element = document.querySelector(section);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/${section}`;
    }
    
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
        scrolled 
          ? 'py-3 bg-background/90 shadow-subtle'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Fineto logo"
          >
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-xl font-medium">Fineto</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.section}
                onClick={(e) => handleNavigation(e, link.section)}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary cursor-pointer ${
                  location.hash === link.section || (location.pathname === link.path && !location.hash && link.section === '#hero')
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-full button-animation"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-background z-50 md:hidden animate-fade-in">
            <nav className="flex flex-col h-full pt-6 px-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.section}
                  onClick={(e) => handleNavigation(e, link.section)}
                  className={`py-4 text-lg font-medium border-b border-border ${
                    location.hash === link.section
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="block text-center bg-primary text-white px-6 py-3 rounded-full w-full button-animation"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
