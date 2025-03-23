import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: 'Home', path: '', section: '#hero' },
    { name: 'Features', path: 'features', section: '#features' },
    { name: 'How It Works', path: 'workflow', section: '#how-it-works' },
    { name: 'Pricing', path: 'pricing', section: '#pricing' },
    { name: 'About', path: 'about', section: '#about' },
    { name: 'Contact', path: 'contact', section: '#contact' }, 
  ];
 
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
 
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
     
    if (section.startsWith('#')) {
      const element = document.querySelector(section);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    } else { 
      window.location.href = `/${section}`;
    }
    
    setIsMenuOpen(false);
  };
 
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
            <img 
              src="/logo2.webp" 
              alt="FERP Logo" 
              className="w-32 h-16 object-contain"
            /> 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={`/${link.path}`}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary cursor-pointer ${
                  location.pathname === `/${link.path}`
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/#contact"
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
                <Link
                  key={link.name}
                  to={`/${link.path}`}
                  className={`py-4 text-lg font-medium border-b border-border ${
                    location.pathname === `/${link.path}`
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link
                  to="/#contact"
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
