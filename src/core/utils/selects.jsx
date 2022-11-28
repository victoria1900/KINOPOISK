import {movieListData} from "../data/movie-list-data";
import {getYear} from "date-fns";
import {SORT} from "../const/config";

export const genreSelect = (movieList, genreList) => {
    const isEmpty = genreList.length === 0;
    if (isEmpty) return movieList;

    return movieList.filter((item) => {
        const itemGenres = item.genre_ids;
        if (intersect(genreList, itemGenres).length > 0) return item;
    });
};
export const intersect = function (arr1, arr2) {
    return arr1.filter(function (n) {
        return arr2.indexOf(n) !== -1;
    });
};

export const popularSelect = (type) => {
    switch (type) {
        case SORT.POPULAR_DOWN:
            return [...movieListData].sort(compare('popularity')).reverse();
        case SORT.POPULAR_UP:
            return [...movieListData].sort(compare('popularity'));
        case SORT.RATING_DOWN:
            return [...movieListData].sort(compare('vote_average')).reverse();
        case SORT.RATING_UP:
            return [...movieListData].sort(compare('vote_average'));
        default:
            return movieListData;
    }
}
const compare = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

export const yearSelect = (sortDate, movieListData) => {
    return movieListData.filter(movie => {
        const date = getYear(new Date(movie.release_date));
        if (String(sortDate) === String(date)) {
            return movie;
        }
    });
};
