import Instagram from "./Instagram";
import { useEffect, useRef, useState } from "react";
import { gallery } from "../data/site";
import type { GalleryImage } from "../types";
const categories = ["Todos", ...new Set(gallery.map((item) => item.category))];
export default function Gallery() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const selectedPhotos = selected?.photos ?? (selected?.url ? [selected.url] : []);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const visible = gallery.filter(
    (item) => filter === "Todos" || item.category === filter,
  );
  useEffect(() => {
    if (selected) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [selected]);
  function close() {
    dialog.current?.close();
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">EL TRABAJO, DE CERCA</p>
          <h2 id="gallery-title">
            Historias
            <br />
            <span>en la piel.</span>
          </h2>
        </div>
        <p>
          Una colección de historias sobre la piel.
          <br />
          Abre cada pieza y descubre su color.
        </p>
      </div>
      <div className="gallery-toolbar">
        <div className="filters" role="group" aria-label="Filtrar por estilo">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="gallery-label">GALERÍA URKAL INK</span>
      </div>
      <div className="gallery-grid">
        {visible.map((item) => (
          <article className="gallery-item" key={item.id}>
            {item.url ? (
              <button
                className="art-card"
                type="button"
                aria-label={`Ampliar ${item.title}`}
                onClick={(event) => {
                  trigger.current = event.currentTarget;
                  setPhotoIndex(0);
                  setSelected(item);
                }}
              >
                <img
                  src={item.thumbnail ?? item.url}
                  alt={item.title}
                  loading="lazy"
                  width="600"
                  height="750"
                />
                <span className="card-reveal" aria-hidden="true">Ver a color</span>
                <span className="card-open" aria-hidden="true">
                  ↗
                </span>
              </button>
            ) : (
              <div className="photo-placeholder">
                <span className="photo-index">
                  {String(item.id).padStart(2, "0")}
                </span>
                <div>
                  <span className="placeholder-frame" aria-hidden="true" />
                  <p>Fotografía pendiente</p>
                </div>
                <span className="placeholder-brand">URKAL INK</span>
              </div>
            )}
            <div className="card-caption">
              <span>
                {item.url
                  ? item.title
                  : `Espacio ${String(item.id).padStart(2, "0")}`}
              </span>
              <span>{item.category}</span>
            </div>
          </article>
        ))}
      </div>
      <p className="gallery-note" role="status">
        {visible.length} tatuajes{" "}
        {filter !== "Todos" ? `de ${filter}` : "en la galería"}.{" "}
        {gallery.some((item) => !item.url)
          ? "Las fotografías se añadirán próximamente."
          : ""}
      </p>
      <Instagram />
      <dialog
        ref={dialog}
        className="art-dialog"
        aria-labelledby="art-title"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => {
          setSelected(null);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {selected?.url && (
          <div className="dialog-content">
            <button
              className="dialog-close"
              type="button"
              onClick={close}
              aria-label="Cerrar detalle"
            >
              ×
            </button>
            <div className="dialog-art">
              <img src={selectedPhotos[photoIndex]} alt={`${selected.title}, vista ${photoIndex + 1}`} />
            </div>
            <div className="dialog-copy">
              <p className="eyebrow">{selected.category}</p>
              <h3 id="art-title">{selected.title}</h3>
              <p>{selected.description}</p>
              {selectedPhotos.length > 1 && (
                <div className="photo-views">
                  <p aria-live="polite">Vista {photoIndex + 1} de {selectedPhotos.length}</p>
                  <div className="photo-thumbnails" role="group" aria-label="Vistas del tatuaje">
                    {selectedPhotos.map((url, index) => (
                      <button
                        key={url}
                        type="button"
                        aria-label={`Ver vista ${index + 1} de ${selected.title}`}
                        aria-pressed={photoIndex === index}
                        onClick={() => setPhotoIndex(index)}
                      >
                        <img src={url} alt="" loading="lazy" width="64" height="80" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <a href="#contacto" className="button" onClick={close}>
                Hablemos de tu tatuaje ↗
              </a>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
