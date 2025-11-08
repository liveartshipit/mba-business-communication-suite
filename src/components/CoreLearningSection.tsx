import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    name: 'Business Communication Fundamentals',
    focus: 'Writing, speaking, and listening in professional contexts',
    provider: 'Coursera',
    link: 'https://www.coursera.org/learn/business-communication',
  },
  {
    name: 'Effective Business Writing',
    focus: 'Emails, reports, and persuasive documents',
    provider: 'LinkedIn Learning',
    link: 'https://www.linkedin.com/learning/effective-business-writing',
  },
  {
    name: 'Public Speaking and Presentation Skills',
    focus: 'Confidence, structure, and audience engagement',
    provider: 'edX',
    link: 'https://www.edx.org/learn/public-speaking',
  },
  {
    name: 'Interpersonal Communication',
    focus: 'Active listening, empathy, and conflict resolution',
    provider: 'Udemy',
    link: 'https://www.udemy.com/topic/interpersonal-communication/',
  },
  {
    name: 'Strategic Communication',
    focus: 'Aligning messages with business goals',
    provider: 'Harvard Business School Online',
    link: 'https://online.hbs.edu/',
  },
];

const CoreLearningSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.course-card');
      
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
      id="core-learning"
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
            1. Core Learning Platforms & Courses
          </h2>
          <p className="text-large text-neutral-700 max-w-3xl mx-auto">
            Structured courses from leading institutions to build your communication foundation.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="course-card p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-h3 font-heading font-semibold text-primary mb-2">
                    {course.name}
                  </h3>
                  <p className="text-base text-neutral-700 mb-2">{course.focus}</p>
                  <p className="text-small text-neutral-600">Provider: {course.provider}</p>
                </div>
                <div className="lg:ml-8">
                  <Button
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-normal w-full lg:w-auto"
                  >
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      View Course
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreLearningSection;
