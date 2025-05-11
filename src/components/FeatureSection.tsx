import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Tablet, Watch, Tv, LayoutGrid, Users, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Smartphones',
    description: 'Interfaces táctiles, gestos y patrones de UX móvil para los dispositivos que más usamos.'
  },
  {
    icon: <Watch className="h-6 w-6" />,
    title: 'Dispositivos Wearables',
    description: 'Pantallas pequeñas con información rápida e interfaces enfocadas en la salud.'
  },
  {
    icon: <Tablet className="h-6 w-6" />,
    title: 'Tablets',
    description: 'Superficies táctiles más grandes con patrones únicos de interacción y consumo de contenido.'
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: 'Laptops',
    description: 'Interfaces tradicionales con puntero para necesidades de productividad y multitareas.'
  },
  {
    icon: <Tv className="h-6 w-6" />,
    title: 'Smart TVs',
    description: 'Visualización a distancia con controles remotos y desafíos en el descubrimiento de contenido.'
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: 'Diseño UI',
    description: 'Principios de diseño visual y consideraciones de interfaces gráficas.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Diseño UX',
    description: 'Enfoques de diseño centrados en el usuario y psicología de la interacción.'
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Métricas',
    description: 'Parámetros clave para medir y evaluar la efectividad de UI/UX.'
  }
];

const FeatureSection = () => {
  return (
    <section id="topics" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Explora Temas Clave</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Descubre las características esenciales de diferentes dispositivos inteligentes y aprende sobre los parámetros cruciales para crear diseños UI/UX efectivos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;