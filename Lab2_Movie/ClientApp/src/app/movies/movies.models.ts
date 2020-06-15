export interface Movie {
    id: number;
    title: string;
    description: string;
    genre: Genre;
    durationInMin: number;
    yearOfRelease: number;
    director: string;
    dateAdded: Date;
    //rating: number;
    //wasWatched: string;

}
export enum Genre {
    Action,
    Comedy,
    Horror,
    Thriller
}
