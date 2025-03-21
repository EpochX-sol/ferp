
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

const Features = () => {
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
      title: 'Automated Site Deployment',
      description: 'Deploy Frappe and ERPNext sites with a single click, removing manual configuration steps.',
      icon: Server,
      delay: 0,
    },
    {
      title: 'Cluster Management',
      description: 'Efficiently orchestrate and manage multiple Frappe clusters from a central dashboard.',
      icon: Cpu,
      delay: 100,
    },
    {
      title: 'Seamless Migration & Cloning',
      description: 'Move and clone ERPNext sites between servers or environments with zero downtime.',
      icon: GitBranch,
      delay: 200,
    },
    {
      title: 'High Availability Setup',
      description: 'Configure load-balanced, high-availability deployments for mission-critical applications.',
      icon: Shield,
      delay: 300,
    },
    {
      title: 'Performance Optimization',
      description: 'Automatically tune and optimize your Frappe sites for maximum performance.',
      icon: Zap,
      delay: 400,
    },
    {
      title: 'Scheduled Backups',
      description: 'Set up automated backup schedules with configurable retention policies.',
      icon: Clock,
      delay: 500,
    },
    {
      title: 'Version Control Integration',
      description: 'Seamlessly integrate with Git for deploying custom apps and tracking changes.',
      icon: Repeat,
      delay: 600,
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Real-time monitoring and performance analytics for all your Frappe sites.',
      icon: LineChart,
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
            Everything You Need to Manage Frappe Deployments
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive suite of tools empowers you to deploy, manage, and scale your Frappe and ERPNext environments with ease.
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
        <div className="mt-16 text-center reveal">
          <CustomButton to="/features" size="lg">
            Explore All Features
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Features;
