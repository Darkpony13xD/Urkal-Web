
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    idea: '',
    zona: '',
    tamano: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, idea, zona, tamano } = formData;
    const phoneNumber = "521234567890"; 
    const message = `¡Hola URKAL INK! Mi nombre es ${nombre}. \nQuiero cotizar un tatuaje:\n- Idea: ${idea}\n- Zona del cuerpo: ${zona}\n- Tamaño aprox: ${tamano} cm`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-6xl font-tattoo text-white leading-none">
            Inicia tu <span className="text-purple-500">Viaje</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Estamos listos para plasmar tu visión. Completa el formulario y uno de nuestros artistas te contactará directamente por WhatsApp para una cotización personalizada.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <p>Av. Principal del Arte #123, CDMX</p>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <p>citas@urkalink.com</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 bg-zinc-950 p-8 md:p-10 border border-zinc-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full bg-black border-b border-zinc-800 focus:border-purple-600 py-3 text-white outline-none transition-all font-light"
                placeholder="¿Cómo te llamas?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Zona del Cuerpo</label>
              <input
                type="text"
                name="zona"
                required
                value={formData.zona}
                onChange={handleChange}
                className="w-full bg-black border-b border-zinc-800 focus:border-purple-600 py-3 text-white outline-none transition-all font-light"
                placeholder="Ej: Espalda alta"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tamaño Estimado</label>
            <input
              type="text"
              name="tamano"
              required
              value={formData.tamano}
              onChange={handleChange}
              className="w-full bg-black border-b border-zinc-800 focus:border-purple-600 py-3 text-white outline-none transition-all font-light"
              placeholder="Ej: 15 cm x 10 cm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Cuéntanos tu idea</label>
            <textarea
              name="idea"
              required
              rows={3}
              value={formData.idea}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-800 focus:border-purple-600 p-4 text-white outline-none transition-all font-light resize-none"
              placeholder="Estilo, colores, significado..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-5 transition-all flex items-center justify-center gap-3 border-neon uppercase tracking-widest text-sm"
          >
            Confirmar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
