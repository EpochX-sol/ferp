import React, { useEffect } from 'react';
import CustomButton from '../ui/CustomButton';
import { CheckCircle, ArrowRight, Monitor, Database, Server, Globe } from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      number: '01',
      title: 'Create Your Cluster',
      description: 'Set up your infrastructure cluster to host your ERP applications.',
      checks: [
        'Configure cluster resources',
        'Set up networking and security',
        'Define cluster parameters',
        'Monitor cluster health'
      ],
      icon: 'cluster'
    },
    {
      number: '02',
      title: 'Deploy Benches',
      description: 'Create and configure benches within your cluster with just a few clicks.',
      checks: [
        'Select target cluster',
        'Configure bench settings',
        'Set database parameters',
        'Specify resource allocation'
      ],
      icon: 'bench'
    },
    {
      number: '03',
      title: 'Create Sites',
      description: 'Deploy new sites instantly through our intuitive interface.',
      checks: [
        'Choose target bench',
        'Set site name and credentials',
        'Select apps to install',
        'Deploy with one click'
      ],
      icon: 'site'
    },
    {
      number: '04',
      title: 'Manage & Monitor',
      description: 'Monitor and manage all your deployments from a single dashboard.',
      checks: [
        'Real-time monitoring',
        'Resource management',
        'Automated backups',
        'Performance optimization'
      ],
      icon: 'monitor'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How ERPFlow Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Deploy and manage your ERP applications in three simple steps
          </p>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cluster Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Server className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Cluster</h3>
                  <p className="text-sm text-muted-foreground">Infrastructure foundation</p>
                  
                  {/* Popup Info */}
                  <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-background border border-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary" />
                        <span>Configure resources</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary" />
                        <span>Set up networking</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                </div>
              </div>

              {/* Bench Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Bench</h3>
                  <p className="text-sm text-muted-foreground">Application environment</p>
                  
                  {/* Popup Info */}
                  <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-background border border-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary" />
                        <span>Select cluster</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary" />
                        <span>Configure DB</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                </div>
              </div>

              {/* Site Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Site</h3>
                  <p className="text-sm text-muted-foreground">ERP application</p>
                  
                  {/* Popup Info */}
                  <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-background border border-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary" />
                        <span>Select bench</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary" />
                        <span>Configure site</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-20 reveal">
                  {/* Step Number */}
                  <div className="absolute left-4 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {step.checks.map((check, checkIndex) => (
                        <div 
                          key={checkIndex}
                          className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                        >
                          <CheckCircle size={14} className="text-primary flex-shrink-0" />
                          <span className="text-sm">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <CustomButton to="/workflow" size="lg">
            Learn More About Our Process
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
