
import React, { useEffect, useState } from 'react';
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/CustomCard';
import CustomButton from '../ui/CustomButton';
import { Check } from 'lucide-react';

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

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with Frappe',
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        'Up to 5 Frappe sites',
        '1 Deployment server',
        'Basic site management',
        'Email support',
        'Daily backups',
        'SSL certificate management',
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Professional',
      description: 'For growing businesses with multiple ERPNext instances',
      monthlyPrice: 149,
      annualPrice: 1490,
      features: [
        'Up to 20 Frappe sites',
        'Up to 3 deployment servers',
        'Advanced site management',
        'Priority email & chat support',
        'Hourly backups',
        'SSL certificate management',
        'Site migration & cloning',
        'Monitoring & alerts',
      ],
      isPopular: true,
      buttonVariant: 'primary' as const,
    },
    {
      name: 'Enterprise',
      description: 'For organizations with complex Frappe deployments',
      monthlyPrice: 399,
      annualPrice: 3990,
      features: [
        'Unlimited Frappe sites',
        'Unlimited deployment servers',
        'Advanced site management',
        '24/7 priority support',
        'Continuous backups',
        'SSL certificate management',
        'Site migration & cloning',
        'Advanced monitoring & alerts',
        'High availability setup',
        'Custom integrations',
        'Dedicated account manager',
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
            Choose the plan that works best for your organization's Frappe deployment needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-reveal">
          {plans.map((plan, index) => (
            <CustomCard 
              key={index} 
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
                    ${isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    / month
                  </span>
                  {isAnnual && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.annualPrice}/year)
                    </div>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
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
          ))}
        </div>

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

export default Pricing;
