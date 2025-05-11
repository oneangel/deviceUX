import React from 'react';
import DefinitionCard from './DefinitionCard';

const DefinitionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Entendiendo UI & UX</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            La Interfaz de Usuario (UI) y la Experiencia de Usuario (UX) son conceptos fundamentales en el diseño de productos digitales, 
            pero sirven diferentes propósitos y requieren diferentes consideraciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DefinitionCard 
            title="Interfaz de Usuario (UI)"
            description="UI se refiere a los elementos visuales con los que los usuarios interactúan en productos digitales. Incluye todo, desde botones, iconos y tipografía hasta esquemas de color, espaciado y diseño. Un buen diseño de UI se centra en la estética, consistencia, claridad y jerarquía visual para crear interfaces intuitivas."
            image="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <DefinitionCard 
            title="Experiencia de Usuario (UX)"
            description="UX es la experiencia general que tiene un usuario al interactuar con un producto. Incluye aspectos como usabilidad, accesibilidad, eficiencia y respuesta emocional. El diseño UX se centra en entender las necesidades del usuario, crear flujos lógicos y asegurar que un producto sea útil, usable y agradable."
            image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        
        <div className="mt-12 bg-card rounded-xl p-8 border border-border shadow">
          <h3 className="text-xl font-bold mb-4">La Relación Entre UI y UX</h3>
          <p className="text-muted-foreground">
            UI y UX están estrechamente interconectados pero son disciplinas distintas. UI es un componente de UX—una buena interfaz de usuario contribuye a una experiencia de usuario positiva, 
            pero la experiencia va más allá de solo la interfaz visual. Piensa en UI como una herramienta para implementar la estrategia UX. Una interfaz hermosa (UI) 
            con mala funcionalidad crea una experiencia negativa (UX), mientras que una interfaz funcional pero poco atractiva sigue impidiendo la experiencia general.
          </p>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border text-sm">
            <strong className="text-foreground">Punto Clave:</strong> Mientras que UI se centra en cómo se ve un producto, UX se concentra en cómo funciona. 
            Ambos deben trabajar en armonía para crear productos digitales exitosos, especialmente para dispositivos inteligentes con sus restricciones únicas de interacción.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefinitionsSection;