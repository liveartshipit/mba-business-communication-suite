import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'MBA Smart-Learning Home', href: '#hero' },
    { label: 'All Courses Overview', href: '#core-learning' },
    { label: 'About', href: '#hero' },
    { label: 'Contact', href: '#hero' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-h4 font-heading font-semibold text-primary-foreground mb-4">
              MBA Smart-Learning
            </h3>
            <p className="text-base text-neutral-200">
              Your comprehensive hub for mastering business communication skills.
            </p>
          </div>

          <div>
            <h4 className="text-base font-medium text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 2).map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-base text-neutral-200 hover:text-tertiary transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('core-learning')}
                  className="text-base text-neutral-200 hover:text-tertiary transition-colors duration-200 cursor-pointer"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ai-tools')}
                  className="text-base text-neutral-200 hover:text-tertiary transition-colors duration-200 cursor-pointer"
                >
                  AI Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('learning-path')}
                  className="text-base text-neutral-200 hover:text-tertiary transition-colors duration-200 cursor-pointer"
                >
                  Learning Path
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium text-primary-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.slice(2).map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-base text-neutral-200 hover:text-tertiary transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-neutral-200">
              © {currentYear} MBA Smart-Learning Suite. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-base text-neutral-200 hover:text-tertiary transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-base text-neutral-200 hover:text-tertiary transition-colors duration-200 cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
