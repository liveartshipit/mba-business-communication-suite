import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pathStages = [
  {
    stage: 'Foundation',
    title: 'Build Your Communication Base',
    tools: [
      'Business Communication Fundamentals (Coursera)',
      'The Communication Process Model',
      'Active Listening Techniques',
    ],
  },
  {
    stage: 'Writing',
    title: 'Master Professional Writing',
    tools: [
      'Effective Business Writing (LinkedIn Learning)',
      'Grammarly Business',
      'Hemingway Editor',
    ],
  },
  {
    stage: 'Speaking',
    title: 'Develop Presentation Skills',
    tools: [
      'Public Speaking and Presentation Skills (edX)',
      'VirtualSpeech VR',
      'Orai Speech Coach',
    ],
  },
  {
    stage: 'Collaboration',
    title: 'Enhance Team Communication',
    tools: [
      'Interpersonal Communication (Udemy)',
      'Slack / Microsoft Teams',
      'Fellow Meeting Management',
    ],
  },
  {
    stage: 'Leadership',
    title: 'Lead with Clarity and Empathy',
    tools: [
      'Strategic Communication (HBS Online)',
      'Leadership Communication Scenarios',
      'Emotional Intelligence 2.0',
    ],
  },
];

const LearningPathSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const nodes = sectionRef.current.querySelectorAll('.path-node');
      
      gsap.fromTo(
        nodes,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const toggleStage = (index: number) => {
    setExpandedStage(expandedStage === index ? null : index);
  };

  return (
    <section
      id="learning-path"
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
            10. Suggested Learning Path
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Follow this progressive journey from foundation to leadership mastery.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

            {pathStages.map((stage, index) => (
              <div key={index} className="path-node mb-12 last:mb-0">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  {/* Stage Number */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-2 flex items-center justify-center shrink-0">
                    <span className="text-h3 font-heading font-bold text-white">
                      {index + 1}
                    </span>
                  </div>

                  {/* Stage Card */}
                  <Card className="flex-1 p-6 lg:p-8 bg-card text-card-foreground">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-small font-medium text-tertiary mb-2">
                          {stage.stage}
                        </p>
                        <h3 className="text-h3 font-heading font-semibold text-primary">
                          {stage.title}
                        </h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleStage(index)}
                        className="bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary shrink-0"
                        aria-label={expandedStage === index ? 'Collapse' : 'Expand'}
                      >
                        {expandedStage === index ? (
                          <ChevronUpIcon className="w-6 h-6" />
                        ) : (
                          <ChevronDownIcon className="w-6 h-6" />
                        )}
                      </Button>
                    </div>

                    {expandedStage === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-border"
                      >
                        <p className="text-small font-medium text-neutral-600 mb-3">
                          Recommended Tools:
                        </p>
                        <ul className="space-y-2">
                          {stage.tools.map((tool, toolIndex) => (
                            <li
                              key={toolIndex}
                              className="flex items-start gap-2 text-base text-neutral-700"
                            >
                              <span className="text-tertiary mt-1">•</span>
                              <span>{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
