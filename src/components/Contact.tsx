import { useState } from "react";
import type { FormEvent } from "react";
import { studio } from "../data/site";

type Idea = {
  nombre: string;
  zona: string;
  tamano: string;
  estilo: string;
  idea: string;
  referencia: string;
};
const initial: Idea = {
  nombre: "",
  zona: "",
  tamano: "",
  estilo: "",
  idea: "",
  referencia: "",
};
export default function Contact() {
  const [values, setValues] = useState(initial);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  function change(key: keyof Idea, value: string) {
    setValues({ ...values, [key]: value });
    setDraft("");
    setError("");
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, value.trim()]),
    ) as Idea;
    if (
      !fields.nombre ||
      !fields.zona ||
      !fields.tamano ||
      !fields.estilo ||
      fields.idea.length < 10
    ) {
      setError(
        "Completa los campos y cuéntanos tu idea con al menos 10 caracteres.",
      );
      return;
    }
    const message = `Hola ${studio.name}, soy ${fields.nombre}. Me gustaría cotizar un tatuaje.\n\nEstilo: ${fields.estilo}\nZona: ${fields.zona}\nTamaño aproximado: ${fields.tamano}\nIdea: ${fields.idea}${fields.referencia ? `\nReferencia: ${fields.referencia}` : ""}`;
    setDraft(
      `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(message)}`,
    );
  }
  return (
    <div className="container contact-grid">
      <div className="contact-intro">
        <p className="eyebrow">TU PRÓXIMO TATUAJE</p>
        <h2 id="contact-title">
          Trae una historia.
          <br />
          Hagámosla <span className="tattoo-type">tinta.</span>
        </h2>
        <p>
          No necesitas tener todo resuelto.
          <br />
          Cuéntanos lo que imaginas y le damos forma contigo.
        </p>
        <div className="contact-mark" aria-hidden="true">
          ✦
        </div>
        <div className="contact-note">
          <span className="signal" />
          <p>
            Contacto directo por WhatsApp.
            <br />
            <span>El diseño, el precio y la cita se acuerdan contigo.</span>
          </p>
        </div>
        <a
          className="contact-instagram text-link"
          href={studio.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          También estamos en Instagram ↗
        </a>
        <details>
          <summary>¿Puedo enviar imágenes de referencia?</summary>
          <p>
            Sí. Añade un enlace en el formulario o comparte las imágenes
            directamente cuando abras la conversación de WhatsApp.
          </p>
        </details>
        <details>
          <summary>¿Esto confirma mi cita?</summary>
          <p>
            No todavía. Este formulario prepara tu consulta; los detalles y la
            disponibilidad se confirman en la conversación.
          </p>
        </details>
      </div>
      <form className="idea-form" onSubmit={submit}>
        <div className="form-heading">
          <div>
            <p className="eyebrow">CUÉNTANOS TU IDEA</p>
            <h3>Vamos a darle forma.</h3>
          </div>
          <span aria-hidden="true">↗</span>
        </div>
        <p className="form-help">
          Los campos con * nos ayudan a preparar tu consulta.
        </p>
        <div className="form-grid">
          <label htmlFor="nombre">
            Tu nombre *
            <input
              id="nombre"
              name="nombre"
              autoComplete="given-name"
              placeholder="¿Cómo te llamas?"
              value={values.nombre}
              onChange={(event) => change("nombre", event.target.value)}
              maxLength={80}
              required
            />
          </label>
          <label htmlFor="estilo">
            Estilo *
            <select
              id="estilo"
              name="estilo"
              value={values.estilo}
              onChange={(event) => change("estilo", event.target.value)}
              required
            >
              <option value="">Selecciona un estilo</option>
              {[
                "Blackwork",
                "Línea fina",
                "Ornamental",
                "Realismo",
                "New School",
                "Lettering",
                "Quiero asesoría",
              ].map((style) => (
                <option key={style}>{style}</option>
              ))}
            </select>
          </label>
          <label htmlFor="zona">
            Zona del cuerpo *
            <input
              id="zona"
              name="zona"
              placeholder="Ej. Antebrazo"
              value={values.zona}
              onChange={(event) => change("zona", event.target.value)}
              maxLength={100}
              required
            />
          </label>
          <label htmlFor="tamano">
            Tamaño aproximado *
            <input
              id="tamano"
              name="tamano"
              placeholder="Ej. 10 × 15 cm"
              value={values.tamano}
              onChange={(event) => change("tamano", event.target.value)}
              maxLength={100}
              required
            />
          </label>
          <label className="full-field" htmlFor="idea">
            ¿Qué tienes en mente? *
            <textarea
              id="idea"
              name="idea"
              placeholder="Un símbolo, una historia, algo que te mueve…"
              rows={4}
              minLength={10}
              maxLength={800}
              value={values.idea}
              onChange={(event) => change("idea", event.target.value)}
              required
            />
            <span className="character-count">{values.idea.length} / 800</span>
          </label>
          <label className="full-field" htmlFor="referencia">
            Enlace de referencia <span className="optional">(opcional)</span>
            <input
              id="referencia"
              name="referencia"
              type="url"
              placeholder="https://..."
              value={values.referencia}
              onChange={(event) => change("referencia", event.target.value)}
              maxLength={500}
            />
          </label>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button className="button form-submit" type="submit">
          Preparar mi consulta <span aria-hidden="true">↗</span>
        </button>
        <p className="form-privacy">
          Nada se envía automáticamente. Prepararemos un mensaje que podrás
          revisar en WhatsApp.
        </p>
        {draft && (
          <div className="draft-ready" role="status">
            <strong>Tu idea está lista para conversar.</strong>
            <p>Abre WhatsApp, revisa el mensaje y envíalo cuando quieras.</p>
            <a
              className="button"
              href={draft}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp ↗
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
