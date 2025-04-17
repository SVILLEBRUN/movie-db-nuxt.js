export interface Movie {
    id: string,
    _id: string,
    original_title: string,
    folder_name: string,
    original_language: string,
    overview: string,
    release_date: string,
    genres: string[],
    vote_average: number,
    poster_url: string,
    actors: Person[],
    keywords: string[],
}


export interface Person {
    name: string,
    profile_path: string
}


export interface User {
    _id?: string,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    avatar?: string | null,
}
