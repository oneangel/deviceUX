import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface ParameterItemProps {
  title: string;
  description: string;
  index: number;
}

const ParameterItem: React.FC<ParameterItemProps> = ({ title, description, index }) => {
  return (
    <motion.div
      className="p-6 bg-card rounded-lg border border-border shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
          <span className="text-primary font-medium">{index + 1}</span>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const uiParameters = [
  {
    title: "Jerarquía Visual",
    description: "Organiza los elementos para mostrar su importancia usando tamaño, color y ubicación para guiar la atención de los usuarios."
  },
  {
    title: "Consistencia",
    description: "Usa patrones, elementos y comportamientos consistentes en toda la interfaz para una experiencia de usuario intuitiva."
  },
  {
    title: "Color y Contraste",
    description: "Elige esquemas de color con ratios de contraste apropiados para legibilidad y accesibilidad."
  },
  {
    title: "Tipografía",
    description: "Selecciona fuentes legibles con tamaño, espaciado y jerarquía apropiados para diferentes tipos de contenido."
  },
  {
    title: "Diseño Responsivo",
    description: "Asegura que la interfaz se adapte apropiadamente a diferentes tamaños de pantalla y orientaciones de dispositivo."
  },
  {
    title: "Espaciado y Diseño",
    description: "Usa espaciado y sistemas de cuadrícula consistentes para interfaces organizadas, balanceadas y escaneables."
  }
];

const uxParameters = [
  {
    title: "Usabilidad",
    description: "Asegura que el producto sea fácil de usar, con interacciones intuitivas y caminos claros hacia los objetivos."
  },
  {
    title: "Accesibilidad",
    description: "Diseña para usuarios con diferentes capacidades, siguiendo guías como WCAG para experiencias inclusivas."
  },
  {
    title: "Rendimiento",
    description: "Optimiza la velocidad y capacidad de respuesta para minimizar el tiempo de espera y la frustración del usuario."
  },
  {
    title: "Retroalimentación al Usuario",
    description: "Proporciona retroalimentación clara para las acciones a través de señales visuales, auditivas o hápticas que confirmen las interacciones."
  },
  {
    title: "Carga Cognitiva",
    description: "Minimiza el esfuerzo mental requerido para usar el producto simplificando tareas y eliminando complejidad innecesaria."
  },
  {
    title: "Investigación de Usuario",
    description: "Basa las decisiones de diseño en datos sobre comportamientos, necesidades y motivaciones de los usuarios en lugar de suposiciones."
  }
];

const ParameterSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Parámetros Críticos para UI & UX</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Al diseñar para dispositivos inteligentes, ciertos parámetros son cruciales para crear interfaces y experiencias efectivas.
          </p>
        </div>
        
        <Tabs defaultValue="ui" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="ui">Parámetros UI</TabsTrigger>
              <TabsTrigger value="ux">Parámetros UX</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ui" className={cn(
            "grid gap-4",
            "grid-cols-1 md:grid-cols-2"
          )}>
            {uiParameters.map((param, index) => (
              <ParameterItem
                key={index}
                title={param.title}
                description={param.description}
                index={index}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="ux" className={cn(
            "grid gap-4",
            "grid-cols-1 md:grid-cols-2"
          )}>
            {uxParameters.map((param, index) => (
              <ParameterItem
                key={index}
                title={param.title}
                description={param.description}
                index={index}
              />
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 p-6 bg-muted/30 rounded-xl border border-border max-w-4xl mx-auto">
          <h3 className="text-lg font-medium mb-3">La Importancia de los Parámetros Específicos del Dispositivo</h3>
          <p className="text-muted-foreground">
            Cada tipo de dispositivo inteligente tiene restricciones y capacidades únicas que influyen en estos parámetros. 
            Por ejemplo, un reloj inteligente tiene severas limitaciones de espacio que requieren consideración especial para la jerarquía visual y los objetivos táctiles, 
            mientras que una interfaz de TV inteligente debe ser legible desde la distancia y navegable con un control remoto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParameterSection;