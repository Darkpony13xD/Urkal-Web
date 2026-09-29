export type TattooCategory = "Blackwork" | "Línea" | "Ornamental" | "Black & grey" | "Color";
export interface GalleryImage {
  id: number;
  url: string | null;
  thumbnail?: string;
  photos?: string[];
  title: string;
  category: TattooCategory;
  description: string;
  motif: "star" | "blade" | "orbit" | "botanical" | "butterfly" | "sigil";
}
