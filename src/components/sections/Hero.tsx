
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
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-40"></div>
      <div className="absolute right-0 top-20 w-96 h-96 bg-primary/10 rounded-full"></div>
      <div className="absolute left-0 bottom-20 w-72 h-72 bg-primary/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          {/* Eyebrow */}
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-6">
            ERP & ERPNext Automation
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Streamline Your ERP Deployments With FERP
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto">
            Deploy, manage, and scale ERP and ERPNext sites for partners and clients with our powerful automation platform.
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
              <span>Bench Creation</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary rounded-full px-4 py-1.5 text-sm">
              <Terminal size={16} className="text-primary" />
              <span>Site Deployment</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary rounded-full px-4 py-1.5 text-sm">
              <Server size={16} className="text-primary" />
              <span>Cluster Management</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto reveal">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-card rounded-xl border border-border p-2">
              <div className="bg-secondary rounded-lg p-1">
                <div className="flex items-center px-3 py-2 border-b border-border">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-muted-foreground">
                    FERP Dashboard
                  </div>
                </div>
                <div className="aspect-[16/9] bg-card rounded rounded-t-none overflow-hidden">
                  <img 
                    src="/dashboard.jpg" 
                    alt="Ferp Dashboard"
                    className="w-full h-full object-cover"
                  />
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
