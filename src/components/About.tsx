import logo from "../assets/urkal-emblem-v2.png";

const steps = [
  [
    "01",
    "La idea",
    "Nos cuentas qué quieres llevar en la piel: referencias, significado, zona y tamaño.",
  ],
  [
    "02",
    "El diseño",
    "Conversamos sobre el estilo y los detalles para definir una dirección contigo.",
  ],
  [
    "03",
    "La sesión",
    "Acordamos los siguientes pasos, resolvemos tus dudas y preparamos tu cita.",
  ],
  [
    "04",
    "Lo que sigue",
    "Al terminar, te explicamos los cuidados de tu pieza y cómo dar seguimiento.",
  ],
];
export default function About() {
  return (
    <div className="container">
      <div className="studio-grid">
        <div className="studio-statement">
          <p className="eyebrow">EL ESTUDIO</p>
          <h2 id="studio-title">
            Manos que crean.
            <br />
            <span className="tattoo-type">Tinta que cuenta.</span>
          </h2>
          <p>
            La técnica importa. Lo que quieres expresar, también. En URKAL INK
            unimos ambos para crear piezas que se sientan tuyas, desde el primer
            trazo.
          </p>
          <a href="#contacto" className="text-link">
            Conversemos sobre tu tatuaje <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="studio-seal">
          <img
            src={logo}
            alt="Sello de URKAL INK TATTOO"
            width="200"
            height="200"
            loading="lazy"
          />
          <span className="mono">
            INDEPENDIENTE POR NATURALEZA.
            <br />
            PERSONAL POR DEFINICIÓN.
          </span>
        </div>
      </div>
      <div className="process-heading">
        <span className="eyebrow">DE UNA IDEA A TU PIEL</span>
        <span className="mono">ASÍ LO HACEMOS</span>
      </div>
      <div className="process-grid">
        {steps.map(([number, title, text]) => (
          <article key={number}>
            <span className="process-number">
              {number}
              <span aria-hidden="true">↗</span>
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
