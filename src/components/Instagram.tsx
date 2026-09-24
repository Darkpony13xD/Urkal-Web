import { studio } from "../data/site";
const posts = [
  {
    title: "Cerezas a color",
    label: "COLOR",
    description: "Una pieza pequeña, con color y personalidad.",
    href: "https://www.instagram.com/urkal_ink_tattoo/p/DThFZnADeqB/",
  },
  {
    title: "Rostros en línea",
    label: "LÍNEA",
    description: "Dos rostros que se encuentran en una misma composición.",
    href: "https://www.instagram.com/urkal_ink_tattoo/p/Cu2yuoFP2Tg/",
  },
];
export default function Instagram() {
  return (
    <aside
      className="instagram-section"
      id="instagram"
      aria-labelledby="instagram-title"
    >
      <div className="instagram-heading">
        <div>
          <p className="eyebrow">DESDE INSTAGRAM</p>
          <h3 id="instagram-title">
            Más tinta. <em>Más historias.</em>
          </h3>
          <p>
            Conoce las piezas del estudio y encuentra inspiración para tu
            próximo tatuaje.
          </p>
        </div>
        <a
          className="instagram-profile"
          href={studio.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r=".8"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <span>
            {studio.instagramHandle}
            <small>Visitar nuestro perfil ↗</small>
          </span>
        </a>
      </div>
      <div className="instagram-selections">
        {posts.map((post) => (
          <a
            className="instagram-selection"
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="instagram-category">{post.label}</span>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <span className="instagram-view">
              Ver publicación en Instagram <span aria-hidden="true">↗</span>
            </span>
          </a>
        ))}
      </div>
      <p className="instagram-caption">
        Una selección de nuestro perfil. Las publicaciones se abren en
        Instagram.
      </p>
    </aside>
  );
}
