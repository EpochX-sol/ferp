import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Features from '@/components/sections/Features';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/CustomCard';
import { Server, Database, Shield, Clock, LineChart, Zap, GitBranch, Workflow } from 'lucide-react';

const FeaturesPage = () => {
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
  
  const featureGroups = [
    {
      title: 'Deployment & Infrastructure',
      icon: Server,
      features: [
        {
          title: 'One-Click Deployments',
          description: 'Deploy new ERP and ERPNext sites with a single click, eliminating complex manual setup procedures.'
        },
        {
          title: 'Cluster Management',
          description: 'Create and manage multiple server clusters for distributed deployments with centralized control.'
        },
        {
          title: 'Load Balancing',
          description: 'Automatically distribute traffic across multiple instances for improved performance and reliability.'
        },
        {
          title: 'High Availability Setup',
          description: 'Configure fault-tolerant deployments that ensure your applications remain available even during server failures.'
        }
      ]
    },
    {
      title: 'Migration & Management',
      icon: GitBranch,
      features: [
        {
          title: 'Zero-Downtime Migrations',
          description: 'Move sites between servers or environments without disrupting user access or operations.'
        },
        {
          title: 'Site Cloning',
          description: 'Create exact copies of existing sites for testing, development, or production deployments.'
        },
        {
          title: 'Environment Management',
          description: 'Maintain separate development, staging, and production environments with consistent configurations.'
        },
        {
          title: 'Automated Updates',
          description: 'Stay protected with automated software and security updates for your systems.'
        }
      ]
    },
    {
      title: 'Security & Monitoring',
      icon: Shield,
      features: [
        {
          title: 'Automated Backups',
          description: 'Schedule regular backups with customizable retention policies to prevent data loss.'
        },
        {
          title: 'SSL Certificate Management',
          description: 'Automatically provision, renew, and manage SSL certificates for all your sites.'
        },
        {
          title: 'Performance Monitoring',
          description: 'Track system resource usage, response times, and application performance metrics in real-time.'
        },
        {
          title: 'Proactive Alerts',
          description: 'Receive notifications about potential issues before they impact your users or operations.'
        }
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
                Features & Capabilities
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You Need for ERP Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how FERP simplifies and enhances your ERP and ERPNext deployments with powerful automation tools.
              </p>
              <CustomButton to="/contact" size="lg">
                Request a Demo
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* Overview Features Section */}
        <Features hideExploreButton={true} />
        
        {/* Detailed Features */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Detailed Capabilities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Explore Our Full Feature Set
              </h2>
              <p className="text-lg text-muted-foreground">
                FERP offers a comprehensive suite of tools designed to streamline every aspect of ERP deployment and management.
              </p>
            </div>
            
            {/* Feature Groups */}
            <div className="space-y-20">
              {featureGroups.map((group, index) => (
                <div key={index} className="reveal">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
                    <div className="p-4 rounded-full bg-primary/10 mb-4 md:mb-0 md:mr-6">
                      <group.icon size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-center md:text-left">{group.title}</h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-reveal">
                    {group.features.map((feature, fIndex) => (
                      <CustomCard key={fIndex} hoverable>
                        <CardHeader>
                          <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardContent>
                      </CustomCard>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Streamline Your ERP Deployments?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have simplified their ERP and ERPNext management with FERP.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CustomButton to="/contact" size="lg" variant="primary">
                  Get Started
                </CustomButton>
                <CustomButton to="/workflow" size="lg" variant="outline">
                  Learn How It Works
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

export default FeaturesPage;
