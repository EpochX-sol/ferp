import React, { useEffect, useState } from 'react';
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/CustomCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomButton from '../ui/CustomButton';
import { Check, Server, Layout, Grid } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
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

  const sitePlans = [
    {
      name: 'Basic Site',
      description: 'For small sites',
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        'Single site deployment',
        'Basic monitoring',
        'Daily backups',
        '1GB RAM',
        '1 CPU core',
        '10GB storage',
        'Email support',
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Professional Site',
      description: 'For medium-sized sites',
      monthlyPrice: 39,
      annualPrice: 390,
      features: [
        'Single site deployment',
        'Advanced monitoring',
        'Hourly backups',
        '2GB RAM',
        '2 CPU cores',
        '20GB storage',
        'Priority support',
      ],
      isPopular: true,
      buttonVariant: 'primary' as const,
    },
    {
      name: 'Enterprise Site',
      description: 'For large sites',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Single site deployment',
        'Enterprise monitoring',
        'Continuous backups',
        '4GB RAM',
        '4 CPU cores',
        '40GB storage',
        '24/7 support',
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
    },
  ];

  const benchPlans = [
    {
      name: 'Basic Bench',
      description: 'For small teams',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Up to 3 sites',
        'Basic monitoring',
        'Daily backups',
        '4GB RAM',
        '2 CPU cores',
        '30GB storage',
        'Email support',
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Professional Bench',
      description: 'For growing teams',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Up to 5 sites',
        'Advanced monitoring',
        'Hourly backups',
        '8GB RAM',
        '4 CPU cores',
        '50GB storage',
        'Priority support',
      ],
      isPopular: true,
      buttonVariant: 'primary' as const,
    },
    {
      name: 'Enterprise Bench',
      description: 'For large teams',
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        'Up to 10 sites',
        'Enterprise monitoring',
        'Continuous backups',
        '16GB RAM',
        '8 CPU cores',
        '100GB storage',
        '24/7 support',
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
    },
  ];

  const clusterPlans = [
    {
      name: 'Basic Cluster',
      description: 'For small organizations',
      monthlyPrice: 499,
      annualPrice: 4990,
      features: [
        'Up to 2 benches',
        'Basic monitoring',
        'Daily backups',
        '32GB RAM',
        '8 CPU cores',
        '200GB storage',
        'Priority support',
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Professional Cluster',
      description: 'For medium organizations',
      monthlyPrice: 999,
      annualPrice: 9990,
      features: [
        'Up to 5 benches',
        'Advanced monitoring',
        'Hourly backups',
        '64GB RAM',
        '16 CPU cores',
        '500GB storage',
        '24/7 support',
      ],
      isPopular: true,
      buttonVariant: 'primary' as const,
    },
    {
      name: 'Enterprise Cluster',
      description: 'For large organizations',
      monthlyPrice: 1999,
      annualPrice: 19990,
      features: [
        'Unlimited benches',
        'Enterprise monitoring',
        'Continuous backups',
        'Custom RAM',
        'Custom CPU cores',
        'Custom storage',
        'Dedicated support',
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that works best for your organization's needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${isAnnual ? 'text-muted-foreground' : 'font-medium'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-primary/20"
              role="switch"
              aria-checked={isAnnual}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} 
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>
              Annual <span className="text-sm text-green-600 font-normal">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Tabs */}
        <Tabs defaultValue="site" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-10">
            <TabsTrigger value="site" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <span className="hidden sm:inline">Site Plans</span>
            </TabsTrigger>
            <TabsTrigger value="bench" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              <span className="hidden sm:inline">Bench Plans</span>
            </TabsTrigger>
            <TabsTrigger value="cluster" className="flex items-center gap-2">
              <Grid className="h-4 w-4" />
              <span className="hidden sm:inline">Cluster Plans</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="site" className="animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sitePlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} isAnnual={isAnnual} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bench" className="animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benchPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} isAnnual={isAnnual} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cluster" className="animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clusterPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} isAnnual={isAnnual} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Enterprise CTA */}
        <div className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-xl bg-secondary reveal">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored solutions for organizations with specific requirements. Contact our sales team to discuss your needs.
          </p>
          <CustomButton to="/contact" variant="primary">
            Contact Sales
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

// Helper component for pricing cards
const PricingCard = ({ plan, isAnnual }) => {
  const monthlyPrice = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;

  return (
    <CustomCard 
      className={`relative h-full flex flex-col ${
        plan.isPopular ? 'border-primary shadow-lg' : ''
      }`}
      hoverable
    >
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mt-2 mb-6">
          <span className="text-4xl font-bold">
            ${monthlyPrice}
          </span>
          <span className="text-muted-foreground ml-2">/ month</span>
          {isAnnual && (
            <div className="text-sm text-muted-foreground mt-1">
              Billed annually (${plan.annualPrice}/year)
            </div>
          )}
        </div>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-primary mr-2 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <CustomButton
          variant={plan.buttonVariant}
          to="/contact"
          className="w-full"
        >
          Get Started
        </CustomButton>
      </CardFooter>
    </CustomCard>
  );
};

export default Pricing;
