import React from 'react';
import {FAVORITES, WATCH_LATER} from "../const/config";

export const sortSelectedMovies = (movieList, selectMovie, listWatchLater, listFavoriteMovies) => {
    const isEmpty = selectMovie === '';
    if (isEmpty) return movieList;

    return movieList.filter(item => {
        const isHasInWatchLater = listWatchLater.includes(item.id);
        const isHasInFavorites = listFavoriteMovies.includes(item.id);

        if (selectMovie === WATCH_LATER && isHasInWatchLater) {
            return item;
        } else if (selectMovie === FAVORITES && isHasInFavorites) {
            return item;
        }
    });
};