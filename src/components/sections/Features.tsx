import React, { useEffect } from 'react';
import { 
  Cpu, 
  Server, 
  GitBranch, 
  Repeat, 
  Shield, 
  Zap, 
  Clock, 
  LineChart
} from 'lucide-react';
import { CustomCard, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/CustomCard';
import CustomButton from '../ui/CustomButton';

const Features = ({ hideExploreButton = false }) => {
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

  const features = [
    {
      title: 'Real-Time Monitoring',
      description: 'Gain complete visibility into your site and bench health with customizable dashboards.',
      icon: LineChart,
      delay: 0,
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Kubernetes-powered deployment ensures high availability and easy scaling as your business grows.',
      icon: Server,
      delay: 100,
    },
    {
      title: 'Enhanced Security',
      description: 'Easily add custom domains and enable 2FA for enhanced security.',
      icon: Shield,
      delay: 200,
    },
    {
      title: 'Automated Backups',
      description: 'Regular on-site and off-site backups to ensure your data is always protected.',
      icon: Clock,
      delay: 300,
    },
    {
      title: 'System Redundancy',
      description: 'Built-in redundancy and isolation mechanisms to prevent single points of failure.',
      icon: Repeat,
      delay: 400,
    },
    {
      title: 'Automated Updates',
      description: 'Stay protected with automated software and security updates for your systems.',
      icon: Zap,
      delay: 500,
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to ensure optimal system performance.',
      icon: Cpu,
      delay: 600,
    },
    {
      title: 'Integrated Support',
      description: 'Comprehensive support system for your peace of mind and business continuity.',
      icon: GitBranch,
      delay: 700,
    },
  ];

  return (
    <section id="features" className="bg-secondary/50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Secure, Relable and Scalable Environment To Run Your Business Software
          </h2>
          <p className="text-lg text-muted-foreground">
          Our features are designed to give you complete control and visibility over your ERP/ERPNext environments. Experience seamless operations and enhanced security as you scale your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-reveal">
          {features.map((feature, index) => (
            <CustomCard 
              key={index} 
              className="h-full" 
              hoverable
            >
              <div className="p-4 bg-primary/10 rounded-full w-fit mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CustomCard>
          ))}
        </div>

        {/* CTA */}
        {!hideExploreButton && <div className="mt-16 text-center reveal">
          <CustomButton to="/features" size="lg">
            Explore All Features
          </CustomButton>
        </div>}
      </div>
    </section>
  );
};

export default Features;
