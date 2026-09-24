export type TattooCategory = "Blackwork" | "Línea" | "Ornamental";
export interface GalleryImage {
  id: number;
  url: string | null;
  title: string;
  category: TattooCategory;
  description: string;
  motif: "star" | "blade" | "orbit" | "botanical" | "butterfly" | "sigil";
}
