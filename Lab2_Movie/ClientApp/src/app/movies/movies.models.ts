export interface Movie {
    title: string;
    description: string;
    genre: Genre;
    durationInMin: number;
    yearOfRelease: number;
    director: string;
    dateAdded: Date;
    rating: number;
    wasWatched: boolean;

}
export enum Genre {
    Action,
    Comedy,
    Horror,
    Thriller
}
