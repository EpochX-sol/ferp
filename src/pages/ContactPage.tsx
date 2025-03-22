
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CardContent } from '@/components/ui/CustomCard';
import { MapPin, Clock, Globe } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);
    
    // Initialize animations
    const initializeAnimations = () => {
      const animatedElements = document.querySelectorAll('.reveal, .stagger-reveal');
      
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
      
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      };
      
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      animatedElements.forEach((el) => {
        observer.observe(el);
      });
      
      return () => {
        animatedElements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    };
    
    const timeout = setTimeout(initializeAnimations, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Park, Suite 100\nSan Francisco, CA 94107',
      hours: 'Monday - Friday: 9am - 6pm PT',
      icon: MapPin,
    },
    {
      city: 'New York',
      address: '456 Innovation Tower, 15th Floor\nNew York, NY 10001',
      hours: 'Monday - Friday: 9am - 6pm ET',
      icon: MapPin,
    },
    {
      city: 'Remote Support',
      address: 'Worldwide coverage with team members\nacross multiple time zones',
      hours: '24/7 for Enterprise customers',
      icon: Globe,
    }
  ];
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We'd Love to Hear From You
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
              </p>
              <CustomButton to="#contact-form" size="lg">
                Contact Us Now
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* Office Locations */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Our Offices
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Where to Find Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Visit us at one of our office locations or connect with our global remote team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-reveal">
              {officeLocations.map((office, index) => (
                <CustomCard key={index} className="h-full" hoverable>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-6">
                      <office.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                    <p className="text-muted-foreground mb-4 whitespace-pre-line">{office.address}</p>
                    <div className="flex items-center mt-auto pt-4 border-t border-border w-full">
                      <Clock size={16} className="text-primary mr-2" />
                      <p className="text-sm text-muted-foreground">{office.hours}</p>
                    </div>
                  </CardContent>
                </CustomCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Contact Form Section */}
        <div id="contact-form">
          <Contact />
        </div>
        
        {/* Additional Support Options */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Additional Support Options
              </h2>
              <p className="text-lg text-muted-foreground">
                Find the right channel for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-reveal">
              <CustomCard hoverable>
                <CardContent className="p-8 text-center">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-6">
                    Get immediate assistance from our support team during business hours.
                  </p>
                  <CustomButton variant="outline" href="#">
                    Start Chat
                  </CustomButton>
                </CardContent>
              </CustomCard>
              
              <CustomCard hoverable>
                <CardContent className="p-8 text-center">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
                  <p className="text-muted-foreground mb-6">
                    Explore our comprehensive documentation, tutorials, and guides.
                  </p>
                  <CustomButton variant="outline" href="#">
                    Browse Resources
                  </CustomButton>
                </CardContent>
              </CustomCard>
              
              <CustomCard hoverable>
                <CardContent className="p-8 text-center">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Schedule a Demo</h3>
                  <p className="text-muted-foreground mb-6">
                    Book a personalized demonstration with one of our product specialists.
                  </p>
                  <CustomButton variant="outline" href="#">
                    Book Demo
                  </CustomButton>
                </CardContent>
              </CustomCard>
            </div>
          </div>
        </section>
        
        {/* Partner Program CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto bg-primary/5 rounded-xl p-8 md:p-12 reveal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Become a Partner
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Join our partner program and offer ERPFlow to your clients. Earn commissions, get priority support, and access exclusive resources.
                  </p>
                  <CustomButton variant="primary">
                    Apply Now
                  </CustomButton>
                </div>
                <div className="rounded-xl bg-background p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Partner Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Competitive commission structure</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Co-marketing opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Technical certification</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Dedicated partner manager</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
