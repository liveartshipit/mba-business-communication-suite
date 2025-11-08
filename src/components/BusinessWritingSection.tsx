import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    name: 'Grammarly Business',
    description: 'AI-powered writing assistant for clarity, tone, and correctness',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_3.png',
    link: 'https://www.grammarly.com/business',
  },
  {
    name: 'Hemingway Editor',
    description: 'Simplify complex sentences and improve readability',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_3.png',
    link: 'https://hemingwayapp.com/',
  },
  {
    name: 'ProWritingAid',
    description: 'In-depth style and grammar analysis for professional documents',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_3.png',
    link: 'https://prowritingaid.com/',
  },
  {
    name: 'Notion AI',
    description: 'Generate drafts, summaries, and meeting notes',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_3.png',
    link: 'https://www.notion.so/product/ai',
  },
];

const BusinessWritingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.tool-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, x: -50 },
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
      id="business-writing"
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
            3. Business Writing Tools
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Enhance your writing with AI-powered assistants and editing platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="tool-card overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={tool.image}
                  alt="professional writing tools"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-h4 font-heading font-semibold text-primary mb-3">
                  {tool.name}
                </h3>
                <p className="text-base text-neutral-700 mb-6">{tool.description}</p>
                <Button
                  asChild
                  className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal w-full"
                >
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Open Tool
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessWritingSection;
