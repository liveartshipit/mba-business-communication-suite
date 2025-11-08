import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const readings = [
  {
    title: 'Harvard Business Review – Communication',
    description: 'Articles on leadership communication, persuasion, and storytelling',
    link: 'https://hbr.org/topic/communication',
  },
  {
    title: 'MIT Sloan Management Review',
    description: 'Research on organizational communication and change management',
    link: 'https://sloanreview.mit.edu/',
  },
  {
    title: 'Fast Company – Leadership',
    description: 'Modern perspectives on workplace communication',
    link: 'https://www.fastcompany.com/leadership',
  },
  {
    title: 'The Muse – Career Advice',
    description: 'Practical tips for emails, meetings, and networking',
    link: 'https://www.themuse.com/advice/communication-skills',
  },
  {
    title: 'TED Talks – Communication',
    description: 'Inspiring talks on public speaking and influence',
    link: 'https://www.ted.com/topics/communication',
  },
  {
    title: 'McKinsey Quarterly',
    description: 'Strategic communication in business transformation',
    link: 'https://www.mckinsey.com/quarterly/overview',
  },
];

const ReadingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.reading-card');
      
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
      id="reading"
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
            9. Free Reading & Continuous Learning
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Stay current with the latest research and best practices in business communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {readings.map((reading, index) => (
            <Card
              key={index}
              className="reading-card p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
            >
              <h3 className="text-h3 font-heading font-semibold text-primary mb-3">
                {reading.title}
              </h3>
              <p className="text-base text-neutral-700 mb-6">{reading.description}</p>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground font-normal w-full"
              >
                <a
                  href={reading.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Read More
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

export default ReadingSection;
