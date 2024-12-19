export interface Movie {
    id: string;
    title: string;
    year: number;
    type: "movie" | "series" | "episode";
    poster: string;
}