import React from 'react';
import {Grid} from "@mui/material";
import MovieCard from "./movie-card/movie-card";
import {useDispatch, useSelector} from "react-redux";
import {paginate} from "../../../core/utils/paginate";
import {yearSelect, popularSelect, genreSelect} from "../../../core/utils/selects";
import {sortSelectedMovies} from "../../../core/utils/sort-selected-movies";

const MovieList = () => {
    const dispatch = useDispatch();
    const {currentPage} = useSelector(state => state.flipPages);
    const sortDate = useSelector(state => state.sortByDate);
    const sortPopularity = useSelector(state => state.sortByPopularity);
    const sortGenre = useSelector(state => state.sortByGenre);
    const selectMovie = useSelector(state => state.selectMovie);
    const listWatchLater = useSelector(state => state.listWatchLater);
    const listFavoriteMovies = useSelector(state => state.listFavoriteMovies);
    const sortedByPopularity = popularSelect(sortPopularity);
    const filteredByDate = yearSelect(sortDate, sortedByPopularity);
    const sortedByGenre = genreSelect(filteredByDate, sortGenre);
    const sortedBySelectedMovies = sortSelectedMovies(sortedByGenre, selectMovie, listWatchLater, listFavoriteMovies);
    const paginatedMovies = paginate(currentPage, sortedBySelectedMovies, dispatch);

    return (
        <Grid container spacing={5}>
            {paginatedMovies.map(movie =>
                <MovieCard key={movie.id} movie={movie}/>
            )}
        </Grid>
    );
};

export default MovieList;