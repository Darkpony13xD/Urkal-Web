import { useEffect, useRef, useState } from "react";
import logo from "../assets/urkal-emblem-v2.png";

const links = [
  ["inicio", "Inicio"],
  ["galeria", "Galería"],
  ["nosotros", "El estudio"],
  ["contacto", "Contacto"],
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 801px)");
    const reset = () => setOpen(false);
    document.addEventListener("keydown", close);
    desktop.addEventListener("change", reset);
    return () => {
      document.removeEventListener("keydown", close);
      desktop.removeEventListener("change", reset);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Urkal Ink, inicio"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="" width="44" height="44" />
          <span>
            URKAL INK<small>TATTOO STUDIO</small>
          </span>
        </a>
        <nav
          id="main-navigation"
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label="Principal"
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="button button-small nav-cta"
          onClick={() => setOpen(false)}
        >
          Hablemos de tu idea <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar −" : "Menú +"}
        </button>
      </div>
    </header>
  );
}
