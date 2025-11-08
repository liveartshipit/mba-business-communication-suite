import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const aiTools = [
  {
    name: 'ChatGPT (OpenAI)',
    description: 'Draft emails, reports, and presentations with conversational AI',
    link: 'https://chat.openai.com/',
  },
  {
    name: 'Claude (Anthropic)',
    description: 'Long-form content generation with nuanced tone control',
    link: 'https://www.anthropic.com/claude',
  },
  {
    name: 'Jasper AI',
    description: 'Marketing copy and business content templates',
    link: 'https://www.jasper.ai/',
  },
  {
    name: 'Copy.ai',
    description: 'Quick content generation for social media and emails',
    link: 'https://www.copy.ai/',
  },
  {
    name: 'Otter.ai',
    description: 'Real-time transcription and meeting summaries',
    link: 'https://otter.ai/',
  },
  {
    name: 'Descript',
    description: 'Edit audio and video by editing text transcripts',
    link: 'https://www.descript.com/',
  },
];

const AIToolsSection = () => {
  return (
    <section
      id="ai-tools"
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
            6. AI & Digital Tools to Improve Communication
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Leverage artificial intelligence to enhance your writing and speaking efficiency.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {aiTools.map((tool, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card text-card-foreground"
              >
                <AccordionTrigger className="text-h4 font-heading font-semibold text-primary hover:text-secondary">
                  {tool.name}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-neutral-700 mb-4">{tool.description}</p>
                  <Button
                    asChild
                    className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal"
                  >
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Explore Tool
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
