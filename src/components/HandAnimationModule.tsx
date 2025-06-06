
import React from 'react';
import { Hand, HandHeart, HandMetal } from 'lucide-react';

const HandAnimationModule = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Mano superior izquierda */}
      <div className="absolute top-8 left-8 animate-bounce">
        <div className="transform hover:scale-110 transition-all duration-300 cursor-pointer">
          <Hand 
            size={80} 
            className="text-primary animate-pulse hover:text-primary/80 transition-colors duration-300"
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
            ¡Hola!
          </div>
        </div>
      </div>

      {/* Mano superior derecha */}
      <div className="absolute top-8 right-8 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="transform hover:scale-110 transition-all duration-300 cursor-pointer">
          <HandHeart 
            size={80} 
            className="text-destructive animate-pulse hover:text-destructive/80 transition-colors duration-300"
            style={{ animationDelay: '0.3s' }}
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
            ¡Amor!
          </div>
        </div>
      </div>

      {/* Mano inferior central */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="transform hover:scale-110 transition-all duration-300 cursor-pointer">
          <HandMetal 
            size={100} 
            className="text-accent-foreground animate-pulse hover:text-accent-foreground/80 transition-colors duration-300"
            style={{ animationDelay: '0.7s' }}
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
            ¡Rock!
          </div>
        </div>
      </div>

      {/* Texto central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-in mb-4">
          Módulo de Animación
        </h1>
        <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Interactúa con las manos para ver las animaciones
        </p>
      </div>

      {/* Efectos de fondo animados */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-destructive/10 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent/10 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
    </div>
  );
};

export default HandAnimationModule;
