
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background dinámico */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=2000" 
          alt="Tattoo Session" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="inline-block py-1 px-4 border border-purple-500 text-purple-400 text-xs font-bold uppercase tracking-[0.4em] mb-6 rounded-full bg-purple-950/20 backdrop-blur-sm">
          Estudio de Tatuajes Profesional
        </span>
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-tattoo leading-none text-white mb-4 text-neon">
          URKAL INK
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl font-light tracking-[0.1em] mb-12 max-w-2xl mx-auto">
          Donde la oscuridad se convierte en <span className="text-white font-bold">arte eterno</span>. Diseños personalizados y realismo extremo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#contacto" 
            className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-widest transition-all hover:bg-purple-600 hover:text-white overflow-hidden"
          >
            <span className="relative z-10">Agendar Ahora</span>
            <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#galeria" 
            className="text-white font-bold uppercase tracking-widest border-b-2 border-purple-800 pb-1 hover:border-white transition-all"
          >
            Explorar Galería
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-900/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
