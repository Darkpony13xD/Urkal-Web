import type { GalleryImage } from "../types";

// Añade tus fotos en public/tattoos y cambia url por '/tattoos/nombre.webp'.
// Sin foto, cada entrada muestra un espacio neutro marcado como pendiente.
// Ajusta el título, la categoría y la descripción al subir cada tatuaje real.
export const gallery: GalleryImage[] = [
  {
    id: 1,
    url: null,
    title: "Tatuaje 01",
    category: "Blackwork",
    motif: "sigil",
    description: "Pieza de URKAL INK.",
  },
  {
    id: 2,
    url: null,
    title: "Tatuaje 02",
    category: "Línea",
    motif: "blade",
    description: "Pieza de URKAL INK.",
  },
  {
    id: 3,
    url: null,
    title: "Tatuaje 03",
    category: "Ornamental",
    motif: "butterfly",
    description: "Pieza de URKAL INK.",
  },
  {
    id: 4,
    url: null,
    title: "Tatuaje 04",
    category: "Línea",
    motif: "orbit",
    description: "Pieza de URKAL INK.",
  },
  {
    id: 5,
    url: null,
    title: "Tatuaje 05",
    category: "Blackwork",
    motif: "botanical",
    description: "Pieza de URKAL INK.",
  },
  {
    id: 6,
    url: null,
    title: "Tatuaje 06",
    category: "Ornamental",
    motif: "star",
    description: "Pieza de URKAL INK.",
  },
];
// Número conservado del proyecto original. Confírmalo antes de publicar.
export const studio = {
  whatsapp: "5215630127650",
  name: "URKAL INK TATTOO",
  instagram: "https://www.instagram.com/urkal_ink_tattoo/",
  instagramHandle: "@urkal_ink_tattoo",
};
