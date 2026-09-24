import { studio } from "../data/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a className="footer-wordmark" href="#inicio">
            URKAL INK<span>✦</span>
          </a>
          <p>
            ARTE HUMANO.
            <br />
            <span>HUELLA PERMANENTE.</span>
          </p>
          <a className="back-top mono" href="#inicio">
            VOLVER ARRIBA ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} URKAL INK TATTOO</span>
          <a href={studio.instagram} target="_blank" rel="noopener noreferrer">
            Instagram · {studio.instagramHandle} ↗
          </a>
          <a href="#contacto">Hablemos de tu próxima pieza ↗</a>
        </div>
      </div>
    </footer>
  );
}
