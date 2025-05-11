import React from 'react';
import { motion } from 'framer-motion';

const InfoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Por Qué es Importante Entender las Características de los Dispositivos</h2>
            <p className="text-muted-foreground mb-6">
              Cada dispositivo inteligente tiene características únicas que impactan directamente cómo los usuarios interactúan con él. El tamaño de la pantalla, los métodos de entrada, el contexto de uso y las capacidades técnicas influyen en el diseño óptimo de UI/UX.
            </p>
            <ul className="space-y-4">
              {[
                "Diferentes dispositivos requieren diferentes patrones de interacción",
                "El contexto de uso varía dramáticamente entre tipos de dispositivos",
                "Las restricciones técnicas impactan las posibilidades de diseño",
                "Las expectativas del usuario difieren según el tipo de dispositivo"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Multiple smart devices" 
              className="w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <span className="text-sm font-medium uppercase tracking-wider">Ecosistema de Dispositivos</span>
                <h3 className="text-xl font-bold mt-1">Experiencia Fluida Entre Plataformas</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;