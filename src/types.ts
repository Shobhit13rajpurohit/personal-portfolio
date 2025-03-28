export interface Movie {
  id: number;
  title: string;
  image: string;
  description?: string;
  genre: string[];
  year: number;
  rating: number;
}