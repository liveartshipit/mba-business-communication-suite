import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const concepts = [
  {
    name: 'The Communication Process Model',
    description: 'Understanding sender, message, channel, receiver, and feedback loops',
    howItHelps: 'Diagnose where communication breaks down in your organization',
    link: 'https://www.mindtools.com/CommSkll/CommunicationIntro.htm',
  },
  {
    name: 'Active Listening Techniques',
    description: 'Reflective listening, paraphrasing, and non-verbal cues',
    howItHelps: 'Build trust and understanding in conversations',
    link: 'https://www.ccl.org/articles/leading-effectively-articles/coaching-others-use-active-listening-skills/',
  },
  {
    name: 'Persuasion Principles (Cialdini)',
    description: 'Reciprocity, commitment, social proof, authority, liking, scarcity',
    howItHelps: 'Craft more compelling messages and proposals',
    link: 'https://www.influenceatwork.com/principles-of-persuasion/',
  },
  {
    name: 'Nonviolent Communication (NVC)',
    description: 'Observations, feelings, needs, and requests framework',
    howItHelps: 'Navigate difficult conversations with empathy',
    link: 'https://www.cnvc.org/training/resource/book-chapter-1',
  },
];

const ConceptBuildersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.concept-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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
      id="concept-builders"
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
            2. Concept Builders – Understanding How Communication Works
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Master the theories and frameworks that underpin effective communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {concepts.map((concept, index) => (
            <Card
              key={index}
              className="concept-card p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
            >
              <h3 className="text-h3 font-heading font-semibold text-primary mb-3">
                {concept.name}
              </h3>
              <p className="text-base text-neutral-700 mb-3">{concept.description}</p>
              <div className="mb-6">
                <p className="text-small font-medium text-secondary mb-1">How It Helps:</p>
                <p className="text-base text-neutral-700">{concept.howItHelps}</p>
              </div>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground font-normal w-full"
              >
                <a
                  href={concept.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Learn More
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

export default ConceptBuildersSection;
