import React, { useEffect, useState } from 'react';
import { CustomCard } from '../ui/CustomCard';
import CustomButton from '../ui/CustomButton';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Drop us an email and we\'ll get back to you within 24 hours.',
      value: 'contact@frappeflow.com',
      link: 'mailto:contact@frappeflow.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our support team during business hours.',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with us in real-time for immediate assistance.',
      value: 'Start a conversation',
      link: '#', // This would typically link to your chat widget
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We'd Love to Hear From You
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about FrappeFlow or want to schedule a demo? Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6 stagger-reveal">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <method.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-1">{method.description}</p>
                  <a 
                    href={method.link} 
                    className="text-primary hover:underline font-medium"
                  >
                    {method.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Office Location */}
            <div className="mt-12 pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Our Office</h3>
              <p className="text-muted-foreground">
                123 Tech Park, Suite 100<br />
                San Francisco, CA 94107<br />
                United States
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong>Hours:</strong> Monday - Friday, 9am - 6pm PST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <CustomCard className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <CustomButton
                      type="submit"
                      variant="primary"
                      className="w-full"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </CustomButton>
                  </div>
                </div>
              </form>
            </CustomCard>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center reveal">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <p className="text-muted-foreground mb-8">
            Can't find what you're looking for? Check out our comprehensive FAQ section.
          </p>
          <CustomButton to="/faq" variant="outline">
            View FAQ
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
