
import React, { useState } from 'react';
import type { GalleryImage } from '../types';

const IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&q=80&w=800', title: 'Realismo Negro', category: 'Sombra' },
  { id: 2, url: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800', title: 'Neo-Traditional', category: 'Color' },
  { id: 3, url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800', title: 'Geometría Sagrada', category: 'Línea' },
  { id: 4, url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800', title: 'Japanese Art', category: 'Color' },
  { id: 5, url: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80&w=800', title: 'Micro-Realismo', category: 'Línea' },
  { id: 6, url: 'https://images.unsplash.com/photo-1590204753856-4aa8add44455?auto=format&fit=crop&q=80&w=800', title: 'Skull Portrait', category: 'Sombra' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Color', 'Sombra', 'Línea'];

  const filteredImages = filter === 'Todos' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-tattoo text-white">Galería de <span className="text-purple-500">Obras</span></h2>
          <p className="text-gray-500 mt-2 tracking-widest uppercase text-sm">Selección de nuestros mejores trabajos recientes</p>
        </div>
        
        <div className="flex bg-zinc-900/50 p-1 rounded-sm border border-zinc-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-tighter transition-all ${
                filter === cat 
                  ? 'bg-purple-700 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((img) => (
          <div key={img.id} className="group relative overflow-hidden bg-zinc-900 border border-zinc-800">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <span className="text-purple-500 font-bold text-xs uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
              <h3 className="text-white text-3xl font-tattoo translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
