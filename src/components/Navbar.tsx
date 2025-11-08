import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'core-learning', label: 'Courses' },
    { id: 'concept-builders', label: 'Concepts' },
    { id: 'business-writing', label: 'Writing' },
    { id: 'presentation', label: 'Speaking' },
    { id: 'team-communication', label: 'Team Tools' },
    { id: 'ai-tools', label: 'AI Tools' },
    { id: 'soft-skills', label: 'Soft Skills' },
    { id: 'simulations', label: 'Simulations' },
    { id: 'reading', label: 'Reading' },
    { id: 'learning-path', label: 'Learning Path' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg lg:text-xl font-heading font-semibold text-primary-foreground hover:text-neutral-100 transition-colors duration-200"
            >
              MBA Smart-Learning
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 text-sm font-normal text-primary-foreground hover:text-neutral-100 transition-colors duration-200 cursor-pointer ${
                        activeSection === item.id ? 'text-tertiary' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile MenuIcon Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-primary pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-left text-base font-normal text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id ? 'bg-secondary text-tertiary' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
