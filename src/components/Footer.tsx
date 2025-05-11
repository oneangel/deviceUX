import React from 'react';
import { cn } from '@/lib/utils';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">DeviceUX</h3>
            <p className="text-muted-foreground text-sm">
              Explorando la importancia de entender las características de los dispositivos inteligentes
              y crear diseños UI/UX efectivos.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Páginas</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Inicio</a></li>
              <li><a href="/smart-devices" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dispositivos Inteligentes</a></li>
              <li><a href="/ux-ui" className="text-sm text-muted-foreground hover:text-foreground transition-colors">UX/UI</a></li>
              <li><a href="/ui-parameters" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Parámetros UI</a></li>
              <li><a href="/ux-parameters" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Parámetros UX</a></li>
              <li><a href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Casos de Estudio</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Listas de Verificación UI</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guías de UX</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Patrones de Diseño</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Referencias</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Conectar</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DeviceUX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;