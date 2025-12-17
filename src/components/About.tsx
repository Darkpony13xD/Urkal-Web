
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block h-1 w-20 bg-purple-600"></div>
          <h2 className="text-5xl md:text-6xl font-tattoo text-white leading-tight">
            Nuestra <span className="text-purple-500">Filosofía</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              En <span className="text-white font-semibold">URKAL INK TATTOO</span> rompemos los límites de lo convencional. No somos solo un local, somos un refugio para los que buscan marcar su piel con significado y técnica superior.
            </p>
            <p>
              Especialistas en <span className="text-purple-400">Blackwork, Realismo y New School</span>. Cada sesión es un ritual de precisión donde tu visión se fusiona con nuestra maestría.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-4xl font-tattoo text-white">01.</h4>
              <p className="text-purple-500 font-bold uppercase text-xs tracking-widest mt-2">Higiene Médica</p>
              <p className="text-sm text-gray-500 mt-1">Estándares quirúrgicos en cada proceso.</p>
            </div>
            <div>
              <h4 className="text-4xl font-tattoo text-white">02.</h4>
              <p className="text-purple-500 font-bold uppercase text-xs tracking-widest mt-2">Arte Único</p>
              <p className="text-sm text-gray-500 mt-1">Cero copias. Diseño 100% original.</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm border border-zinc-800">
            <img 
              src="https://images.unsplash.com/photo-1590204753856-4aa8add44455?auto=format&fit=crop&q=80&w=1000" 
              alt="Artista trabajando" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-purple-700 p-8 hidden md:block border-neon">
            <p className="text-white font-tattoo text-3xl">Desde 2015</p>
            <p className="text-purple-200 text-xs uppercase tracking-widest">Creando Legados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
