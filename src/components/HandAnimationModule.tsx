
import React from 'react';

const HandAnimationModule = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 flex flex-col items-center justify-center">
      {/* Container de las manos en paralelo */}
      <div className="flex items-center justify-center gap-8 md:gap-16 mb-16">
        {/* Mano izquierda */}
        <div className="animate-float">
          <div className="transform hover:scale-110 transition-all duration-300 cursor-pointer">
            <img 
              src="/lovable-uploads/5bb16f11-6f62-4111-a968-2af2ddcbe7f5.png" 
              alt="Mano izquierda wireframe"
              className="w-32 h-32 md:w-48 md:h-48 object-contain animate-pulse"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
              Interactiva
            </div>
          </div>
        </div>

        {/* Mano derecha */}
        <div className="animate-float" style={{ animationDelay: '1s' }}>
          <div className="transform hover:scale-110 transition-all duration-300 cursor-pointer">
            <img 
              src="/lovable-uploads/d266168b-258f-4dd4-a451-7d9d358a27c2.png" 
              alt="Mano derecha wireframe"
              className="w-32 h-32 md:w-48 md:h-48 object-contain animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
              Futurista
            </div>
          </div>
        </div>
      </div>

      {/* Texto central */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in mb-4">
          Módulo de Animación
        </h1>
        <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Interactúa con las manos para ver las animaciones
        </p>
      </div>

      {/* Ciudad futurista debajo */}
      <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="transform hover:scale-105 transition-all duration-500 cursor-pointer">
          <img 
            src="/lovable-uploads/cbc73cf3-9a8d-4ef6-9e26-2a7d6541f4ff.png" 
            alt="Ciudad futurista"
            className="w-64 h-32 md:w-96 md:h-48 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground font-medium">
              Entorno Digital
            </p>
          </div>
        </div>
      </div>

      {/* Efectos de fondo animados */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-secondary/5 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-accent/5 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
    </div>
  );
};

export default HandAnimationModule;
