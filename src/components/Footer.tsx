
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-purple-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-tattoo text-purple-500">URKAL INK</h2>
            <p className="text-gray-400 max-w-xs">
              El arte de la piel elevado al siguiente nivel. Visítanos en nuestro estudio y dale vida a tus ideas.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Ubicación</h4>
            <p className="text-gray-400">
              Av. Principal del Arte #123<br />
              Centro Histórico, CP 00000<br />
              CDMX, México
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Horarios</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex justify-between"><span>Lunes - Viernes:</span> <span>11:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Sábados:</span> <span>10:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Domingos:</span> <span className="text-purple-500">Cerrado</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} URKAL INK TATTOO. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Tiktok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
