import {movieListData} from "../../../../../core/data/movie-list-data";

export const popularSelect = (type) => {
    switch (type) {
        case 'POPULARITY_DOWN':
            return [...movieListData].sort(compare('popularity')).reverse();
        case 'POPULARITY_UP':
            return [...movieListData].sort(compare('popularity'));
        case 'RATING_DOWN':
            return [...movieListData].sort(compare('vote_average')).reverse();
        case 'RATING_UP':
            return [...movieListData].sort(compare('vote_average'));
        default:
            return movieListData;
    }
}
const compare = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}