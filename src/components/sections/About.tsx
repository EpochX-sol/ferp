
import React, { useEffect } from 'react';
import CustomButton from '../ui/CustomButton';
import { CustomCard, CardContent } from '../ui/CustomCard';
import { Users, Lightbulb, Target, Award } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in ERP deployment automation.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with partners and clients to deliver solutions that meet real-world needs.'
    },
    {
      icon: Target,
      title: 'Efficiency',
      description: 'We\'re obsessed with making ERP deployment and management as streamlined as possible.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We\'re committed to delivering reliable, secure, and high-performance solutions.'
    }
  ];

  const testimonials = [
    {
      quote: "FERP has revolutionized how we deploy and manage ERPNext instances for our clients. What used to take days now takes minutes.",
      author: "Sarah Johnson",
      position: "CTO, TechSolutions Inc."
    },
    {
      quote: "The migration and cloning features alone have saved us countless hours of work. Our team can now focus on adding value rather than managing infrastructure.",
      author: "Michael Chen",
      position: "IT Director, Global Manufacturing"
    },
    {
      quote: "As a ERP partner, FERP has been a game-changer for our business. We can now serve more clients with less overhead.",
      author: "Priya Sharma",
      position: "Founder, ERPExperts"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simplifying ERP Deployments for Everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re a team of ERP enthusiasts dedicated to making ERPNext deployment and management accessible to businesses of all sizes.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 reveal">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
                We’re a team of wizards in Helsinki Finland, crafting magic with AI to make jobs zoom by fast.
            </p>
            <p className="text-muted-foreground mb-4">
               We’ve got the secret ingredients: ERP Next and Frappe, making everything work like a dream. Plus, we build cool apps for mobile phones and also Team/Slack collaboration tools where everything happens.
            </p>
            <p className="text-muted-foreground mb-6">
              Today, FERP is used by partners and businesses around the world to deploy, manage, and scale their ERP and ERPNext environments with unprecedented ease and efficiency.
            </p>
            <CustomButton to="/about" variant="outline">
              Learn More About Us
            </CustomButton>
          </div>
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20 reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              These core principles guide everything we do at FERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
            <p className="text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about FERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-reveal">
            {testimonials.map((testimonial, index) => (
              <CustomCard key={index} className="h-full" hoverable>
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.59997 14.7L6.29997 19.5H11.1L14.4 14.7V8.1H7.79997V14.7H9.59997ZM17.7 14.7L14.4 19.5H19.2L22.5 14.7V8.1H15.9V14.7H17.7Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
