import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamTools = [
  {
    name: 'Slack',
    description: 'Asynchronous team communication and channel organization',
    link: 'https://slack.com/',
  },
  {
    name: 'Microsoft Teams',
    description: 'Integrated collaboration with Office 365',
    link: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
  },
  {
    name: 'Miro',
    description: 'Visual collaboration for brainstorming and workshops',
    link: 'https://miro.com/',
  },
  {
    name: 'Loom',
    description: 'Async video messages for clear instructions',
    link: 'https://www.loom.com/',
  },
  {
    name: 'Fellow',
    description: 'Meeting agendas, notes, and action items',
    link: 'https://fellow.app/',
  },
  {
    name: 'Officevibe',
    description: 'Employee engagement and feedback surveys',
    link: 'https://officevibe.com/',
  },
];

const TeamCommunicationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.team-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
      id="team-communication"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-neutral text-neutral-foreground"
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
            5. Tools for Team & Managerial Communication
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Streamline collaboration and feedback with modern communication platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamTools.map((tool, index) => (
            <Card
              key={index}
              className="team-card p-6 hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
            >
              <h3 className="text-h3 font-heading font-semibold text-primary mb-3">
                {tool.name}
              </h3>
              <p className="text-base text-neutral-700 mb-6">{tool.description}</p>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground font-normal w-full"
              >
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Visit Site
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCommunicationSection;
