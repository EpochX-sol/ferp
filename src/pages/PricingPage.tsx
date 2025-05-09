import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Pricing from '@/components/sections/Pricing';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CardContent } from '@/components/ui/CustomCard';
import { CheckCircle, HelpCircle } from 'lucide-react';

const PricingPage = () => {
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
  
  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be billed the prorated difference immediately. When downgrading, the new rate will apply at the start of your next billing cycle.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you approach your plan limits. If you exceed them, we won\'t cut off your service, but we will reach out to discuss upgrading to a more suitable plan for your needs.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial of the Professional plan so you can explore the full capabilities of FERP before committing to a subscription.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no hidden setup fees. You only pay the advertised subscription price.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to your plan features until the end of your current billing cycle.'
    },
    {
      question: 'Do you offer custom plans for larger organizations?',
      answer: 'Absolutely! Our Enterprise plan is customizable to meet specific requirements. Please contact our sales team to discuss your needs and get a tailored solution.'
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
                Pricing Plans
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Predictable Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the plan that works best for your organization's ERP deployment needs, with no hidden fees or surprises.
              </p>
              <CustomButton to="#pricing-table" size="lg">
                View Plans
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* Main Pricing Section */}
        <div id="pricing-table">
          <Pricing />
        </div>
        
        {/* Comparison Table */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Feature Comparison
              </h2>
              <p className="text-lg text-muted-foreground">
                Compare plans side by side to find the right fit for your business.
              </p>
            </div>
            
            <div className="overflow-x-auto reveal">
              <div className="min-w-[800px]">
                {/* Site Plans Comparison */}
                <h3 className="text-2xl font-bold mb-6">Site Plans</h3>
                <table className="w-full border-collapse mb-16">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-6 text-left">Feature</th>
                      <th className="py-4 px-6 text-center">Basic Site</th>
                      <th className="py-4 px-6 text-center bg-primary/5 border-x border-border">Professional Site</th>
                      <th className="py-4 px-6 text-center">Enterprise Site</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">RAM</td>
                      <td className="py-4 px-6 text-center">1GB</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">2GB</td>
                      <td className="py-4 px-6 text-center">4GB</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">CPU</td>
                      <td className="py-4 px-6 text-center">1 core</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">2 cores</td>
                      <td className="py-4 px-6 text-center">4 cores</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">Storage</td>
                      <td className="py-4 px-6 text-center">10GB</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">20GB</td>
                      <td className="py-4 px-6 text-center">40GB</td>
                    </tr>
                  </tbody>
                </table>

                {/* Bench Plans Comparison */}
                <h3 className="text-2xl font-bold mb-6">Bench Plans</h3>
                <table className="w-full border-collapse mb-16">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-6 text-left">Feature</th>
                      <th className="py-4 px-6 text-center">Basic Bench</th>
                      <th className="py-4 px-6 text-center bg-primary/5 border-x border-border">Professional Bench</th>
                      <th className="py-4 px-6 text-center">Enterprise Bench</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">Sites</td>
                      <td className="py-4 px-6 text-center">Up to 3 sites</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">Up to 5 sites</td>
                      <td className="py-4 px-6 text-center">Up to 10 sites</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">RAM</td>
                      <td className="py-4 px-6 text-center">4GB</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">8GB</td>
                      <td className="py-4 px-6 text-center">16GB</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">CPU</td>
                      <td className="py-4 px-6 text-center">2 cores</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">4 cores</td>
                      <td className="py-4 px-6 text-center">8 cores</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">Storage</td>
                      <td className="py-4 px-6 text-center">30GB</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">50GB</td>
                      <td className="py-4 px-6 text-center">100GB</td>
                    </tr>
                  </tbody>
                </table>

                {/* Cluster Plans Comparison */}
                <h3 className="text-2xl font-bold mb-6">Cluster Plans</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-6 text-left">Feature</th>
                      <th className="py-4 px-6 text-center">Basic Cluster</th>
                      <th className="py-4 px-6 text-center bg-primary/5 border-x border-border">Professional Cluster</th>
                      <th className="py-4 px-6 text-center">Enterprise Cluster</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">Benches</td>
                      <td className="py-4 px-6 text-center">Up to 2 benches</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">Up to 5 benches</td>
                      <td className="py-4 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">RAM</td>
                      <td className="py-4 px-6 text-center">32GB</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">64GB</td>
                      <td className="py-4 px-6 text-center">Custom</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">CPU</td>
                      <td className="py-4 px-6 text-center">8 cores</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">16 cores</td>
                      <td className="py-4 px-6 text-center">Custom</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-6 font-medium">Storage</td>
                      <td className="py-4 px-6 text-center">200GB</td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">500GB</td>
                      <td className="py-4 px-6 text-center">Custom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our pricing and plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto stagger-reveal">
              {faqs.map((faq, index) => (
                <CustomCard key={index} hoverable>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <HelpCircle size={20} className="text-primary mt-1" />
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </div>
                    <p className="text-muted-foreground pl-8">{faq.answer}</p>
                  </CardContent>
                </CustomCard>
              ))}
            </div>
            
            <div className="text-center mt-12 reveal">
              <p className="text-muted-foreground mb-6">
                Still have questions? We're here to help.
              </p>
              <CustomButton to="/contact" variant="outline">
                Contact Sales
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose the plan that's right for you and start automating your ERP deployments today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CustomButton to="/contact" size="lg" variant="primary">
                  Sign Up Now
                </CustomButton>
                <CustomButton to="/contact" size="lg" variant="outline">
                  Contact Sales
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

export default PricingPage;
