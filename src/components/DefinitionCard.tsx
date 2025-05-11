import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DefinitionCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const DefinitionCard: React.FC<DefinitionCardProps> = ({ 
  title, 
  description, 
  image,
  className
}) => {
  return (
    <motion.div 
      className={cn(
        "rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
          <h3 className="p-4 text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default DefinitionCard;