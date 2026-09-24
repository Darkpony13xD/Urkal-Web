import emblem from "../assets/urkal-emblem-v2.png";

export default function Hero() {
  return (
    <div className="container tattoo-cover">
      <div className="tattoo-art">
        <img
          src={emblem}
          alt="Nuevo emblema de URKAL INK: iniciales uk, estrellas y ornamentos grabados"
          width="1280"
          height="1280"
          fetchPriority="high"
        />
        <span className="art-signature">Diseñado para quedarse.</span>
      </div>
      <div className="tattoo-copy">
        <p className="eyebrow">URKAL INK · ESTUDIO DE TATUAJES</p>
        <h1 id="hero-title">
          Tinta
          <br />
          <em>con alma.</em>
        </h1>
        <div className="tattoo-rule" aria-hidden="true">
          <span />✦<span />
        </div>
        <p className="tattoo-intro">
          Lo que amas. Lo que has vivido.
          <br />
          Lo que decides llevar contigo.
        </p>
        <p className="tattoo-description">
          Creamos contigo un tatuaje que tenga sentido para ti. Desde la primera
          idea hasta el último detalle.
        </p>
        <div className="tattoo-actions">
          <a className="button" href="#contacto">
            Hablemos de tu tatuaje <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#galeria">
            Ver galería ↓
          </a>
        </div>
        <p className="tattoo-footnote">Tu historia merece una pieza propia.</p>
      </div>
      <div className="tattoo-bottom">
        <span>BLACKWORK</span>
        <b aria-hidden="true">✦</b>
        <span>LÍNEA FINA</span>
        <b aria-hidden="true">✦</b>
        <span>REALISMO</span>
        <b aria-hidden="true">✦</b>
        <span>DISEÑO PERSONALIZADO</span>
      </div>
    </div>
  );
}
