
import React, { useEffect } from 'react';
import CustomButton from '../ui/CustomButton';
import { ArrowRight, Rocket, Terminal, Server } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Intersection Observer for animations
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
    
    const elements = document.querySelectorAll('.reveal, .stagger-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-40"></div>
      <div className="absolute right-0 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          {/* Eyebrow */}
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
            Frappe & ERPNext Automation
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Streamline Your Frappe Deployments With Automation
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto">
            Deploy, manage, and scale Frappe and ERPNext sites with our powerful automation platform built for partners and clients.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-reveal">
            <CustomButton to="/contact" size="lg" variant="primary">
              Get Started <ArrowRight size={18} className="ml-2" />
            </CustomButton>
            <CustomButton to="/features" size="lg" variant="outline">
              Request Demo
            </CustomButton>
            <CustomButton to="/contact" size="lg" variant="ghost">
              Contact Us
            </CustomButton>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 stagger-reveal">
            <div className="flex items-center gap-1 bg-secondary rounded-full px-4 py-1.5 text-sm">
              <Rocket size={16} className="text-primary" />
              <span>Site Deployment</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary rounded-full px-4 py-1.5 text-sm">
              <Terminal size={16} className="text-primary" />
              <span>Bench Management</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary rounded-full px-4 py-1.5 text-sm">
              <Server size={16} className="text-primary" />
              <span>Cluster Orchestration</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto reveal">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 backdrop-blur-sm pointer-events-none"></div>
            <div className="bg-card rounded-xl border border-border p-2">
              <div className="bg-secondary rounded-lg p-1">
                <div className="flex items-center px-3 py-2 border-b border-border">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-muted-foreground">
                    Frappe Flow Dashboard
                  </div>
                </div>
                <div className="aspect-[16/9] bg-card rounded rounded-t-none overflow-hidden">
                  {/* Placeholder for dashboard image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-background">
                    <div className="text-center">
                      <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                        <div className="h-12 w-12 text-primary">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="9" y1="21" x2="9" y2="9"></line>
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold">Frappe Flow Dashboard</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Manage all your Frappe and ERPNext deployments in one place
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
