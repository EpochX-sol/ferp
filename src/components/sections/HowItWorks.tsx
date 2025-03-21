
import React, { useEffect } from 'react';
import CustomButton from '../ui/CustomButton';
import { CheckCircle } from 'lucide-react';

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
      title: 'Connect Your Infrastructure',
      description: 'Link your cloud or on-premise servers to the FrappeFlow platform with our secure agent.',
      checks: [
        'Supports AWS, GCP, Azure, and Digital Ocean',
        'Works with bare metal servers',
        'SSL encrypted connection',
        'Minimal access requirements'
      ]
    },
    {
      number: '02',
      title: 'Configure Deployment Templates',
      description: 'Set up reusable templates for your Frappe and ERPNext deployments with your preferred configurations.',
      checks: [
        'Customizable bench settings',
        'Pre-configure apps to install',
        'Define resource allocations',
        'Set environment variables'
      ]
    },
    {
      number: '03',
      title: 'Deploy and Manage Sites',
      description: 'Deploy new sites, migrate existing ones, or clone production environments with just a few clicks.',
      checks: [
        'One-click deployment',
        'Automated database setup',
        'Built-in load balancing',
        'Zero-downtime migrations'
      ]
    },
    {
      number: '04',
      title: 'Monitor and Scale',
      description: 'Keep track of your deployments with real-time monitoring and scale resources as your needs grow.',
      checks: [
        'Performance metrics dashboard',
        'Automated scaling options',
        'Proactive alert system',
        'Resource usage optimization'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How FrappeFlow Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined workflow makes deploying and managing Frappe applications simpler than ever before.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 mb-16 reveal ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Step number and connector line */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-24 bg-primary/20 my-4"></div>
                )}
              </div>

              {/* Mobile step number */}
              <div className="flex lg:hidden items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>

              {/* Step content */}
              <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <h3 className="hidden lg:block text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.checks.map((check, checkIndex) => (
                    <li 
                      key={checkIndex} 
                      className={`flex items-center gap-2 text-sm ${index % 2 === 1 ? 'lg:justify-end' : ''}`}
                    >
                      <CheckCircle size={18} className="text-primary" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step illustration (placeholder) */}
              <div className="w-full lg:w-1/3 aspect-square bg-secondary rounded-lg flex items-center justify-center">
                <div className="p-6 rounded-full bg-primary/10">
                  <svg 
                    className="w-12 h-12 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {index === 0 && (
                      <>
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <polyline points="16 3 21 3 21 8"></polyline>
                        <line x1="4" y1="20" x2="21" y2="3"></line>
                        <polyline points="21 16 21 21 16 21"></polyline>
                        <line x1="15" y1="15" x2="21" y2="21"></line>
                        <line x1="4" y1="4" x2="9" y2="9"></line>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                        <path d="M18 10l-2-2-4 4-2-2-4 4"></path>
                      </>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <CustomButton to="/workflow" size="lg">
            Learn More About Our Process
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
