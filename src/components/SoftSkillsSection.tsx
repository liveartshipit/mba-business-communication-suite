import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    name: 'Emotional Intelligence 2.0',
    type: 'Book',
    description: 'Practical strategies for self-awareness and empathy',
    link: 'https://www.talentsmart.com/products/emotional-intelligence-2.0/',
  },
  {
    name: 'Crucial Conversations',
    type: 'Book',
    description: 'Tools for talking when stakes are high',
    link: 'https://cruciallearning.com/crucial-conversations-book/',
  },
  {
    name: 'The Empathy Edge',
    type: 'Course',
    description: 'Building empathy in leadership and teams',
    link: 'https://www.linkedin.com/learning/developing-your-emotional-intelligence',
  },
  {
    name: 'Conflict Resolution Skills',
    type: 'Workshop',
    description: 'Mediation and negotiation techniques',
    link: 'https://www.pon.harvard.edu/category/research_projects/conflict-resolution/',
  },
];

const SoftSkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.soft-skill-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
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
      id="soft-skills"
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
            7. Soft Skills & Emotional Intelligence
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Develop empathy, self-awareness, and interpersonal sensitivity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_5.png"
              alt="emotional intelligence calm face"
              className="w-full rounded-card"
              loading="lazy"
            />
          </motion.div>

          <div className="space-y-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="soft-skill-card p-6 hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-h4 font-heading font-semibold text-primary">
                        {resource.name}
                      </h3>
                      <span className="text-small px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-base text-neutral-700">{resource.description}</p>
                  </div>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground shrink-0"
                  >
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Learn more about ${resource.name}`}
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
