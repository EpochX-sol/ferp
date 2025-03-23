import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { 
  Shield, 
  Target, 
  Users, 
  Zap, 
  MapPin, 
  Server, 
  Code, 
  Cpu
} from 'lucide-react';
import { CustomCard, CardContent } from '@/components/ui/CustomCard';

const AboutPage = () => {
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
  
  const services = [
    {
      icon: Cpu,
      title: "AI-Driven Business Automation",
      description: "Leverage the power of AI to automate routine tasks across various domains such as administration, sales, and customer service.",
      link: "https://fineto.fi/"
    },
    {
      icon: Server,
      title: "ERPNext Implementation",
      description: "As a certified partner, we offer expertise in implementing ERP solutions using the Frappe framework to streamline your business processes.",
      link: "https://fineto.fi/"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We craft web, mobile, and platform applications designed to elevate your business processes with efficient and cost-effective technologies.",
      link: "https://fineto.fi/"
    }
  ];

  const commitments = [
    {
      icon: Shield,
      title: "Data Security",
      description: "Comprehensive data protection incorporating advanced technologies and continuous team education."
    },
    {
      icon: Target,
      title: "Result Oriented",
      description: "Projects carefully scoped and completed within short timelines, enabling performance-based pricing."
    },
    {
      icon: Users,
      title: "Transparency",
      description: "Full visibility into development work with access to project tracking tools and performance metrics."
    },
    {
      icon: Zap,
      title: "Flexibility",
      description: "Highly adaptable team that can utilize existing tools or establish new collaboration environments."
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
              Our Story
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                At the heart of innovation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're a team of wizards in Helsinki Finland and Ethiopia, crafting magic with AI to make jobs zoom by fast. Imagine chatting with friendly robots, selling without sweat, and having smart systems sort out the boring stuff.
              </p>
              <CustomButton 
                to="https://fineto.fi/" 
                size="lg"
                className="hover:bg-primary/90"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://fineto.fi/', '_blank');
                }}
              >
                Learn More About Us
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 reveal">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Certified partner of ERPNext and the Frappe Framework
              </h2>
              <p className="text-lg text-muted-foreground">
                As a certified partner of ERPNext and the Frappe Framework, FINETO harnesses these powerful platforms to elevate our custom software development services. This partnership allows us to offer solutions that are just right for you, saving money, and making sure your business can grow and scale without a hitch. FERP, our flagship product, is built on this foundation of expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto reveal">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Origin & Mission</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  Founded in 2020, FINETO embarked on a journey with a singular mission: to craft productivity and data connectivity solutions that truly resonate with the needs of our clients. From our humble beginnings, we have always believed in the power of custom software development to transform businesses.
                </p>
                <p className="mb-6">
                  As the digital landscape continued to evolve, so did we. Recognizing the transformative power of artificial intelligence (AI) and automation technologies, FINETO embarked on a strategic pivot. This shift is more than just a response to industry trends; it's a commitment to setting new standards and driving business transformation.
                </p>
                <p>
                  We're using what we know to bring the smarts of artificial intelligence (AI) into everyday work tools. At FINETO, we're always learning and growing, and we believe using AI to help with daily tasks can make a big difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                The digital frontier is vast, and the possibilities limitless. With FINETO, embark on a journey of transformation where operations are streamlined and decisions are informed. We are looking forward to providing tailored cost-effective AI-driven business software solutions to unlock new possibilities and deliver growth and productivity to our clients. Together, let's turn the vision of a smarter, more efficient business into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Core Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
              {commitments.map((commitment, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <commitment.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              {services.map((service, index) => (
                <CustomCard key={index} className="h-full" hoverable>
                  <CardContent className="p-6">
                    <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                      <service.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <CustomButton 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Learn more
                    </CustomButton>
                  </CardContent>
                </CustomCard>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
              <div>
                <h2 className="text-3xl font-bold mb-4">Where to Find Us</h2>
                <p className="text-muted-foreground mb-6">
                  Our headquarters is located in Helsinki, Finland, where our team works to support our worldwide customer base.
                </p>
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-muted-foreground">Helsinki, Finland</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-card rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                        <MapPin size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Helsinki, Finland</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's work together to bring innovation and efficiency to your operations.
              </p>
              <CustomButton to="/contact" size="lg" variant="primary">
                Get in Touch
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
