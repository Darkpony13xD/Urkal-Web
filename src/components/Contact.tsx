import React, { useMemo, useState } from "react";

type FormData = {
  nombre: string;
  zona: string;
  tamano: string;
  estilo: string;
  presupuesto: string;
  referencia: string;
  idea: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    zona: "",
    tamano: "",
    estilo: "",
    presupuesto: "",
    referencia: "",
    idea: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const completion = useMemo(() => {
    const requiredKeys: (keyof FormData)[] = ["nombre", "zona", "tamano", "estilo", "idea"];
    const filled = requiredKeys.filter((k) => String(formData[k]).trim().length > 0).length;
    return Math.round((filled / requiredKeys.length) * 100);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, idea, zona, tamano, estilo, presupuesto, referencia } = formData;

    // IMPORTANTE: cambia a tu número real (formato internacional sin + ni espacios)
    const phoneNumber = "5215630127650";

    const message =
      `¡Hola URKAL INK! Mi nombre es ${nombre}.\n` +
      `Quiero cotizar un tatuaje:\n` +
      `- Estilo: ${estilo}\n` +
      `- Zona del cuerpo: ${zona}\n` +
      `- Tamaño aprox: ${tamano}\n` +
      (presupuesto ? `- Presupuesto: ${presupuesto}\n` : "") +
      (referencia ? `- Referencia: ${referencia}\n` : "") +
      `- Idea: ${idea}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* Lado izquierdo */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-6xl font-tattoo text-white leading-none">
            Inicia tu <span className="text-purple-500">Viaje</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Completa el formulario y te abrimos WhatsApp con tu cotización lista para enviar.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-xs uppercase tracking-widest text-purple-200/80 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
              Respuesta rápida
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-200/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Cotización personalizada
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-200/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sin spam
            </span>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p>------</p>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p>-------</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          {/* Borde degradado */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-600/40 via-fuchsia-500/15 to-purple-700/40">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-zinc-950/80 backdrop-blur px-6 py-7 md:px-10 md:py-10 border border-white/5 shadow-[0_0_40px_rgba(168,85,247,0.12)] space-y-6"
            >
              {/* Header form */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Cotización</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Cuéntanos tu idea <span className="text-purple-500">en 30 segundos</span>
                  </h3>
                </div>

                <div className="min-w-[140px]">
                  <p className="text-xs text-gray-400 mb-2 text-right">Progreso</p>
                  <div className="h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                    <div
                      className="h-full bg-purple-600/80"
                      style={{ width: `${completion}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-right">{completion}%</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Nombre */}
                <FieldLabel label="Nombre" required />
                <div className="md:col-start-1 -mt-3">
                  <TextInput
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="¿Cómo te llamas?"
                    required
                  />
                </div>

                {/* Zona */}
                <div className="md:col-start-2">
                  <FieldLabel label="Zona del cuerpo" required />
                  <TextInput
                    name="zona"
                    value={formData.zona}
                    onChange={handleChange}
                    placeholder="Ej: Espalda alta"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Tamaño */}
                <div>
                  <FieldLabel label="Tamaño estimado" required />
                  <TextInput
                    name="tamano"
                    value={formData.tamano}
                    onChange={handleChange}
                    placeholder="Ej: 15 cm x 10 cm"
                    required
                  />
                </div>

                {/* Estilo */}
                <div>
                  <FieldLabel label="Estilo" required />
                  <SelectInput
                    name="estilo"
                    value={formData.estilo}
                    onChange={handleChange}
                    required
                    options={[
                      { value: "", label: "Elige uno…" },
                      { value: "Fine line", label: "Fine line" },
                      { value: "Realismo", label: "Realismo" },
                      { value: "Blackwork", label: "Blackwork" },
                      { value: "Tradicional", label: "Tradicional" },
                      { value: "Neo-tradicional", label: "Neo-tradicional" },
                      { value: "Lettering", label: "Lettering" },
                      { value: "Otro", label: "Otro" },
                    ]}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Presupuesto */}
                <div>
                  <FieldLabel label="Presupuesto (opcional)" />
                  <SelectInput
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Prefiero decirlo por WhatsApp" },
                      { value: "$$", label: "$ (básico)" },
                      { value: "$$ - $$$", label: "$$ (medio)" },
                      { value: "$$$+", label: "$$$ (premium)" },
                    ]}
                  />
                </div>

                {/* Referencia */}
                <div>
                  <FieldLabel label="Link de referencia (opcional)" />
                  <TextInput
                    name="referencia"
                    value={formData.referencia}
                    onChange={handleChange}
                    placeholder="Instagram/Pinterest/Drive…"
                  />
                </div>
              </div>

              {/* Idea */}
              <div>
                <FieldLabel label="Cuéntanos tu idea" required />
                <Textarea
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  placeholder="Estilo, colores, significado, detalles clave…"
                  rows={4}
                  required
                  helper={`${Math.min(formData.idea.length, 800)}/800`}
                  maxLength={800}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-bold py-5 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm border border-purple-400/20 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
              >
                <span>Confirmar por WhatsApp</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <p className="text-xs text-gray-500">
                Al enviar, se abrirá WhatsApp con el mensaje listo. Puedes editarlo antes de mandarlo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
      {label} {required ? <span className="text-purple-400">*</span> : null}
    </label>
  );
}

function baseInputClass() {
  return "w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-white outline-none transition-all font-light " +
    "focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 placeholder:text-gray-600";
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${baseInputClass()} ${props.className ?? ""}`} />;
}

function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { helper?: string }
) {
  const { helper, ...rest } = props;
  return (
    <div className="space-y-2">
      <textarea
        {...rest}
        className={`${baseInputClass()} resize-none min-h-[120px] ${props.className ?? ""}`}
      />
      {helper ? <p className="text-xs text-gray-500 text-right">{helper}</p> : null}
    </div>
  );
}

function SelectInput(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: { value: string; label: string }[];
  }
) {
  const { options, ...rest } = props;
  return (
    <select
      {...rest}
      className={`${baseInputClass()} appearance-none`}
    >
      {options.map((opt) => (
        <option key={`${opt.value}-${opt.label}`} value={opt.value} className="bg-zinc-900">
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Contact;
