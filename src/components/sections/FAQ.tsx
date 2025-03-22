
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
      question: "What is FERP? ",
      answer: "FERP is a powerful automation platform designed to simplify the deployment, management, and scaling of ERP and ERPNext applications. We offer bench, site, and cluster creation capabilities along with features for migrating, moving, and cloning ERPNext sites."
    },
    {
      question: "Who can benefit from using FERP?",
      answer: "FERP serves two main groups: Partners who provide ERP/ERPNext services to their clients and need to manage multiple deployments efficiently, and direct clients who want to deploy and manage their own ERPNext sites with ease."
    },
    {
      question: "How does FERP's bench creation work?",
      answer: "Our bench creation system automates the entire process of setting up a new ERP bench. It handles dependency installation, configuration of environment, Git repository setup, and other complex tasks with just a few clicks, saving you hours of manual setup time."
    },
    {
      question: "Can I migrate existing ERPNext sites to FERP?",
      answer: "Yes! FERP offers seamless migration tools that can move your existing ERPNext sites to our platform with minimal downtime. Our system handles the complex aspects of database migration, file transfers, and configuration adjustments automatically."
    },
    {
      question: "How does site cloning work?",
      answer: "FERP's cloning capability allows you to create exact duplicates of production sites for testing, development, or client demonstration purposes. The process preserves all configurations, installed apps, and can optionally include or exclude production data."
    },
    {
      question: "What kind of support does FERP offer?",
      answer: "We provide tiered support options ranging from standard email support to premium 24/7 assistance. Our team includes ERP experts who understand the complexities of ERPNext deployments and can help resolve any issues quickly."
    },
    {
      question: "Is FERP secure?",
      answer: "Absolutely. Security is a top priority at FERP. We implement industry best practices for data encryption, access control, regular security audits, and automated backup systems to ensure your ERP deployments remain secure and compliant."
    },
    {
      question: "How do I get started with FERP?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and follow our guided setup process. Alternatively, you can request a demo and our team will walk you through the platform's capabilities and how it can be tailored to your specific needs."
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
            Find answers to common questions about FERP and our ERP automation platform.
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
