import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, PresentationIcon, MessageSquareIcon, BriefcaseIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const simulations = [
  {
    name: 'Leadership Communication Scenarios',
    description: 'Practice delivering feedback, motivating teams, and handling crises',
    icon: UsersIcon,
    link: 'https://www.harvardbusiness.org/insight/leadership-communication/',
  },
  {
    name: 'Negotiation Simulations',
    description: 'Role-play buyer-seller, employer-employee, and partnership discussions',
    icon: BriefcaseIcon,
    link: 'https://www.pon.harvard.edu/freemium/',
  },
  {
    name: 'Meeting Facilitation Practice',
    description: 'Lead virtual and in-person meetings with AI-generated scenarios',
    icon: MessageSquareIcon,
    link: 'https://www.lucidmeetings.com/glossary/meeting-simulation',
  },
  {
    name: 'Crisis Communication Drills',
    description: 'Respond to PR challenges and stakeholder concerns',
    icon: PresentationIcon,
    link: 'https://www.instituteforpr.org/crisis-management-and-communications/',
  },
];

const SimulationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.simulation-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="simulations"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-heading font-bold text-primary mb-4">
            8. Interactive Communication Simulations
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Apply your skills in realistic scenarios with immediate feedback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {simulations.map((simulation, index) => {
            const Icon = simulation.icon;
            return (
              <Card
                key={index}
                className="simulation-card p-8 hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 rounded-lg bg-tertiary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-heading font-semibold text-primary mb-3">
                      {simulation.name}
                    </h3>
                    <p className="text-base text-neutral-700 mb-6">
                      {simulation.description}
                    </p>
                    <Button
                      asChild
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-normal"
                    >
                      <a
                        href={simulation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start Simulation
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SimulationsSection;
