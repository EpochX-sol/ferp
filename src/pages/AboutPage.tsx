
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CardContent } from '@/components/ui/CustomCard';
import { Users, Calendar, MapPin, Award } from 'lucide-react';

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
  
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Co-Founder & CEO',
      bio: 'Alex has been working with ERP and ERPNext for over 8 years and has helped hundreds of businesses implement successful ERP solutions.',
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & CTO',
      bio: 'A core contributor to the ERP framework, Priya brings deep technical expertise and a passion for automation and DevOps.',
    },
    {
      name: 'David Chen',
      role: 'Head of Product',
      bio: 'With a background in UX design and product management, David ensures FERP is both powerful and intuitive to use.',
    },
    {
      name: 'Sarah Williams',
      role: 'Customer Success Lead',
      bio: 'Sarah works directly with clients to ensure they get the most out of FERP and their ERP deployments.',
    }
  ];
  
  const milestones = [
    {
      year: '2019',
      title: 'Problem Identification',
      description: 'Our founders, frustrated with managing multiple ERP deployments, began work on a solution.'
    },
    {
      year: '2020',
      title: 'Early Development',
      description: 'The first prototype of FERP was developed and tested internally.'
    },
    {
      year: '2021',
      title: 'Company Formation',
      description: 'FERP was officially established and the product entered beta testing with select partners.'
    },
    {
      year: '2022',
      title: 'Public Launch',
      description: 'After extensive testing and refinement, FERP was officially launched to the public.'
    },
    {
      year: '2023',
      title: 'Growth & Expansion',
      description: 'Rapid adoption led to team expansion and the addition of enterprise features.'
    },
    {
      year: 'Today',
      title: 'Continuous Innovation',
      description: 'We continue to enhance FERP with new features and capabilities based on user feedback.'
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
                About FERP
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're on a mission to simplify ERP and ERPNext deployments for businesses around the world.
              </p>
              <CustomButton to="#team" size="lg">
                Meet Our Team
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* Main About Section */}
        <About />
        
        {/* Timeline Section */}
        <section className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The FERP Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                From idea to reality, here's how FERP has evolved over the years.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto reveal">
              <div className="relative border-l border-primary/30 ml-6 md:ml-0 md:ml-[calc(50%-1px)] pl-8 md:pl-0">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`mb-12 md:mb-16 relative ${
                      index % 2 === 0 ? 'md:pr-[calc(50%+2rem)] text-left' : 'md:pl-[calc(50%+2rem)] md:ml-auto text-left md:text-right'
                    }`}
                  >
                    {/* Timeline node */}
                    <div className={`absolute left-[-1.25rem] md:left-auto ${
                      index % 2 === 0 ? 'md:right-[-1.25rem]' : 'md:left-[-1.25rem]'
                    } top-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border-4 border-background`}>
                      <Calendar size={18} className="text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className={`bg-card shadow-subtle rounded-lg p-6 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section id="team" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Our People
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground">
                We're a diverse team of ERP enthusiasts, developers, and customer success experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto stagger-reveal">
              {teamMembers.map((member, index) => (
                <CustomCard key={index} className="h-full" hoverable>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Users size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </CustomCard>
              ))}
            </div>
            
            <div className="text-center mt-12 reveal">
              <p className="text-muted-foreground mb-6">
                We're growing! Check out our open positions.
              </p>
              <CustomButton to="/careers" variant="outline">
                View Careers
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
              <div>
                <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Our Office
                </div>
                <h2 className="text-3xl font-bold mb-4">Where to Find Us</h2>
                <p className="text-muted-foreground mb-6">
                  Our headquarters is located in the heart of San Francisco, but our team works remotely across the globe to support our worldwide customer base.
                </p>
                
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-muted-foreground">
                      123 Tech Park, Suite 100<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-sm text-muted-foreground">
                    Remote-friendly with team members across 12 countries
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-card rounded-xl overflow-hidden">
                  {/* This would be a map in a real implementation */}
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                        <MapPin size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">San Francisco, CA</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Located in the heart of the tech district
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-2/3 h-1/3 bg-primary/10 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Awards Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Awards & Accolades
              </h2>
              <p className="text-lg text-muted-foreground">
                We're proud to be recognized for our innovation and excellence in the ERP ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-reveal">
              <CustomCard className="text-center" hoverable>
                <CardContent className="p-8">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <Award size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Best DevOps Tool</h3>
                  <p className="text-sm text-muted-foreground mb-2">2023</p>
                  <p className="text-muted-foreground">Recognized for excellence in DevOps automation and deployment workflows.</p>
                </CardContent>
              </CustomCard>
              
              <CustomCard className="text-center" hoverable>
                <CardContent className="p-8">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <Award size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">ERPNext Partner of the Year</h3>
                  <p className="text-sm text-muted-foreground mb-2">2022</p>
                  <p className="text-muted-foreground">Awarded for our contributions to the ERPNext ecosystem and partner community.</p>
                </CardContent>
              </CustomCard>
              
              <CustomCard className="text-center" hoverable>
                <CardContent className="p-8">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <Award size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Rising Star in Enterprise Software</h3>
                  <p className="text-sm text-muted-foreground mb-2">2022</p>
                  <p className="text-muted-foreground">Named one of the top emerging companies in enterprise automation solutions.</p>
                </CardContent>
              </CustomCard>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Growing Community
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how FERP can transform your ERP and ERPNext deployment workflow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CustomButton to="/contact" size="lg" variant="primary">
                  Get Started
                </CustomButton>
                <CustomButton to="/features" size="lg" variant="outline">
                  Explore Features
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

export default AboutPage;
