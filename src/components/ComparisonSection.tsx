import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonItemProps {
  title: string;
  good: {
    image: string;
    description: string;
    points: string[];
  };
  bad: {
    image: string;
    description: string;
    points: string[];
  };
  index: number;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({ title, good, bad, index }) => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-8 text-center">{title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img 
                src={good.image} 
                alt={`Good example of ${title}`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Check className="w-4 h-4 mr-1" /> Buen Diseño
              </div>
            </div>
            
            <div className="p-6 md:w-2/3">
              <p className="text-sm text-muted-foreground mb-4">{good.description}</p>
              
              <ul className="space-y-2">
                {good.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-green-500/10 text-green-500 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img 
                src={bad.image} 
                alt={`Bad example of ${title}`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <X className="w-4 h-4 mr-1" /> Mal Diseño
              </div>
            </div>
            
            <div className="p-6 md:w-2/3">
              <p className="text-sm text-muted-foreground mb-4">{bad.description}</p>
              
              <ul className="space-y-2">
                {bad.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-destructive/10 text-destructive rounded-full p-1 mr-3 mt-0.5">
                      <X className="h-3 w-3" />
                    </span>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const comparisons = [
  {
    title: "Diseño de Interfaz Móvil",
    good: {
      image: "/images/goodui.png",
      description: "Esta aplicación móvil prioriza el contenido importante, usa una jerarquía visual clara y proporciona navegación intuitiva.",
      points: [
        "Objetivos táctiles grandes y fáciles para entrada con dedos",
        "Priorización de contenido para pantallas pequeñas",
        "Retroalimentación visual clara para interacciones",
        "Patrones de navegación consistentes y familiares"
      ]
    },
    bad: {
      image: "/images/badui.png",
      description: "Esta interfaz móvil desordenada es difícil de usar, con mala organización y patrones de interacción poco claros.",
      points: [
        "Demasiados elementos compitiendo por atención",
        "Objetivos táctiles pequeños y difíciles de tocar",
        "Patrones de navegación inconsistentes",
        "Mala jerarquía visual y organización"
      ]
    }
  }
];

const ComparisonSection = () => {
  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Ejemplos de Buen vs. Mal Diseño</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comparar enfoques de diseño efectivos e inefectivos ayuda a ilustrar la importancia de los principios UI/UX en la práctica.
          </p>
        </div>
        
        {comparisons.map((comparison, index) => (
          <ComparisonItem
            key={index}
            title={comparison.title}
            good={comparison.good}
            bad={comparison.bad}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;