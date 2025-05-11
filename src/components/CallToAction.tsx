import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Listo para Aplicar Estos Principios?
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-primary-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explora nuestros recursos y casos de estudio para profundizar tu comprensión del diseño UI/UX efectivo para dispositivos inteligentes.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary" className="rounded-full">
              Explorar Recursos
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground">
              Ver Casos de Estudio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;