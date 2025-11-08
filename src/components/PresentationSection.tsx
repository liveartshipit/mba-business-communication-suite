import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const simulators = [
  {
    name: 'VirtualSpeech VR',
    description: 'Practice presentations in realistic virtual environments',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_4.png',
    link: 'https://virtualspeech.com/',
  },
  {
    name: 'Orai',
    description: 'AI speech coach analyzing pace, filler words, and clarity',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_4.png',
    link: 'https://www.orai.com/',
  },
  {
    name: 'Yoodli',
    description: 'Real-time feedback on speaking patterns and confidence',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_4.png',
    link: 'https://www.yoodli.ai/',
  },
  {
    name: 'Toastmasters Pathways',
    description: 'Structured speaking projects with peer feedback',
    image: 'https://c.animaapp.com/mhqf1cl5gLJjk4/img/ai_4.png',
    link: 'https://www.toastmasters.org/pathways-overview',
  },
];

const PresentationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.simulator-card');
      
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
      id="presentation"
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
            4. Presentation & Public Speaking Practice
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Build confidence and refine your delivery with interactive simulators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {simulators.map((simulator, index) => (
            <Card
              key={index}
              className="simulator-card overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={simulator.image}
                  alt="presentation practice man"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-h3 font-heading font-semibold text-primary mb-3">
                  {simulator.name}
                </h3>
                <p className="text-base text-neutral-700 mb-6">{simulator.description}</p>
                <Button
                  asChild
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-normal w-full"
                >
                  <a
                    href={simulator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Try Simulator
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

export default PresentationSection;
