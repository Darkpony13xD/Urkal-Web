
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Galería', href: '#galeria', id: 'galeria' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" className="text-4xl font-tattoo text-white hover:text-purple-500 transition-colors tracking-tighter">
              URKAL INK
            </a>
          </div>
          
          <div className="hidden md:block">
  <div className="ml-10 flex items-center space-x-10">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className={`text-sm lg:text-base font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
          activeSection === link.id
            ? 'text-purple-500'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        {link.name}
      </a>
    ))}

    <a
      href="#contacto"
      className="bg-purple-700 hover:bg-purple-600 text-white px-5 py-2 text-sm lg:text-base font-bold uppercase tracking-widest transition-all"
    >
      Citarse
    </a>
  </div>
</div>


          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-purple-900/50 p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-tattoo text-gray-300 hover:text-purple-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
