import React from 'react';
import {Grid} from "@mui/material";
import MovieCard from "./movie-card/movie-card";
import {useDispatch, useSelector} from "react-redux";
import {paginate} from "../../../core/utils/paginate";
import {yearSelect} from "../side-menu/filters/selects/year-select";
import {popularSelect} from "../side-menu/filters/selects/popular-select";
import {genreSelect} from "../side-menu/filters/selects/genre-select";

const MovieList = () => {
    const dispatch = useDispatch();
    const {currentPage} = useSelector(state => state.flipPages);
    const sortDate = useSelector(state => state.sortByDate);
    const sortPopularity = useSelector(state => state.sortByPopularity);
    const sortGenre = useSelector(state=>state.sortByGenre);
    const sortedByPopularity = popularSelect(sortPopularity);
    const filteredByDate = yearSelect(sortDate, sortedByPopularity);
    const sortedByGenre = genreSelect(filteredByDate,sortGenre);
    const paginatedMovies = paginate(currentPage, sortedByGenre, dispatch);

    return (
        <Grid container spacing={5}>
            {paginatedMovies.map(movie =>
                <MovieCard key={movie.id} movie={movie}/>
            )}
        </Grid>
    );
};

export default MovieList;