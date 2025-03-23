import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HowItWorks from '@/components/sections/HowItWorks';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CardContent } from '@/components/ui/CustomCard';
import { Clock, Layers, ArrowRight, Server, Database, RefreshCw, LineChart } from 'lucide-react';

const WorkflowPage = () => {
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
  
  const useCases = [
    {
      title: 'Multi-Tenant ERPNext Hosting',
      description: 'Efficiently deploy and manage multiple ERPNext instances for different clients on shared infrastructure.',
      icon: Layers,
      metrics: [
        '70% reduction in deployment time',
        '60% decrease in infrastructure costs',
        '95% deployment of routine maintenance tasks'
      ]
    },
    {
      title: 'High-Volume Site Migration',
      description: 'Seamlessly migrate dozens of ERP sites between servers or data centers with minimal downtime.',
      icon: RefreshCw,
      metrics: [
        'Zero downtime migration capability',
        '85% reduction in migration effort',
        '100% data integrity maintenance'
      ]
    },
    {
      title: 'Continuous Delivery Pipeline',
      description: 'Implement a robust CI/CD workflow for your ERP applications with automated testing and deployment.',
      icon: Clock,
      metrics: [
        '8x faster development iterations',
        '90% reduction in deployment errors',
        '75% more efficient code review process'
      ]
    },
    {
      title: 'Enterprise Performance Optimization',
      description: 'Monitor and fine-tune your ERPNext deployments for optimal performance under high load conditions.',
      icon: LineChart,
      metrics: [
        '40% improvement in response times',
        '65% reduction in resource utilization',
        '99.9% system availability'
      ]
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
                Our Process
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How FERP Works
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our streamlined workflow for deploying and managing ERPNext applications with unprecedented ease.
              </p>
              <CustomButton to="/contact" size="lg">
                Schedule a Demo
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* Main How It Works Section */}
        <HowItWorks />
        
        {/* Technical Workflow Diagram */}
        <section className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Technical Architecture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Behind the Scenes
              </h2>
              <p className="text-lg text-muted-foreground">
                FERP uses a sophisticated yet elegant architecture to manage your ERP deployments.
              </p>
            </div>
            
            {/* Technical Diagram */}
            <div className="max-w-5xl mx-auto relative reveal">
              <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-background p-8">
                <div className="relative aspect-[16/9] bg-secondary/50 rounded-lg flex flex-col items-center justify-center p-8">
                  {/* This would be a technical diagram in a real implementation */}
                  <div className="text-center mb-12">
                    <div className="inline-block p-5 bg-primary/10 rounded-full mb-4">
                      <Server size={40} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">FERP Platform</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Central management system that orchestrates all deployment and management operations
                    </p>
                  </div>
                  
                  {/* Three column grid with improved spacing */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full relative z-10">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="inline-block p-4 bg-primary/10 rounded-full mb-3">
                        <Database size={28} className="text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">Database Layer</h4>
                      <p className="text-xs text-muted-foreground">
                        Handles all data storage and retrieval operations
                      </p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="inline-block p-4 bg-primary/10 rounded-full mb-3">
                        <RefreshCw size={28} className="text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">Agent Network</h4>
                      <p className="text-xs text-muted-foreground">
                        Secure communication with servers in your infrastructure
                      </p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="inline-block p-4 bg-primary/10 rounded-full mb-3">
                        <LineChart size={28} className="text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">Monitoring System</h4>
                      <p className="text-xs text-muted-foreground">
                        Real-time performance tracking and alerting
                      </p>
                    </div>
                  </div>
                  
                  {/* Removing the connector arrows entirely */}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Real-World Applications
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Use Cases & Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                See how FERP transforms ERPNext management for various business scenarios.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-reveal">
              {useCases.map((useCase, index) => (
                <CustomCard key={index} className="h-full" hoverable>
                  <CardContent className="p-8">
                    <div className="p-4 bg-primary/10 rounded-full w-fit mb-6">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-6">{useCase.description}</p>
                    <div className="border-t border-border pt-4">
                      <h4 className="text-sm font-medium mb-3">Key Metrics:</h4>
                      <ul className="space-y-2">
                        {useCase.metrics.map((metric, mIndex) => (
                          <li key={mIndex} className="flex items-center text-sm">
                            <ArrowRight size={14} className="text-primary mr-2" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </CustomCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your ERP Deployment Process?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get started with FERP today and experience the future of ERPNext deployment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CustomButton to="/contact" size="lg" variant="primary">
                  Contact Sales
                </CustomButton>
                <CustomButton to="/pricing" size="lg" variant="outline">
                  View Pricing
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WorkflowPage;
