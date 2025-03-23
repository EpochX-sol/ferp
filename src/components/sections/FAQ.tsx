import React, { useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import CustomButton from '../ui/CustomButton';

const FAQ = () => {
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

  const faqs = [
    {
      question: "How do I create a new site in FERP?",
      answer: "Creating a new site is simple: Navigate to the Sites tab, click 'New Site', fill in the site name and admin password, select your target bench, choose the apps to install, and click Create. The system will automatically handle the deployment process."
    },
    {
      question: "What's the process for creating a new bench?",
      answer: "To create a new bench: Go to the Bench tab, click 'New Bench', select your target cluster, specify the bench name, configure database host, port, and user credentials. FERP will automatically set up the bench environment with your specified configuration."
    },
    {
      question: "What resources are included in the Site plans?",
      answer: "Our Site plans come in three tiers: Basic (1GB RAM, 1 CPU, 10GB storage), Professional (2GB RAM, 2 CPUs, 20GB storage), and Enterprise (4GB RAM, 4 CPUs, 40GB storage). Each plan includes automated backups and monitoring features."
    },
    {
      question: "What's included in the Bench plans?",
      answer: "Bench plans offer: Basic (up to 3 sites, 4GB RAM, 2 CPUs, 30GB storage), Professional (up to 5 sites, 8GB RAM, 4 CPUs, 50GB storage), and Enterprise (up to 10 sites, 16GB RAM, 8 CPUs, 100GB storage). All plans include monitoring and backup features."
    },
    {
      question: "What are the Cluster plan specifications?",
      answer: "Cluster plans provide: Basic (up to 2 benches, 32GB RAM, 8 CPUs, 200GB storage), Professional (up to 5 benches, 64GB RAM, 16 CPUs, 500GB storage), and Enterprise (unlimited benches with custom resource allocation). All include advanced monitoring and management tools."
    },
    {
      question: "How does the backup system work?",
      answer: "Our backup system operates automatically based on your plan level. Basic plans include daily backups, Professional plans offer hourly backups, and Enterprise plans provide continuous backup options. All backups are securely stored and easily accessible for restoration when needed."
    },
    {
      question: "Can I upgrade my plan as my needs grow?",
      answer: "Yes! You can upgrade between Site, Bench, or Cluster plans at any time. When upgrading, your resources will be automatically adjusted, and you'll only be charged the prorated difference. All your data and configurations will be preserved during the upgrade."
    },
    {
      question: "What monitoring features are available?",
      answer: "FERP provides comprehensive monitoring including resource usage tracking (CPU, RAM, Storage), application performance metrics, automated health checks, and customizable alerts. Higher-tier plans include more detailed analytics and shorter monitoring intervals."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Have Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about FERP and our ERP deployment platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CustomButton to="/contact" variant="primary">
              Contact Support
            </CustomButton>
            {/* <CustomButton to="/docs" variant="outline">
              View Documentation
            </CustomButton> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
