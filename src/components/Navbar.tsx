import React from 'react';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { href: '/', text: 'Inicio' },
    { href: '/smart-devices', text: 'Dispositivos Inteligentes' },
    { href: '/ux-ui', text: 'UX/UI' },
    { href: '/ui-parameters', text: 'Parámetros UI' },
    { href: '/ux-parameters', text: 'Parámetros UX' },
    { href: '/case-studies', text: 'Casos de Estudio' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 font-bold text-primary text-lg">
              DeviceUX
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
              aria-label="Main menu"
            >
              {isOpen ? (
                <XIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <Button
            variant="ghost"
            onClick={toggleDarkMode}
            className="w-full justify-start"
          >
            {isDarkMode ? (
              <><SunIcon className="h-5 w-5 mr-2" /> Light Mode</>
            ) : (
              <><MoonIcon className="h-5 w-5 mr-2" /> Dark Mode</>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;