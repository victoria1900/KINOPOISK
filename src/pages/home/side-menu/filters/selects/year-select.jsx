import {getYear} from "date-fns";

export const yearSelect = (sortDate, movieListData) => {
    return movieListData.filter(movie => {
        const date = getYear(new Date(movie.release_date));
        if (String(sortDate) === String(date)) {
            return movie;
        }
    });
};
