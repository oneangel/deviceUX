import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Entendiendo los <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Dispositivos Inteligentes</span> y el Diseño UI/UX
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explora la relación crítica entre las características de los dispositivos inteligentes y el diseño efectivo de interfaces y experiencias de usuario.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="rounded-full"
                onClick={() => scrollToSection('topics')}
              >
                Explorar Temas
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full"
                onClick={() => scrollToSection('examples')}
              >
                Ver Ejemplos
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dispositivos inteligentes y diseño UI" 
                  className="w-full object-cover" 
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-background rounded-xl shadow-xl p-4 w-40 sm:w-48 border border-border">
                <div className="text-sm font-medium">Diseño Inteligente</div>
                <div className="text-xs text-muted-foreground mt-1">Principios UI/UX para dispositivos modernos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;